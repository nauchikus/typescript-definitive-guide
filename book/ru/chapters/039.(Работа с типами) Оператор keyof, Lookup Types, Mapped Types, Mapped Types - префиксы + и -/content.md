# Оператор keyof, Lookup Types, Mapped Types, Mapped Types - префиксы + и -
![Chapter Cover](./images/chapter-cover.png)
## Оператор keyof, Lookup Types, Mapped Types, Mapped Types - префиксы + и -
________________

Для того, чтобы повысить уровень выявления ошибок и при этом сократить время разработки программы, создатели *TypeScript* не прекращают радовать разработчиков добавлением новых возможностей для взаимодействия с типами данных. Благодаря усилиям разработчиков со всего земного шара, стало осуществимо получать объединенный тип состоящий, как ключей, так и значений описания типа данных. И кроме того, стало возможно итерировать типами данных.


## Запрос ключей keyof
________________


В *TypeScript* существует возможность выводить все публичные не статические ключи принадлежащие типу и на их основе создавать литеральный объединенный тип (`Union`). Для получения ключей нужно указать оператор `keyof` после которого указан тип данных, чьи ключи будут объединены в тип `Union - keyof Type`.

Оператор `keyof` может применяться к любому типу данных.

~~~~~typescript
type AliasType = { f1: number, f2: string };

interface IInterfaceType {
  f1: number;
  f2: string;
}

class ClassType {
  f1: number;
  f2: string;
}

let v1: keyof AliasType; // v1: "f1" | "f2"
let v2: keyof IInterfaceType; // v2: "f1" | "f2"
let v3: keyof ClassType; // v3: "f1" | "f2"
let v4: keyof number; // v4: "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
~~~~~

Как уже было замечено, оператор `keyof` выводит только публичные не статические ключи типа.

~~~~~typescript
class Type {
  public static fieldClass: number;
  public static methodClass(): void {}

  private privateField: number;
  protected protectedField: string;
  public publicField: boolean;

  public get property(): number { return NaN; }
  public set property( value: number ) {  }

  public constructor() {}

  public instanceMethod(): void {}
}

let v1: keyof Type; // a: "publicField" | "property" | "instanceMethod"
~~~~~

В случае, если тип данных не содержит публичных ключей, оператор `keyof` определит его, как тип `never`.

~~~~~typescript
type AliasType = { };

interface IInterfaceType { }

class ClassType {
  private f1: number;
  protected f2: string;
}

let v1: keyof AliasType; // v1: never
let v2: keyof IInterfaceType; // v2: never
let v3: keyof ClassType; // v3: never
let v4: keyof object; // v4: never
~~~~~

Оператор `keyof` также может использоваться в объявлении обобщенного типа данных. Точнее, с помощью оператора `keyof` можно получить тип, а затем расширить его параметром типа. Важно понимать, что в качестве значения по умолчанию, может выступать только тип, совместимый с объединенным типом, полученным на основе ключей.

~~~~~typescript
function f1<T, U extends keyof T = keyof T>(): void {}
~~~~~

Напоследок стоит упомянуть об одном не очевидном моменте. Оператор `keyof` можно совмещать с оператором `typeof` (Type Queries).

~~~~~typescript
class Animal {
  public name: string;
  public age: number;
}

let animal = new Animal();

let type: typeof animal; // type: { name: string; age: number; }
let union: keyof typeof animal; // union: "name" | "age"
~~~~~


## Поиск типов (Lookup Types)
________________


Если оператор `keyof` выбирает все доступные ключи, то с помощью поиска типов, можно получить заданные типы по известным ключам. Получить связанный с ключом тип, можно с помощью скобочночной нотации, в которой, через оператор вертикальная черта `|`, будут перечислены от одного и более, существующего в типе, ключа. В качестве типа данных могут выступать только интерфейсы, классы и в ограниченных случаях операторы типа.

В случаях, когда в качестве типа данных выступает интерфейс, то получить можно все типы, без исключения. При попытке получить тип несуществующего ключа, возникнет ошибка.

~~~~~typescript
interface IInterfaceType {
  p1: number;
  p2: string;
}


let v1: IInterfaceType[ 'p1' ]; // v1: number
let v2: IInterfaceType[ 'p2' ]; // p2: number
let union: IInterfaceType[ 'p1' | 'p2' ]; // union: number | string
let notexist: IInterfaceType[ 'notexist' ]; // Error -> Property 'notexist' does not exist on type 'IAnimal'
~~~~~

Если в качестве типа выступает класс, то получить типы можно только у членов его экземпляра. При попытке получить тип несуществующего члена, возникнет ошибка.

~~~~~typescript
class ClassType {
  public static publicFieldClass: number;
 
  public publicInstanceField: number;
  protected protectedInstanceField: string;
  private privateInstanceField: boolean;

  public get propertyInstance(): number { return NaN; }
  public set propertyInstance(value: number) {}

  public methodInstance(): void {}
}


let publicFieldClass: ClassType['publicFieldClass']; // Error

let publicFieldInstance: ClassType['publicInstanceField']; // publicFieldInstance: number
let protectedFieldInstance: ClassType['protectedInstanceField']; // protectedFieldInstance: string
let privateFieldInstance: ClassType['privateInstanceField']; // privateFieldInstance: boolean
let propertyInstance: ClassType['propertyInstance']; // propertyInstance: number
let methodInstance: ClassType['methodInstance']; // methodInstance: () => void

let notexist: ClassType['notexist']; // Error
~~~~~

Нельзя переоценить вклад возможностей поиска типов, которые пришлись на динамическую часть типизированного мира *TypeScript*. Благодаря поиску типов в паре с оператором keyof, появилась возможность, позволяющая выводу типов, устанавливать связь между динамическими ключами и их типами. Это в свою очередь позволяет производить дополнительные проверки, которые повышают *“типобезопасность”* кода.

~~~~~typescript
class Model<T> {
  constructor( private entity: T ) {}

  public getValueByName<U extends keyof T>( key: U ): T[ U ] {
      return this.entity[ key ];
  }
}

interface IAnimalModel {
  id: string;
  age: number;
}

let json = '"{"id": "animal", "age": 0}"';
let entity: IAnimalModel = JSON.parse(json);

let userModel: Model<IAnimalModel> = new Model(entity);

let id = userModel.getValueByName( 'id' ); // id: string
let age = userModel.getValueByName( 'age' ); // age: number
~~~~~


## Сопоставление типов (Mapped Types)
________________


Сопоставленные типы, это типы данных, которые при помощи механизма итерирования, модифицируют лежащие в основе конкретные типы данных.

В `TypeScript` существует возможность определения типа данных в качестве ключей которого выступает множество элементами которого являются литеральные строковые типы данных. в том числе и составляющие тип объединение (`Union`). Подобные типы обозначаются как *сопоставленные типы* данных (`Mapped Types`) и определяются исключительно на основе предоставляемой псевдонимами типов (`Type Alias`), объявление которых осуществляется при помощи ключевого слова `type`. Тело сопоставимого типа, заключенное в фигурные скобки `{}`, включает в себя одно единственное выражение состоящие из двух частей разделенное двоеточием. 

~~~~~typescript
type СопоставимыйТип = {
  ЛеваяЧастьВыражения : ПраваяЧастьВырыжения;
}
~~~~~

В левой части выражения распологается другое, обрамленное в квадратные скобки `[]`, выражение предназначенное для работы с множеством, а в правой части определяется произвольный тип данных.

~~~~~typescript
type СопоставимыйТип = {
  [ВыражениеДляРаботыСМножеством] : ПроизвольныйТипДанных;
}
~~~~~

Выражение для работы с множеством определяет механизм предназначенный для итерирования элементами этого множества и также состоит из двух частей разделенных опратором `in` (`[ЛевыйОперанд in ПравыйОпернад]`). В качестве левого операнда указывается произвольный идентификатор, которому в процессе итерирования элементами множества, указанного в качестве правого операнда, последовательно будет присвоено их строковое представление (`[ПроизвольныйИдентификатор in Множество]`). 


~~~~~typescript
type СопоставимыйТип = {
  [ПроизвольныйИдентификатор in Множество] : ПроизвольныйТипДанных;
}
~~~~~

Как уже было сказанно в роли идентификатора может выступать любой идентификатор.

~~~~~typescript
type СопоставимыйТип = {
  [Key in Множество] : ПроизвольныйТипДанных;
}

// or

type СопоставимыйТип = {
  [K in Множество] : ПроизвольныйТипДанных;
}
~~~~~

Множеств может быть определенно как единственнным литеральным строковым типом (`"ElementLeteralStringType"`), так и его множеством составляющим тип объединение (`Union Type`) (`"FirstElementLeteralStringType" | "SecondElementLeteralStringType"`).


~~~~~typescript
// множество с одним элементом
type СопоставимыйТип = {
  [K in "FirstLiteralStringType"] : ПроизвольныйТипДанных;
}

// or 

// множество с несколькими элементами
type СопоставимыйТип = {
  [K in "FirstLiteralStringType" | "SecondLiteralStringType"] : ПроизвольныйТипДанных;
}

// or 


type LiteralStringType = "FirstLiteralStringType" | "SecondLiteralStringType";

// множество с несколькими элементами вынесенных в тип Union
type СопоставимыйТип = {
  [K in LiteralStringType] : ПроизвольныйТипДанных;
}
~~~~~

Результатом определения сопоставленного типа является объектный тип состоящий из ключей (строковых представлением элементов множества) ассоциированных с произвольным типом.


~~~~~typescript
type ABC = "a" | "b" | "c";

type ABCWithString = {
  [K in ABC]: string;
}

// or

type ABCWithNumber = {
  [K in ABC]: number;
}

declare function abcWithString(params: ABCWithString): void;


abcWithString({a: '', b: '', c: ''}); // Ok
abcWithString({}); // Error, missing properties 'a', 'b', 'c'
abcWithString({a: '', b: ''}); // Error, missing property 'c'
abcWithString({a: '', b: '', c: 5}); // Error, type number is not type string


declare function abcWithNumber(params: ABCWithNumber): void;

abcWithNumber({a: 0, b: 0, c: 0}); // Ok
abcWithNumber({}); // Error, missing properties 'a', 'b', 'c'
abcWithNumber({a: 0, b: 0}); // Error, missing property 'c'
abcWithNumber({a: 0, b: 0, c: ''}); // Error, type string is not type number
~~~~~

От статического указания итерируемого типа мало пользы, поэтому `Mapped Types` лучше всего расскрывают свой потенциал при совместной работе с известными к этому моменту такими механизмами, как запрос ключей (`keyof`) и поиск типов (`Lookup Types`) опирирующих параметрами типа (`Generics`) 


~~~~~typescript
type MappedType<T> = {
  [K in keyof T]: T[ K ];
}

// or

type MappedType<T, U extends keyof T> = {
  [K in U]: T[ K ];
}
~~~~~


В первом случае в выражении `[P in keyof T]: T[ P ];` первым действием выполняется вычисления оператора `keyof` над параметром типа `T`. В его результате ключи произвольного типа преобразуются во множество, то есть в тип `Union`, элементы которого принадлежать к литеральному строковому типу данных. Простыми словами операция `keyof T` заменяется на только что полученный тип `Union` `[P in Union]: T[ P ];`, над которым на следующим действии выполняется итерация.

Во втором случае `MappedType<T, U extends keyof T>` оператор `keyof` также приобразует параметр типа `T` в тип `Union`, который затем расширяет параметр типа `U`, тем самым получая все его признаки необходиме для итерации в выражении `[K in U]`.

С полученным в итерации `[K in U]` ключом `K` ассоциируется тип данных, который был ассоциирован с ним в исходным типе и который вычисляется с помощью механизма поиска типов `T[ K ]`. 

Совокупность описанных механизмов позволяет создавать новый тип идентичный исходному, что при включении в условие определения `Mapped Type` модификаторв, как например `readonly` или `?:`, позволяет определять новые модифицирующие типы данных.

~~~~~typescript
type ReadonlyMember<T> = {
  readonly [P in keyof T]: T[ P ];
}

interface IAnimal {
  name: string;
  age: number;
}

let animal: ReadonlyMember<IAnimal>;  // animal: { readonly name: string; readonly age: number; }
~~~~~

Как уже было замечено, в правой части выражения можно указать любой тип данных, в том числе и объединенный тип, в состав которого войдет тип, полученный при помощи поиска типов.

~~~~~typescript
type Nullable<T> = {
  [P in keyof T]: T[ P ] | null;
}

type Stringify<T> = {
  [P in keyof T]: string;
}

interface IAnimal {
  name: string;
  age: number;
}


let nullable: Nullable<IAnimal>; // { name: string | null; age: number | null; }
let stringify: Stringify<IAnimal>; // { name: string; age: string; }
~~~~~

Сопоставленные типы не могут содержать более одной итерации в типе, и кроме того не могу содержать объявление других членов.

~~~~~typescript
type AliasType<T, U> = {
  [P in keyof T]: T[ P ]; // Ok
  [V in keyof U]: U[ V ]; // Error
  f1: number; // Error
}
~~~~~

К тому же в *TypeScript* существует несколько готовых типов, таких как `Readonly<T>`, `Partial<T>`, `Record<K, T>` и `Pick<T, K>` (глава [“Расширенные типы - Readonly, Partial, Required, Pick, Record”]()).

## Префиксы + и - в сопоставленных типах
________________

Сопоставленные типы позволяют добавлять модификаторы, но не позволяют их удалять, что в свою очередь имеет большое значение в случае с гомоморфными типами, которые по умолчанию сохраняют модификаторы своего базового типа (гомоморфные типы будут рассмотрены в главе [“Расширенные типы - Readonly, Partial, Required, Pick, Record”]()). 

Для разрешения этого, к модификаторам, в типах сопоставления, были добавлены префиксы `+` и `-`, с помощью которых указывается поведение модификатора - добавить или удалить.

~~~~~typescript
type AddModifier<T> = { +readonly [P in keyof T]+?: T[P] }; // добавит модификаторы readonly и ? (optional)
type RemoveModoifier<T> = { -readonly [P in keyof T]-?: T[P] }; // удалит модификаторы readonly и ? (optional)


interface IWithoutModifier { field: string; }
interface IWithModifier { readonly field?: string; }


/**
 * Добавление модификаторов
 * было { field: string; }
 * стало { readonly field?: string; }
 */
let addingModifier: AddModifier<IWithoutModifier> = {field: ''};
let withoutModifier: IWithoutModifier = {field: ''};

addingModifier.field = ''; // Error
withoutModifier.field = ''; // Ok

/**
 * Удаление модификаторов
 * было { readonly field?: string; }
 * стало { field: string; }
 */
let removingModifier: RemoveModoifier<IWithModifier> = {field: ''};
let withModifier: IWithModifier = {field: ''};

removingModifier.field = ''; // Ok
withModifier.field = ''; // Error
~~~~~
