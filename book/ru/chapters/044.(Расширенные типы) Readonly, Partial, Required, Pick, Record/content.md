# Readonly, Partial, Required, Pick, Record
## Расширенные типы — Readonly, Partial, Required, Pick, Record


Как уже было сказано ранее, *TypeScript* в помощь разработчикам реализовал несколько типов сопоставлений. К таким типам относятся `Readonly<T>`, `Partial<T>`, `Required<T>`, `Pick<T, K>` и `Record<K, T>`. Все, кроме `Record<K, T>`, являются *гомоморфными* (homomorphic). Очень простыми словами, *гомоморфизм* — это возможность сохранять свойства всех операций. На самом деле это очень просто и убедится в этом можно будет немного позже.


## Readonly


Тип сопоставления `Readonly` помечает все члены только для чтения (модификатор `readonly`).

`````ts
// lib.es6.d.ts

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
`````

Применение сопоставимого типа `Readonly` может сократить написание кода во всех случаях, когда нужна иммутабельность. Представьте ситуацию, когда в качестве значения выступают сериализованные из строки *.json* объекты, состоящие из одних полей, а в качестве их описания — интерфейсы (`interface`). Для того, чтобы добиться иммутабельности, придется каждому описанному полю указывать модификатор `readonly`. Этой рутины можно избежать, воспользовавшись встроенным типом сопоставлением `Readonly<T>`.


После указания в качестве типа объекта `Readonly<T>`, поля этого объекта изменить будет нельзя.

`````ts
interface IAnimalEntity {
    name: string;
    age: number;
}

let json = '{"name": "animal", "age": 0}';

let animal: Readonly<IAnimalEntity> = JSON.parse(json);
animal.name = 'newanimal'; // Error -> Cannot assign to 'name' because it is a read-only property.
animal.age = 0; // Error -> Cannot assign to 'age' because it is a read-only property.
`````

Тип сопоставления `Readonly<T>` является гомоморфным и не влияет на существующие модификаторы, а лишь расширяет модификаторы конкретного типа. То, что тип, указанный в качестве аргумента типа, полностью сохранил свое поведение (в данном случае — модификаторы), делает сопоставленный тип `Readonly<T>` гомоморфным.

`````ts
interface IAnimal {
    name?: string;
}

let animal: Readonly<IAnimal>; // { readonly name?: string }
`````


## Partial


Тип сопоставления `Partial<T>` помечает все члены необязательными (`:?`).

`````ts
// lib.es6.d.ts

type Partial<T> = {
    [P in keyof T]?: T[P];
};
`````

Чаще всего необходимость в сопоставимом типе `Partial<T>` возникает тогда, когда метод в качестве аргумента принимает только часть конкретного типа данных.

`````ts
class Model<T> {
    constructor(private entity: T) {}
    
    public getValueByKey<U extends keyof T>(key: U): T[U] {
        return this.entity[key];
    }
    
    public update(partial: Partial<T>): void {
        Object.assign(this.entity, partial);
    }
}

interface IAnimalEntity {
    name: string;
    age: number;
}

const json = '{"name": "animal", "age": 0}';
const entity = JSON.parse(json);

const animalModel: Model<IAnimalEntity> = new Model(entity);

console.log(animalModel.getValueByKey('name')); // animal

const newJSON = '{"name": "newanimal"}';
const newEntity = JSON.parse(newJSON);

animalModel.update(newEntity); // Ok

console.log(animalModel.getValueByKey('name')); // newanimal
`````

Тип сопоставления `Partial<T>` является гомоморфным и не влияет на существующие модификаторы, а лишь расширяет модификаторы конкретного типа.

`````ts
interface IAnimal {
    readonly name: string;
}

let animal: Partial<IAnimal>;// { readonly name?: string }
`````


## Required


Тип сопоставления `Required<T>` удаляет все необязательные модификаторы `:?` приводя члены объекта к обязательным. Простыми словами, `Required<T>`, с помощью префикса - (глава [“Оператор keyof, Lookup Types, Mapped Types, Mapped Types - префиксы + и -”](../042.(Работа%20с%20типами)%20Оператор%20keyof,%20Lookup%20Types,%20Mapped%20Types,%20Mapped%20Types%20-%20префиксы%20+%20и%20-)),  помечает модификатор `:?` на удаление.

`````ts
type Required<T> = {
    [P in keyof T]-?: T[P];
};
`````

Тип сопоставления Required<T> является полной противоположностью типу сопоставления `Partial<T>`.

`````ts
let v0: Partial<IT>; // { a?: number; b?: string; }, необязательные члены
let v1: Required<IT>; // { a: number; b: string; }, обязательные члены
`````


## Pick


В типе сопоставлении `Pick<T, K>` определено два обязательных параметра типа. Первый параметр в качестве значения принимает конкретный тип данных. Второй параметр ожидает объединенный тип данных (`Union`), который состоит только из строковых литеральных типов, эквивалентных идентификаторам ключей типа, соответствующему первому параметру типа.

`````ts
// lib.es6.d.ts

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
`````

Предназначен сопоставленный тип `Pick<T, K>` для ограничения описания типа на основе идентификаторов его членов. Простыми словами, у разработчиков и вывода типа появилась возможность фильтровать тип по именам его членов. 

`````ts
type T1 = { f1: string, f2: number, f3: boolean };
type T2 = Pick<T1, 'f1' | 'f2'>;

let v1: T1 = { f1: '', f2: 0, f3: true }; // Ok
let v2: T2 = { f1: '', f2: 0, f3: true }; // Error
let v3: T2 = { f1: '', f2: 0 }; // Ok
`````

Подобное можно было бы реализовать с помощью только параметров обобщенного типа, но при этом требовалось бы всегда указывать входящие и выходящие типы данных.

`````ts
function pick<T, U>(object: T, ...keys: string[]): U {
    return keys.reduce((result, key) => {
        return Object.assign(result, {
            [key]: object[key]
        });
    }, {} as U);
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

let animal = { type: 'animal', arial: 'default', age: 0 };
let partial = pick<IAnimal, IAnimapPartial>(animal, 'arial', 'notexistfield'); // Ok -> { arial: string, notexistfield: undefined }
let partial = pick<IAnimal, IAnimapPartial>(animal, 'arial', 'age'); // Ok -> { arial: string, age: number }
`````

В случаях, когда разрабатываемая библиотека рассчитана на широкий круг разработчиков, рекомендуется сделать выбор в пользу динамического вывода типов.

`````ts
function pick<T, K extends keyof T>(object: T, ...keys: (K & string)[]): Pick<T, K> {
    return keys.reduce((result, key) => {
        return Object.assign(result, {
            [key]: object[key]
        });
  }, {} as Pick<T, K>);
}

let animal = {type: 'animal', arial: 'default', age: 0};
let partial = pick(animal, 'type', 'notexistfield'); // Error
let partial = pick(animal, 'arial', 'age');  // Ok -> { arial: string, age: number }
`````

Тип сопоставления `Pick<T, K>` является гомоморфным и не влияет на существующие модификаторы, а лишь расширяет модификаторы конкретного типа.

`````ts
interface IAnimal {
    readonly name?: string;
    readonly age?: number;
}

let animal: Pick<IAnimal, 'name'>; // { readonly name?: string }
`````


## Record


В типе сопоставления `Record<K, T>` определено два обязательных параметра типа. Первый параметр обязательно должен принадлежать к типу `string` или к `Literal String`. В качестве второго параметра может выступать любой конкретный тип данных. 

`````ts
// lib.es6.d.ts

type Record<K extends string, T> = {
    [P in K]: T;
};
`````

Стоит также уточнить, что первый параметр типа принимает тип `string`, а не тип интерфейса `String`. При попытке указать значение типа `String` возникнет ошибка.

`````ts
type T1 = string;
type T2 = String;
type T3 = 'f1' | 'f2';
type T4 = keyof number;

let v1: Record<T1, number>; // Ok
let v2: Record<T2, string>; // Error
let v3: Record<T3, boolean>; // Ok
let v4: Record<T4, object | symbol>; // Ok
`````

Предназначен сопоставимый тип `Record<K, T>` для описания типа, идентификаторы которого будут состоять из литералов указанных в качестве значения первому параметру и которые будут ассоциированы с типом указанным в качестве значения второму параметру.

`````ts
type T1 = Record<'f1' | 'f2', number>;
type T2 = Record<'f1' | 'f2', string>;
type T3 = Record<'f1' | 'f2', boolean | Object>;

let v1: T1 = {f1: 0, f2: 0}; // Ok
let v2: T2 = {f1: '0', f2: 0}; // Error
let v3: T3 = {f1: true, f2: {}}; // Ok
`````

Как было рассмотрено ранее, индексным полям объекта в качестве ключей можно задавать значения, принадлежащие только к типу `string` или `number`.

`````ts
interface IIndexed {
    [key: string]: any;
    [key: number]: any;
}

let object: IIndexed = { a: 0, b: 0 };
`````

Иногда может потребоваться ограничить диапазон вводимых ключей. Это очень просто сделать с помощью типа сопоставления `Record<K, T>`.

`````ts
type ValidMember = "a" | "b";

let v1: Record<ValidMember, any> = { a: 0, b: 0, c: 0 }; // Error
let v2: Record<ValidMember, any> = { a: 0, b: 0 }; // Ok
`````
