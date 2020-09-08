## Реализация новой формы ре-экспорта

Зачастую появляется необходимость ре-экспорта содержимого модуля, как единую точку входа.

`````ts
// @file utils.ts

export const sum = (a:number, b:number) => a + b;
export const mul = (a:number, b:number) => a * b;
`````

`````ts
// MathUtils.ts

import * as MathUtils from "./utils";
export {MathUtils};
`````

Подобное встречается столь часто, что в спецификацию _ECMAScript 2020_ была включена новая форма ре-экспорта всего содержимого.

`````ts
export * as Identificator from "path";
`````

Благодаря разработчикам языка _TypeScript_ такой вид ре-экспорта стал доступен начиная с версии `3.8`. Предыдущий пример с применением нового синтаксиса мог бы сократится до одной строчки.

`````ts
// MathUtils.ts

export * as MathUtils from "./utils";
`````


