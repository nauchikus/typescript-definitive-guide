## Расширенные типы — Exclude, Extract, NonNullable, ReturnType, InstanceType, Omit
________________

Чтобы сэкономить время разработчиков, в систему типов *TypeScript* были включены несколько часто требующихся условных типов, которые подробно будут рассмотрены в этой главе.


## Exclude
________________

В результате разрешения условный тип `Exclude<T, U>` будет представлять разницу типа `T` относительно типа `U`. 

~~~~~typescript
type Exclude<T, U> = T extends U ? never : T;
~~~~~

В случае, если оба аргумента типа принадлежат к одному и тому же типу данных, `Exclude<T, U>` будет представлять тип `never`.

~~~~~typescript
let v0: Exclude<number|string, boolean|object>; // let v0: string|number
let v1: Exclude<number|string, number|string>; // let v1: never
let v2: Exclude<number|string, number|boolean>; // let v2: string

interface IT0 { a: number; b: string; }
interface IT1 { a: number; c: boolean; }

let v3: Exclude<keyof IT0, keyof IT1>; // let v3: "b"
~~~~~

Его реальную пользу лучше всего продемонстрировать на реализации функции, которая на входе получает два разных объекта, а на выходе возвращает новый объект, состоящий из членов, присутствующих в первом объекте, но отсутствующих во втором. Аналог функции `difference` из широко известной библиотеки *lodash*.

~~~~~typescript
interface IA { a: number; b: string; }
interface IB { a: number; c: boolean; }

interface IDifference { b: string; }

function difference<T, U>(a: T, b: U): Pick<T, Exclude<keyof T, keyof U>> {
  // ... code
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

let v0: IDifference = difference(a, b); // Ok
let v1: IA = difference(a, b); // Error
let v2: IB = difference(a, b); // Error
~~~~~


## Extract
________________


В результате разрешения условный тип `Extract<T, U>` будет представлять пересечение типа `T` относительно типа `U`.

~~~~~typescript
type Extract<T, U> = T extends U ? T : never;
~~~~~

Простыми словами, после разрешения `Extract<T, U>` будет принадлежать к типу, признаки которого присущи обоим аргументам типа. То есть, тип `Extract<T, U>` является противоположностью типа `Exclude<T, U>`. В случае, когда общие признаки отсутствуют, тип `Extract<T, U>` будет представлять тип `never`.

~~~~~typescript
let v0 :Extract<number|string, boolean|object>; // let v0: never
let v1 :Extract<number|string, number|string>; // let v1: string | number
let v2 :Extract<number|string, number|boolean>; // let v2: number

interface IT0 { a: number; b: string; }
interface IT1 { a: number; c: boolean; }

let v3 :Extract<keyof IT0, keyof IT1>; // let v3: "a"
~~~~~

Условный тип `Extract<T, U>` стоит рассмотреть на примере реализации функции, которая принимает два разных объекта и возвращает новый объект, состоящий из членов первого объекта, которые также присутствуют и во втором объекте.

~~~~~typescript
interface IA { a: number; b: string; }
interface IB { a: number; c: boolean; }

interface IIntersection { a: number; }

function intersection<T, U>(a: T, b: U): Pick<T, Extract<keyof T, keyof U>> {
    // ... code
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

let v0: IIntersection = intersection(a, b); // Ok
let v1: IA = intersection(a, b); // Error
let v2: IB = intersection(a, b); // Error
~~~~~


## NonNullable
________________

Условный тип `NonNullable<T>` служит для исключения из типа признаков типов `Null` и `Undefined`.

~~~~~typescript
type NonNullable<T> = T extends null | undefined ? never : T;
~~~~~

В случае, когда тип, выступающий в роли единственного аргумента типа, принадлежит только к типам `Null` и\или `Undefined`, `NonNullable<T>` представляет тип `never`.

~~~~~typescript
let v0: NonNullable<string | undefined | null>; // let v0: string
let v1: NonNullable<string | number | undefined | null>; // let v1: string|number
let v2: NonNullable<undefined | null>; // let v2: never
~~~~~

## ReturnType
________________

Условный тип `ReturnType<T>` служит для установления возвращаемого из функции типа.

~~~~~typescript
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

let v0: ReturnType<() => void>; // let v0: void
let v1: ReturnType<() => number | string>; // let v1: string|number
let v2: ReturnType<<T>() => T>; // let v2: {}
let v3: ReturnType<<T extends U, U extends string[]>() => T>; // let v3: string[]
let v4: ReturnType<any>; // let v4: any
let v5: ReturnType<never>; // let v5: never
let v6: ReturnType<Function>; // Error
let v7: ReturnType<number>; // Error
~~~~~

## InstanceType
________________

Условный тип `InstanceType<T>` предназначен для установления типа экземпляра.

~~~~~typescript
class T {}

interface IT { 
    new(): T; 
}

let v0: InstanceType<typeof T>; // let v0: T
let v1: InstanceType<IT>; // let v1: never
let v2: InstanceType<any>; // let v2: any
let v3: InstanceType<never>; // let v3: never
let v4: InstanceType<number>; // Error
let v5: InstanceType<Function>; // Error
~~~~~

## Parameters
________________

Расширенный тип `Parameters<T>` предназначен для получения типов указанных в аннотации параметров функции.

`````typescript
type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
`````

`Parameters<T>` возвращает типы параметров в виде кортежа.

`````typescript
const f = <T>(p0:T, p1: number, p2: string, p3?: boolean, p4: object = {}) => ({}); 

type FunctionParams = Parameters<typeof f>; // type FunctionParams = [{}, number, string, boolean?, object?]
`````


## ConstructorParameters
________________

Расширенный тип `ConstructorParameters<T>` предназначен для получения типов указанных в аннотации параметров конструктора.

`````typescript
type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any ? P : never;
`````

`ConstructorParameters<T>` возвращает типы параметров в виде кортежа.

`````typescript
class Class<T> {
    constructor(p0: T, p1: number, p2: string, p3?: boolean, p4: object = {}) {}
}

type ClassParams = ConstructorParameters<typeof Class>; // type ClassParams = [{}, number, string, boolean?, object?]
`````

## Тип Omit
________________

Расширенный тип `Omit<T, K>`предназначен для определения на основе существующего нового суженного типа.

`````typescript
// lib.d.ts

type Omit<T, K extends string | number | symbol> = { 
    [P in Exclude<keyof T, K>]: T[P];
}
`````

В качестве первого аргумента типа тип `Omit<T, K>` ожидает тип данных, из которого будут исключены признаки, связанные с ключами, переданными в качестве второго аргумента типа.

Простыми словами, к помощи `Omit<T, K>` следует прибегать в тех случаях, когда появляется потребность в определении типа, представляющего некоторую часть уже определенного в системе типов типа.

`````typescript
type Person = {
    firstName: string;
    lastName: string;

    age: number;
};

/**
 * Тип PersonName представляет только часть типа Person
 * 
 * type PersonName = {
 *  firstName: string;
 *  lastName: string;
 * }
 */
type PersonName = Omit<Person, 'age'>; // исключение признаков связанных с полем age из типа Person

`````
