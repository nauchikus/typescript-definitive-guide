## Ужесточение правил вывода типов

В некоторых случаях выводу типов приходится выбирать наиболее уместный _шаблон_ своих действий.

`````ts
declare function mergeRandom<T> ( x: T, y: T ): T;

/**
 * function mergeRandom<[number, boolean, string]>(x: [number, boolean, string], y: [number, boolean, string]):
 * [number, boolean, string]
 *
 * a: number, b: boolean, c: string
 */
let [a, b, c] = mergeRandom([100, true, `🙂`], [500, false, `🤩`]);

let a0 = [100, true, `🙂`]; // let a0: (string | number | boolean)[]
let a1 = [500, false, `🤩`]; // let a1: (string | number | boolean)[]

/**
 * function mergeRandom<(string | number | boolean)[]>(x: (string | number | boolean)[], y: (string | number |
 * boolean)[]): (string | number | boolean)[]
 *
 * d: string | number | boolean, e: string | number | boolean, f: string | number | boolean
 */
let [d, e, f] = mergeRandom( a0, a1 );
`````

Пример выше иллюстрирует, как выводу типов, помимо выбора между принадлежностью к кортежу или массиву, в стлучае с кортежем приходится прибегать к анализу его элементов. В случае неопределенности, как в примере ниже, вывод типов рассматривал элементы, как принадлежащие к типу `any`, что понижало типобезопасность программ. 

`````ts
declare function f<T> ( p?: T ): T;

/**
 * (раньше) Ok
 * [a: any, b: any, c: any] = function f<[any, any, any]>(p?: [any, any, any] | undefined): [any, any, any]
 * 
 * (теперь) Error -> Type 'unknown' must have a '[Symbol.iterator]()' method that returns an iterator.(2488)
 * 
 * function f<unknown>(p?: unknown): unknown
 */
let [a, b, c] = f(); 
`````

Начиная с текущей версии, вывод типов больше не прибегает к алгоритмам выбора наиболее подходящего паттерна, а вместо этого выбрасывает при подобных сценариях ошибку, принуждающую к более типобезопасному явному указанию типов.

`````ts
declare function f<T> ( p?: T ): T;

let [a, b, c] = f<[number, boolean, string]>(); // a: number, b: boolean, c: string
`````
