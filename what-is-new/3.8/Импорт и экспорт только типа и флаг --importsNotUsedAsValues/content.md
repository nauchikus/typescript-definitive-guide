Механизм уточнения импорта и экспорта (`import\export`) выступает в качестве указаний компилятору что данную конструкцию следует воспринимать исключительно как тип. Форма уточняющего импорта и экспорта включает в себя ключевое слово `type` идущее следом за ключевым словом `import` либо `export`.

`````typescript
import type {Type} from "./type";
export type {Type};
`````

Уточнению могут подвергаться только конструкции расцениваемые исключительно как типы (`interface`, `type alias` и `class`). 

`````typescript
// @file types.ts

export class ClassType {}
export interface IInterfaceType{}
export type AliasType = {};
`````

`````typescript
// @file index.ts

import type {ClassType, IInterfaceType, AliasType} from "./types";
export type {ClassType, IInterfaceType, AliasType};
`````

Значения к которым можно отнести как экземпляры объектов, так и функции (`function expression` и `function declaration`) уточнятся, как в отдельности так и в одной форме с типами, не могут.

`````typescript
// @file types.ts

export class ClassType {}
export interface IInterfaceType{}
export type AliasType = {};


export const o = {};

export const fe = ()=>{};
export function fd(){}
`````

`````typescript
// @file index.ts

// import type {o, fe, fd} from "./types"; // Error! Type-only import must reference a type, but 'o' is a value.ts(1361)
// import type {o, fe, fd, ClassType, IInterfaceType, AliasType} from "./types"; // Error! Type-only import must reference a type, but 'o' is a value.ts(1361)
import {o, fe, fd} from "./types"; // Ok!


// export type {o, fe, fd}; // Error! Type-only export must reference a type, but 'o' is a value.ts(1361)
// export type {o, fe, fd, ClassType, IInterfaceType, AliasType} from "./types"; // Error! Type-only export must reference a type, but 'o' is a value.ts(1361)
export {o, fe, fd}; // Ok!
`````

Кроме того уточненая форма импорта и экспорта не может одновременно содержать импорт\экспорт поумолчанию и не поумолчанию.

`````typescript
// @file types.ts

export default class DefaultExportType {}
export class ExportType {}
`````

`````typescript
// @file index.ts

/**
 * Error!
 * All imports in import declaration are unused.ts(6192)
 * A type-only import can specify a default import or named bindings, but not both.ts(1363)
 */
import type DefaultType, {ExportType} from "./types";
`````

Также не будет лишним оговорить, что классы экспортированные как уточненные само собой разумеется не могут участвовать в механизме наследования.

`````typescript
// @file Base.ts

export class Base {}
`````

`````typescript
// @file index.ts

import type {Base} from "./Base";

class Derivied extends Base{}; // 'Base' only refers to a type, but is being used as a value here.ts(2693)

`````

В дополнение механизму уточнения формы импорта\экспорта был добавлен флаг `--importsNotUsedAsValues` ожидаемый одно из трех значений. Но прежде чем познакомится с каждым предлагаю поглубже погрузится в природу возникновения необходимости в данном механизме.

Большинство разработчиков используя в повседневной работе механизм импорта\экспорта даже не подозревают что с ним связанно немало различных трудностей, которые возникают из-за механизмов призванных оптимизировать код. Но для начала рассмотрим несколько простых вводных примеров.

Представьте ситуацию при которой один модуль импортирует необходимый ему тип представленный такой конструкцией как `interface`.

`````typescript
// @file IPerson.ts

export interface IPerson {
    name: string;
}
`````

`````typescript

// @file action.ts

import {IPerson} from "./IPerson";

function action(person:IPerson){
    // ...
}
`````

Поскольку интерфейс является конструкцией присущей исключительно _TypeScript_ то не удивительно что после компиляции от неё не останется и следа.

`````javascript
// после компиляции @file action.js

function action(person){
    // ...
}
`````

Теперь представьте что один модуль импортирует конструкцию представленную классом, который задействован в логике уже знакомой нам функции `action()`.

`````typescript
// @file IPerson.ts

export interface IPerson {
    name: string;
}

export class Person {
    constructor(readonly name:string){}

    toString(){
        return `[person ${this.name}]`;
    }
}

`````

`````typescript
// @file action.ts

import {IPerson} from "./IPerson";
import {Person} from "./Person";


function action(person:IPerson){
    new Person(person);
}

`````

`````javascript
// после компиляции @file action.js

import {Person} from "./Person";


function action(person){
    new Person(person);
}

`````

В этом случае класс `Person` был включон в скомпилированный файл поскольку необходим для правильного выполнения программы.

А теперь представьте ситуацию когда класс `Person` задействован в том же модуле `action.ts`, но исключительно в качестве типа. Другими словами он не задействован в логике работы модуля.

`````typescript
// @file Person.ts

export class Person {
    constructor(readonly name:string){}

    toString(){
        return `[person ${this.name}]`;
    }
}
`````

`````typescript

// @file action.ts

import {Person} from "./Person";


function action(person:Person){
    //...
}
`````

Подумайте, что должна включать в себя итоговая сборка? Если вы выбрали вариант идентичный первому то вы совершенно правы! Поскольку класс `Person` используется в качестве типа то нет смысла включать его в результатирующий файл.

`````javascript
// после компиляции @file action.js


function action(person){
    //...
}
`````

Подобное поведение кажется логичным и возможно благодаря механизму называемому _import elision_. Этот механизм определяет что конструкции которые теоретически могут быть включены в скомпилированный модуль требуются ему исключительно в качестве типа. И как уже можно было догадаться именно с этим механизмом и связанны моменты мешающие оптимизизаци кода. Тут-то и вступает в дело механизм уточнения формы импорта\экспорта.

Механизм уточнения способен разрешить возникающие перед _import-elision_ трудности при ре-экспорте модулей предотвращению которых способствует установленный в значение `true` флаг `--isolatedModules`.

`````typescript
// @file module.ts
export interface IActionParams{}
export function action(params:IActionParams){}
`````

`````typescript
// @file re-export.ts

import {IActionParams, action} from "./module";

/**
 * [Error! ts <3.8] > Cannot re-export a type when the '--isolatedModules' flag is provided.ts(1205)
 * 
 * [Error! ts >=3.8] > Re-exporting a type when the '--isolatedModules' flag is provided requires using 'export type'.ts(1205)
 */
export {IActionParams, action};


/**
 * 
 * Поскольку компиляторы как TypeScript так и Babel
 * в контексте файла неспособны определить является
 * ли конструкция IActionParams допустимой для JavaScript
 * существует вероятность возникновения ошибки. Простыми
 * словами механизмы обоих компиляторов не знаю нужно ли
 * удалять следы связанные с IActionParams из скомпилированного
 * .js кода или нет. Именно поэтому был добавлен флаг 
 * --isolatedModules который предупреждает о опасной ситуации.
 */

 
`````

Рассмотренный выше случай можно разрешить с помощью явного уточнения формы импорта\экспорта.

`````typescript
// @file re-export.ts

import {IActionParams, action} from "./module";

/**
 * Явно указываем что IActionParams это тип.
 */
export type {IActionParams};
export {action};

`````


Специально введенный и ранее упомянутый флаг `--importsNotUsedAsValues`, как уже было сказанно, ожидает одно из трех возможных на данный момент значений - `remove`, `preserve` или `error`.

Значение `remove` активирует или другими словами оставляет поведение реализуемое до версии `3.8`.
Значения `preserve` способно разрешить проблему возникающую при экспорте так называемых сайд-эффектов.

`````typescript
// @file module-with-side-effects.ts

function incrementVisitCounterLocalStorage(){
    // увеличиваем счетчик посещаемости в localStorage
}

export interface IDataFromModuleWithSideEffects{};

incrementVisitCounterLocalStorage(); // ожидается что вызов произойдет в момент подключения модуля
`````

`````typescript
// @file index.ts

import {IDataFromModuleWithSideEffects} from "./module";

let data:IDataFromModuleWithSideEffects = {};

/**
 * Несмотря на то что модуль module.ts
 * задействован в коде, его содержимое
 * не будет включено в скомпилированную
 * программу, поскольку компилятор исключает
 * импорты конструкций не учавствующих в её логике.
 * Таким образом функция incrementVisitCounterLocalStorage()
 * никогда не будет вызвана, а значит программа не будет
 * работать корректно! 
 */

`````
`````javascript
// после компиляции @file index.js

let data = {};

/**
 * В итоге программе ничего не
 * известно о модуле module-with-side-effects.ts
 */
`````

Решение из ситуации описанной выше заключается в повторном указании импорта всего модуля. Но не всем такое решение кажется очевидным.

`````typescript
import {IDataFromModuleWithSideEffects} from "./module-with-side-effects";
import "./module-with-side-effects"; // импорт всего модуля

let data:IDataFromModuleWithSideEffects = {};
`````

`````javascript
// после компиляции @file index.js

import "./module-with-side-effects.js";

let data = {};

/**
 * Теперь программа выполнится так как и ожидалось.
 * То есть модуль module-with-side-effects.ts включен
 * в её состав.
 */
`````

Поэтому прежде всего начиная с версии `3.8` сама `ide` укажит на возможность уточнения импорта исключительно типов, что в свою очередь должно подтолкнуть на размышление о удалении импорта при компиляции.

`````typescript
import {IDataFromModuleWithSideEffects} from "./module-with-side-effects"; //This import may be converted to a type-only import.ts(1372)
`````

Кроме того флаг `preserve` в отсутствие уточнения поможет избавится от повторного указания импорта. Простыми словами значение `preserve` указывает компилятору импортировать все модули полностью.


`````typescript
// @file module-with-side-effects.ts

function incrementVisitCounterLocalStorage(){
    // увеличиваем счетчик посещаемости в localStorage
}

export interface IDataFromModuleWithSideEffects{};

incrementVisitCounterLocalStorage(); 
`````
`````typescript
// @file module-without-side-effects.ts

export interface IDataFromModuleWithoutSideEffects{};
`````
`````typescript
// @file index.ts


// Без уточнения
import {IDataFromModuleWithSideEffects} from "./module-with-side-effects";
import {IDataFromModuleWithoutSideEffects} from "./module-without-side-effects";


let dataFromModuleWithSideEffects:IDataFromModuleWithSideEffects = {};
let dataFromModuleWithoutSideEffects:IDataFromModuleWithoutSideEffects = {};
`````

`````javascript
// после компиляции @file index.js

import "./module-with-side-effects";
import "./module-without-side-effects";

let dataFromModuleWithSideEffects = {};
let dataFromModuleWithoutSideEffects = {};

/**
 * 
 * Несмотря на то что импортировались
 * исключительно конструкции-типы, модули
 * были импортированны полностью.
 */
`````

В случае уточнения поведение при компиляции останется прежднем. То есть в импорты в скомпилированный файл включены не будут.
 
`````typescript
// @file index.ts


// С уточнением
import type {IDataFromModuleWithSideEffects} from "./module-with-side-effects";
import type {IDataFromModuleWithoutSideEffects} from "./module-without-side-effects";


let dataFromModuleWithSideEffects:IDataFromModuleWithSideEffects = {};
let dataFromModuleWithoutSideEffects:IDataFromModuleWithoutSideEffects = {};
`````

`````javascript
// после компиляции @file index.js

let dataFromModuleWithSideEffects = {};
let dataFromModuleWithoutSideEffects = {};

/**
 * 
 * Импорты отсутствуют.
 */
`````

Если же флагу `--importsNotUsedAsValues` задано значение `error`, то при импортировании типов без явного уточнения будет считаться ошибочным поведением.

`````typescript
// @file index.ts

/**
 * 
 * [0][1] Error > This import is never used as a value and must use 'import type' because the 'importsNotUsedAsValues' is set to 'error'.ts(1371)
 */

import {IDataFromModuleWithSideEffects} from "./module-with-side-effects";
import {IDataFromModuleWithoutSideEffects} from "./module-without-side-effects";


let dataFromModuleWithSideEffects:IDataFromModuleWithSideEffects = {};
let dataFromModuleWithoutSideEffects:IDataFromModuleWithoutSideEffects = {};
`````

Скомпилированный код выше после устранения ошибок, то есть после уточнения, включать в себя импорты не будет.

В заключение стоит заметить что в теории уточнение такой конструкции как класс способно ускорить компиляцию посколько избавляет компилятор от ненужных проверок на вовлечении его в логику работы модуля. Ну и кроме того, уточнения формы импорта\экспорта, это ещё один способ сделать код более информативным.


Также стоит обратить особое внимание, что на данный момент _конструкции-значения__ уточненные как __конструкции-типы_ не могут участвовать как в механизме наследования при объявлении декларации (`declare`), так и при запросе типа (`typeof`). Но эти недоработки планируется устранить в следующих версиях.

`````typescript
// @file ClassType.ts

export class ClassType {}
`````

`````typescript
// @file index.ts

import type {ClassType} from "./ClassType";

/**
 * [0][1] Error! > 'ClassType' only refers to a type, but is being used as a value here.ts(2693)
 */

declare class T extends ClassType{} // [0]

let prop: typeof ClassType; // [1]

`````
