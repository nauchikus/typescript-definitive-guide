## Операторы - Optional, Not-Null, Not-Undefined, Definite Assignment Assertion
________________

Оператор, помечающий члены и параметры как необязательные, довольно часто используется при разработке приложений. И если понимание процесса, связанного с необязательным оператором, довольно просто, то со вторым оператором, который зачастую идеологически связан с первым, не все так очевидно.

## Необязательные поля, параметры и методы (Optional Fields, Parameters and Methods)
________________

В *TypeScript* существует возможность декларировать поля, методы и параметры как *необязательные*. Эта возможность позволяет исключать помеченные элементы из инициализации, вызовов и проверки на совместимость.

Как необязательное, поле, параметр или метод, помечается с помощью оператора вопросительного знака `?`. При объявлении полей и параметров, оператор помещается сразу после идентификатора. При объявлении методов, оператор помещается между идентификатором и круглыми скобками.

~~~~~typescript
type VoiceEvent = { type: string, repeat?: number }; // ? optional member object
type VoiceHandler = (event?: VoiceEvent) => void; // ? optional functon params


class Animal {
   name?: number; // ? optional field

   voice?( ): void { } // ? optional method
}
~~~~~

Сказать честно, титулы *поля*, *параметры*, *методы* делают данный оператор чересчур именитым. Поэтому, с вашего разрешения, в дальнейшем он будет упрощен до *“необязательного оператора”*.


Как стало известно из разделов, посвященных типу `undefined`, этот тип является подтипом всех типов. А это в свою очередь означает что его единственное значение undefined можно присвоить в качестве значения любому типу.

~~~~~typescript
let a: number = undefined; // Ok strictNullChecks = false
let b: string = undefined; // Ok strictNullChecks = false
let c: boolean = undefined; // Ok strictNullChecks = false
let d: object = undefined; // Ok strictNullChecks = false
let e: any = undefined; // Ok strictNullChecks = false
~~~~~

Когда у компилятора флаг `--strictNullChecks` установлен в `true`, тип `undefined` является подтипом только типа `any`. Это означает что связать значение `undefined` можно только с типом `any`.

~~~~~typescript
let a: number = undefined; // Error strictNullChecks = true
let b: string = undefined; // Error strictNullChecks = true
let c: boolean = undefined; // Error strictNullChecks = true
let d: object = undefined; // Error strictNullChecks = true
let e: any = undefined; // Ok strictNullChecks = true
~~~~~

Как уже было сказано, помечая что-либо как необязательное, подразумевается, что параметру не будет присвоено значение, а поле или метод и вовсе может не существовать в объекте. А, как известно, не инициализированные члены объектов всегда принадлежат к типу `undefined`.


Поэтому каждый раз, когда компилятор видит поля или параметры, помеченные как необязательные, он расценивает это как явное указание того, что по сценарию в этом месте допускается значение `undefined`. Несмотря на то, что при активном флаге `--strictNullChecks`, `undefined` в качестве значения запрещен, при условии что тип не указан как `undefined` или `any`, компилятор самостоятельно добавляет к уже указанным типам тип `undefined`.

~~~~~typescript
/** strictNullChecks = true */

let a: { field?: number }; // field: number | undefined
let b: { field?:string }; // field: string | undefined
let c: { field?: boolean }; // field: boolean | undefined
let d: ( prop?: object ) => void; // prop: object | undefined
let e: ( prop?: any ) => void; // prop: any
let f: ( prop?: number | undefined ) => void; // prop: number | undefined
~~~~~

Когда флаг `--strictNullChecks` установлен в `false` и он видит поля или параметры, помеченные как необязательные, он точно также понимает, что по сценарию допускается значение `undefined`. При этом он не добавляет к уже указанному типу тип `undefined` и даже не берет его в расчет при явном указании. Такое поведение связано с тем, что при неактивном флаге `--strictNullChecks`, тип данных `undefined` совместим со всеми остальными типами. А это в свою очередь означает, что поля и параметры не нуждаются в его явном указании.

~~~~~typescript
/** strictNullChecks = false */

let a: { field?: number }; // field: number
let b: { field?:string }; // field: string
let c: { field?: boolean }; // field: boolean
let d: ( prop?: object ) => void; // prop: object
let e: ( prop?: any ) => void; // prop: any
let f: ( prop?: number | undefined ) => void; // prop: number
~~~~~

Также стоит упомянуть, что необязательные поля не обязательно должны содержать явную аннотацию.

~~~~~typescript
interface IT1 {
  f1?; // Ok -> f1?: any
}

class T1 {
  f1?; // Ok -> f1?: any
  f2? = 0; // Ok -> f2?: number
}
~~~~~


## Оператор ! (Non-Null and Non-Undefined Operator)
________________


Оператор `Not-Null Not-Undefined` в случаях, в которых возможны исключения, связанные с обращением к членам несуществующего объекта или вызовом несуществующего метода, при включенной опции компилятора `--strictNullChecks`, позволяет приглушать сообщения об ошибках.

Простыми словами, когда объект или метод объекта по сценарию может иметь значение `null` или `undefined`, в режиме `--strictNullChecks` компилятор с целью предотвращения возможной ошибки накладывает запрет на операции обращения и вызова. Разрешить подобные операции возможно с помощью оператора `Not-Null Not-Undefined`, который обозначается восклицательным знаком `!`.

Чтобы понять принцип оператора `Non-Null Non-Undefined`, достаточно представить функцию-слушатель события, у которой единственный параметр `event` с типом `UserEvent` помечен как необязательный. Так как параметр необязательный, то он, помимо типа `UserEvent`, может принадлежать ещё и к типу `undefined`. А это означает, что при попытке обратится в теле слушателя к любому члену параметра `event`, может возникнуть исключение, вызванное обращением к членам несуществующего объекта. С целью предотвращения исключения во время выполнения компилятор, во время компиляции, выведет сообщение об ошибке, вызванной обнаружением потенциально опасного кода.

~~~~~typescript
/** strictNullChecks = true */

type UserEvent = {type: string};
// параметр помечен как необязательный, поэтому тип выводится как event?: UserEvent | undefined 
function handler( event?: UserEvent ): void {


  // потенциальная ошибка,  возможно обращение к полю несуществующего объекта
 let type = event.type; // Error -> possible runtime error
}
~~~~~

Обычно в таких случаях стоит изменить архитектуру, но, если разработчик знает, что делает, компилятор можно настоятельно попросить закрыть глаза при помощи оператора `Not-Null Not-Undefined`.

При обращении к полям и свойствам объекта, оператор `Not-Null Not-Undefined` указывается перед оператором точка `object!.field`.

~~~~~typescript
/** strictNullChecks = true  */

type UserEvent = {type: string};

function handler( event?: UserEvent ): void {


  // мы говорим компилятору, что берем этот участок кода под собственный контроль
 let type = event!.type; // 
}
~~~~~

Оператор `Not-Null Not-Undefined` нужно повторять каждый раз, когда происходит обращение к полям и свойствам объекта, который помечен как необязательный.

~~~~~typescript
/** strictNullChecks = true  */

type Target = {name:string};
type Currenttarget = {name};
type UserEvent = {
 type: string,
 target?: Target,
 currentTarget: Currenttarget
};

function handler( event?: UserEvent ): void {
 let type = event!.type; // 1 !
 let target = event!.target!.name; // 2 !
 let currenttarget = event!.currentTarget.name; // 1 !
}
~~~~~

При обращении к методам объекта, помеченным как необязательные, оператор `Not-Null Not-Undefined` указывается между идентификатором-именем и круглыми скобками. Стоит обратить внимание, что когда происходит обращение к полю или свойству объекта, помеченного как необязательный, то оператор `Not-Null Not-Undefined` указывается лишь раз. При обращении к необязательному методу того же объекта, оператор `Not-Null Not-Undefined` указывается дважды.

~~~~~typescript
/** strictNullChecks = true  */

type Target = {name:string};
type Currenttarget = {name};
type UserEvent = {
 type: string,
 target?: Target,
 currentTarget: Currenttarget,
 toString?(): string
};

function handler( event?: UserEvent ): void {
 let type = event!.type; // 1 !
 let target = event!.target!.name; // 2 !
 let currenttarget = event!.currentTarget.name; // 1 !
 let meta = event!.toString!(); // 2 !
}
~~~~~

Нужно повторить ещё раз, что оператор `Not-Null Not-Undefined`, при активном флаге `--strictNullChecks`, обязателен только в тех случаях, когда объект не принадлежит к отличному от `any` типу.

~~~~~typescript
/** strictNullChecks = true  */

type Target = { name: string };
type Currenttarget = {name};
type UserEvent = {
  type: string,
  target?: Target,
  currentTarget: Currenttarget,
  toString?(): string,
  valueOf(): any
};

function handler( event?: any ): void {
  let type = event.type; // 0 !
  let target = event.target.name; // 0 !
  let currenttarget = event.currentTarget.name; // 0 !
  let meta = event.toString(); // 0 !
  let value = event.valueOf(); // 0 !
}
~~~~~

И, как было сказано в самом начале, правило оператора `Not-Null Not-Undefined`, применённое к необязательному оператору, идентично для всех полей и параметров, принадлежащих к типам `Null` или `Undefined`...

~~~~~typescript
/** strictNullChecks = true  */

type Target = { name: string };
type Currenttarget = {name};
type UserEvent = {
  type: string,
  target?: Target,
  currentTarget: Currenttarget,
  toString?(): string,
  valueOf(): any
};

function handler( event: UserEvent | undefined ): void {
  let type = event.type; // Error
  let target = event.target.name; // Error
  let currenttarget = event.currentTarget.name; // Error
  let meta = event.toString(); // Error
  let value = event.valueOf(); // Error
}
~~~~~

...при условии, что они не будут принадлежать к типу `any`.

~~~~~typescript
/** strictNullChecks = true  */

type Target = { name: string };
type Currenttarget = {name};
type UserEvent = {
  type: string,
  target?: Target,
  currentTarget: Currenttarget,
  toString?(): string,
  valueOf(): any
};

function handler( event: UserEvent | undefined | any ): void {
  let type = event.type; // Ok
  let target = event.target.name; // Ok
  let currenttarget = event.currentTarget.name; // Ok
  let meta = event.toString(); // Ok
  let value = event.valueOf(); // Ok
}
~~~~~


## Оператор ! (Definite Assignment Assertion)
________________

Для повышения типобезопасности программы, правила, накладываемые опцией `--strictNullChecks` (глава [“Опции компилятора”]()), действуют также на переменные, которые инициализируются в чужом контексте.

~~~~~typescript
let value: number;

initialize();

console.log(value + value); // Error, обращение к переменной перед присвоением ей значения

function initialize(){
  value = 0;
}
~~~~~

Чтобы избежать ошибки при обращении к переменным, которые инициализированны в чужом контексте, нужно использовать *definite assignment assertions*. *definite assignment assertions* также указывается с помощью символа восклицательного знака (`!`) и располагается после идентификатора переменной. Указывая каждый раз при обращении к переменной *definite assignment assertion*, разработчик сообщает компилятору, что берет на себя все проблемы, которые могут быть вызваны отсутствием значения у переменной.

~~~~~typescript
let value: number;

initialize();

console.log(value! + value!); // Ok, указание definite assignment assertion

function initialize(){
  value = 0;
}
~~~~~

## Итог

Подведем итоги:

- Помечая поля и параметры, как необязательные, необязательный оператор располагается между идентификатором и двоеточием, обозначающим начало указания типа данных.
- Помечая методы, как необязательные, необязательный оператор располагается между идентификатором и круглыми скобками.
- Помеченные как необязательные поля, параметры и методы не учитываются при проверке типов на совместимость.
- Оператор `Not-Null Not-Undefined` в режиме `--strictNullChecks` помогает выявлять ошибки, которые могут произойти во время выполнения из-за обращения к членам несуществующего объекта или вызовом несуществующих методов.
- Оператор `Not-Null Not-Undefined` обозначается при помощи восклицательного знака (`!`).
- При обращения к полям и свойствам, оператор `Not-Null Not-Undefined` указывается между ссылкой на потенциально опасный объект и оператором точка (`.`) .
- При вызове потенциально несуществующего метода оператор `Not-Null Not-Undefined` указывается между ссылкой и круглыми скобками.
- Оператор `Not-Null Not-Undefined` указывается столько раз, сколько потенциально опасных обращений будет выполнено при выполнении операции.
- С момента, когда в цепочке обращения встречается ссылка, ведущая на объект, принадлежащий к типу `any`, оператор `Not-Null Not-Undefined` указывать не обязательно.
