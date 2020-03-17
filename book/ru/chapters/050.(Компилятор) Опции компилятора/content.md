# Опции компилятора
![Chapter Cover](./images/chapter-cover.png)
## strict


`--strict` - активирует все флаги сопутствующие строгости проверки типов. на данный момент флаг `strict` активирует следующие опции компилятора - `--strictNullChecks`, `--noImplicitAny`, `--noImplicitThis`, `--alwaysStrict`, `--strictFunctionTypes`, `--strictPropertyInitialization`, `--strictBindCallApply`. Несмотря на то, что флаг `strict` активирует сразу все указанные флаги, при желании конкретные флаги можно исключать 

~~~~~typescript
{
  "compilerOptions": {
      "strict": false,
      "strictNullChecks": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## suppressExcessPropertyErrors


`--suppressExcessPropertyErrors` - если данная опция активна, то компилятор перестает проверять литералы объекта на излишние  члены.

~~~~~typescript
{
  "compilerOptions": {
      "suppressExcessPropertyErrors": false
  }
}
~~~~~
	
**type**: `boolean`
**default**: `false`
**values**: `true`, `false`
	

*Пример*

~~~~~typescript
interface T1 {
  f1: number;
}

let v1: T1 = {f1: 0, f2: ''}; // suppressExcessPropertyErrors === false ? Error : Ok
~~~~~

## suppressImplicitAnyIndexErrors


`--suppressImplicitAnyIndexErrors` - при активной опции `--noImplicitAny` подавляет ошибки связанные с добавлением динамических свойств в объекты у которых отсутствует индексное определение.

~~~~~typescript
{
  "compilerOptions": {
      "suppressImplicitAnyIndexErrors": false
  }
}
~~~~~
	
**type**: `boolean`
**default**: `false`
**values**: `true`, `false`
	

*Пример для неактивной опции*

~~~~~typescript
// tsconfig.json

{
  "compilerOptions": {
      "noImplicitAny": true,
      "suppressImplicitAnyIndexErrors": false
  }
}
~~~~~

~~~~~typescript
// index.ts

interface Member {

}
interface IndexMember {
  [key: string]: any;
}


let memberObject: Member = {};
memberObject['name'] = 'object'; // Error

let indexMemeberObject: IndexMember = {};
indexMemeberObject['name'] = 'object'; // Ok
~~~~~
	
*Пример для активной опции*

~~~~~typescript
// tsconfig.json

{
  "compilerOptions": {
      "noImplicitAny": true,
      "suppressImplicitAnyIndexErrors": false
  }
}
~~~~~

~~~~~typescript
// index.ts

interface Member {

}
interface IndexMember {
  [key: string]: any;
}


let memberObject: Member = {};
memberObject['name'] = 'object'; // Ok

let indexMemeberObject: IndexMember = {};
indexMemeberObject['name'] = 'object'; // Ok
~~~~~


## noImplicitAny


`--noImplicitAny` - при активной опции выводит ошибку, если вывод типов установил принадлежность типа члена к типу `any`.

~~~~~typescript
{
  "compilerOptions": {
      "noImplicitAny": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`
	

*Пример с неактивной опцией*

~~~~~typescript
let v1; // Ok

function f1(p1) { // Ok
  let v1; // Ok

  return p1;
}

type T2 = {f1}; // Ok

interface IT1 {
  f1; // Ok
}

class T1 {
  public f1; // Ok
}
~~~~~

*Пример с активной опцией*

~~~~~typescript
let v1; // Ok

function f1(p1) { // Parameter 'p1' implicitly has an 'any' type.
  let v1; // Ok

  return p1;
}

type T2 = {f1}; // Member 'f1' implicitly has an 'any' type

interface IT1 {
  f1; // Member 'f1' implicitly has an 'any' type
}

class T1 {
  public f1; // Member 'f1' implicitly has an 'any' type
}
~~~~~



## checkJs 



`--checkJs` - данная опция говорит компилятору, что код, который находится в файлах с расширением *.js*, также нужно проверять на ошибки. К тому же можно исключить определенные файлы из проверки, добавив им строку `// @ts-nocheck`. Или наоборот, можно попросить компилятор проверять только помеченные как `// @ts-check` файлы, без активации опции `--checkJs`. К тому же можно игнорировать ошибки на конкретных строках, указав `// @ts-ignore: error message` предыдущей строке.

~~~~~typescript
{
  "compilerOptions": {
      "checkJs": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`

Кроме того, при активной опции `--checkJS`, компилятору, с помощью аннотации `/** @type {...} */`, можно указывать типы прямо в файлах с расширением *.js*. 

При использовании *JavaScript* в *TypeScript* коде, нарушается типобезопасность программы. 

~~~~~typescript
// file sum.js

export function sum(a ,b){
  return a + b;
}
~~~~~

~~~~~typescript
// file index.ts

import {sum} from "./sum.js";

let n = sum('5', 5); // len n: any, кроме того результаты выполнения функции будет неверным
~~~~~

Но это можно исправить с помощью специальной аннотации, которая располагается в *JavaScript* коде.

~~~~~typescript
// file sum.js

/** @type {(a:number,b:number) => number)} */
export function sum( a ,b){
  return a + b;
}
~~~~~

~~~~~typescript
// file index.ts

import {sum} from "./sum.js";

let n0 = sum('5', 5); // Error
let n1 = sum(5, 5); // Ok, let n1: number
~~~~~

## JSX


`--jsx` - данная опция указывает компилятору, какое расширение указывать *.tsx* файлам после компиляции. Все дело в том, что у реакта существует два вида приложений, одни создаются для вэб платформы, другие для мобильных платформ. Кроме того, файлы для вэб платформы на входе должны иметь расширение *.jsx*, в то время как для мобильной платформы, *.js*. Поэтому компилятору нужно указывать, в какой именно формат преобразовывать файлы с расширением *.tsx*. 

При указании `“react”` в качестве значения опции `--jsx`, компилятор преобразует *.tsx* в *.jsx* файлы, которые затем компилируются в *.js*. Если в качестве значения будет указано `“preserve”`, то компилятор преобразует *.tsx* в *.jsx*, которые сохраняют *XML* подобный синтаксис. Если указать значение `“react-native”`, то компилятор преобразует файлы *.tsx* в требующийся *.js*.

~~~~~typescript
{
  "compilerOptions": {
      "jsx": "react" | "react-native" | "preserve"
  }
}
~~~~~

**type**: `string`
**default**: `preserve`
**values**: `react`, `react-native`, `preserve`


## jsxFactory



`--jsxFactory` - данная опция позволяет при трансляции файлов *.tsx* в *.js* переопределить фабрику рендера.

~~~~~typescript
// default

// from file .tsx

import * as React from "react";

<h1>Ok</h1>
~~~~~

~~~~~typescript
// to file .js

"use strict";
exports.__esModule = true;
var React = require("react");
React.createElement("h1", null, "Ok");
~~~~~

Установив желаемое значение текущей опции появляется возможность переопределить функцию рендера *React* на собственную. 

~~~~~typescript
// set options jsxFactory to dom

// from file .tsx  

import dom from "dom";

<h1>Ok</h1>
~~~~~

~~~~~typescript
// set options jsxFactory to dom

// to file .js

"use strict";
/** @jsx renderer */
exports.__esModule = true;
var dom = require("dom");
dom["default"]("h1", null, "Ok");
~~~~~	

Кроме того, подобное поведение можно добиться при помощи нотации `/** @jsx identifier */`, которая указывается в начале файла, а вместо *identifier* вписывается имя функции рендера.

~~~~~typescript
// from file .tsx

/** @jsx renderer */

import renderer from "renderer";

<h1>Ok</h1>
~~~~~

~~~~~typescript
// to file .js

"use strict";
/** @jsx renderer */
exports.__esModule = true;
var renderer = require("renderer");
renderer["default"]("h1", null, "Ok");
~~~~~

Кроме того, аннотация `/** jsx identifier */` позволяет переопределить функцию рендера переопределенную с помощью опции `--jsxFactory`.

~~~~~typescript
{
  "compilerOptions": {
      "jsxFactory": "React.createElement"
  }
}
~~~~~

**type**: `string`
**default**: `React.createElement`
**values**: `"*"`


## target (t)


`--target` или `-t` - указывает компилятору, с какой версией спецификации должен быть совместим генерируемый *JavaScript* код. По умолчанию установлена совместимость с `ES3`. Кроме того можно указывать совместимость с `ES5`, `ES2015` (она же `ES6`), `ES2016`, `ES2017`, `ESNext`. Стоит добавить, что `ESNext` равноценно *latest version*

~~~~~typescript
{
  "compilerOptions": {
        "target": "es3"
  }
}
~~~~~

**type**: `string`
**default**: `es3`
**values**: `es3`, `es5`, `es6` / `es2015`, `es2016`, `es2017`, `esnext`

## extends


`extends` - с помощью этого свойства можно расширять конфигурацию *tsconfig.json*.

~~~~~typescript
// tsconfig.base.json

{
  "compilerOptions": {
      "target": "es2015"
  }
}
~~~~~

~~~~~typescript
// tsconfig.json

{
  "extends": "./tsconfig.base.json"
}
~~~~~

**type**: `string`
**default**: `""`
**values**: `*`

Кроме того, при использовании механизма расширения (`extends`), поиск файла конфигурации `taconfig.json` может осуществляться по пакетам (`packages`) `NodeJS` модулей, находящихся в директории `node_modules`. 

~~~~~typescript
// tsconfig.json

{
  "extends": "some-npm-module" 
}

// or

{
  "extends": "some-npm-module/some-tsconfig.json" 
}
~~~~~

Алгоритм разрешения аналогичен алгоритму поиска модулей самого `NodeJS`. Проще говоря, если путь, указанный в качестве значения атрибута `extends` не будет найден в директории `node_modules`  находящейся в текущей директории, то поиск продолжится в директории `node_modules` вверх по дереву. Но есть одна особенность,которая заключается в том, что при разрешении пути, компилятор `tsc`, зайдя в директорию `node_modules`, сначала  проверяет `package.json` на наличие атрибута `tsconfig`, которому в качестве значения указывают путь до конфигурационного файла `TypeScript`. Если атрибут `tsconfig` найден, то конфигурация на которую он ссылается будет установлена в качестве расширяемой. Если `package.json` не содержит атрибут `tsconfig`, то в качестве расширяемого конфигурационного файла будет выбран файл `tsconfig.json` находящийся в корне директории. Если в корне директории файла `tsconfig.json` найдено не будет, то поиск продолжится вверх по дереву.

~~~~~typescript
/project
    /node_modules
        /some-module
            package.json // with attr "tsconfig": "tsconfig.custom.json"
            tsconfig.custom.json
            tsconfig.json
    tsconfig.json // "extends": "some-module"

// в этом случае в качестве расширяемого конфигурационного файла будет выбран файл находящийся по пути /node_modules/some-module/tsconfig.custom.json
~~~~~
~~~~~typescript
/project
    /node_modules
        /some-module
            package.json // without attr "tsconfig"
            tsconfig.custom.json
            tsconfig.json
    tsconfig.json // "extends": "some-module"

// в этом случае в качестве расширяемого конфигурационного файла будет выбран файл находящийся по пути /node_modules/some-module/tsconfig.json
~~~~~
~~~~~typescript
/project
    /node_modules
        /some-module
            package.json // without attr  "tsconfig"
            tsconfig.custom.json
            tsconfig.json
    tsconfig.json // "extends": "some-module/tsconfig.custom.json"

// в этом случае в качестве расширяемого конфигурационного файла будет вбран файл находящийся по пути /node_modules/some-module/tsconfig.custom.json
~~~~~


## alwaysStrict



`--alwaysStrict` - данная опция говорит компилятору, что рассматривать и генерировать код нужно с учетом строгого режима `“use strict”`.

~~~~~typescript
{
  "compilerOptions": {
      "alwaysStrict": false
  }
}
~~~~~

	
**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## strictNullChecks


`--strictNullChecks` - активировав эту опцию, компилятор не позволяет указывать в качестве значения типы `Null` и `Undefined`, если они не были указаны в аннотации.

~~~~~typescript
{
  "compilerOptions": {
      "strictNullChecks": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## stripInternal


`--stripInternal` - когда данная опция активна, компилятор не создает деклараций *.d.ts* для файлов, помеченных, как `/** @internal */`

~~~~~typescript
{
  "compilerOptions": {
      "stripInternal": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`
	

## noImplicitThis


`--noImplicitThis` - в активном состоянии запрещает использование `this` в местах не предусмотренных контекстом.

~~~~~typescript
{
  "compilerOptions": {
      "noImplicitThis": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


*Пример с неактивной опцией*

~~~~~typescript
function f1(){
  this.name = 'newname'; // Ok -> context T1 window
}
function f2(this: T1){
  this.name = 'newname'; // Ok -> context T1
}

this.name = 'newname'; // Error -> context window

class T1 {
  public name: string;

  public m1(name: string): void {
      this.name = name; // Ok -> context T1
  }
}
~~~~~


*Пример с активной опцией*

~~~~~typescript
function f1(){
  this.name = 'newname'; // Error -> context T1 window
}
function f2(this: T1){
  this.name = 'newname'; // Ok -> context T1
}

this.name = 'newname'; // Error -> context window

class T1 {
  public name: string;

  public m1(name: string): void {
      this.name = name; // Ok -> context T1
  }
}
~~~~~


## noImplicitUseStrict


`--noImplicitUseStrict` - при активной опции будут выводится ошибки в случаях, когда в поток компиляции попадут файлы содержащие `‘use strict’`. Кроме того скомпилированные файлы также не будут содержать указание `‘use strict’`.

~~~~~typescript
{
  "compilerOptions": {
      "noImplicitUseStrict": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## baseUrl



`--baseUrl` - указывает базовый путь, относительно которого будет производится поиск модулей.

~~~~~typescript
{
  "compilerOptions": {
      "baseUrl": ""
  }
}
~~~~~
	
**type**: `string`
**default**: `""`
**values**: `base path`

~~~~~typescript
// m1 module ./node_modules/m1

// tsconfig.jsson  "baseUrl": "./node_modules"

// index.ts

import M1 from 'm1';
~~~~~


## paths



`--paths` - с помощью этой опции создаются псевдонимы для используемых в программе модулей.

~~~~~typescript
{
  "compilerOptions": {
      "paths": {
          "name": [ “path/to/lib” ]
      }
  }
}
~~~~~

**type**: `object`
**default**: `null`
**values**: `{[key]: *}`


*Пример*

~~~~~typescript
// tsconfig.json
{
  "compilerOptions": {
      "paths": {
          "jquery": ["node_modules/jquery/dest/jquery.min.js"]
      }
  }
}

// or

// tsconfig.json
{
  "compilerOptions": {
      "baseUrl": "./node_modules",
      "paths": {
          "jquery": ["jquery/dest/jquery.min.js"]
      }
  }
}

import jquery from 'jquery';

// or 

// tsconfig.json
{
  "compilerOptions": {
      "baseUrl": "./node_modules",
      "paths": {
          "jQ": ["jquery/dest/jquery.min.js"]
      }
  }
}

import jquery from 'jQ';
~~~~~


## rootDir



`--rootDir` - с помощью этой опции можно ограничить область выборки файлов для компиляции. В качестве значения выступает строка-путь до конкретной директории-файла.

~~~~~typescript
{
  "compilerOptions": {
      "rootDir": ""
  }
}
~~~~~


**type**: `string`
**default**: `""`
**values**: `path to dir with .ts files`


## rootDirs


`--rootDirs` - с помощью этой опции можно ограничить область выборки файлов для компиляции. В качестве значения принимается массив с путями до директории-файлов.

~~~~~typescript
{
  "compilerOptions": {
      "rootDirs": [
         
      ]
  }
}
~~~~~

	
**type**: `array[ ]`
**default**: `null`
**values**: `path to dir with .ts files`

## traceResolution


`--traceResolution` - в случае активной опции, при компиляции будет выводиться информация о собираемых модулях. 


~~~~~typescript
{
  "compilerOptions": {
      "traceResolution": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## lib



`--lib` - с помощью этой опции можно управлять конструкциями, которые включены в ту или иную версию *ES*.


~~~~~typescript
{
  "compilerOptions": {
      "lib": [
         
      ]
  }
}
~~~~~

**type**: `string[ ]`
**default**: for es5 `[dom, es5, ScriptHost]`, for es6 `[dom, es6, dom.Iterable, ScriptHost]`
**values**: `dom`, `webworker`, `es5`, `es6` / `es2015`, `es2015.core`, `es2015.collection`, `es2015.iterable`, ,`es2015.promise` ,`es2015.proxy` ,`es2015.reflect` ,`es2015.generator` ,`es2015.symbol` ,`es2015.symbol.wellknown` ,`es2016` ,`es2016.array.include` ,`es2017` ,`es2017.object` ,`es2017.sharedmemory` ,`scripthost`


## noLib



`--noLib` - не использует декларацию *lib.d.ts* по умолчанию.

~~~~~typescript
{
  "compilerOptions": {
      "noLib": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## noResolve



`--noResolve` - данная опция говорит компилятору не компилировать файлы, которые не были указаны в командной строке.

~~~~~typescript
// terminal

tsc index.ts T1 --noResolve
~~~~~

~~~~~typescript
// index.ts

import T1 from './T1'; // Ok
import T2 from './T2'; // Error
~~~~~


## noStrictGenericChecks


`--noStrictGenericChecks` - отключает строгую проверку параметров типа для функциональных типов.

~~~~~typescript
{
  "compilerOptions": {
      "noStrictGenericChecks": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## preserveConstEnums



`--preserveConstEnums` - говорит компилятору не удалять из исходного кода перечисления (`enum`) объявленные, как `const`.

~~~~~typescript
{
  "compilerOptions": {
      "preserveConstEnums": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


*Пример с неактивной опцией*

~~~~~typescript
// .ts

const enum Animal {
  Bird = 'bird',
  Fish = 'fish'
}

let greeting: string = `Hello ${ Animal.Bird }!`;
~~~~~

~~~~~typescript
// .js

let greeting = `Hello ${"bird" /* Bird */}!`;
~~~~~


*Пример с активной опцией*

~~~~~typescript
// .ts

const enum Animal {
  Bird = 'bird',
  Fish = 'fish'
}

let greeting: string = `Hello ${ Animal.Bird }!`;
~~~~~

~~~~~typescript
// .js

var Animal;
(function (Animal) {
  Animal["Bird"] = "bird";
  Animal["Fish"] = "fish";
})(Animal || (Animal = {}));
let greeting = `Hello ${"bird" /* Bird */}!`;
~~~~~


## removeComments



`--removeComments` - удаляет комментария из сгенерированного *.js*.

~~~~~typescript
{
  "compilerOptions": {
      "removeComments": false
  }
}
~~~~~


**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## noUnusedLocals


`--noUnusedLocals` - активная опция заставляет компилятор выводить сообщения о неиспользуемых элементах кода. Простыми словами, если в коде что-то объявлено, но не используется, будет возникать ошибка.

~~~~~typescript
{
  "compilerOptions": {
      "noUnusedLocals": false
  }
}
~~~~~


**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


*Пример*

~~~~~typescript
import T1 from "./T1"; // Error

let v0: number; // Warning
let v1: number = 0; // Warning

function f /** Warning */ (  ){
  let lv0: number; // Warning
  let lv1: string = 0; // Error

  f();
}

class C /**Error */ {
  private f0: number; // Warning
  private f1: number; // Warning
  private f2: number = 0; // Warning

  constructor(  ) {
      this.f0 = 0;

      let c: C = new C(); // Warning
  }

  private m0 /** Warning */ (){} // Warning
  private m1 /** Warning */ (){  // Warning
      this.m1();
  }
}
~~~~~


## noUnusedParameters


`--noUnusedParameters` - данная опция заставляет компилятор выводить ошибки, если в коде будут найдены функции, чьи параметры не используются, за исключением параметров, чей идентификаторы начинаются с нижней черты  (`_prop`).

~~~~~typescript
{
  "compilerOptions": {
      "noUnusedParameters": false
  }
}
~~~~~


**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


*Пример*

~~~~~typescript
function f ( p0: number /** Warning */,
          p1: number /** Warning */,
          p2: number = 0 /** Warning */ ){
  p1 = 0;
}

class C {
  constructor( p0: number /** Warning */,
      p1: number /** Warning */,
      p2: number = 0 /** Warning */ ) {}

  private m ( p0: number /** Warning */,
      p1: number /** Warning */,
      p2: number = 0 /** Warning */ ){
          p1 = 0;
      }
}
~~~~~


## skipLibCheck



`--skipLibCheck` - при активной опции, компилятор перестает проверять типы в файлах библиотеках с расширением *.d.ts*, что экономит время, но кроме того, может привести к редким ошибкам связанных с типами.

~~~~~typescript
{
  "compilerOptions": {
      "skipLibCheck": false
  }
}
~~~~~


**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## declarationDir


`--declarationDir` - указывает директорию откуда будут подключаться или в которую будут создаваться файлы декларации `.d.ts`.

~~~~~typescript
{
  "compilerOptions": {
      "declarationDir": ""
  }
}
~~~~~


**type**: `string`
**default**: `""`
**values**: `path to dir with .d.ts`


## types


`--types` - декларации, которые размещены в */node_modules/@types/* и чьи идентификаторы перечислены в массиве, будут доступны глобально. В случае указания пустого массива, глобальный доступ к декларациям будет запрещен. К декларациям, которые запрещены глобально, можно получить доступ только путем импортирования модуля описываемого декларацией.


~~~~~typescript
{
  "compilerOptions": {
      "types": [ "node", "express", "rxjs" ]
  }
}
~~~~~


**type**: `string[ ]`
**default**: null
**values**: `lib identifier`


> Важно - все примеры ниже производились после установки декларации. `npm i -D @types/react`


*Пример с отключенной опцией*

~~~~~typescript
// tsconfig.json

{
  "compilerOptions": {

  }
}
~~~~~

~~~~~typescript
// index.ts

class T1 extends React.Component {} // Ok -> global


import {Component} from 'react';

class T2 extends Component {} // Ok -> import
~~~~~

*Пример с пустым массивом*

~~~~~typescript
// tsconfig.json

{
  "compilerOptions": {
      "types": [
         
      ]
  }
}
~~~~~

~~~~~typescript
// index.ts

class T1 extends React.Component {} // Error -> global


import {Component} from 'react';

class T2 extends Component {} // Ok -> import
~~~~~

*Пример с установленным значением*

~~~~~typescript
// tsconfig.json

{
  "compilerOptions": {
      "types": [ "react" ]
  }
}
~~~~~

~~~~~typescript
// index.ts

class T1 extends React.Component {} // Ok -> global


import {Component} from 'react';

class T2 extends Component {} // Ok -> import
~~~~~


## typeRoots



`--typeRoots` - ожидает массив путей до директорий с декларациями.


~~~~~typescript
{
  "compilerOptions": {
      "typeRoots": [ "./types" ]
  }
}
~~~~~

**type**: `string[ ]`
**default**: `null`
**values**: `path to .d.ts`


## allowUnusedLabels


`--allowUnusedLabels` - в случае, если флаг `--allowUnusedLabels` не активен, при выявлении неиспользуемых `label` возникают ошибки.


~~~~~typescript
{
  "compilerOptions": {
      "allowUnusedLabels": false
  }
}
~~~~~	


**type**: `boolean`
**default**: `false`
**values**: `true`, `false`



## noImplicitReturns


`--noImplicitReturns` - функции объявленные имеющие возвращаемый тип отличный от типа `void`, фактически могут не возвращать значение явно. Другими словами, чтобы выполнить условие в теле функции должен присутствовать лишь оператор return. Но при активной текущей опции, функции будут обязаны возвращать значение явно.

~~~~~typescript
{
  "compilerOptions": {
      "noImplicitReturns": false
  }
}
~~~~~


**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


*Пример*

~~~~~typescript
// noImplicitReturns === false

function f(value: number): number{
 if (value) {
   return; // Ok
 }

 // Ok
}
~~~~~

~~~~~typescript
// noImplicitReturns === true

function f(value: number): number{
 if (value) {
   return; // Erorr
 }
}
~~~~~

~~~~~typescript
// noImplicitReturns === true

function f(value: number): number{
 if (value) {
   return value; // Ok
 }

 // Error
}
~~~~~

~~~~~typescript
// noImplicitReturns === true

function f(value: number): number{
 if (value) {
   return value; // Ok
 }

 return; // Error
}
~~~~~

~~~~~typescript
// noImplicitReturns === true

function f(value: number): number{
 if (value) {
   return value; // Ok
 }

 return 0; // Ok
}
~~~~~


## noFallthroughCasesInSwitch



`--noFallthroughCasesInSwitch` - при активной опции, в случае, если блок кода case имеет код, при этом не имеет выхода из него (`break` или `return`), возникнет ошибка.

~~~~~typescript
{
  "compilerOptions": {
      "noFallthroughCasesInSwitch": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


*Пример*

~~~~~typescript
function isAdmin( value: string ){
  switch (value) {
      case 'user': // If noFallthroughCasesInSwitch === false then Ok
          if( nodeenv.mode === 'dev' ){
              console.log( `...` );
          }
      case 'moderator':
          return false;
      case 'admin':
          return true;
  }
}
function isAdmin( value: string ){
  switch (value) {
      case 'user': // If noFallthroughCasesInSwitch === true then Error
          if( nodeenv.mode === 'dev' ){
              console.log( `...` );
          }
      case 'moderator':
          return false;
      case 'admin':
          return true;
  }
}
~~~~~


## outFile



`--outFile` - компилятор, при условии, что в качестве модулей указанно `amd` или `system`, будет сохранять все скомпилированные модули, в один файл, указанный в качестве значения опции.

~~~~~typescript
{
  "compilerOptions": {
      "outFile": ""
  }
}
~~~~~


**type**: `string`
**default**: `""`
**values**: `path to bundle`


*до компиляции*

~~~~~typescript
// T1.ts

export default class T1 {}

// T2.ts

import T1 from './T1';

export default class T2 extends T1 {}

// index.ts

import T2 from './T2';

const v1: T2 = new T2();
~~~~~


*после компиляции*

~~~~~typescript
define("T1", ["require", "exports"], function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  class T1 {
  }
  exports.default = T1;
});
define("T2", ["require", "exports", "T1"], function (require, exports, T1_1) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  class T2 extends T1_1.default {
  }
  exports.default = T2;
});
define("index", ["require", "exports", "T2"], function (require, exports, T2_1) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  const v1 = new T2_1.default();
});
~~~~~


## allowSyntheticDefaultImports


`--allowSyntheticDefaultImports` - позволяет предотвращать ошибки, которые возникают во время сборки, по причине несовместимости *SystemJS* и *CommonJS*. Дело в том, что в *ES6* синтаксисе, есть возможность экспорта по умолчанию (`export default`), после компиляции которого, *CommonJS* испытывает трудности, так как не знает, что такое `default`. Чаще всего проблема возникает в тех случая, когда разработка ведется с применением одних модулей, а подключаемые библиотеки используют другие.

~~~~~typescript
{
  "compilerOptions": {
      "allowSyntheticDefaultImports": false
  }
}
~~~~~


**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## allowUnreachableCode


`--allowUnreachableCode` - если значение данной опции выставлено в `true`, то при обнаружении кода, который никогда не будет вызван, будет выводится сообщение об ошибке.

~~~~~typescript
{
  "compilerOptions": {
      "allowUnreachableCode": false
  }
}
~~~~~


**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


*Пример*

~~~~~typescript
function f1(value: number): void {
  throw new Error('');

  console.log(''); // Error - Unreachable code detected
}

function f2() {
  return
  {
      value: '' // Error - Unreachable code detected
  }
}
~~~~~


## allowJs
_______________

`--allowJs` - в случае, когда код, одна часть которого написана на *TypeScript*, а другая на *JavaScript*, требуется собрать в общий файл, достаточно активировать текущую опцию.

~~~~~typescript
{
  "compilerOptions": {
      "allowJs": false
  }
}
~~~~~


**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


*Пример*

~~~~~typescript
// sun.js

export default function sum(a, b){
  return a + b;
}

// index.ts

import sum from './sum';

let result: number = sum(1, 1);
~~~~~


## reactNamespace



`--reactNamespace` - позволяет установить фабрику рендера *.jsx* синтаксиса.

~~~~~typescript
{
  "compilerOptions": {
      "reactNamespace": ""
  }
}
~~~~~


**type**: `string`
**default**: `""`
**values**: `"*"`


*Пример*

~~~~~typescript
// index.tsx

import {jsxFactory} from "jsxFactory";

const div = <div>Hello JSX!</div>;

// after compile

"use strict";
var jsxFactory_1 = require("jsxFactory");
var div = jsxFactory_1.jsxFactory.createElement("div", null, "Hello JSX!");
~~~~~


## pretty


`--pretty` - раскрашивает в разные цвета сообщения выводимые в консоль, делая их более понятными.

~~~~~typescript
{
  "compilerOptions": {
      "pretty": true
  }
}
~~~~~

**type**: `boolean`
**default**: `true`
**values**: `true`, `false`


## moduleResolution


`--moduleResolution` - позволяет конкретизировать поведение модулей. 

~~~~~typescript
{
  "compilerOptions": {
      "moduleResolution": "node"
  }
}
~~~~~


**type**: `string`
**default**: module === `AMD` | `System` | `ES6` ? `classic` : `node`
**values**: `classic`, `node`


## exclude


`exclude` - в обычной ситуации, под компиляцию, рекурсивно, попадают все файлы, которые включает в себя директория, содержащая *tsconfig.json*. Решением этой проблемы является свойство `exclude`, определенное в корне конфигурационного  файла. В качестве его значения выступает массив с ссылками на файлы или директории, которые следует исключить из компиляции.

~~~~~typescript
{
  "exclude": [

  ]
}
~~~~~


**type**: `string[ ]`
**default**: `null`
**values**: `path to file or dir`


## noEmitHelpers


`--noEmitHelpers` - после компиляции файлов с  расширением *.ts*, каждый скомпилированный файл *.js* (модуль), содержит, если в этом есть необходимость, код (проще говоря helpers), который помогает решить проблему совместимости версий *ES**. В большей степени, код (helpers), находящийся в разных файлах(модулях), идентичный. Простыми словами, helpers повторяются от файла к файлу. Компилятор вынужден добавлять повторяющийся код, чтобы гарантировать работу каждого модуля по отдельности. Но если модули собираются в одну общую сборку, активация текущего флага, укажет компилятору, что helpers нужно вынести в отдельный модуль, который будет доступен в тех частях кода, которые от него зависят. Это поможет избавиться от дублирования кода и сократит размер сборки.

~~~~~typescript
{
  "compilerOptions": {
      "noEmitHelpers": false
  }
}
~~~~~


**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## newLine


`--newLine` - по умолчанию, новая строка обозначается `\r\n` на *Windows* и `\r` на **nix* системах. Для переопределения поведения используется данная опция.

~~~~~typescript
{
  "compilerOptions": {
      "newLine": "LF"
  }
}
~~~~~

**type**: `string`
**default**: `platform specific`
**values**: `CRLF`, `LF`


## inlineSourceMap


`--inlineSourceMap` - активная опция приводит к тому, что source map записываются *inline* в *.js* файлы, а не выносятся в отдельные файлы *.map.js*.

~~~~~typescript
{
  "compilerOptions": {
      "inlineSourceMap": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## inlineSources


`--inlineSources` - при активной опции, источник *source map* включается в файл вместе c *source map*. Работает в паре с опцией `--inlineSourceMap`.

~~~~~typescript
{
  "compilerOptions": {
      "inlineSources": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## noEmitOnError


`--noEmitOnError` -  несмотря на ошибки в *TypeScript* коде, компилятор все равно генерирует *.js* файлы. Для того чтобы компилятор генерировал файлы  *.js* только в случае успешной компиляции, нужно активировать данную опцию.

~~~~~typescript
{
  "compilerOptions": {
      "noEmitOnError": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## noEmit


`--noEmit` - при активной  опции перестаёт выводится информация о компиляции.

~~~~~typescript
{
  "compilerOptions": {
      "noEmit": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## charset


`--charset` - устанавливает формат входных файлов.

~~~~~typescript
{
  "compilerOptions": {
      "charset": ""
  }
}
~~~~~

**type**: `string`
**default**: `utf8`
**values**: `*`


## diagnostics


`--diagnostics` - выводит диагностическую информацию.

~~~~~typescript
{
  "compilerOptions": {
      "diagnostics": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`

## declaration


`--declaration` - генерирует файлы декларации `.d.ts` из `.ts` файлов.

~~~~~typescript
{
  "compilerOptions": {
      "declaration": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## downlevelIteration


`--downlevelIteration` - при активной опции, становится возможно использовать итераторы при компиляции в версии ниже  `ES6`. Помимо самих итераторов, становятся доступны и нововведения (`for...of`, `Array Destructuring`, `Spread` и т.д.), которые построены с их использованием.

~~~~~typescript
{
  "compilerOptions": {
      "downlevelIteration": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## emitBOM


`--emitBOM` - Извлекает знак байта *UTF-8* (BOM) в начале выходных файлов.

~~~~~typescript
{
  "compilerOptions": {
      "emitBOM": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## emitDecoratorMetadata


`--emitDecoratorMetadata` - ...

~~~~~typescript
{
  "compilerOptions": {
      "emitDecoratorMetadata": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## forceConsistentCasingInFileNames


`--forceConsistentCasingInFileNames` - запрещает несогласованные ссылки на один и тот же файл.

~~~~~typescript
{
  "compilerOptions": {
      "forceConsistentCasingInFileNames": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


##  help (h)


`--help` или `-h` - выводит список доступных опций.

~~~~~typescript
tsc --help
tsc -h
~~~~~


## importHelpers


`--importHelpers` - импортирует таких помощников (helpers), как `__extends`, `__rest` и т.д.

~~~~~typescript
{
  "compilerOptions": {
      "importHelpers": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## isolatedModules


`--isolatedModules` - транслирует каждый файл, как отдельный модуль.

~~~~~typescript
{
  "compilerOptions": {
      "isolatedModules": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## listEmittedFiles


`--listEmittedFiles` - выводит список сгенерированных файлов.

~~~~~typescript
{
  "compilerOptions": {
      "listEmittedFiles": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## listFiles


`--listFiles` - выводит список файлов участвующих в компиляции.

~~~~~typescript
{
  "compilerOptions": {
      "listFiles": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## sourceRoot


`--sourceRoot` - в качестве значения принимает базовый путь до директории, в которой лежат исходники *.ts*, которые нужны для ассоциации с *source map*.

~~~~~typescript
{
  "compilerOptions": {
      "sourceRoot": ""
  }
}
~~~~~

**type**: `string`
**default**: `""`
**values**: `path to source  .ts dir`


## locale


`--locale` - локаль используемая при выводе сообщений (en-us).

~~~~~typescript
{
  "compilerOptions": {
      "locale": ""
  }
}
~~~~~

**type**: `string`
**default**: `platform specific`
**values**: ``

## mapRoot


`--mapRoot` - место откуда будут браться файлы *.map.js*.

~~~~~typescript
{
  "compilerOptions": {
      "mapRoot": ""
  }
}
~~~~~

**type**: `string`
**default**: `""`
**values**: ``


## maxNodeModuleJsDepth


`--maxNodeModuleJsDepth` - максимальная глубина поиска зависимостей в *node_modules* и загрузки файлов *.js*. Работает только с активной опцией `--allowJs`.

~~~~~typescript
{
  "compilerOptions": {
      "maxNodeModuleJsDepth": 0
  }
}
~~~~~

**type**: `number`
**default**: `0`
**values**: `0...n`


## project (p)


`--project` или `-p` - с помощью этого флага можно указать, как путь до директории, которая содержит `tsconfig.json`, так и на конкретный `tsconfig.json` файл.

~~~~~typescript
tsc --project
tsc -p ./configs/tsconfig.es6.json
~~~~~

**type**: `string`
**default**: ``
**values**: `path to tsconfig.json`


## init


`--init` - создает новый *tsconfig.json* со всеми доступными опциями, большинство из которых закомментировано, дабы создать оптимальную конфигурацию.

~~~~~typescript
tsc --init
~~~~~


## version (v)


`--version` или `-v` - выводит информацию о текущей версии *TypeScript*.

~~~~~typescript
tsc --version
tsc -v
~~~~~


## watch (w)


`--watch` или `-w` - запускает компилятор в режиме наблюдения за изменением файлов. При каждом изменении отслеживаемого  файла компиляция будет запущена автоматически.

~~~~~typescript
tsc --watch
tsc -w
~~~~~


## preserveSymlinks


`--preserveSymlinks` - текущая опция демонстрирует идентичное поведение  реализуемое в *NodeJS* с активным флагом `--preserve-symlinks`. При активной опции, символические ссылки на модели (modules) и пакеты (packages) разрешаются относительно файла символической ссылки, а не относительно пути, к которому разрешается символическая ссылка. Кроме того, поведение при активной текущей опции, противоположно поведению предоставляемому *Webpack* с помощью флага со со схожим по смыслу названием `resolve.symlinks`.

~~~~~typescript
{
  "compilerOptions": {
      "preserveSymlinks": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## strictFunctionTypes


`--strictFunctionTypes` - при активной опции, параметры функций начинают сравниваться по контрвариантным правилам, в то время, как при не активной опции, сравнения производятся по бивариантным правилам.

~~~~~typescript
{
  "compilerOptions": {
      "strictFunctionTypes": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## locale


`--locale` - позволяет указать один из заданных языков для вывода диагностических сообщений.

~~~~~typescript
{
  "compilerOptions": {
      "locale": en | cs | de | es | fr | it | ja | ko | pl | pt-BR | ru | tr | zh-CN | zh-TW |
  }
}
~~~~~



**type**: `string`
**default**: `platform specific`
**values**: English (US): `en`,Czech: `cs`,German: `de` ,Spanish: `es` ,French: `fr`,Italian: `it` ,Japanese: `ja` ,Korean: `ko`,Polish: `pl` ,Portuguese(Brazil): `pt-BR` ,Russian: `ru`,Turkish: `tr`,Simplified Chinese: `zh-CN` ,Traditional Chinese: `zh-TW`


## strinctPropertyInitialization


`--strictPropertyInitialization` - при активной опции, в случае когда в классе присутствуют поля не инициализированные в момент создания или в конструкторе, возникает ошибка. Более подробно данная тема раскрыта в главе [“Классы - Definite Assignment Assertion Modifier”]().

~~~~~typescript
{
  "compilerOptions": {
      "locale": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`

~~~~~typescript
class Identifier {
  public a: number = 0; // Ok, инициализация при объявлении
  public b: number; // Ok, инициализация в конструкторе
  public c: number | undefined; // Ok, явное указание принадлежности к типу Undefined
  public d: number; // Error, инициализация отсутствует
  constructor() {
      this.b = 0;
  }
}
~~~~~


## esModuleInterop


`--esModuleInterop` - с активной опцией, сгенерированный код, таких модулей, как *CommonJS*/*AMD*/*UMD*, больше походит на код сгенерированный *Babel*.

~~~~~typescript
{
  "compilerOptions": {
      "esModuleInterop": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## emitDeclarationsOnly


`--emitDeclarationsOnly` - данная опция указывает компилятору, что нужно генерировать только файлы декларации с расширением *.d.ts* и пропускать файлы с расширением *.js* и *.jsx*. Такое поведение может быть полезно, если код, помимо компилятора *TypeScript*, компилируется ещё и с помощью *Babel*.

~~~~~typescript
{
  "compilerOptions": {
      "emitDeclarationsOnly": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## resolveJsonModule


`--resolveJsonModule` - данная опция, при активной опции `--esModuleInterop`
и опции `--module` установленной в `commonjs`, позволяет в среде *NodeJS* полноценно взаимодействовать с *json*.

~~~~~typescript
{
  "compilerOptions": {
      "resolveJsonModule": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


~~~~~typescript
// file config.json

{
  "name": "",
  "age": 0
}

// file index.ts


import config from "./config.json";

config.name = 'name'; // Ok
config.name = 0; // Error


// tsconfig.json


{
   "compilerOptions": {
       "module": "commonjs",
       "resolveJsonModule": true,
       "esModuleInterop": true
   }
}
~~~~~


## declarationMap


`--declarationMap` - при совместном использовании с активной опцией `--declaration` заставляет компилятор, помимо *.d.ts*, также генерировать *.d.ts.map*, которые позволяют при переходе к определению (go to definition) направляют в файл *.ts*, а не *.d.ts*.

~~~~~typescript
{
  "compilerOptions": {
      "declarationMap": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## strictBindCallApply


`--strictBindCallApply` - текущий флаг, входящий в группировку `--strict`, активирует проверку вызова таких методов, как `apply`, `call` и `bind`. Это стало возможным благодаря добавлению двух новых типов `CallableFunction` и `NewableFunction`, которые содержат обобщенное описание методов `apply`, `call` и `bind`, как для обычных функций, так и для функций конструкторов соответственно.

~~~~~typescript
{
  "compilerOptions": {
      "strictBindCallApply": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


~~~~~typescript
function f(p0: number, p1: string){}


f.call(null, 0, ''); // ok
f.call(null, 0, 0); // error
f.call(null, 0); // error
f.call(null, 0, '', 0); // error

f.apply(null, [0, '']); // ok
f.apply(null, [0, 0]); // error
f.apply(null, [0]); // error
f.apply(null, [0, '', 0]); // error

f.bind(null, 0, ''); // ok
f.bind(null, 0, 0); // error
f.bind(null, 0); // ok
f.bind(null, 0, '', 0); // ok
~~~~~


## showConfig


`--showConfig` - при активном текущем флаге, компилятор `tsc` во время компиляции, выведет в консоль содержимое конфигурационного файла `tsconfig.json` разрешенного с учетом механизма расширения (`extends`), если таковой механизм имеет место быть. Этот функционал может быть очень полезным при отладке.

~~~~~typescript
{
  "compilerOptions": {
      "showConfig": false
  }
}
~~~~~

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


## build


`--build` - данный флаг указывает компилятору `tsc` что проект нужно собирать как проект использующий ссылки на другие проекты. Подробнее об этом можно узнать из главы [Сборка с использованием ссылок на проекты](). Также, флаг `--build` может использоваться в сочетании с специфичными только для него такими флагами как `--verbose`, `--dry`, `--clean`, `--force`, а также с флагом `--watch`.


**type**: `string`
**default**: ``
**values**: `paths to tsconfig.json or dir with tsconfig.json`


## verbose


`--verbose` - текущий флаг указывает компилятору выводить более подробный отчет при инкрементальной сборке проекта. Используется только совместно с флагом `--build`.


## dry


`--dry` - при указании текущего флага сборка будет выполнена без порождения выходных файлов. данный флаг полезно использовать совместно с флагом `--verbose`. Используется только совместно с флагом `--build`.


## clean


`--clean` - удаляет выходные файлы соответствующие заданным входным. Используется только совместно с флагом `--build`.


## force


`--force` - принудительно выполняет не инкрементальную сборку. Используется только совместно с флагом `--build`.



## incremental


`--incremental` - флаг, при активации которого, после первой компиляции проекта, в директории заданной атирибутом `outDir`, создается файл `.tsbuildinf`, который хранит метаинформацию об изменении файлов, что позволяет производить ускоренные инкрементальные сборки при всех послудующих запусках компилятора.

`````typescript
{
    "compilerOptions": {
        "incremental": true,
        "outDir": "./dest"
    }
}
`````

В случае, когда имя выходного задается с помощью флага `--outFile`, имя генерируемого файла `.tsbuildinf` будет включать в себя название выходного файла (`.client.tsbuildinf` для файла `client.js` и `.server.tsbuildinf` для `server.js` соответственно).

`**Примечание:**` создатели *TypeScript* предупреждают зарание, что генерируемые файлы `.tsbuildinf` не предназначены для использования сторонними библиотеками, так как их определение, от версии к версии, не будет обладать совместимость.

Кроме того, с помощью флага `--tsBuildInfoFile` можно задать место сохранения файла `.tsbuildinf`.

`````typescript
{
    "compilerOptions": {
        "incremental": true,
        "tsBuildInfoFile": "./buildinfo",
        "outDir": "./dest"
    }
}
`````

## tsBuildInfoFile


`--tsBuildInfoFile` - флаг с помощью которого указывается местосохранения файла `.tsbuildinf` генерирующегося при активной опции `--incremental` и служущий для хранения метаинформации призванной ускорить последуюзщие сборки.


`````typescript
{
    "compilerOptions": {
        "incremental": true,
        "tsBuildInfoFile": "./buildinfo",
    }
}
`````

## allowUmdGlobalAccess


`--allowUmdGlobalAccess` - при активном текущем флаге становится возможным обращение к глобальным определениям из модулей.


`````typescript
{
    "compilerOptions": {
        "allowUmdGlobalAccess": false,
    }
}
`````

**type**: `boolean`
**default**: `false`
**values**: `true`, `false`


`````typescript
// allowUmdGlobalAccess === false

import * as Rx from 'rxjs';

const ref = React.createRef(); // Error, обращение к глобальным переменным в модулях недопустимо
`````

`````typescript
// allowUmdGlobalAccess === true

import * as Rx from 'rxjs';

const ref = React.createRef(); // Ok, доступ к глобальному определению из модуля
`````
