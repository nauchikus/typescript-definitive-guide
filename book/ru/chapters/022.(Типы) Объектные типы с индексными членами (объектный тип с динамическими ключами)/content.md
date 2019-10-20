# Объектные типы с индексными членами (объектный тип с динамическими ключами)
![Chapter Cover](./images/chapter-cover.png)
## Типы - Объектные типы с индексными членами (объектный тип с динамическими ключами)
________________

Статический анализ кода, стремится взять под контроль все конструкции кода, чтобы повысить типобезопасность программы и тем самым переложить работу, связанную с выявлением  ошибок, на себя, оставляя разработчикам больше времени на более важные аспекты. И несмотря на то, что динамические операции являются причиной “головной боли” компилятора, при разработке программ, потребность в них, все таки существует. Одной из таких операций, является создание в объектном типе данных *индексных членов* (динамических ключей).

*Индексная сигнатура* (index signature)  состоит из двух частей. В первой части расположен *идентификатор привязки* (binding identifier) имеющий собственную аннотацию типа вместе с которой заключен в квадратные скобки.  Во второй части расположена *аннотации типа* (type annotation).

~~~~~typescript
{ [ identifier: Type ]: Type }
~~~~~

При объявлении индексной сигнатуры не должны быть использованы такие модификаторы, как модификаторы доступа и модификатор `static`, а идентификатор привязки должен принадлежать либо к типу `string`, либо к типу `number`. В качестве типа, указанного справа от двоеточия, может быть указан любой тип данных. Идентификатора привязки может иметь произвольное имя.

~~~~~typescript
interface Identifier {
   [identifier: string]: string;
}

// or 
interface Identifier {
   [key: number]: string;
}

// or 
interface Identifier {
   [name: number]: string;
}
~~~~~

В одном объектном типе, одновременно могут быть объявлены индексные сигнатуры чьи идентификаторы привязки принадлежат к типу `string` и типу `number`. Но с одной оговоркой. Их типы, указанные в аннотации типов, должны быть совместимы (совместимость типов подробно рассматривается в главах [“Типизация - Совместимость объектов”]() и [“Типизация - Совместимость функций”]()).

~~~~~typescript
interface A {
  [key:string]: string;
  [key:number]: string;
}


let a: A = {
  validKeyDeclareStatic: 'value', // Ok, значение принадлежит к string
  invalidKeyDeclareStatic: 0 // Error, значение должно быть совместимым с типом string
};
a.validKeyDefineDynamicKey = 'value'; // Ok
a.invalidKeyDefineDynamicKey = 0; // Error, значение должно быть совместимым с типом string
a[0] = 'value'; // Ok



interface B {
   [identifier: string]: string; // Ok
   [identifier: string]: string; // Error, дубликат
}
interface С {
   [identifier: string]: string; // Ok
   [identifier: number]: number; // Error, должен принадлежать к типу string
}



class SuperClass { // суперкласс
   a: number;
}
class SubClass extends SuperClass { // подкласс
   b: number;
}

interface D {
   [identifier: string]: SuperClass; // Ok
   [identifier: number]: SubClass; // Ok, SubClass совместим с SuperClass
}

let d: D = {};
d.dynamicKey = new SubClass(); // Ok
d[0] = new SubClass(); // Ok

interface E {
   [identifier: string]: SubClass; // Ok
   [identifier: number]: SuperClass; // Ok, SuperClass несовместим с SubClass
}
~~~~~

Так как классы принадлежат к объектным типам, означает что индексные сигнатуры могут быть объявлены и в них. Все правила, касающиеся индексных сигнатур, которые были рассмотрены ранее и ещё будут рассмотрены далее в этой главе, справедливы и для классов. 

~~~~~typescript
class Identifier {
  [key: string]: string;
  [key: number]: string;

  [0]: 'value';
  [1]: 5; // Error, все члены должны принадлежать к совместимым со string типам


  public a: string = 'value'; // Ok, поле name  с типом string
  public b: number = 0; // Error, все члены должны принадлежать к совместимым со string типам

  public c(): void { } // Error, метод тоже член и на него распространяются те же правила
}

let identifier: Identifier = new Identifier();
identifier.validDynamicKey = 'value'; // Ok
identifier.invalidDynamicKey = 0; // Error

identifier[2] = 'value'; // Ok
identifier[3] = 0; // Error
~~~~~

Кроме того, классы накладывают ограничение, которое делает невозможным использовать такие модификаторы, как модификаторы доступа (`private`, `protected`, `public`) и модификаторы указывающие на принадлежность к уровню класса (`static`). При попытке указать эти модификаторы при объявлении индексной сигнатуры, возникнет ошибка.

~~~~~typescript
class A {
   public [key: string]: string; // Error
}
class B {
   static [key: string]: string; // Error
}
~~~~~

Правда есть один нюанс. И даже не один, а несколько нюансов. И связаны они все с модификатором `readonly`, который подробно рассматривается в главе [“Классы - Модификатор readonly”]().  Чтобы ничего не ускользнуло от понимания, начнем по порядку.

При  указании модификатора `readonly` искажается смысл использования индексной сигнатуры, так как это дает ровно противоположный эффект. Вместо объекта, с возможность инициировать значение указанного типа с динамическими ключами, после его создания, мы получаем объект, всем членам которого нельзя ничего присвоить. То есть, объект полностью закрыт для изменения.

~~~~~typescript
// в случае с интерфейсом

interface IIdentifier {
  readonly [key: string]: string; // Ok, модификатор readonly
}

let instanceObject: IIdentifier = {};

instanceObject.a; // Ok, можно объявить
instanceObject.a = 'value'; // Error, но нельзя присвоить значение
~~~~~

~~~~~typescript
// в случае с классом

class Identifier {
  readonly [key: string]: string;
}

let instanseClass = new Identifier();
instanseClass.a; // Ok, можно объявить
instanseClass.a = 'value'; // Error, но нельзя присвоить значение
~~~~~

Но это только в теории и именно с этим связаны оставшиеся нюансы.

Второй нюанс заключается в том, что когда в классе или объекте, объявлена индексная сигнатура, становится невозможным объявить в теле или добавить через точечную,а также скобочную нотацию, ключи ассоциированные с несовместимым типом данных. Это означает, что правило применимое к индексной сигнатуре распространяется на весь объект, как в момент его инициализации, так и после.

~~~~~typescript
// в случае с интерфейсом

interface IIdentifier {
  [key: string]: string;

  a: number; // Error, [в момент декларации] допускается объявление идентификаторов принадлежащих только к типу string
}

let instanceObject: IIdentifier = {
  b: 0 // Error, [в момент объявления] допускается объявление идентификаторов принадлежащих только типу string
};
instanceObject.c = 0; // Error, [после объявления] допускается объявление идентификаторов принадлежащих только типу string
~~~~~

~~~~~typescript
// в случае с классом

class Identifier {
  readonly [key: string]: string;

  a: number; // Error, [в момент объявления] допускается объявление идентификаторов принадлежащих только типу string
}

let instanseClass = new Identifier();
instanseClass.b = 0; // Error, [после объявления] допускается объявление идентификаторов принадлежащих только типу string
~~~~~

Но в случае с модификатором `readonly` поведение отличается. Несмотря на то, что указывать идентификаторы членов, принадлежащие к несовместимым типам, по прежнему нельзя, допускается их декларация и объявление.

~~~~~typescript
// в случае с интерфейсом

interface IIdentifier {
  readonly [key: string]: string; // Ok

  a:string; // Ok, декларация
}

let instanceObject: IIdentifier = {
  a: '', // Ok, реализация
  b: '' // Ok, объявление
};

instanceObject.с = 'value'; // Error, ассоциировать ключа со значением после создания объекта по прежнему нельзя
~~~~~

~~~~~typescript
// в случае с классом

class Identifier {
  readonly [key: string]: string;

  a: string = 'value'; // Ok, декларация и объявление
}

let instanseClass = new Identifier();
instanseClass.b = 'value'; // Error, ассоциировать ключа со значением после создания объекта по прежнему нельзя
~~~~~

Такая особенность или даже неочевидность, существует и о ней просто нужно знать. Кроме того, из этой особенности, берет начало другая особенность.

Третий нюанс заключается в том, что значения ассоциированные с идентификаторами, которые были задекларированы в типе, можно перезаписать после инициализации объекта.

~~~~~typescript
// в случае с интерфейсом

interface IIdentifier {
  readonly [key: string]: string; // Ok

  a:string; // Ok, декларация
}

let instanceObject: IIdentifier = {
  a: 'value', // Ok, реализация
  b: 'value' // Ok, объявление
};

instanceObject.a = 'new value'; // Ok, можно перезаписать значение
instanceObject.b = 'new value'; // Error, нельзя перезаписать значение
~~~~~

~~~~~typescript
// в случае с классом

class Identifier {
  readonly [key: string]: string;

  a: string = 'value'; // Ok, декларация и объявление
}

let instanseClass = new Identifier();
instanseClass.a = 'new value'; // Ok, можно перезаписать значение
~~~~~

Если учесть, что модификатор `readonly`,  вообще не стоит применять к индексной сигнатуре, то все описанные связанные с ним особенности, вообще можно выкинуть из головы. Но так цель этой книги защитить читателя от, как можно большего количества подводных камней, я решил включить это, так как знание лучшая защита.

Кроме того не будет лишним знать наперед, что если идентификатор привязки принадлежит к типу `string`, то в качестве ключа может быть использовано значение принадлежащее к типам `string`, `number`, `symbol`, `Number Enum` и `String Enum`.

~~~~~typescript
interface StringDynamicKey {
  [ key: string ]: number;
}

enum NumberEnum {
 Prop = 0
}

enum StringEnum {
 Prop = 'prop'
}


let example: StringDynamicKey = {
 prop: '',                           // Ok String key
 '': '',                             // Ok String key
 1: '',                              // Ok Number key
 [Symbol.for('key')]: '',            // Ok Symbol key
 [ NumberEnum.Prop ]: '',            // Ok Number Enum key
 [ StringEnum.Prop ]: '',            // Ok String Enum key
};
~~~~~

В случае, когда идентификатор привязки принадлежит к типу `number`, то значение, используемое в качестве ключа, может принадлежать к таким типам, как `number`, `symbol`, `Number Enum` и `String Enum`.

~~~~~typescript
interface NumberDynamicKey {
 [ key: number ]: number;
}

enum NumberEnum {
 Prop = 0
}

enum StringEnum {
 Prop = 'prop'
}


let example: NumberDynamicKey = {
 prop: '',                           // Error String key
 '': '',                             // Error String key
 1: '',                              // Ok Number key
 [Symbol.for('key')]: '',            // Ok Symbol key
 [ NumberEnum.Prop ]: '',            // Ok Number Enum key
 [ StringEnum.Prop ]: '',            // Ok String Enum key
};
~~~~~

Теперь давайте рассмотрим, как такой механизм, как вывод типов, в некоторых случаях, выводит тип принадлежащий к объектному типу с индексной сигнатурой.

Напомню, что в *JavaScript*, помимо привычного способа, при объявлении идентификаторов, в объектных типах, можно использовать, заключая в прямоугольные скобки, строковые литералы, выражения, а также *вычисляемые идентификаторы* (computed properties).

~~~~~typescript
let computedIdentifier = 'e';

let v = {
  a: '', // объявление идентификатора привычным способом,
  [ 'b' ]: '', // объявление идентификатора с помощью строкового литерала.
  [ 'c' + 'd' ]: '', // объявление идентификатора с помощью выражения со строковыми литералами
  [ computedIdentifier ]: '' // объявление идентификатора при помощи вычисляемого идентификатора
}; 
~~~~~

Так вот,в первых двух случаях, вывод типов выводит ожидаемый тип. А в оставшихся случаях, вывод типов выводит тип содержащий индексную сигнатуру.

~~~~~typescript
let v1 = {  // let v1: { a:  string; }
  a: 'value'  // Ok, привычный идентификатор

};

v1.b = 'value'; // Error,  в типе { a:  string } не задекларировано идентификатора b

// ---


let v2 = {  // let v2: { [ 'a' ]:  string; }
  [ 'a' ]: 'value'  // Ok, строковой литерал

};

v2.b = 'value'; // Error,  в типе { [ 'a' ]:  string } не задекларировано идентификатора b

// ---


let computedIdentifier: string = 'a';

let v3 = { // let v3: { [ x: string ]: string }; - вывод типов выводит как тип с индексной сигнатурой...
  [ computedIdentifier ]: 'value' // вычисляемое свойство
};

v3.b = 'value'; // ... а это, в свою очередь, позволяет добавлять новое значение

// ---

let v4 = { // let v4: { [ x: string ]: string }; - вывод типов выводит как тип с индексной сигнатурой...
  [ 'a' + 'b' ]: 'value' // выражение со строковыми литералами
};

v4.b = 'value'; // ... а это, в свою очередь, позволяет добавлять новое значение
~~~~~
