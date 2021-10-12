## Совмещение import type с обычным import

До недавнего времени импорт конструкций и импорт только типов, независимо от того, что они определены в одном файле, приходилось разбивать на несколько этапов.

`````ts
// constructions.ts

export class A {
    a = ``;
}
export class B {
    b = 5;
}


// index.ts

import {A} from "./components.ts"; // импорт класса CustomComponet из файла components.ts
// импорт только типа Componet из того же файла
import type {B} from "./components.ts";
`````

Начиная с текущей версии импорт конструкции и импорт только типов можно осуществлять в одной операции.


`````ts
import {type A, B} from "./constructions.ts";
`````

К тому же, подобный импорт можно совмещать с импортом по умолчанию, но при условии, что будет импортированна конструкция, а не тип.


`````ts
// constructions.ts

export class A {
    a = ``;
}
export class B {
    b = 5;
}
export default class C {
    c = true;
}


// index.ts

import C, {type A, B} from "./constructions.ts"; // Ok
// import type C, {type A, B} from "./constructions.ts"; // Error

`````

