# Readonly, Partial, Required, Pick, Record

Чтобы сделать повседневные будни разработчика немного легче, _TypeScript_, реализовал несколько предопределенных сопоставимых типов, как - `Readonly<T>`, `Partial<T>`, `Required<T>`, `Pick<T, K>` и `Record<K, T>`. За исключением `Record<K, T>`, все они являются так называемым _гомоморфными типами_ (homomorphic types). Простыми словами, _гомоморфизм_ — это возможность изменять функционал сохраняя первоначальные свойства всех операций. Если на данный момент это кажется сложным, то текущая глава покажет, что за данным термином не скрывается ничего сложного. Кроме того, в ней будет подробно рассмотрен каждый из перечисленных типов.


## Readonly<T> (сделать члены объекта только для чтения)

Сопоставимый тип `Readonly<T>` добавляет каждому члену объекта модификатор `readonly`, делая их тем самым только для чтения.

`````ts
// lib.es6.d.ts

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
`````

Наиболее частое применение данного типа можно встретить при определении функций и методов параметры которых принадлежать к объектным типам. Поскольку объектные типы передаются по ссылке, то с высокой долей вероятности, случайное изменение члена объекта может привести к непредсказуемым последствиям.

`````ts
interface IPerson {
  name: string;
  age: number;
}

/**
 * Функция, параметр которой не
 * защищен от случайного изменения.
 * 
 * Поскольку объектные типы передаются
 * по ссылке, то с высокой долей вероятности,
 * случайное изменение поля name нарушит ожидаемый
 * ход выполнения программы.
 */
function mutableAction(person: IPerson) {
  person.name = "NewName"; // Ok
}


/**
 * Надежная функция защищающая свои
 * парметры от изменения не требуя описания
 * нового неизменяемого типа.
 */
function immutableAction(person: Readonly<IPerson>) {
  person.name = "NewName"; // Error -> Cannot assign to 'name' because it is a read-only property.
}
`````

Тип сопоставления `Readonly<T>` является гомоморфным и добавляя свой модификатор `readonly` не влияет на уже существующие модификаторы. Сохранения исходным типом своих первоначальных характеристик (в данном случае — модификаторы), делает сопоставленный тип `Readonly<T>` гомоморфным.

`````ts
interface IPerson {
  gender?: string;
}

type Person = Readonly<IPerson> // type Person = { readonly gender?: string; }
`````

В качестве примера можно привести часто встречающейся на практике случай, в котором универсальный интерфейс описывает объект предназначенный для работы с данными. Поскольку в львиной доле данные представляются объектными типами, интерфейс декларирует их как неизменяемые, что в дальнейшем, при его реализации, избавит разработчика в типизации конструкций и тем самым сэкономив для него время на более увлекательные задачи.

`````ts
/**
 * Интерфейс необходим для описания экземпляра
 * провайдеров с которыми будет сопряженно
 * приложение. Кроме того, интерфейс описывает
 * поставляемые данные как только для чтения,
 * что в будущем может сэкономить время.
 */
interface IDataProvider<OutputData, InputData = null> {
  getData(): Readonly<OutputData>;
}

/**
 * Абстрактный класс описание определяющий
 * поле data доступный только потомка как
 * только для чтения. Это позволит предатвратить
 * случайное изменение данных в классах потомках.
 */
abstract class DataProvider<InputData, OutputData = null> implements IDataProvider<InputData, OutputData> {
  constructor(protected data?: Readonly<OutputData>) {
  }

  abstract getData(): Readonly<InputData>
}



interface IPerson {
  firstName: string;
  lastName: string;
}

interface IPersonDataProvider {
  name: string;
}

class PersonDataProvider extends DataProvider<IPerson, IPersonDataProvider> {
    getData() {
      /**
       * Работая в теле потомков DataProvider
       * будет не так просто случайно изменить
       * данные доступные через ссылку this.data
       */
      let [firstName, lastName] = this.data.name.split(` `);
      let result = { firstName, lastName };

      return result;
    }

}


let provider = new PersonDataProvider({ name: `Ivan Ivanov` });
`````


## Partial<T> (сделать все члены объекта необязательными)

Сопоставимый тип `Partial<T>` добавляет членам объекта модификатор `?:` делая их таким образом необязательными.

`````ts
// lib.es6.d.ts

type Partial<T> = {
    [P in keyof T]?: T[P];
};
`````

Тип сопоставления `Partial<T>` является гомоморфным и не влияет на существующие модификаторы, а лишь расширяет модификаторы конкретного типа.

`````ts
interface IPerson {
  readonly name: string; // поле помеченно как только для чтения
}

/**
 * добавлен необязательны модификатор
 * и при этом сохранен модификатор readonly
 * 
 * type Person = {
 *  readonly name?: string;
 * }
 */
type Person = Partial<IPerson>
`````

Представьте приложение зависящее от конфигурации, которая как полностью, так и частично, может быть переопределена пользователем. Поскольку работоспособность приложения завязана на конфигурации, члены определенные в типе представляющем её, должны быть обязательными. Но поскольку пользователь может переопределить лишь часть конфигурации, функция выполняющая её слияние с конфигурацией по умолчанию, не может указать в аннотации типа уже определенный тип, так как его члены обязательны. Описывать новый тип, слишком утомительно. В таких случаях необходимо прибегать к помощи `Partial<T>`.

`````ts
interface IConfig {
  domain: string;
  port: "80" | "90";
}

const DEFAULT_CONFIG: IConfig = {
  domain: `https://domain.com`,
  port: "80"
};


function createConfig(config: IConfig): IConfig {
  return Object.assign({}, DEFAULT_CONFIG, config);
}

/**
 * Error -> Поскольку в типе IConfig все
 * поля обязательные, данную функцию
 * не получится вызвать с частичной конфигурацией.
 */
createConfig({
  port: "80"
});


function createConfig(config:Partial<IConfig>): IConfig {
  return Object.assign({}, DEFAULT_CONFIG, config);
}

/**
 * Ok -> Тип Partial<T> сделал все члены
 * описанные в IConfig необязательными,
 * поэтому пользователь может переопределит
 * конфигурацию частично.
 */
createConfig({
  port: "80"
});
`````

## Required<T> (сделать все необязательные члены обязательными)

Сопоставимый тип `Required<T>` удаляет все необязательные модификаторы `?:` приводя члены объекта к обязательным. Достигается это путем удаления необязательных модификаторов при помощи механизма _префиксов - и +_ рассматриваемого в главе [“Оператор keyof, Lookup Types, Mapped Types, Mapped Types - префиксы + и -”](../042.(Работа%20с%20типами)%20Оператор%20keyof,%20Lookup%20Types,%20Mapped%20Types,%20Mapped%20Types%20-%20префиксы%20+%20и%20-)).

`````ts
type Required<T> = {
    [P in keyof T]-?: T[P];
};
`````

Тип сопоставления `Required<T>` является полной противоположностью типу сопоставления `Partial<T>`.

`````ts
interface IConfig {
  domain: string;
  port: "80" | "90";
}

/**
 * Partial добавил членам IConfig
 * необязательный модификатор ->
 *
 * type T0 = {
 *  domain?: string;
 *  port?: "80" | "90";
 * }
 */
type T0 = Partial<IConfig>;

/**
 * Required удалил необязательные модификаторы
 * у типа T0 ->
 *
 * type T1 = {
 *  domain: string;
 *  port: "80" | "90";
 * }
 */
type T1 = Required<T0>;
`````

Тип сопоставления `Required<T>` является гомоморфным и не влияет на модификаторы отличные от необязательных.

`````ts
interface IT {
  readonly a?: number;
  readonly b?: string;
}

/**
 * Модификаторы readonly остались
 * на месте ->
 *
 * type T0 = {
 *  readonly a: number;
 *  readonly b: string;
 * }
 */
type T0 = Required<IT>;
`````

## Pick (отфильтровать объектный тип)

Сопоставимый тип `Pick<T, K>` предназначен для фильтрации объектного типа ожидаемого в качестве первого параметра типа. Фильтрация происходит на основе ключей представленных множеством литеральных строковых типов ожидаемых в качестве второго параметра типа. 

`````ts
// lib.es6.d.ts

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
`````

Простыми словами, результатом преобразования `Pick<T, K>` будет являться тип состоящий из членов первого параметра идентификаторы которых указанны во втором параметре.

`````ts
interface IT {
  a: number;
  b: string;
  c: boolean;
}

/**
 * Поле "с" отфильтрованно ->
 * 
 * type T0 = { a: number; b: string; }
 */
type T0 = Pick<IT, "a" | "b">;
`````

Стоит заметить, что в случае указания несуществующих ключей возникнет ошибка.

`````ts
interface IT {
  a: number;
  b: string;
  c: boolean;
}

/**
 * Error ->
 *
 * Type '"a" | "U"' does not satisfy the constraint '"a" | "b" | "c"'.
 * Type '"U"' is not assignable to type '"a" | "b" | "c"'.
 */
type T1 = Pick<IT, "a" | "U">;
`````

Тип сопоставления `Pick<T, K>` является гомоморфным и не влияет на существующие модификаторы, а лишь расширяет модификаторы конкретного типа.

`````ts
interface IT {
  readonly a?: number;
  readonly b?: string;
  readonly c?: boolean;
}

/**
 * Модификаторы readonly и ? сохранены ->
 *
 * type T2 = { readonly a?: number; }
 */
type T2 = Pick<IT, "a">;
`````

Пример, который самым первым приходит в голову, является функция `pick`, в задачу которой входит создавать новый объект путем фильтрации членов существующего.

`````ts
function pick<T, K extends string & keyof T>(object: T, ...keys: K[]) {
    return Object
        .entries(object) // преобразуем объект в массив [идентификатор, значение]
        .filter(([key]: Array<K>) => keys.includes(key)) // фильтруем
        .reduce((result, [key, value]) => ({...result, [key]: value}), {} as Pick<T, K>); // собираем объект из прошедших фильтрацию членов
}


let person = pick({
    a: 0,
    b: ``,
    c: true
}, `a`, `b`);

person.a; // Ok
person.b; // Ok
person.c; // Error -> Property 'c' does not exist on type 'Pick<{ a: number; b: string; c: boolean; }, "a" | "b">'.

`````

## Record<K, T> (динамически определить поле в объектном типе)

Сопоставимый тип `Record<K, T>` предназначен для динамического определения полей в объектном типе. Данный тип определяет два параметра типа. В качестве первого параметра ожидается множество ключей представленных множеством `string` или `Literal String` - `Record<"a", T>` или `Record<"a" | "b", T>`. В качестве второго параметра ожидается конкретный тип данных, который будет ассоциирован с каждым ключом.

`````ts
// lib.es6.d.ts

type Record<K extends string, T> = {
    [P in K]: T;
};
`````

Самый простой пример, который первым приходит в голову, это замена индексных сигнатур.

`````ts
/**
 * Поле payload определенно как объект
 * с индексной сигнатурой, что позволит
 * динамически записывать в него поля.
 */
interface IConfigurationIndexSignature {
  payload: {
    [key: string]: string
  }
}

/**
 * Поле payload определенно как
 * Record<string, string> что аналогично
 * предыдущему варианту, но выглядит более
 * декларативно.
 */
interface IConfigurationWithRecord {
  payload: Record<string, string>
}


let configA: IConfigurationIndexSignature = {
  payload: {
    a: `a`,
    b: `b`
  }
}; // Ok
let configB: IConfigurationWithRecord = {
  payload: {
    a: `a`,
    b: `b`
  }
}; // Ok
`````

Но в отличии от индексной сигнатуры типа `Record<K, T>` может ограничить диапазон ключей.

`````ts
type WwwConfig = Record<"port" | "domain", string>

let wwwConfig: WwwConfig = {
  port: "80",
  domain: "https://domain.com",

  user: "User" // Error -> Object literal may only specify known properties, and 'user' does not exist in type 'Record<"port" | "domain", string>'.
};
`````

В занном случае было бы даже более корректным использовать `Record<K, T>` в совокупности с ранее рассмотренным типом `Partial<T>`.

`````ts
type WwwConfig = Partial<Record<"port" | "domain", string>>

let wwwConfig: WwwConfig = {
  port: "80",
               // Ok -> поле domain теперь не обязательное
  user: "User" // Error -> Object literal may only specify known properties, and 'user' does not exist in type 'Record<"port" | "domain", string>'.
};
`````

Также не будет лишним упомянуть, что поведение данного типа при определении в объекте с предопределенными членами, идентификаторы которых ассоциированы с типами отличными от типа указанного в качестве второго параметра, идентично поведению индексной сигнатуры. Напомню, что при попытке определить в объекте члены идентификаторы которых будут ассоциированы с типами отличными от указанных в индексной сигнатуре, возникнет ошибка.

`````ts
/**
 * Ok -> поле a ассоциированно с таким
 * же типом что указан в индексной сигнатуре.
 */
interface T0 {
  a: number;
  
  [key: string]: number;
}

/**
 * Error -> тип поля a не совпадает с типом
 * указанным в индексной сигнатуре.
 */
interface T1 {
  a: string; // Error -> Property 'a' of type 'string' is not assignable to string index type 'number'.

  [key: string]: number;
}
`````

Данный пример можно переписать с использованием типа пересечения.

`````ts
interface IValue {
  a: number;
}

interface IDynamic {
  [key: string]: string;
}


type T = IDynamic & IValue;

/**
 * Error -> 
 * Type '{ a: number; }' is not assignable to type 'IDynamic'. 
 * Property 'a' is incompatible with index signature.
 * Type 'number' is not assignable to type 'string'.
 */
let t: T = {
  a: 0,
}
`````

Аналогичное поведение будет и для пересечения определяемого типом `Record<K, T>`.

`````ts
interface IValue {
  a: number;
}


type T = Record<string, string> & IValue;

/**
 * Error -> 
 * Type '{ a: number; }' is not assignable to type 'Record<string, string>'.
 * Property 'a' is incompatible with index signature.
 * Type 'number' is not assignable to type 'string'.
 */
let t: T = {
  a: 0,
}
`````
