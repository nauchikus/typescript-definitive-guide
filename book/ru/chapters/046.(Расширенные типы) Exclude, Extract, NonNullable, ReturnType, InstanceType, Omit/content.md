# Exclude, Extract, NonNullable, ReturnType, InstanceType, Omit

Чтобы сэкономить время разработчиков, в систему типов _TypeScript_ были включены несколько часто требующихся условных типов, каждый из которых будут подробно рассмотрен в этой главе.


## Exclude<T, U> (исключает из T признаки присущие U)

В результате разрешения условный тип `Exclude<T, U>` будет представлять разницу типа `T` относительно типа `U`. Параметры типа `T` и `U` могут быть представлены как единичным типом, так и множеством `union`.

`````ts
// @filename: lib.d.ts

type Exclude<T, U> = T extends U ? never : T;
`````

Простыми словами из типа `T` будут исключены признаки (ключи) присущие также и типу `U`.

`````ts
let v0: Exclude<number|string, number|boolean>; // let v0: string
let v1: Exclude<number|string, boolean|object>; // let v1: string|number
let v2: Exclude<"a" | "b", "a" | "c">; // let v2: "b"
`````

В случае, если оба аргумента типа принадлежат к одному и тому же типу данных, `Exclude<T, U>` будет представлен типом `never`.

`````ts
let v4: Exclude<number|string, number|string>; // let v4: never
`````

Его реальную пользу лучше всего продемонстрировать на реализации функции, которая на входе получает два разных объекта, а на выходе возвращает новый объект, состоящий из членов присутствующих в первом объекте, но отсутствующих во втором. Аналог функции `difference` из широко известной библиотеки _lodash_.

`````ts
declare function difference<T, U>(a: T, b: U): Pick<T, Exclude<keyof T, keyof U>>


interface IA { a: number; b: string; }
interface IB { a: number; c: boolean; }


let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };


interface IDifference { b: string; }


let v0: IDifference = difference(a, b); // Ok
let v1: IA = difference(a, b); // Error -> Property 'a' is missing in type 'Pick<IA, "b">' but required in type 'IA'.
let v2: IB = difference(a, b); // Error -> Type 'Pick ' is missing the following properties from type 'IB': a, c
`````


## Extract<T, U> (общие для двух типов признаки)

В результате разрешения условный тип `Extract<T, U>` будет представлять пересечение типа `T` относительно типа `U`. Оба параметра типа могут быть представлены как обычным типом, так `union`.

`````ts
// @filename: lib.d.ts

type Extract<T, U> = T extends U ? T : never;
`````

Простыми словами, после разрешения `Extract<T, U>` будет принадлежать к типу определяемого признаками (ключами) присущих обоим типам. То есть, тип `Extract<T, U>` является противоположностью типа `Exclude<T, U>`.

`````ts
let v0 :Extract<number|string, number|string>; // let v0: string | number
let v1 :Extract<number|string, number|boolean>; // let v1: number
let v2 :Extract<"a" | "b", "a" | "c">; // let v2: "a"
`````

В случае, когда общие признаки отсутствуют, тип `Extract<T, U>` будет представлять тип `never`.

`````ts
let v3 :Extract<number|string, boolean|object>; // let v3: never
`````

Условный тип `Extract<T, U>` стоит рассмотреть на примере реализации функции принимающей два объекта и возвращающей новый объект, состоящий из членов первого объекта, которые также присутствуют и во втором объекте.

`````ts
declare function intersection<T, U>(a: T, b: U): Pick<T, Extract<keyof T, keyof U>>


interface IA { a: number; b: string; }
interface IB { a: number; c: boolean; }


let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };


interface IIntersection { a: number; }


let v0: IIntersection = intersection(a, b); // Ok
let v1: IA = intersection(a, b); // Error -> Property 'b' is missing in type 'Pick<IA, "a">' but required in type 'IA'.
let v2: IB = intersection(a, b); // Error -> Property 'c' is missing in type 'Pick<IA, "a">' but required in type 'IB'.
`````


## NonNullable<T> (удаляет типы null и undefined)

Условный тип `NonNullable<T>` служит для исключения из типа признаков типов `null` и `undefined`. Единственный параметр типа может принадлежать как к обычному типу, так и множеству определяемого тип `union`.

`````ts
// @filename: lib.d.ts

type NonNullable<T> = T extends null | undefined ? never : T;
`````

Простыми словами, данный тип удаляет из аннотации типа такие типы, как `null` и `undefined`.

`````ts
let v0: NonNullable<string | number | null>; // let v0: string | number
let v1: NonNullable<string | undefined | null>; // let v1: string
let v2: NonNullable<string | number | undefined | null>; // let v2: string | number
`````

В случае, когда тип, выступающий в роли единственного аргумента типа, принадлежит только к типам `null` и\или `undefined`, `NonNullable<T>` представляет тип `never`.

`````ts
let v3: NonNullable<undefined | null>; // let v3: never
`````


## ReturnType<T> (получить тип значения возвращаемого функцией)

Условный тип `ReturnType<T>` служит для установления возвращаемого из функции типа. В качестве параметра типа должен обязательно выступать _функциональный тип_.

`````ts
// @filename: lib.d.ts

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
`````

На практике очень часто требуется получить тип к которому принадлежит значение возвращаемое из функции. Единственное на, что стоит обратить внимание, что в случаях, когда тип возвращаемого из функции значения является параметром типа, у которого отсутствуют хоть какие-то признаки, то тип `ReturnType<T>` будет представлен пустым объектным типом `{}`.

`````ts
let v0: ReturnType<() => void>; // let v0: void
let v1: ReturnType<() => number | string>; // let v1: string|number
let v2: ReturnType<<T>() => T>; // let v2: {}
let v3: ReturnType<<T extends U, U extends string[]>() => T>; // let v3: string[]
let v4: ReturnType<any>; // let v4: any
let v5: ReturnType<never>; // let v5: never
let v6: ReturnType<Function>; // Error
let v7: ReturnType<number>; // Error
`````


## InstanceType<T> (получить через тип класса тип его экземпляра)

Условный тип `InstanceType<T>` предназначен для получения типа экземпляра на основе типа представляющего класс. Параметр типа `T` должен обязательно принадлежать к _типу класса_.

`````ts
// @filename: lib.d.ts

type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
`````

В большинстве случаев идентификатор класса задействован в приложении в качестве типа его экземпляра.

`````ts
class Animal {
  move(): void {}
}

/**
 * Тип Animal представляет объект класса,
 *, то есть его экземпляр полученный при 
 * помощи оператора new.
 */
function f(animal: Animal){
  type Param = typeof Animal;

  // здесь Param представляет экземпляр типа Animal
}
`````

Но сложные приложения часто требуют динамического создания своих компонентов. В таких случаях фабричные функции работают не с экземплярами классов, а непосредственно с самими классами. 

Стоит напомнить, что в _JavaScript_ классы, это всего-лишь _синтаксический сахар_ над старой, доброй _функцией конструктором_. И как известно объект функции конструктора представляет объект класса содержащего ссылку на прототип, который и представляет экземпляр. Другими словами, в _TypeScript_ идентификатор класса указанный в аннотации типа, представляет описание прототипа. Чтобы получить тип самого класса, необходимо выполнить над идентификатором класса _запрос типа_.

`````ts
class Animal {
  move(): void {}
}

type Instance = Animal;
type Class = typeof Animal;

type MoveFromInstance = Instance["move"]; // Ok ->() => void
type MoveFromClass = Class["move"]; // Error -> Property 'move' does not exist on type 'typeof Animal'.

`````

Таким образом, грамотно вычислить тип экземпляра в фабричной функции можно при помощи типа `InstanceType<T>`.

`````ts
class Animal {
  move(): void {}
}

function factory(Class: typeof Animal){
  type Instance = InstanceType<Class>;
  
  let instance: Instance = new Class(); // Ok -> let instance: Animal
}
`````

Хотя можно прибегнуть и к менее декларативному способу к запросу типа свойства класса `prototype`.

`````ts
function factory(Class: typeof Animal){
  type Instance = Class["prototype"];
  
  let instance: Instance = new Class(); // Ok -> let instance: Animal
}
`````

И последнее о чем стоит упомянуть, что результат получение типа непосредственно через `any` и `never` будет представлен ими же. Остальные случаи приведут к возникновению ошибки.

`````ts
class Animal {}

let v0: InstanceType<any>; // let v0: any
let v1: InstanceType<never>; // let v1: never
let v2: InstanceType<number>; // Error
`````

## Parameters<T> (получить тип размеченного кортежа описывающий параметры функционального типа)

Расширенный тип `Parameters<T>` предназначен для получения типов указанных в аннотации параметров функции. В качестве аргумента типа ожидается _функциональный тип_, на основе которого будет получен размеченный кортеж описывающий параметры этого функционального типа.

`````ts
type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
`````

`Parameters<T>` возвращает типы параметров в виде кортежа.

`````ts
function f<T>(p0: T, p1: number, p2: string, p3?: boolean, p4: object = {}) {
  
}

/**
 * type FunctionParams = [p0: unknown, p1: number, p2: string, p3?: boolean, p4?: object]
 */
type FunctionParams = Parameters<typeof f>;
`````


## ConstructorParameters<T> (получить через тип класса размеченный кортеж описывающий параметры его конструктора)

Расширенный тип `ConstructorParameters<T>` предназначен для получения типов указанных в аннотации параметров конструктора.

`````ts
type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any ? P : never;
`````

В качестве единственного параметра типа `ConstructorParameters<T>` ожидает тип самого класса, на основе конструктора которого будет получен размеченный кортеж описывающий параметры этого конструктора.

`````ts
class Class<T> {
    constructor(p0: T, p1: number, p2: string, p3?: boolean, p4: object = {}) {}
}

/**
 * type ClassParams = [p0: unknown, p1: number, p2: string, p3?: boolean, p4?: object]
 */
type ClassParams = ConstructorParameters<typeof Class>;
`````

## Omit<T, K> (исключить из T признаки ассоциированными с ключами перечисленных множеством K)

Расширенный тип `Omit<T, K>`предназначен для определения нового типа путем исключения заданных признаков из существующего тип.

`````ts
// lib.d.ts

type Omit<T, K extends string | number | symbol> = { 
    [P in Exclude<keyof T, K>]: T[P];
}
`````

В качестве первого аргумента типа тип `Omit<T, K>` ожидает тип данных, из которого будут исключены признаки, связанные с ключами, переданными в качестве второго аргумента типа.

Простыми словами, к помощи `Omit<T, K>` следует прибегать в случаях необходимости определения типа, представляющего некоторую часть уже существующего типа.

`````ts
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
