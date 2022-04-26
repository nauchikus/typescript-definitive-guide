## Анализ потока управления для вычисляемых свойств

Предыдущие версии _TypeScript_ прекрасно справлялись с анализом вычисляемых членов объектов идентификаторы которых определялись непосредственно в квадратных скобках `{[id]: type}`.

`````ts
let o = {
    [`hundred`]: Math.round(Math.random()) ? 100 : "100"
};

if (typeof o[`hundred`] === "string") {
    o[`hundred`].toUpperCase(); // Ok
}else{
    o[`hundred`].toFixed(); // Ok
}
`````

Но это не работало при внешнем определении идентификатора.

`````ts
const key = `hundred`;

let o = {
    [key]: Math.round(Math.random()) ? 100 : "100"
};

if (typeof o[key] === "string") {
    o[key].toUpperCase(); // Error -> Property 'toUpperCase' does not exist on type 'string | number'.
}else{
    o[key].toFixed(); // Error -> Property 'toFixed' does not exist on type 'string | number'.
}
`````

Начиная с текущей версии алгоритм анализа был доработан.

`````ts
const key = `hundred`;

let o = {
    [key]: Math.round(Math.random()) ? 100 : "100"
};

if (typeof o[key] === "string") {
    o[key].toUpperCase(); // Ok
}else{
    o[key].toFixed(); // Ok
}
`````

Кроме этого, новые правила сделали возможным выявление забытых инициализаций для вычисляемых членов.

`````ts
/**
 * [*]
 * До v4.7 (Ok) на этапе компиляции, но (Error) во время выполнения
 * Начиная с v4.7 (Error) -> Property '["field"]' has no initializer and is not definitely assigned in the constructor.ts(2564)
 */

class T {
    ["field"]: string; // [*]

    constructor() {
        // Забыли инициализировать индексное поле name
    }
}
`````


