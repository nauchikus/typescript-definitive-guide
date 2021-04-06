## Улучшение работы шаблонного строкового типа

Шаблонный строковой литеральный тип позволяет опреелять новый тип за счет описания шаблона, который может использовать другие типы.

`````ts
type SeaFish = `shark` | `barracuda`;
type RiverFish = `pike` | `pike perch`;
type FishSoup = `${SeaFish | RiverFish} fish`;

// type FishSoup = "shark fish" | "barracuda fish" | "pike fish" | "pike perch fish"
`````

Кроме того, при установлении совместимости компилятор в состоянии определить совместимость обычных типов, как например `number` или `boolean` с их литеральными представителями.

`````ts
declare let v0: `${number}-${number}-${number}`;
declare let v1: `1-2-3`;

v0 = v1; // Ok
`````

Тем не менее, компилятору не под силу вычисления на основе типа значения.

`````ts
/**
 * [*] Error -> Type 'string' is not assignable to type '`Hello ${string}`'.ts(2322)
 * Хотя компилятор знает тип значения param, он не может расспознать совместимость
 * типа возвращаемого значения с типом указанным в сигнатере функции.
 */
function f(param: string): `Hello ${string}` {
    return `Hello ${param}`; // [*]
}
`````

Начиная с текущей версии было добавлено поведение, способное сопоставить тип определяемый значением со строковым шаблонным литеральным типом.

`````ts
/**
 * >=v4.3
 * 
 * [*] Ok!
 */
function f(param: string): `Hello ${string}` {
    return `Hello ${param}`; // [*]
}
`````