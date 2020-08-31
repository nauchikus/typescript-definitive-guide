## await высшего уровня

Поскольку современную разработку на языке _JavaScript_ сложно представить без таких конструкций как `Promise`, которые выглядят намного привлекательней при использовании совместно с таким механизмом активирующимся при помощи ключевого слова `await`. Но правилами установлено, что ключевое слово `await` должно указываться исключительно в функциях объявленных с использованием ключевого слова `async`. Это в свою очередь, в некоторых случаях вынуждало разработчиков объявлять нетребующиеся им функции.

`````typescript
/**
 * Применение ключевого слова await
 * требует объявления функции в которой
 * появляется потребность исключительно
 * из-за необходимости в ключевом слове async
 */

const run = async () => {
    let hello = await Promise.resolve(`Hello`);
    let world = await Promise.resolve(`World`);
    
    
    return `${hello} ${world}!`
};

run().then(greeting=> console.log(greeting));
`````

Создатели спецификации _ECMScript_ обратили на это внимание и добавили в неё такой механизм, как `await` высшего уровня (_top-level await_). `await` высшего уровня позволяет избавится от нетребующейся функции.

`````typescript
// @file index.ts

/**
 * Внимание, псевдо код!
 * Данный код находящийся
 * в файле index.ts не считается
 * модулем. Объяснение дается далее
 * по содержанию. 
 */

let hello = await Promise.resolve(`Hello`);
let world = await Promise.resolve(`World`);

let greeting = `${hello} ${world}!`;

console.log(greeting);
`````

Единственное стоит всегда помнить, что высшим уровнем считается модуль, а файл в _TypeScript_ считается модулем тогда, когда включает в себя хотя бы одно упоминания импорта или экспорта. Поэтому не исключено что в особых случаях появится необходимость приведения к модулю.

`````typescript
// @file gtreeting-utils.ts

export const toMessage = (hello:string,world:string) => 
    `${hello} ${world}!`;
`````

`````typescript
// пример с import

import * as GreetingUtils from "./greeting-utils";

let hello = await Promise.resolve(`Hello`);
let world = await Promise.resolve(`World`);

let greeting = GreetingUtils.toMessage(hello, world);

console.log(greeting);
`````

`````typescript
// пример с пустым экспортом

let hello = await Promise.resolve(`Hello`);
let world = await Promise.resolve(`World`);

let greeting = `${hello} ${world}!`;

console.log(greeting);

export {};
`````

Кроме того поддержка `await` высшего уровня становится доступной при компиляции в версию начиная с `es2017`, а в качестве модулей выбрано `esnext` или `system`.
