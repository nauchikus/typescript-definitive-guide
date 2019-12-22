## Важно
________________

Прежде чем приступить к знакомству с такими типами, как `Null`, `Undefined`, `Void`, `Never` и `Unknown`, стоит обговорить одну очень важную деталь. Дело в том, что все перечисленные типы можно указывать в качестве типа всем конструкциям, которые это позволяют. То есть, типом данных `null` можно аннотировать даже переменную (`let identifier: null`). Данная книга будет изобиловать подобными примерами, так как эта возможность облегчает демонстрацию совместимости типов. Но при этом стоит понимать, что проделывать подобное в реальном коде противопоказано.

## Null (null) примитивный null тип
________________

Примитивный тип `Null` служит обозначением *“ничего”*. 

Тип `Null` указывается с помощью ключевого слова `null` (не путать с единственным литеральным значением типа `Null` `null`, которое присваивается в качестве значения).

~~~~~typescript
let identifier: null = null; // null, указанный после оператора двоеточия, это имеющийся только в TypeScript псевдоним (alias) для глобального типа Null. В то время как null, указанный после оператора присваивания, это единственное значение типа Null.
~~~~~

Тип `Null` является подтипом всех типов, за  исключением типа `Undefined`, поэтому его единственное значение `null` совместимо со всеми остальными типами данных.

~~~~~typescript
class TypeSystem {
  static any: any = null; // Ok
  static number: number = null; // Ok
  static string: string = null; // Ok
  static boolean: boolean = null; // Ok
  static null: null = null; // Ok
}
~~~~~

В то время как тип `Null` совместим со всеми типами, помимо него самого, с ним самим совместим лишь тип `Undefined` и `Any`.

~~~~~typescript
TypeSystem.null = TypeSystem.any; // Ok
TypeSystem.null = TypeSystem.number; // Error
TypeSystem.null = TypeSystem.string; // Error
TypeSystem.null = TypeSystem.boolean; // Error
TypeSystem.null = TypeSystem.null; // Ok
~~~~~

Тогда, когда тип данных указывается не явно, а в качестве значения используется значение `null`, вывод типов определяет принадлежность к типу `Any`.

~~~~~typescript
let identifier = null; // identifier: any
~~~~~

Создатели *TypeScript* во избежание ошибок, возникающих при операциях, в которых вместо ожидаемого значения фигурирует значение `null`, рекомендуют вести разработку с активным флагом `--strictNullChecks`. При активном флаге `--strictNullChecks` тип `Null` является подтипом только одного типа `Any`. Это в свою очередь означает, что значение `null` может быть совместимо только с типами `Any` и `Null`. Простыми словами, значение `null` не получится присвоить типам отличным от `Any` и `Null`.

~~~~~typescript
class TypeSystem {
  static any: any = null; // Ok
  static number: number = null; // Error
  static string: string = null; // Error
  static boolean: boolean = null; // Error
  static null: null = null; // Ok
}

TypeSystem.null = TypeSystem.any; // Ok
TypeSystem.null = TypeSystem.number; // Error
TypeSystem.null = TypeSystem.string; // Error
TypeSystem.null = TypeSystem.boolean; // Error
TypeSystem.null = TypeSystem.undefined; // Ok
~~~~~

При активном флаге `--strictNullChecks`, при условии что в качестве значения выступает значение `null`, вывод типов определяет принадлежность к типу `Null`.

~~~~~typescript
let identifier = null; // identifier: null
~~~~~

Тип `Null` идентичен по своей работе с одноимённым типом из *JavaScript*.


## Undefined (undefined) примитивный неопределенный тип
________________

Примитивный тип `Undefined` указывает на то, что значение не определено. Тип данных `Undefined` указывается с помощью ключевого слова `undefined` (не путать со свойством глобального объекта, которое представляет единственное значение типа `Undefined` `undefined`). 

~~~~~typescript
let identifier: undefined = undefined; // undefined, указанный после оператора двоеточия, это имеющийся только в TypeScript псевдоним (alias) для глобального типа Undefined. В то время как undefined, указанный после оператора присваивания, это единственное значение типа Undefined.
~~~~~

Во время выполнения объявленные, но не инициализированные переменные, поля и свойства класса, а также параметры имеют значение `undefined`. Также значение `undefined` является результатом вызова методов или функций, которые не возвращают значения.


Тип `Undefined` является подтипом всех типов, что делает его совместимым со всеми остальными типами.

~~~~~typescript
class TypeSystem {
  static any: any = undefined; // Ok
  static number: number = undefined; // Ok
  static string: string = undefined; // Ok
  static boolean: boolean = undefined; // Ok
  static null: null = undefined; // Ok
  static undefined: undefined = undefined; // Ok
}
~~~~~

Может возникнуть вопрос, почему тип `Null`, который не имеет непосредственного отношения к типу `Undefined`, совместим с ним? На данный момент, этот вопрос остается единственным, на который автор не смог найти однозначного ответа.

В то время как тип данных `Undefined` совместим со всеми типами, помимо него самого, с ним совместимы лишь `Null` и `Any`.

~~~~~typescript
TypeSystem.undefined = TypeSystem.any; // Ok
TypeSystem.undefined = TypeSystem.number; // Error
TypeSystem.undefined = TypeSystem.string; // Error
TypeSystem.undefined = TypeSystem.boolean; // Error
TypeSystem.undefined = TypeSystem.null; // Ok
~~~~~

Тогда, когда тип данных `Undefined` указывается не явно, компилятор устанавливает тип `Any`.

~~~~~typescript
let identifier = undefined; // identifier: any
~~~~~

При активном флаге `--strictNullChecks`, тип `Undefined` является подтипом только одного типа `Any`. Поэтому его и ему в качестве значения, помимо самого себя, можно присвоить только тип `Any`.

~~~~~typescript
class TypeSystem {
  static any: any = undefined; // Ok
  static number: number = undefined; // Error
  static string: string = undefined; // Error
  static boolean: boolean = undefined; // Error
  static null: null = undefined; // Error
  static undefined: undefined = undefined; // Ok
}

TypeSystem.undefined = TypeSystem.any; // Ok
TypeSystem.undefined = TypeSystem.number; // Error
TypeSystem.undefined = TypeSystem.string; // Error
TypeSystem.undefined = TypeSystem.boolean; // Error
TypeSystem.undefined = TypeSystem.null; // Error
~~~~~

При активном флаге `--strictNullChecks`, при условии что в качестве значения выступает значение `undefined`, вывод типов определяет принадлежность к типу `Undefined`.

~~~~~typescript
let identifier = undefined; // identifier: undefined
~~~~~

Тип `Undefined` идентичен по своей работе с одноимённым типом из *JavaScript*.


## Void (void) отсутствие конкретного типа
________________

Тип данных `Void` можно назвать полной противоположностью типа `Any`, так как этот тип означает отсутствие конкретного типа. Основное предназначение типа `Void` — явно указывать на то, что у функции или метода отсутствует возвращаемое значение.

Тип данных `Void` указывается с помощью ключевого слова `void` (не путать с одноимённым оператором из *JavaScript*) и, в отличие от таких типов, как `Null` и `Undefined`, не имеет никаких значений.

Тип `Void` является подтипом `Any` и супертипом для `Null` и `Undefined`.

~~~~~typescript
function action(): void {}

class TypeSystem {
 static any: any = action(); // Ok
 static number: number = action(); // Error
 static string: string = action(); // Error
 static boolean: boolean = action(); // Error
 static null: null = action(); // Error
 static undefined: undefined = action(); // Error
 static void: void = action(); // Ok
}

TypeSystem.void = TypeSystem.any; // Ok
TypeSystem.void = TypeSystem.number; // Error
TypeSystem.void = TypeSystem.string; // Error
TypeSystem.void = TypeSystem.boolean; // Error
TypeSystem.void = TypeSystem.null; // Ok
TypeSystem.void = TypeSystem.undefined; // Ok
TypeSystem.void = TypeSystem.void; // Ok
~~~~~

Однако с активным флагом `--strictNullChecks`, тип данных `Void` совместим лишь с `Any` и `Undefined`.

~~~~~typescript
function action(): void {}

class TypeSystem {
 static any: any = action(); // Ok
 static number: number = action(); // Error
 static string: string = action(); // Error
 static boolean: boolean = action(); // Error
 static null: null = action(); // Error
 static undefined: undefined = action(); // Error
 static void: void = action(); // Ok
}

TypeSystem.void = TypeSystem.any; // Ok
TypeSystem.void = TypeSystem.number; // Error
TypeSystem.void = TypeSystem.string; // Error
TypeSystem.void = TypeSystem.boolean; // Error
TypeSystem.void = TypeSystem.null; // Error
TypeSystem.void = TypeSystem.undefined; // Ok
TypeSystem.void = TypeSystem.void; // Ok
~~~~~

Кому-то может показаться, что примеры чересчур излишни, или что примеры, в которых результат вызова функции не имеющей возвращаемого значения, присваивается полям с различными типами, не имеет никакого отношения к реальности. Да, это так. Но целью данных примеров является научить думать как компилятор *TypeScript*.
Когда функции в качестве возвращаемого типа указан тип `Void`, может показаться, что, возвращая различные значения с помощью оператора return, компилятор выбрасывает ошибки лишь потому что он понимает, что функция помечена как ничего не возвращающая. Но это не так. Ошибка возникает по причине несовместимости типов.

~~~~~typescript
function a(  ): void {
  let result: number = 5;

  return result; // Error
}
function b(  ): void {
  let result: string = '5';
 
  return result; // Error
}
function c(  ): void {
  let result: any = 5;
 
  return result; // Ok
}
~~~~~

Нельзя не упомянуть, что для функций и методов, которые ничего не возвращают и у которых отсутствует аннотация типа возвращаемого значения, вывод типов определяет принадлежность к типу `Void`.

~~~~~typescript
function action() { } // function action(): void {}
~~~~~

В отличие от `Null` и `Undefined`, тип данных `Void` не имеет ни одного значения, которое могло бы явно продемонстрировать присвоение. Однако компилятор понимает что имеет дело с типом `Void` при вызове функции или метода, которые не возвращают значение. Этот становится ещё нагляднее, когда вывод типов устанавливает тип полученный при вызове функции или метода, которые ничего  не возвращают.

~~~~~typescript
function action(): void { }

let identifier = action(); // identifier: void
~~~~~

Тип `Void` является уникальным для *TypeScript*. В *JavaScript* подобного типа не существует.


## Never (never) примитивный тип
________________

Примитивный типа данных `Never` служит для указания того, что какие-либо операции никогда не будут выполнены.

`Never` обозначается ключевым словом `never` и также как и `Void` не имеет явных значений.

Тип данных `Never` является подтипом всех типов, что делает его совместим со всеми остальными типами.

~~~~~typescript
function action(): never {
  throw new Error();
};

class TypeSystem {
  static any: any = action(); // Ok
  static number: number = action(); // Ok
  static string: string = action(); // Ok
  static boolean: boolean = action(); // Ok
  static null: null = action(); // Ok
  static undefined: undefined = action(); // Ok
  static void: void = action(); // Ok
  static never: never = action(); // Ok
}

TypeSystem.never = TypeSystem.any; // Error
TypeSystem.never = TypeSystem.number; // Error
TypeSystem.never = TypeSystem.string; // Error
TypeSystem.never = TypeSystem.boolean; // Error
TypeSystem.never = TypeSystem.null; // Error
TypeSystem.never = TypeSystem.undefined; // Error
TypeSystem.never = TypeSystem.void; // Error
TypeSystem.never = TypeSystem.never; // Ok
~~~~~

Так как типу Never нельзя присвоить значение, отличное от самого типа `Never`, единственным местом, в котором его может использовать разработчик, является аннотация возвращаемого из функции или метода значения, с одной оговоркой. Тип `Never` можно указать только той функции, из которой программа действительно никогда не сможет выйти. 

Такой сценарий может выражаться в виде функции, вызов которой приведет к однозначному исключению или в которой будет находится бесконечный цикл.

~~~~~typescript
function error( message: string ):  never {
  throw new Error( message );
}

function loop():  never {
  while( true ) { }
}
~~~~~

Вывод типов укажет принадлежность типа возвращаемого функцией значения только в том случае, если она будет возвращать результат вызова функции у которой тип возвращаемого значения указан как `Never`.

~~~~~typescript
function error( message: string ):  never {
 throw new Error( message );
}

function action() { // function action(): never {}
  return error( 'All very, very bad.' );
}


let identifier = error(); // let identifier: never
let identifier = action(); // let identifier: never
~~~~~

Стоит заметить, что без явного указания типа `Never` вывод типов определит принадлежность возвращаемого значения к типу `Void`.

~~~~~typescript
function error( message: string ) { // function  error(): void {}
  throw new Error( message );
}

function loop() { // function  loop(): void {}
  while( true ) { }
}
~~~~~

Тип `Never` является уникальным для `TypeScript`, в `JavaScript` подобного типа не существует.


## Unknown (unknown)
________________

Тип `Unknown` является типобезопасным аналогом типа `any` и представлен в виде литерала `unknown`. Все типы совместимы с типом `unknown`, в то время как сам тип `unknown` совместим только с самим собой и типом `any`.

~~~~~typescript
class TypeSystem {
static unknown: unknown;

static any: any = TypeSystem.unknown; // Ok
static number: number = TypeSystem.unknown; // Error
static string: string = TypeSystem.unknown; // Error
static boolean: boolean = TypeSystem.unknown; // Error
static null: null = TypeSystem.unknown; // Error
static undefined: undefined = TypeSystem.unknown; // Error
static void: void = TypeSystem.unknown; // Error
static never: never = TypeSystem.unknown; // Error
}

TypeSystem.unknown = TypeSystem.any; // Ok
TypeSystem.unknown = TypeSystem.number; // Ok
TypeSystem.unknown = TypeSystem.string; // Ok
TypeSystem.unknown = TypeSystem.boolean; // Ok
TypeSystem.unknown = TypeSystem.null; // Ok
TypeSystem.unknown = TypeSystem.undefined; // Ok
TypeSystem.unknown = TypeSystem.void; // Ok
TypeSystem.unknown = TypeSystem.unknown; // Ok
~~~~~

Кроме того, над типом `unknown` запрещено выполнение каких-либо операций.

~~~~~typescript
let v0: any;
v0.a = 5; // Ok
v0.a = ''; // Ok
v0(); // Ok


let v1: unknown = v0; // Ok
v1.a = 5; // Error
v1.a = ''; // Error
v1(); // Error
~~~~~	

Если тип `unknown` составляет тип пересечение (`intersection`), то он будет перекрыт всеми типами.

~~~~~typescript
type T0 = any & unknown; // type T0 = any
type T1 = number & unknown; // type T1 = number
type T2 = string & unknown; // type T2 = string
type T3 = boolean & unknown; // type T3 = boolean
type T4 = null & unknown; // type T4 = null
type T5 = undefined & unknown; // type T5 = undefined
type T6 = void & unknown; // type T6 = void
type T7 = never & unknown; // type T7 = never
type T8<T> = T & unknown; // type T8 = T
type T9 = unknown & unknown; // type T9 = unknown
~~~~~

Если тип `unknown` составляет тип объединение (`union`), то он перекроет все типы, за исключением типа `any`.

~~~~~typescript
type T0 = any | unknown; // type T0 = any
type T1 = number | unknown; // type T1 = unknown
type T2 = string | unknown; // type T2 = unknown
type T3 = boolean | unknown; // type T3 = unknown
type T4 = null | unknown; // type T4 = unknown
type T5 = undefined | unknown; // type T5 = unknown
type T6 = void | unknown; // type T6 = unknown
type T7 = never | unknown; // type T7 = unknown
type T8<T> = T | unknown; // type T8 = unknown
type T9 = unknown | unknown; // type T9 = unknown
~~~~~

Помимо этого, запрос ключей (`keyof`) для тип `unknown` возвращает тип `never`.

~~~~~typescript
type T0 = keyof number; // type T0 = "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
type T1 = keyof any; // type T1 = string | number | symbol
type T2 = keyof unknown; // type T2 = never
~~~~~

Тип `unknown` позволяется использовать только в операциях равенства `===`, `==`, `!==` и `!=` и в операциях с логическими операторами `&&`, `||` и `!`.

~~~~~typescript
let v0: unknown = 5;

let v1 = 5 === v0; // Ok
let v2 = 5 !== v0; // Ok
let v3 = 5 > v0; // Error
let v4 = 5 < v0; // Error
let v5 = 5 >= v0; // Error
let v6 = 5 <= v0; // Error
let v7 = 5 - v0; // Error
let v8 = 5 * v0; // Error
let v9 = 5 / v0; // Error
let v10 = ++v0; // Error
let v11 = --v0; // Error
let v12 = v0++; // Error
let v13 = v0--; // Error


let v14 = 5 && v0; // Ok, let v14: unknown
let v15 = 5 || v0; // Ok, let v15: number
let v16 = v0 || 5; // Ok, let v16: unknown
let v17 = !v0; // Ok, let v17: boolean
~~~~~


Также стоит упомянуть, что функция, у которой возвращаемый тип принадлежит к типу `unknown`, может не возвращать значение явно.

~~~~~typescript
function f0(): unknown {return;} // Ok
function f1(): number {return;} // Error

let v = f0(); // Ok, let v: unknown
~~~~~

Кроме того, при активной опции `--strictPropertyInitialization` принадлежащие к типу `unknown` поля не нуждаются в инициализации.

~~~~~typescript
class T {
  f0: unknown; // Ok
  f1: number; // Error
  f2: number = 5; // Ok
}
~~~~~

Если в определении типа данных участвует сопоставленный тип (`Mapped Type`) которому в качестве аргумента типа передается тип `unknown`, то такой сопаставленный тип будет выведен как объектный тип `{}`. Поскольку сопоставленные типы (`Mapped Types`), псевдонимы типов (`types`), а также обобщения (`Generics<>`) будут рассмотрены позднее, то стоит просто помнить об этом факте и повторно прочесть написанное при необходимости. 


~~~~~typescript
type MappedType<T> = {
  [K in keyof T]: T;
}


type T0 =  MappedType<number>; // type T0 = number
type T1 =  MappedType<any>; // type T1 = { [x: string]: any; }
type T2 =  MappedType<unknown>; // type T2 = {}
~~~~~
