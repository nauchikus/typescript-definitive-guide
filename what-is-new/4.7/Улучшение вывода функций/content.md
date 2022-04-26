## Улучшение вывода функций

В текущей версии были внесены значительные доработки вывода функциональных типов внутри объектов и массивов.

`````ts
type Param<T> = {
    a(p: number): T;
    b(p: T): void;
};
declare function f<T>(param: Param<T>): void;

f({ a: () => 100, b: x => x.toFixed() }); // Ok
f({ a: n => n, b: (x: number) => x.toFixed() }); // Ok
f({ a: n => n, b: x => x.toFixed() });  // Было Error, стало Ok
f({ a: function() { return 100 }, b: x => x.toFixed() });  // Было Error, стало Ok
f({ a: function() { return 100 }, b: x => x.toFixed() });  // Было Error, стало Ok
`````

