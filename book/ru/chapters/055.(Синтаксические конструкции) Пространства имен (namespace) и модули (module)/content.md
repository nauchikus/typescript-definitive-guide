# Пространства имен (namespace) и модули (module)
## Namespace и module — предназначение


Начать рассмотрение механизмов пространства имен и модулей стоит с уточнения области их применения. Эти механизмы не предназначены для масштабных приложений, которые должны строится при помощи модулей и загружаться с применением модульных загрузчиков. В настоящее время их можно использовать при написании небольших скриптов, внедряемых непосредственно в *html*-страницу при помощи тега `<script>`, либо в приложениях, которые по каким-либо причинам не могут использовать модульную систему.


## Namespace - определение


Пространство имен — это конструкция, которая объявляется при помощи ключевого слова `namespace` и представляется в коде обычным *JavaScript* объектом. 

`````ts
namespace Identifier {

}
`````

Механизм пространства имен является решением такой проблемы, как коллизии в глобальном пространстве имен, дошедшего до наших дней из тех времён, когда ещё в спецификации *JavaScript* не было определено такое понятие, как модули. Простыми словами пространства имен — это совокупность обычной глобальной переменной и безымянного функционального выражения.

Объявленные внутри пространства имен конструкции инкапсулируются в безымянном функциональном выражении. Те части, которые должны быть видны снаружи, записываются в объект, ссылка на который была сохранена в глобальную переменную, которая при вызове была передана в качестве аргумента. Что записывать в глобальный объект, а что нет, компилятору указывают при помощи ключевого слова `export`, о котором речь пойдет совсем скоро.


*До компиляции*

`````ts
namespace NamespaceIdentifier {
  class PrivateClassIdentifier {}
  export class PublicClassIdentifier{}
}
`````

*После компиляции*

`````ts
var NamespaceIdentifier;

(function (NamespaceIdentifier) {

  class PrivateClassIdentifier {
  }
  class PublicClassIdentifier {
  }

  NamespaceIdentifier.PublicClassIdentifier = PublicClassIdentifier;

})(NamespaceIdentifier || (NamespaceIdentifier = {}));
`````

Также стоит добавить, что `namespace` является глобальным объявлением. Это дословно означает, что пространство имен, объявленное как глобальное, не нуждается в экспортировании и импортировании, а ссылка на него доступна в любой точке программы.


## Модули (export, import) — определение


Модули в *TypeScript* определяются с помощью ключевых слов `export`/`import` и представляют механизм определения связей между модулями. Данный механизм является внутренним для *TypeScript* и не имеет никакого отношения к модулям `es2015`. В остальном они идентичны `es2015` модулям, за исключением определения модуля по умолчанию (*export default*).

`````ts
// Файл declaration.ts


export type T1 = {};

export class T2 {}
export class T3 {}

export interface IT4 {}

export function f1(){}

export const v1 = 'v1';
export let v2 = 'v2';
export var v3 = 'v3';
`````

`````ts
Файл index.ts


import {T2} from './declaration';
import * as declaratios from './declaration';
`````

Кроме того, объявить с использованием ключевого слова `export` можно даже `namespace`. Это ограничит его глобальную область видимости и его использование в других файлах станет возможным только после явного импортирования.

`````ts
// Файл declaration.ts


export namespace Bird {
  export class Raven {}
  export class Owl {}
}
`````

`````ts
// Файл index.ts


import {Bird} from "./declaration";

const birdAll = [ Bird.Raven, Bird.Owl ];
`````

Стоит отметить, что экспортировать `namespace` стоит только тогда, когда он объявлен в теле другого `namespace`, но при этом до него нужно добраться из программы.

`````ts
namespace NS1 {
  export namespace NS2 {
      export class T1 {}
  }
}
`````


## Конфигурирование проекта


Для закрепления пройденного будет не лишним взглянуть на  конфигурирование минимального проекта.

*Структура проекта*

`````ts
* /
   * dest
   * src
      * Raven.ts
      * Owl.ts
      * index.ts
   * package.json
   * tsconfig.json
`````

`````ts
// Файл Raven.ts


namespace Bird {
  export class Owl {}
}
`````

`````ts
// Файл Owl.ts


namespace Bird {
  export class Raven {}
}
`````

`````ts
// Файл index.ts


namespace App {
  const {Raven, Owl} = Bird;

  const birdAll = [Raven, Owl];

  birdAll.forEach( item => console.log(item) );
}
`````

`````ts
// Файл tsconfig.json


{
  "compilerOptions": {
      "target": "es2015",
      "module": "none",
      "rootDir": "./src",
      "outFile": "./dest/index.bundle.js"
  }
}
`````

`````ts
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
`````

Осталось собрать проект, выполнив в консоли следующую команду:

`````ts
npm run build
`````

Если все было сделано правильно, то в директории *dest* должен появится файл *index.bundle.js*

`````ts
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
`````
