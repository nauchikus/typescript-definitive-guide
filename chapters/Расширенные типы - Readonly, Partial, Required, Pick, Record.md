## Расширенные типы - Readonly, Partial, Required, Pick, Record
________________


Как уже было сказано ранее, *TypeScript*, в помощь разработчикам, реализовал несколько типов сопоставлений. К таким типам относятся `Readonly<T>`, `Partial<T>`, `Required<T>`, `Pick<T, K>` и `Record<K, T>`. Все, кроме `Record<K, T>`, являются *гомоморфными* (homomorphic). Очень простыми словами, *гомоморфизм* - это возможность сохранять свойства всех операций. На самом деле это очень просто и убедится в этом можно будет немного позже.


## Readonly
________________


Тип сопоставления `Readonly` помечает все члены, как только для чтения (модификатор `readonly`).

~~~~~typescript
// lib.se6/d/ts

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
~~~~~

Применение сопоставимого типа `Readonly` может сократить написание кода, во всех случаях, когда нужна иммутабельность. Представьте ситуацию, когда в качестве значения выступают сериализованные из строки *.json* объекты, состоящие из одних полей, а в качестве их описания, интерфейсы (`interface`). Для того чтобы добится  иммутабельности придется каждому описанному полю, указывать модификатор `readonly`. Этой рутины можно избежать, воспользовавшись встроенным типом сопоставлением `Readonly<T>`.


После указания в качестве типа `Readonly<T>`, поля объекта изменить будет нельзя.

~~~~~typescript
interface IAnimalEntity {
  name: string;
  age: number;
}

let json = '{"name": "animal", "age": 0}';

let animal: Readonly<IAnimalEntity> = JSON.parse(json);
animal.name = 'newanimal'; // Error -> all fields is immutable
animal.age = 0; // Error -> all fields is immutable
~~~~~

Тип сопоставления `Readonly<T>` является гомоморфным и не влияет на существующие модификаторы, а лишь расширяет модификаторы конкретного типа. Так как тип, указанный в качестве аргумента типа, полностью сохранил свое поведение, в данном случае модификаторы, делает сопоставленный тип `Readonly<T>` гомоморфным.

~~~~~typescript
interface IAnimal {
  name?: string;
}

let animal: Readonly<IAnimal> = // { readonly name?: string }
~~~~~


## Partia
________________


Тип сопоставления `Partial<T>` помечает все члены, как необязательные ( `:?` ).

~~~~~typescript
// lib.es6.d.ts

type Partial<T> = {
  [P in keyof T]?: T[P];
};
~~~~~

Чаще всего необходимость в сопоставимом типе `Partial<T>` возникает тогда, когда метод в качестве аргумента принимает только часть конкретного типа данных.

~~~~~typescript
class Model<T> {
  constructor(private entity: T) {}

  public getValueByKey<U extends keyof T>( key: U ): T[ U ] {
      return this.entity[ key ];
  }

  public update( partial: Partial<T> ): void {
      Object.assign( this.entity, partial );
  }
}

interface IAnimalEntity {
  name: string;
  age: number;
}

let json = '{"name": "animal", "age": 0}';
let entity = JSON.parse(json);

let animalModel: Model<IAnimalEntity> = new Model(entity);

console.log( animalModel.getValueByKey( 'name' ) ); // animal

let newJSON = '{"name": "newanimal"}';
let newEntity = JSON.parse(newJSON);

animalModel.update(newEntity); // Ok

console.log( animalModel.getValueByKey( 'name' ) ); // newanimal
~~~~~

Тип сопоставления `Partial<T>` является гомоморфным и не влияет на существующие модификаторы, а лишь расширяет модификаторы конкретного типа.

~~~~~typescript
interface IAnimal {
  readonly name: string;
}

let animal: Partial<IAnimal> = // { readonly name?: string }
~~~~~



## Required
________________


Тип сопоставления `Required<T>` удаляет все необязательные модификаторы `:?` приводя члены объекта к обязательным. Простыми словами, `Required<T>`, с помощью префикса - (глава [“Оператор keyof, Lookup Types, Mapped Types, Mapped Types - префиксы + и -”]()),  помечает модификатор `:?` на удаление.

~~~~~typescript
type Required<T> = {
  [P in keyof T]-?: T[P];
};
~~~~~

Тип сопоставления   Required<T>  является полной противоположностью типу сопоставления `Partial<T>`.

~~~~~typescript
let v0: Partial<IT>; // { a?: number; b?: string; }, необязательные члены
let v1: Required<IT>; // { a: number; b: string; }, обязательныечлены
~~~~~


## Pick
________________


В типе сопоставлении `Pick<T, K>`, определено два обязательных параметра типа. Первый параметр, в качестве значения принимает конкретный тип данных. Второй параметр типа, ожидает объединенный тип данных (`Union`), который состоит только из строковых литеральных типов, эквивалентных идентификаторам ключей типа, соответствующему первому параметру типа.

~~~~~typescript
// lib.es6.d.ts

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
~~~~~

Предназначен сопоставленный тип `Pick<T, K>` для ограничения описания типа, на основе идентификаторов его членов. Простыми словами, у разработчиков и вывода типа, появилась возможность фильтровать тип по именам его членов. 

~~~~~typescript
type T1 = {f1: string, f2: number, f3: boolean};
type T2 = Pick<T1, 'f1' 'f2'>;

let v1: T1 = {f1: '', f2: 0, f3: true}; // Ok
let v2: T2 = {f1: '', f2: 0, f3: true}; // Error
let v3: T2 = {f1: '', f2: 0}; // Ok
~~~~~

Подобное можно было бы реализовать с помощью только параметров обобщенного типа, но при этом требовалось бы всегда указывать входящие и выходящие типы данных.

~~~~~typescript
function pick<T, U>( object: T, ...keys: string[ ] ): U {
  return keys.reduce( (result, key) => {
      return Object.assign( result, {[key]: object[key]} );
  }, {} as U );
}

interface IAnimal {
  type: string;
  arial: string;
  age: number;
}

interface IAnimapPartial {
  arial: string;
  age: number;
}

let animal = {type: 'animal', arial: 'default', age: 0};
var partial = pick<IAnimal, IAnimapPartial>(animal, 'arial', 'notexistfield'); // Ok -> { arial: string, notexistfield: undefined }
var partial = pick<IAnimal, IAnimapPartial>( animal, 'arial', 'age' ); // Ok -> { arial: string, age: number }
~~~~~

В случаях, когда разрабатываемая библиотека, рассчитана на широкий круг  разработчиков, рекомендуется сделать выбор пользу динамического вывода типов.

~~~~~typescript
function pick<T, K extends keyof T>(object: T, ...keys: (K & string)[]): Pick<T, K> {
  return keys.reduce( (result, key) => {
      return Object.assign( result, {[key]: object[key]} )
  }, {} as Pick<T, K> );
}

let animal = {type: 'animal', arial: 'default', age: 0};
var partial = pick(animal, 'type', 'notexistfield'); // Error
var partial = pick(animal, 'arial', 'age');  // Ok -> { arial: string, age: number }
~~~~~

Тип сопоставления `Pick<T, K>` является гомоморфным и не влияет на существующие модификаторы, а лишь расширяет модификаторы конкретного типа.

~~~~~typescript
interface IAnimal {
  readonly name?: string;
  readonly age?: number;
}

let animal: Pick<IAnimal, 'name'> // { readonly name?: string }
~~~~~


## Record
________________

В типе сопоставления `Record<K, T>` определенно два обязательных параметра типа. Первый параметр типа обязательно должен принадлежать к типу `string`, либо к `Literal String`. В качестве второго параметра может выступать любой конкретный тип данных. 

~~~~~typescript
// lib.es6.d.ts

type Record<K extends string, T> = {
  [P in K]: T;
};
~~~~~

Стоит также уточнить, что первый параметр типа принимает тип `string`, а не тип интерфейса `String`. При попытке указать значение типа `String`, возникнет ошибка.

~~~~~typescript
type T1 = string;
type T2 = String;
type T3 = 'f1' | 'f2';
type T4 = keyof number;

let v1: Record<T1, number>; // Ok
let v2: Record<T2, string>; // Error
let v3: Record<T3, boolean>; // Ok
let v4: Record<T4, object | symbol>; // Ok
~~~~~

Предназначен сопоставимый тип `Record<K, T>` для описания типа, идентификаторы которого будут состоять из литералов указанных в качестве значения первому параметру, и которые будут ассоциированы с типом, указанным в качестве значения второму параметру.

~~~~~typescript
type T1 = Record<'f1' | 'f2', number>;
type T2 = Record<'f1' | 'f2', string>;
type T3 = Record<'f1' | 'f2', boolean | Object>;

var v1: T1 = {f1: 0, f2: 0}; // Ok
var v2: T2 = {f1: '0', f2: 0}; // Error
let v3: T3 = {f1: true, f2: {}}; // Ok
~~~~~

Как было рассмотрено ранее, индексированным свойствами объекта, в качестве ключей можно задавать значения принадлежащие только к типу `string` или `number`.

~~~~~typescript
interface IIndexed {
  [key: string]: any;
  [key: number]: any;
}

let object: IIndexed = { a: 0, b: 0 };
~~~~~

Иногда может потребоваться ограничить диапазон вводимых ключей. Это очень просто   сделать с помощью типа сопоставления `Record<K, T>`.

~~~~~typescript
type ValidMember = "a" | "b";

let v1: Record<ValidMember, any> = { a: 0, b: 0, c: 0 }; // Error
let v2: Record<ValidMember, any> = { a: 0, b: 0 }; // Ok
~~~~~
