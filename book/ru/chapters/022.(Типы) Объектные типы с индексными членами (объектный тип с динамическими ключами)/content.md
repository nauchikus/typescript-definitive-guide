# Объектные типы с индексными членами (объектный тип с динамическими ключами)

Впервые реализуя динамические ключи в статически типизированном _TypeScript_, могут возникнуть трудности, которые вместе с сопряженными тонкостями, будут подробно рассмотрены в этой главе.



## Индексные члены (определение динамических ключей)

Статический анализ кода всеми силами стремится взять под контроль синтаксические конструкции, тем самым переложить работу, связанную с выявлением ошибок, на себя, оставляя разработчику больше времени на более важные задачи. И несмотря на то, что динамические операции являются причиной “головной боли” компилятора, потребность в них при разработке программ все-таки существует. Одной из таких операций является определение в объектах _индексных членов_ (динамических ключей).

_Индексная сигнатура_ (_index signature_) состоит из двух частей. В первой части расположен имеющий собственную аннотацию типа _идентификатор привязки_ (_binding identifier_) заключенный в квадратные скобки `[]`. Во второй части расположена _аннотация типа_ (_type annotation_) представляющего значение ассоциируемое с динамическим ключом.

`````ts
{ [identifier: Type]: Type }
`````

При объявлении индексной сигнатуры не должны быть использованы модификаторы доступа и модификатор `static`, а идентификатор привязки должен принадлежать к типу `string` или `number`. В качестве типа, указанного справа от двоеточия, может быть указан любой тип, а идентификатор привязки иметь произвольное имя.

`````ts
interface Identifier {
    [identifier: string]: string;
}

// или
interface Identifier {
    [key: number]: string;
}

// или
interface Identifier {
    [name: number]: string;
}
`````

В одном объектном типе одновременно могут быть объявлены индексные сигнатуры, чьи идентификаторы привязки принадлежат к типу `string` и типу `number`. Но с одной оговоркой. Их типы, указанные в аннотации типов, должны быть совместимы (совместимость типов подробно рассматривается в главах [“Типизация - Совместимость объектов”](../038.(Типизация)%20Совместимость%20объектных%20типов%20(Compatible%20Object%20Types)) и [“Типизация - Совместимость функций”](../039.(Типизация)%20Совместимость%20функциональных%20типов%20(Compatible%20Function%20Types))).

`````ts
interface A {
    [key: string]: string;
    [key: number]: string;
}

let a: A = {
    validKeyDeclareStatic: 'value', // Ok, значение принадлежит к string
    invalidKeyDeclareStatic: 0 // Error, значение должно быть совместимым с типом string
};

a.validKeyDefineDynamicKey = 'value'; // Ok
a.invalidKeyDefineDynamicKey = 0; // Error, значение должно быть совместимым с типом string
a[0] = 'value'; // Ok

interface B {
    [identifier: string]: string; // Ok
    [identifier: string]: string; // Error, дубликат
}

interface С {
    [identifier: string]: string; // Ok
    [identifier: number]: number; // Error, должен принадлежать к типу string
}

class SuperClass { // суперкласс
    a: number;
}

class SubClass extends SuperClass { // подкласс
    b: number;
}

interface D {
    [identifier: string]: SuperClass; // Ok
    [identifier: number]: SubClass; // Ok, SubClass совместим с SuperClass
}

let d: D = {};
d.dynamicKey = new SubClass(); // Ok
d[0] = new SubClass(); // Ok

interface E {
    [identifier: string]: SubClass; // Ok
    [identifier: number]: SuperClass; // Error, SuperClass несовместим с SubClass
}
`````

Так как классы принадлежат к объектным типам, их тела также могут определять индексные сигнатуры. Правила, относящиеся к индексным сигнатурам, которые были и будут рассмотрены в этой главе, в полной мере справедливы и для классов. 

`````ts
class Identifier {
    [key: string]: string;
    [key: number]: string;
    
    [0]: 'value';
    [1]: 5; // Error, все члены должны принадлежать к совместимым со string типам
    
    public a: string = 'value'; // Ok, поле name с типом string
    public b: number = 0; // Error, все члены должны принадлежать к совместимым со string типам
    
    public c(): void {} // Error, метод тоже член и на него распространяются те же правила
}

let identifier: Identifier = new Identifier();
identifier.validDynamicKey = 'value'; // Ok
identifier.invalidDynamicKey = 0; // Error

identifier[2] = 'value'; // Ok
identifier[3] = 0; // Error
`````

Кроме того, классы накладывают ограничение, не позволяющее использовать модификаторы доступа (`private`, `protected`, `public`), а также модификаторы, указывающие на принадлежность к уровню класса (`static`). При попытке указать данные модификаторы для индексной сигнатуры возникнет ошибка.

`````ts
class A {
    public [key: string]: string; // Error
}

class B {
    static [key: string]: string; // Error
}
`````

Но, относительно модификаторов, есть несколько нюансов, связанных с модификатором `readonly`, который подробно рассматривается в главе [“Классы - Модификатор readonly”](../027.(Классы)%20Модификатор%20readonly%20(только%20для%20чтения)). Чтобы ничего не ускользнуло от понимания, начнем по порядку.

При указании модификатора `readonly` искажается смысл использования индексной сигнатуры, так как это дает ровно противоположный эффект. Вместо объекта с возможностью определения динамических членов получается объект, позволяющий лишь объявлять динамические ключи, которым нельзя ничего присвоить. То есть, объект полностью закрыт для изменения.

В случае с интерфейсом:

`````ts
interface IIdentifier {
    readonly [key: string]: string; // Ok, модификатор readonly
}

let instanceObject: IIdentifier = {};

instanceObject.a; // Ok, можно объявить
instanceObject.a = 'value'; // Error, но нельзя присвоить значение
`````

В случае с классом:

`````ts
class Identifier {
    readonly [key: string]: string;
}

let instanseClass = new Identifier();
instanseClass.a; // Ok, можно объявить
instanseClass.a = 'value'; // Error, но нельзя присвоить значение
`````

Второй нюанс заключается в том, что, если в объекте или классе определена индексная сигнатура, становится невозможным объявить в их теле или добавить через точечную и скобочную нотацию ключи, ассоциированные с несовместимым типом данных. Простыми словами - тело объекта или класса, имеющего определение индексной сигнатуры, не может иметь определения членов других типов.

В случае с интерфейсом:

`````ts
interface IIdentifier {
    [key: string]: string;
    
    a: string; // Ok, [в момент декларации]
    b: number; // Error, [в момент декларации] допускается объявление идентификаторов принадлежащих только к типу string
}

let instanceObject: IIdentifier = {
  c: '', // Ok, [в момент объявления]
  d: 0   // Error, [в момент объявления] допускается объявление идентификаторов принадлежащих только типу string
};

instanceObject.e = ''; // Ok, [после объявления]
instanceObject.f = 0;  // Error, [после объявления] допускается объявление идентификаторов принадлежащих только типу string
`````

В случае с классом:

`````ts
class Identifier {
    [key: string]: string;
    
    a: string; // Ok, [в момент объявления]
    b: number; // Error, [в момент объявления] допускается объявление идентификаторов принадлежащих только типу string
}

let instanseClass = new Identifier();
instanseClass.c = ''; // Ok, [после объявления]
instanseClass.d = 0;  // Error, [после объявления] допускается объявление идентификаторов принадлежащих только типу string
`````

Но, в случае с модификатором `readonly`, поведение отличается. Несмотря на то, что указывать идентификаторы членов, принадлежащие к несовместимым типам, по-прежнему нельзя, допускается их декларация и объявление.

В случае с интерфейсом:
`````ts
interface IIdentifier {
    readonly [key: string]: string; // Ok
    
    a: string; // Ok, декларация
}

let instanceObject: IIdentifier = {
    a: '', // Ok, объявление
    b: ''  // Ok, объявление
};

instanceObject.с = 'value'; // Error, ассоциировать ключ со значением после создания объекта по-прежнему нельзя
`````

В случае с классом:

`````ts
class Identifier {
    readonly [key: string]: string;
    
    a: string = 'value'; // Ok, декларация и объявление
}

let instanseClass = new Identifier();
instanseClass.b = 'value'; // Error, ассоциировать ключ со значением после создания объекта по-прежнему нельзя
`````

К тому же объекты и классы имеющие определение индексной сигнатуры не могут содержать определения методов.

`````ts
interface IIdentifier {
    readonly [key: string]: string;
    
    method(): void; // Error -> TS2411: Property 'method' of type '() => void' is not assignable to string index type 'string'
}

class Identifier {
    readonly [key: string]: string;
    
    method(): void {} // Error -> TS2411: Property 'method' of type '() => void' is not assignable to string index type 'string'.
}
`````

Третий нюанс проистекает от предыдущего и заключается в том, что значения, ассоциированные с идентификаторами, которые были задекларированы в типе, можно перезаписать после инициализации объекта.

В случае с интерфейсом:

`````ts
interface IIdentifier {
    readonly [key: string]: string; // Ok
    
    a: string; // Ok, декларация
}

let instanceObject: IIdentifier = {
    a: 'value', // Ok, реализация
    b: 'value'  // Ok, объявление
};

instanceObject.a = 'new value'; // Ok, можно перезаписать значение
instanceObject.b = 'new value'; // Error, нельзя перезаписать значение
`````

В случае с классом:

`````ts
class Identifier {
    readonly [key: string]: string;
    
    a: string = 'value'; // Ok, декларация и объявление
}

let instanseClass = new Identifier();
instanseClass.a = 'new value'; // Ok, можно перезаписать значение
`````

Если учесть что модификатор `readonly` вообще не стоит применять к индексной сигнатуре, то все эти нюансы вообще можно выкинуть из головы. Но, так как цель этой книги защитить читателя от как можно большего количества подводных камней, я решил не опускать данный факт, ведь знание — лучшая защита.

Кроме того, не будет лишним знать наперед, что если идентификатор привязки принадлежит к типу `string`, то в качестве ключа может быть использовано значение, принадлежащее к типам `string`, `number`, `symbol`, `Number Enum` и `String Enum`.

`````ts
interface StringDynamicKey {
    [key: string]: string;
}

enum NumberEnum {
    Prop = 0
}

enum StringEnum {
    Prop = 'prop'
}

let example: StringDynamicKey = {
    property: '',            // Ok String key
    '': '',                  // Ok String key
    1: '',                   // Ok Number key
    [Symbol.for('key')]: '', // Ok Symbol key
    [NumberEnum.Prop]: '',   // Ok Number Enum key
    [StringEnum.Prop]: '',   // Ok String Enum key
};
`````

В случае, когда идентификатор привязки принадлежит к типу `number`, то значение, используемое в качестве ключа, может принадлежать к таким типам, как `number`, `symbol`, `Number Enum` и `String Enum`.

`````ts
interface NumberDynamicKey {
    [key: number]: string;
}

enum NumberEnum {
    Prop = 0
}

enum StringEnum {
    Prop = 'prop'
}

let example: NumberDynamicKey = {
    property: '',               // Error String key
    '': '',                     // Error String key
    1: '',                      // Ok Number key
    [Symbol.for('key')]: '',    // Ok Symbol key
    [NumberEnum.Prop]: '',      // Ok Number Enum key
    [StringEnum.Prop]: '',      // Ok String Enum key
};
`````

Вывод типов, в некоторых случаях, выводит тип, принадлежащий к объектному типу с индексной сигнатурой. Напомню, что в _JavaScript_, помимо привычного способа при объявлении идентификаторов в объектных типах, можно использовать строковые литералы и выражения заключённые в квадратные скобки `[]`.

`````ts
let computedIdentifier = 'e';

let v = {
    a: '', // объявление идентификатора привычным способом,
    ['b']: '', // объявление идентификатора с помощью строкового литерала.
    ['c' + 'd']: '', // объявление идентификатора с помощью выражения со строковыми литералами
    [computedIdentifier]: '' // объявление идентификатора при помощи вычисляемого идентификатора
}; 
`````

В первых двух случаях, вывод типов выводит ожидаемый тип, а в оставшихся тип с индексной сигнатурой.

`````ts
// let v1: { a: string; }
let v1 = {  
    a: 'value'  // Ok, привычный идентификатор
};

v1.b = 'value'; // Error, в типе { a: string } не задекларирован идентификатор b
`````
`````ts
// let v2: { ['a']: string; }
let v2 = {  
    ['a']: 'value'  // Ok, строковый литерал
};

v2.b = 'value'; // Error, в типе { ['a']: string } не задекларирован идентификатор b
`````
`````ts
let computedIdentifier: string = 'a';

// let v3: { [x: string]: string }; - вывод типов выводит как тип с индексной сигнатурой...
let v3 = { 
    [computedIdentifier]: 'value' // вычисляемое свойство
};

v3.b = 'value'; // ... а это, в свою очередь, позволяет добавлять новое значение
`````
`````ts
// let v4: { [x: string]: string }; - вывод типов выводит как тип с индексной сигнатурой...
let v4 = { 
    ['a' + 'b']: 'value' // выражение со строковыми литералами
};

v4.b = 'value'; // ... а это, в свою очередь, позволяет добавлять новое значение
`````

## Строгая проверка при обращении к динамическим ключам

Поскольку механизм, позволяющий определение _индексной сигнатуры_, не способен отслеживать идентификаторы (имена) полей определенных динамически, такой подход не считается типобезопасным.

`````ts
type T = {
    [key: string]: number | string;
}

function f(p: T) {
    /**
     * Обращение к несуществующим полям
     */
    p.bad.toString(); // Ok -> Ошибка времени исполнения
    p[Math.random()].toString(); // Ok -> Ошибка времени исполнения
}
`````

Данная проблема решается с помощью флага `--noUncheckedIndexedAccess` активирующего строгую проверку при обращении к динамическим членам объектных типов. Флаг `--noUncheckedIndexedAccess` ожидает в качестве значения `true` либо `false`. Активация механизма позволяет обращаться к динамическим членам только после подтверждения их наличия в объекте, a также совместно с такими операторами, как оператор опциональной последовательности `?.` и опциональный оператор `!.`.

`````json
// @filename: tsconfig.json

{
    "compilerOptions": {
        "noUncheckedIndexedAccess": true
    }
}
`````

`````ts
type T = {
  [key: string]: number | string;
}


function f(p: T) {
  /**
   * Обращение к несуществующим полям
   */
  p.bad.toString(); // Error -> TS2532: Object is possibly 'undefined'.
  p[Math.random()].toString(); // Error -> TS2532: Object is possibly 'undefined'.


  // Проверка наличия поля bad
  if ("bad" in p) {
      p.bad?.toString(); // Ok
  }

  // Использование опционального оператора
  p[Math.random()]!.toString(); // Ok -> ошибка во время выполнения

  p[Math.random()]?.toString();  // Ok -> Ошибка не возникнет
}
`````

Не будет лишним упомянуть, что влияние данного механизма распространяется также и на массивы. В случае с массивом не получится избежать аналогичной ошибки при попытке обращения к его элементам при помощи индексной сигнатуры.

`````ts
function f(array: string[]) {
    for (let i = 0; i < array.length; i++) {
        array[i].toString(); // Error -> TS2532: Object is possibly 'undefined'.
    }
}
`````

## Запрет обращения к динамическим ключам через точечную нотацию

Поскольку к динамическим ключам можно обращаться, как через точечную, так и скобочную нотацию, то может возникнуть потребность в разделении такого поведения. Для подобных случаев, в _TypeScript_ существует флаг `--noPropertyAccessFromIndexSignature`, установление которого в значение `true`, запрещает обращение к динамическим членам с помощью точечной нотации.

`````json
// @filename: tsconfig.json

{
    "compilerOptions": {
        "noPropertyAccessFromIndexSignature": "true"
    }
}
`````

`````ts
type Settings = {
    env?: string[]; // определение необязательного предопределенного поля

    [key: string]: any; // опеределение динамических полей
}


function configurate(settings: Settings){
    //---------------------------
    // динамическое поле
    if(settings.envs){ // Ошибка при активном флаге и Ok при не активном

    }
    if(settings['envs']){ // Ok при любом значении флага

    }

    //----------------------------
    // предопределенное поле
    if(settings.env){ // Ok [1]

    }
    if(settings['env']){ // Ok при любом значении флага

    }
}
`````

## Тонкости совместимости индексной сигнатурой с необязательными полями

Объектные типы определяющие строковую индексную сигнатуру считаются совместимыми с объектными типами имеющими необязательные поля.

`````ts
/**
 * [0] поля определены как необязательные!
 */
type Magic = {
    fire?: string[];
    water?: string[];
}

declare const HERO_CONFIG: Magic;

const hero: {[key: string]: string[]} = HERO_CONFIG; // Ok
/**Ok*/
`````

Но существует два неочевидных момента. При попытке инициализировать необязательные поля значением `undefined` возникнет ошибка.

`````ts
/**
 * [0] поля определены как необязательные!
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

Кроме этого, ошибки не удастся избежать тогда, когда объектный тип, вместо опционального оператора, явно указывает принадлежность типа членов к типу `undefined`.

`````ts
/**
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

И кроме того, данные правила применимы исключительно к строковой индексной сигнатуре.

`````ts
/**
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
