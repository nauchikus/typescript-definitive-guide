## [КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ] Тип object в JSDoc при активном флаге --noImplicitAny больше не расценивается как any

До текущей версии тип `object` указанный в _JSDoc_ при активном флаге `--noImplicitAny` рассценивался _TypeScript_ как тип `any`. Нчиная с текщей версии поведение типа `object` синхронизированно с поведением реализуемым _TypeScript_.

`````javascript
/**
 * @param p0 {Object}
 * @param p1 {object}
 */
export function f(p0, p1){}
`````

`````typescript
// --noImplicitAny: true

import {f} from "./jsdocs";

/**
 * [<  3.8] f(p0: Object, p1: any): void
 * [>= 3.8] f(p0: Object, p1: object): void
 */
`````
