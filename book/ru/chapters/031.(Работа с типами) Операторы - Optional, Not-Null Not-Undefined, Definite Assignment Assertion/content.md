# Операторы - Optional, Not-Null Not-Undefined, Definite Assignment Assertion

Оператор `Optional`, помечающий члены и параметры как необязательные, довольно часто используется при разработке приложений. И если в понимании механизма его работы нет ничего сложного, то для идеологически связанного с ним оператора `Not-Null Not-Undefined` не все так очевидно.


## Необязательные поля, параметры и методы (Optional Fields, Parameters and Methods)

В _TypeScript_ существует возможность декларировать поля, методы и параметры как _необязательные_. Эта возможность позволяет исключать помеченные элементы из инициализации, вызовов и проверки на совместимость.

Поле, параметр или метод помечается как _необязательный_ с помощью оператора вопросительного знака `?`. При объявлении полей и параметров, оператор помещается сразу после идентификатора `identifier?: Type`. Для методов оператор помещается между идентификатором и круглыми скобками `identifier?(): Type`.

`````ts
type VoiceEvent = { 
    type: string
    repeat?: number // необязательное поле
};

type VoiceHandler = (event?: VoiceEvent) => void; // необязательный параметр функции

class Animal {
   name?: number; // необязательное поле

   voice?(): void {} // необязательный метод
}
`````

Термины _поля_, _параметры_ и _методы_ делают данный оператор чересчур именитым. Поэтому в дальнейшем он будет упрощен до _“необязательного оператора”_.

Из темы посвященной типу `undefined` стало известно, что он является подтипом всех типов. Это в свою очередь означает, что его единственное значение - `undefined` - можно присвоить в качестве значения любому другому типу.

`````ts
/** strictNullChecks: false */

let a: number = undefined; // Ok
let b: string = undefined; // Ok
let c: boolean = undefined; // Ok
let d: object = undefined; // Ok
let e: any = undefined; // Ok
`````

Когда у компилятора флаг `--strictNullChecks` установлен в `true`, тип `undefined` является подтипом только типа `any`. Это означает, что связать значение `undefined` можно только с типом `any`.

`````ts
/** strictNullChecks: true */

let a: number = undefined; // Error
let b: string = undefined; // Error
let c: boolean = undefined; // Error
let d: object = undefined; // Error
let e: any = undefined; // Ok
`````

Как было сказано в начале, _необязательное_ буквально означает, что параметр функции может быть не ассоциирован со значением, а поле или метод и вовсе не существовать в объекте. А как известно, неинициализированные члены объектов и параметры функции всегда принадлежат к типу `undefined`. Поэтому каждый раз, когда компилятор видит поля или параметры, помеченные как необязательные, он расценивает это как явное указание на сценарий, допускающий значение `undefined`, способное нарушить ожидаемый ход выполнения программы. И поскольку активация рекомендуемого флага `--strictNullChecks` запрещает присваивать значение `undefined` типам отличным от `undefined` или `any`, вывод типов берет на себя инициативу и помечает все необязательные конструкции как принадлежащие к объединению, включающее тип `undefined`.

`````ts
/** strictNullChecks: true */

let a: { field?: number }; // field: number | undefined
let b: { field?: string }; // field: string | undefined
let c: { field?: boolean }; // field: boolean | undefined
let d: (prop?: object) => void; // prop: object | undefined
let e: (prop?: any) => void; // prop: any
let f: (prop?: number | undefined) => void; // prop: number | undefined
`````

Когда флаг `--strictNullChecks` установлен в `false` и он встречает поля или параметры, помеченные как необязательные, он точно также понимает, что по сценарию допускается значение `undefined`. Но при этом он не добавляет к уже указанному типу тип `undefined` и даже не берет его в расчет при явном указании. Такое поведение связано с тем, что при неактивном флаге `--strictNullChecks`, тип данных `undefined` совместим со всеми остальными типами. Это, в свою очередь, освобождает поля и параметры от его явного указания.

`````ts
/** strictNullChecks: false */

let a: { field?: number }; // field: number
let b: { field?: string }; // field: string
let c: { field?: boolean }; // field: boolean
let d: (prop?: object) => void; // prop: object
let e: (prop?: any) => void; // prop: any
let f: (prop?: number | undefined) => void; // prop: number
`````

Также стоит упомянуть, что необязательные поля не обязательно должны содержать явную аннотацию.

`````ts
interface IT1 {
    f1?; // Ok -> f1?: any
}

class T1 {
    f1?; // Ok -> f1?: any
    f2? = 0; // Ok -> f2?: number
}
`````

## Оператор ! (Non-Null and Non-Undefined Operator)

Оператор `Not-Null Not-Undefined`, при активной опции `--strictNullChecks`, в случаях, допускающих обращение к несуществующим членам, позволяет приглушать сообщения об ошибках.

Простыми словами, когда в режиме `--strictNullChecks` происходит обращение к значению объекта или метода, которые могут иметь значение `null` или `undefined`, компилятор, с целью предотвращения возможной ошибки, накладывает запрет на операции обращения и вызова. Разрешить подобные операции возможно с помощью оператора `Not-Null Not-Undefined`, который обозначается восклицательным знаком `!`.

Чтобы понять принцип оператора `Non-Null Non-Undefined`, достаточно представить слушатель события, у которого единственный параметр `event`, принадлежность которого указана к типу `UserEvent`, помечен как необязательный. Это означает, что , помимо обусловленного типа `UserEvent`, параметр может принадлежать ещё и к типу `undefined`. А это значит, что при попытке обратится к какому-либо члену объекта события `event`, может возникнуть исключение, вызванное обращением через ссылку на `null` или `undefined`. С целью предотвращения исключения во время выполнения, компилятор, во время компиляции, выведет сообщение об ошибке, вызванной обнаружением потенциально опасного кода.

`````ts
/** strictNullChecks: true */

type UserEvent = { type: string };

// параметр помечен как необязательный, поэтому тип выводится как event?: UserEvent | undefined 
function handler(event?: UserEvent): void {
    // потенциальная ошибка, возможно обращение к полю несуществующего объекта
    let type = event.type; // Error -> возможная ошибка во время выполнения
}
`````

Обычно в таких случаях стоит изменить архитектуру, но если разработчик в полной мере осознает последствия, то компилятор можно настоятельно попросить закрыть глаза на потенциально опасное место при помощи оператора `Not-Null Not-Undefined`. При обращении к полям и свойствам объекта, оператор `Not-Null Not-Undefined` указывается перед оператором точка `object!.field`.

`````ts
/** strictNullChecks: true  */

type UserEvent = { type: string };

function handler(event?: UserEvent): void {
    // указываем компилятору, что берем этот участок кода под собственный контроль
    let type = event!.type; // Ok
}
`````

Оператор `Not-Null Not-Undefined` нужно повторять каждый раз, когда происходит обращение к полям и свойствам объекта, помеченного как необязательный.

`````ts
/** strictNullChecks: true  */

type Target = { name: string };

type CurrentTarget = { name };

type UserEvent = {
    type: string,
    target?: Target,
    currentTarget: CurrentTarget
};

function handler(event?: UserEvent): void {
    let type = event!.type; // 1 !
    let target = event!.target!.name; // 2 !
    let currentTarget = event!.currentTarget.name; // 1 !
}
`````

При обращении к необязательным методам объекта, оператор `Not-Null Not-Undefined` указывается между идентификатором (именем) и круглыми скобками. Стоит обратить внимание, что , когда происходит обращение к необязательному полю или свойству объекта, оператор `Not-Null Not-Undefined` указывается лишь один раз `optionalObject!.firstLevel.secondLevel`. При обращении к необязательному методу того же объекта, оператор `Not-Null Not-Undefined` указывается дважды `optionalObject!.toString!()`.

`````ts
/** strictNullChecks: true  */

type Target = { name: string };

type CurrentTarget = { name };

type UserEvent = {
    type: string,
    target?: Target,
    currentTarget: CurrentTarget,
    toString?(): string
};

function handler(event?: UserEvent): void {
    let type = event!.type; // 1 !
    let target = event!.target!.name; // 2 !
    let currentTarget = event!.currentTarget.name; // 1 !
    let meta = event!.toString!(); // 2 !
}
`````

Нужно повторить ещё раз, что оператор `Not-Null Not-Undefined`, при активном флаге `--strictNullChecks`, обязателен только в случаях, когда объект принадлежит к типу отличного от `any`.

`````ts
/** strictNullChecks: true  */

type Target = { name: string };

type CurrentTarget = { name };

type UserEvent = {
    type: string,
    target?: Target,
    currentTarget: CurrentTarget,
    toString?(): string,
    valueOf(): any
};

function handler(event?: any): void {
    let type = event.type; // 0 !
    let target = event.target.name; // 0 !
    let currentTarget = event.currentTarget.name; // 0 !
    let meta = event.toString(); // 0 !
    let value = event.valueOf(); // 0 !
}
`````

И, как было сказано в самом начале, правило оператора `Not-Null Not-Undefined`, применённое к необязательному оператору, идентично для всех полей и параметров, принадлежащих к типам `null` или `undefined`...

`````ts
/** strictNullChecks: true  */

type Target = { name: string };

type CurrentTarget = { name };

type UserEvent = {
    type: string,
    target?: Target,
    currentTarget: CurrentTarget,
    toString?(): string,
    valueOf(): any
};

function handler(event: UserEvent | undefined): void {
    let type = event.type; // Error
    let target = event.target.name; // Error
    let currentTarget = event.currentTarget.name; // Error
    let meta = event.toString(); // Error
    let value = event.valueOf(); // Error
}
`````

...при условии, что они не будут принадлежать к типу `any`.

`````ts
/** strictNullChecks: true  */

type Target = { name: string };

type CurrentTarget = { name };

type UserEvent = {
    type: string,
    target?: Target,
    currentTarget: CurrentTarget,
    toString?(): string,
    valueOf(): any
};

function handler(event: UserEvent | undefined | any): void {
    let type = event.type; // Ok
    let target = event.target.name; // Ok
    let currentTarget = event.currentTarget.name; // Ok
    let meta = event.toString(); // Ok
    let value = event.valueOf(); // Ok
}
`````

## Оператор ! (Definite Assignment Assertion)

Для повышения типобезопасности программы, правила, накладываемые опцией `--strictNullChecks` (глава [“Опции компилятора”](../060.(Компилятор)%20Опции%20компилятора)), действуют также на переменные, инициализирующиеся в чужом контексте.

`````ts
let value: number;

initialize();

console.log(value + value); // Error, обращение к переменной перед присвоением ей значения

function initialize() {
  value = 0;
}
`````

Чтобы избежать ошибки при обращении к переменным, которые инициализированы в чужом контексте, нужно использовать _definite assignment assertions_. _definite assignment assertions_ также указывается с помощью символа восклицательного знака (`!`) и располагается после идентификатора переменной. Указывая данный оператор каждый раз при обращении к переменной, разработчик сообщает компилятору, что берет на себя все проблемы, которые могут быть вызваны отсутствием значения у переменной.

`````ts
let value: number;

initialize();

console.log(value! + value!); // Ok, указание definite assignment assertion

function initialize() {
  value = 0;
}
`````
