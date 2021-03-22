## Смягчение правил между необязательными членами и строковых индексных сигнатур

В предыдущих версиях, совместимость объектного типа, определяющего обязательную строковую индексную сигнатуру, с объектным типом предполагающем необязательные члены, были не совместимы.

`````ts
/**
 * Версия <4.2
 */
type Magic = {
    fire?: string[];
    water?: string[];
}

declare const HERO_CONFIG: Magic;

/**
 * [*] Type 'Magic' is not assignable to type '{ [key: string]: string[]; }'.
 *
 * Ошибка возникает потому, что тип переменной hero
 * предполагает обязательные свойства, в, то время, как объект
 * HERO_CONFIG - необязательные, а значит и возможно отсутствующие.
 *
 */
const hero: {[key: string]: string[]} = HERO_CONFIG;
/**[*]*/
`````

Начиная с текущей версии, подобные типы считаются совместимыми.

`````ts
/**
 * Версия >=4.2
 */
type Magic = {
    fire?: string[];
    water?: string[];
}

declare const HERO_CONFIG: Magic;

const hero: {[key: string]: string[]} = HERO_CONFIG;
/**Ok*/
`````

Единственное стоит уточнить, что ошибка по-прежнему возникает при попытке инициализировать необязательные поля значением `undefined`...

`````ts
/**
 * Версия >=4.2
 * 
 * [0] поля определены как обязательные!
 */
type Magic = {
    fire?: string[];
    water?: string[];
}

declare const HERO_CONFIG: Magic;

/**
 * [1] Error -> 
 * Type 'undefined' is not assignable to type 'string[]'.
 */
const hero: {[key: string]: string[]} = HERO_CONFIG;
hero['fire'] = ['fireball']; // Ok
hero['water'] = undefined; // Error [1]
`````

...а также тогда, когда объектный тип, вместо опционального оператора, явно указывает принадлежность типа членов к типу `undefined`.

`````ts
/**
 * Версия >=4.2
 *
 * [0] поля определены как обязательные!
 */
type Magic = {
    fire: string[] | undefined; // [0]
    water: string[] | undefined; // [0]
}

declare const HERO_CONFIG: Magic;

/**
 * [1] Error ->
 * Type 'Magic' is not assignable to type '{ [key: string]: string[]; }'.
 */
const hero: {[key: string]: string[]} = HERO_CONFIG;
/**[1]*/
`````

И кроме этого, данные правила применимы исключительно к строковой индексной сигнатуре.

`````ts
/**
 * Версия >=4.2
 * 
 * [0] ключи полей определены как индексы!
 */
type Port = {
    80?: string; // [0]
    88?: string; // [0]
}

declare const SERVER_PORT: Port;

/**
 * [2] Ключ индексной сигнатуры принадлежит к типу number.
 * 
 * [1] Error -> 
 * Type 'Port' is not assignable to type '{ [key: number]: string[]; }'.
 */
const port: {[key: number]: string[]} = SERVER_PORT;
   /**[1] */     /**[2] */
`````