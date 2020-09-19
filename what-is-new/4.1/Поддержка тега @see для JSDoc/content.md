## Поддержка тега @see для JSDoc

Теперь _JSDoc_ поддерживает тег `@see` упрощающий работу с кодом за счет возможности перехода к определению (_go-to-definition_).

`````ts
// @filename: animals.ts
export class Animal { }
export class Fish { }
export class Bird { }

// @filename: index.ts
import * as animals from './animals';

/**
 * @see animals.Bird
 */
function related() { }
`````
