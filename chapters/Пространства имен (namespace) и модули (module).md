## namespace и module - предназначение
________________

Начать рассмотрение такой темы, как пространства имен и модули, стоит с уточнение области применения обсуждаемых механизмов *TypeScript*. Механизмы, речь о которых пойдет далее, не предназначены для масштабных приложений, которые должны строится при помощи модулей и загружаться с применением модульных загрузчиков. Такие механизмы, как пространство имен и модули, в настоящее время, можно использовать при написании небольших скриптов, внедряемых непосредственно в *html* страницу при помощи тега `<script></script>`, либо в приложениях, которые по различным причинам, не могут использовать модульную систему.


## namespace - определение
________________

Пространство имен это конструкция, которая объявляется при помощи ключевого слова namespace и которая представляется в коде обычным *JavaScript* объектом. 

~~~~~typescript
namespace Identifier {

}
~~~~~

Механизм пространства имен является решением такой проблемы, как коллизии в глобальном пространстве имен, дошедшего до наших дней из тех времён, когда ещё в спецификации *JavaScript* не было определено такое понятие, как модули. Простыми словами пространства имен, это совокупность обычной глобальной переменной и безымянного функционального выражения.

Конструкции объявленные внутри пространства имен, инкапсулируются в безымянном функциональном выражении. Те части, которые должны быть видны снаружи, записываются в объект, ссылка на который была сохранена в глобальную переменную, которая при вызове была передана в качестве аргумента. Что записывать в глобальный объект, а что нет, компилятору указывают при помощи ключевого слова `export`, о котором речь пойдет совсем скоро.


*До компиляции*

~~~~~typescript
namespace NamespaceIdentifier {
  class PrivateClassIdentifier {}
  export class PublicClassIdentifier{}
}
~~~~~

*После компиляции*

~~~~~typescript
var NamespaceIdentifier;

(function (NamespaceIdentifier) {

  class PrivateClassIdentifier {
  }
  class PublicClassIdentifier {
  }

  NamespaceIdentifier.PublicClassIdentifier = PublicClassIdentifier;

})(NamespaceIdentifier || (NamespaceIdentifier = {}));
~~~~~

Также стоит добавить, что namespace является глобальным объявлением. Это дословно означает, что пространство имен, объявленное, как глобальное, не нуждается в экспортировании и импортировании, а ссылка на него доступна в любой точке программы.


## модули (export\import) определение
________________

Модули в *TypeScript* определяются с помощью ключевых слов `export` \ `import` и представляют механизм определения связей между модулями. Данный механизм являются внутренним для *TypeScript* и не имеет никакого отношения к модулям `es2015`. В остальном они идентичны `es2015` модулям, за исключением определения модуля по умолчанию (*export default*).

~~~~~typescript
// Файл declaration.ts


export type T1 = {};

export class T2 {}
export class T3 {}

export interface IT4 {}

export function f1(){}

export const v1 = 'v1';
export let v2 = 'v2';
export var v3 = 'v3';
~~~~~

~~~~~typescript
Файл index.ts


import {T2} from './declaration';
import * as declaratios from './declaration';
~~~~~

Кроме того, объявить, с использованием ключевого слова export, можно даже namespace, что ограничит его глобальную область видимости и его использование, в других  файлах, становится возможным, только после явного импортирования.

~~~~~typescript
// Файл declaration.ts


export namespace Bird {
  export class Raven {}
  export class Owl {}
}
~~~~~

~~~~~typescript
// Файл index.ts


import {Bird} from "./declaration";

const birdAll = [ Bird.Raven, Bird.Owl ];
~~~~~

Стоит отметить что экспортировать namespace стоит только тогда, когда он объявлен в теле другого namespace и тем не менее до него  нужно добрать из программы.

~~~~~typescript
namespace NS1 {
  export namespace NS2 {
      export class T1 {}
  }
}
~~~~~


## Конфигурирование проекта
________________

Для закрепления пройденного будет не лишним взглянуть на  конфигурирование минимального проекта.

*Структура проекта*

~~~~~typescript
* /
   * dest
   * src
      * Raven.ts
      * Owl.ts
      * index.ts
   * package.json
   * tsconfig.json
~~~~~

~~~~~typescript
// Файл Raven.ts


namespace Bird {
  export class Owl {}
}
~~~~~

~~~~~typescript
// Файл Owl.ts


namespace Bird {
  export class Raven {}
}
~~~~~

~~~~~typescript
// Файл index.ts


namespace App {
  const {Raven, Owl} = Bird;

  const birdAll = [Raven, Owl];

  birdAll.forEach( item => console.log(item) );
}
~~~~~

~~~~~typescript
// Файл tsconfig.json


{
  "compilerOptions": {
      "target": "es2015",
      "module": "none",
      "rootDir": "./src",
      "outFile": "./dest/index.bundle.js"
  }
}
~~~~~

~~~~~typescript
// Файл package.json


{
"name": "namespaces-and-modules",
"version": "1.0.0",
"description": "training project",
"main": "index.js",
"scripts": {
  "start": "./node_modules/.bin/tsc --watch",
  "build": "./node_modules/.bin/tsc"
},
"author": "",
"license": "ISC",
"devDependencies": {
  "typescript": "^2.5.2"
}
}
~~~~~

Осталось собрать проект выполнив в консоли команду

~~~~~typescript
npm run build
~~~~~

Если все было сделано правильно, то в директории *dest* должен появится файл *index.bundle.js*

~~~~~typescript
// Файл index.bundle.js


var Bird;

(function (Bird) {
  class Owl {
  }
  Bird.Owl = Owl;
})(Bird || (Bird = {}));

var Bird;

(function (Bird) {
  class Raven {
  }
  Bird.Raven = Raven;
})(Bird || (Bird = {}));

var App;

(function (App) {
  const { Raven, Owl } = Bird;
  const birdAll = [Raven, Owl];
  birdAll.forEach(item => console.log(item));
})(App || (App = {}));
~~~~~
