## Типы — Обобщения (Generics)
________________

Из всех тем, в которых подробно было и будет рассказано о возможностях *TypeScript*, тема обобщений является самой примечательной, и, порой, тем, кто впервые с ней знакомится, представляется сложной. Поэтому вернемся назад во времени, в мир, в котором ещё не существует обобщений. 

Для примера представим ситуацию, когда опытному разработчику поручили создать программу - виртуальный тур по зоопарку. Так как задание очень важное, разработчик решает подойти со всей серьезностью и начинает проектирование с моделирования предметной области.

Время шло, проект начал разрастаться и таким образом стал включать в себя интерфейс, описывающий общее для всех животных поле `id`, абстрактный класс `Animal`, который реализует интерфейс и ещё два абстрактных класса `Bird` и `Fish`, расширяющих абстрактный класс `Animal` и реализующих уникальные для своего типа методы `fly` и `swim`, а кроме того, ещё два конкретных класса `Eagle` и `Shark`, расширяющие `Bird` и `Fish` соответственно.

В момент, когда разработчик задумался о создании общего для всех животных хранилища-коллекции, его лицо застыло, словно печатная форма, на которой был выбит реквием по возможности написать правильный код. И это неудивительно. Для того, чтобы коллекция могла служить хранилищем для всех экземпляров животных, её данные должны быть ограничены общим для всех типов базовым типом интерфейса. Но, в таком случае, чтобы выполнять операции, присущие конкретным типам, как, например, вызов методов `fly` или `swim`, объекты, извлеченные из коллекции, будут нуждаться в дополнительной операции приведения типа.

~~~~~typescript
interface IAnimal {
    id: string;
}

abstract class Animal implements IAnimal {
    constructor(readonly id: string) {}
}

abstract class Bird extends Animal {
    public fly(): void {}
}

abstract class Fish extends Animal {
    public swim(): void {}
}

class Eagle extends Bird {}
class Shark extends Fish {}

class AnimalCollection {
    private itemAll: IAnimal[] = [];
    
    public add(animal: IAnimal): void {
        this.itemAll.push(animal);
    }

    public getItemByID(id: string): IAnimal {
        return this.itemAll.find(item => item.id === id);
    }
}

enum AnimalIDs {
     Eagle = 'eagle',
     Shark = 'shark'
}

const collection: AnimalCollection = new AnimalCollection();

collection.add(new Eagle(AnimalIDs.Eagle));
collection.add(new Shark(AnimalIDs.Shark));

var eagle: Bird = collection.getItemByID(AnimalIDs.Eagle); // Error -> Type 'IAnimal' is not assignable to type 'Bird'
var eagle: Bird = collection.getItemByID(AnimalIDs.Eagle) as Bird; // Ok

var shark: Fish = collection.getItemByID(AnimalIDs.Eagle); // Error -> Type 'IAnimal' is not assignable to type 'Fish'
var shark: Fish = collection.getItemByID(AnimalIDs.Eagle) as Fish; // Ok
~~~~~

При этом операция приведения типа не самая серьезная проблема на которой стоит заострять внимание. Настоящая проблема себя проявит тогда, когда возникнет необходимость расширить программу, введя в неё дополнительные типы, как, например, множество сотрудников, различающихся по признакам, характерным конкретно для их профессии. В этом случае придется написать ещё одну коллекцию, которая будет отличаться от предыдущей лишь типом, к которому принадлежат хранимые ей данные, что приведет к увеличению кода.

Причина возникновения повторяющихся объявлений конструкций, чьё отличие состоит лишь в типах хранимых данных, подтолкнуло разработчиков языков программирования к созданию типов данных, которые определяются в момент обращения к ним. Так на свет появилась парадигма обобщенного программирования.

*Обобщенное программирование* (Generic Programming) — это подход, при котором алгоритмы могут одинаково работать с данными, принадлежащими к разным типам данных, без изменения декларации.

Обобщенное программирование позволяет разработчикам таких языков, как, например *C#*, *Java*, *F#*, *Scala*, сокращать количество преобразований (приведений), писать многократно используемый код и при этом повышать его типобезопасность.

Центральной фигурой в мире обобщенного программирования является такое понятие, как обобщения.

*Обобщения* (Generics) — это параметризованные типы данных.

В *TypeScript* обобщения могут быть указаны для типов, определяемых с помощью:

- *псевдонимов* (`type`);
- *интерфейсов*, объявленных с помощью ключевого слова `interface`;
- *классов* (`class`), в том числе *классовых выражений* (class expression);
- *функций* (`function`), а также для *методов* (method) и *функциональных выражений*  (function expression), в том числе *стрелочных* (arrow function).


Типы данных, которым указывается обобщение, называются обобщенными или *универсальными типами данных*.

Обобщения объявляются при помощи пары угловых скобок, в которые, через запятую, заключены *параметры типа*, которые ещё называют *типо-заполнителями* или *универсальными параметрами* `<T1, T2>`. Параметры типа могут быть указаны в качестве типа везде, где требуется аннотация типа, за исключением членов класса (static members). Область видимости параметров типа ограничена областью обобщенного типа. Все вхождения параметров типа будут заменены на конкретные типы, переданные в качестве аргументов типа. Аргументы типа указываются в угловых скобках, в которых через запятую указываются конкретные типы данных `<number, string>`.

Идентификаторы параметров типа должны начинаться с заглавной буквы и, кроме фантазии разработчика, они также ограничены общими для *TypeScript* правилами. Параметрам типа, которые присутствуют в аннотации логически понятных обобщенных типов, как, например, `Array<T>`, принято начинать перечисление типов с идентификаторов `T`, `S`, `U`, `V` и т.д. С помощью `K` и `V` принято обозначать типы `Key`/`Value`, а при помощи `P` — `Property`. Идентификатором `Z` принято обозначать полиморфный тип `this`.

Кроме того, не исключены случаи, в которых предпочтительнее выглядят полные имена, как например `RequestService`, `ResponseService`, к которым ещё можно применить *Венгерскую нотацию* - `TRequestService`, `TResponseService`.

К примеру, увидев в автодоплнении редактора тип `Array<T>`, в голову сразу же приходит верный вариант, что массив будет содержать тип указанный в качестве `T`. Но, увидев `Animal<T, S>`, можно никогда не догадаться, что это типы данных, которые будут указаны для полей `id` и `arial`. В этом случае было бы гораздо предпочтительней дать говорящие имена `Animal<AnimalID, AnimalArial>`.

Указывается обобщение сразу после идентификатора типа. Это правило остается неизменным даже в тех случаях, когда идентификатор отсутствует (как в случае с безымянным классовым или функциональным выражением), или же не предусмотрен вовсе (стрелочная функция).

~~~~~typescript
type Identifier<T> = {};

interface Identifier<T> {}

class Identifier<T> {
    public identifier<T>(): void {}
}

let identifier = class <T> {};

function identifier<T>(): void {}

let identifier = function <T>(): void {};

let identifier = <T>() => {};
~~~~~

Но, прежде чем приступить к детальному рассмотрению, нужно уточнить, что правила для функций идентичны, как для функциональных выражений, так и для методов. Правила для классов ничем не отличаются от правил для классовых выражений. Исходя из этого, все дальнейшие примеры будут приводиться исключительно на классах и функциях.

В случае, когда обобщение указанно псевдониму типа (`type`), область видимости параметров типа ограничена самим выражением. 

~~~~~typescript
type T1<T> = { f1: T };
~~~~~

Параметра типа - значение 

Область видимости параметров типа при объявлении функции и функционального выражения, включая стрелочное, а также методов, ограничивается их сигнатурой и телом. Другими словами, переменную типа можно указывать в качестве типа при объявлении параметров, возвращаемого значения, а также в своем теле при объявлениях любых конструкций, требующих аннотацию типа.

~~~~~typescript
function f1<T>(p1: T): T {
    let v1: T;
    
    return v1;
}
~~~~~

При объявлении классов (в том числе и классовых выражений) и интерфейсов, область видимости параметров типа ограничиваются областью объявления и телом.

~~~~~typescript
interface IT1<T> {
    f1: T;
}

class T1<T> {
    public f1: T;
}
~~~~~

В случаях, когда класс/интерфейс расширяет другой класс/интерфейс, который объявлен как обобщенный, потомок обязан указать типы для своего предка. Потомок в качестве типа может указать своему предку параметр типа или конкретный тип данных.

~~~~~typescript
interface IT1<T> {}

interface IT3<T> extends IT1<T> {}
interface IT2 extends IT1<string> {}

class T1<T> {}

class T2<T> extends T1<T> implements IT1<T> {}
class T3 extends T1<string> implements IT1<string> {}
~~~~~

Если класс/интерфейс объявлен как обобщенный, а внутри него объявлен обобщенный метод, имеющий идентичный параметр типа, то параметр типа метода перекроет параметр типа класса (более конкретно это поведение будет рассмотрено позднее).

~~~~~typescript
interface IT1<T> {
    m2<T>(p1: T): T;
}

class T1<T> {
    public m1<T>(p1: T): T {
        let v1: T;
        
        return p1;
    }
}
~~~~~

Принадлежность параметра типа к конкретному типу данных устанавливается в момент передачи аргументов типа. При этом конкретные типы данных указываются в паре угловых скобок, а количество конкретных типов должно соответствовать количеству обязательных параметров типа.

~~~~~typescript
class Animal<T> {
    constructor(readonly id: T) {}
}

var bird: Animal<string> = new Animal('bird'); // Ok
var bird: Animal<string> = new Animal(1); // Error
var fish: Animal<number> = new Animal(1); // Ok
~~~~~

Если обобщенный тип указывается в качестве типа данных, то он обязан содержать аннотацию обобщения (исключением является параметры типа по умолчанию, которые рассматриваются далее в главе).

~~~~~typescript
class Animal<T> {
    constructor(readonly id: T) {}
}

var bird: Animal = new Animal<string>('bird'); // Error
var bird: Animal<string> = new Animal<string>('bird'); // Ok
~~~~~

Когда все обязательные параметры типа используются в параметрах конструктора, при создании экземпляра класса аннотацию обобщения можно опускать. В таком случае вывод типов определит принадлежность к типам, к которым принадлежат значения. Если же параметры являются необязательными, и значение не будет передано, то вывод типов определит принадлежность параметров типа к типу данных `unknown`.

~~~~~typescript
class Animal<T> {
    constructor(readonly id?: T) {}
}
  
let bird: Animal<string> = new Animal('bird'); // Ok -> bird: Animal<string>
let fish = new Animal('fish'); // Ok -> fish: Animal<string>
let insect = new Animal(); // Ok -> insect: Animal<unknown>
~~~~~

Относительно обобщенных типов существуют такие понятия, как *открытый* (open) и *закрытый* (closed) тип. Обобщенный тип данных в момент определения называется *открытым*. Кроме того, типы, которые указаны в аннотации и у которых хотя бы один из аргументов типа является параметром типа, также являются открытыми типами. И наоборот, если все аргументы типа принадлежат к конкретным типам, то такой обобщенный тип является *закрытым* типом.

~~~~~typescript
class T0<T, U> {} //  T0 - открытый тип

class T1<T> {
  public f: T0<number, T>; // T0 - открытый тип
  public f1: T0<number, string>; // T0 - закрытый тип
}
~~~~~

Те же самые правила применимы и к функциям, но за одним исключением — вывод типов для примитивных типов определяет принадлежность параметров типа к литеральным типам данных.

~~~~~typescript
function action<T>(value?: T): T | undefined {
    return value;
}
  
action<number>(0); // function action<number>(value?: number | undefined): number | undefined
action(0); // function action<0>(value?: 0 | undefined): 0 | undefined

action<string>('0'); // function action<string>(value?: string | undefined): string | undefined
action('0'); // function action<"0">(value?: "0" | undefined): "0" | undefined

action(); // function action<unknown>(value?: unknown): unknown
~~~~~

Тогда, когда параметры типа не участвуют в операциях при создании экземпляра класса и при этом аннотация обобщения не была указана явно, то вывод типа теряет возможность установить принадлежность к типу по значениям и поэтому устанавливает объектный тип.

~~~~~typescript
class Animal<T> {
    public name: T;
    
    constructor(readonly id: string) {}
}
   
let bird: Animal<string> = new Animal('bird#1');
bird.name = 'bird';
// Ok -> bird: Animal<string>
// Ok -> (property) Animal<string>.name: string

let fish = new Animal<string>('fish#1');
fish.name = 'fish';
// Ok -> fish: Animal<string>
// Ok -> (property) Animal<string>.name: string

let insect = new Animal('insect#1');
insect.name = 'insect';
// Ok -> insect: Animal<unknown>
// Ok -> (property) Animal<unknown>.name: unknown
~~~~~

И опять, эти же правила верны и для функций.

~~~~~typescript
function action<T>(value?: T): T | undefined {
    return value;
}

action<string>('0'); // function action<string>(value?: string | undefined): string | undefined
action('0'); // function action<"0">(value?: "0" | undefined): "0" | undefined
action(); // function action<unknown>(value?: unknown): unknown
~~~~~

В случаях, когда обобщенный класс содержит обобщенный метод, параметры типа метода будут затенять параметры типа класса.

~~~~~typescript
type ReturnParam<T, U> = { a: T, b: U };

class GenericClass<T, U> {
    public defaultMethod<T> (a: T, b?: U): ReturnParam<T, U> {
        return { a, b };
    }
    
    public genericMethod<T> (a: T, b?: U): ReturnParam<T, U> {
        return { a, b };
    }
}

let generic: GenericClass<string, number> = new GenericClass();
generic.defaultMethod('0', 0);
generic.genericMethod<boolean>(true, 0);
generic.genericMethod('0');

// Ok -> generic: GenericClass<string, number>
// Ok -> (method) defaultMethod<string>(a: string, b?: number): ReturnParam<string, number>
// Ok -> (method) genericMethod<boolean>(a: boolean, b?: number): ReturnParam<boolean, number>
// Ok -> (method) genericMethod<string>(a: string, b?: number): ReturnParam<string, number>
~~~~~

Стоит заметить, что в *TypeScript*  нельзя создавать экземпляры типов, определенных параметрами типа.

~~~~~typescript
interface CustomConstructor<T> {
    new(): T;
}

class T1<T extends CustomConstructor<T>>{
    public getInstance(): T {
        return new T(); // Error
    }
}
~~~~~

Кроме того, два типа, определяемые классом или функцией, считаются идентичными, вне зависимости от того, являются они обобщенными или нет.

~~~~~typescript
type T1 = {}
type T1<T> = {} // Error -> Duplicate identifier

class T2<T> {}
class T2 {} // Error -> Duplicate identifier

class T3 {
    public m1<T>(): void {}
    public m1(): void {} // Error -> Duplicate method
}

function f1<T>(): void {}
function f1(): void {} // Error -> Duplicate function
~~~~~

## Параметры типа - extends (generic constraints)
________________

Помимо того, что параметры типа можно указывать в качестве конкретного типа данных, они также могут расширять другие типы данных, в том числе и другие параметры типа. Такой механизм требуется, когда значения внутри обобщенного типа должны обладать ограниченным набором признаков.

Ключевое слово `extends` размещается левее расширяемого типа и правее идентификатора параметра типа `<T extends Type>`. В качестве расширяемого типа может быть указан как конкретный тип данных, так и другой параметр типа. При чем в случае, когда один параметр типа расширяет другой, нет разницы в каком порядке они объявляются. Если параметр типа ограничен другим параметром типа, то такое ограничение называют *неприкрытым ограничением типа* (naked type constraint),

~~~~~typescript
class T1 <T extends number> {}
class T2 <T extends number, U extends T> {} // неприкрытое ограничение типа
class T3 <U extends T, T extends number> {}
~~~~~

Механизм расширения требуется в тех случаях, при которых параметр типа должен обладать некоторыми характеристиками, требующимися для выполнения каких-либо операций над этим типом.

Для примера рассмотрим случай, когда в коллекции `T` (`Collection<T>`) объявлен метод получения элемента по имени (`getItemByName`).

~~~~~typescript
class Collection<T> {
    private itemAll: T[] = [];
    
    public add(item: T): void {
        this.itemAll.push(item);
    }

    public getItemByName(name: string): T {
        return this.itemAll.find(item => item.name === name); // Error -> Property 'name' does not exist on type 'T'
    }
}
~~~~~

При операции поиска в массиве возникнет ошибка. Ошибка возникнет потому, что в типе `T` не описано свойство `name`.

Для того чтобы ошибка исчезла, тип `T` должен расширить тип, в котором описано свойство `name`. В таком случае предпочтительней будет вариант объявления интерфейса `IName` с последующим его расширением.

~~~~~typescript
interface IName {
    name: string;
}

class Collection<T extends IName> {
    private itemAll: T[] = [];

    public add(item: T): void {
        this.itemAll.push(item);
    }

    public getItemByName(name: string): T {
        return this.itemAll.find(item => item.name === name); // Ok
    }
}

abstract class Animal {
    constructor(readonly name: string) {}
}

class Bird extends Animal {}
class Fish extends Animal {}

let birdCollection: Collection<Bird> = new Collection();
birdCollection.add(new Bird('raven'));
birdCollection.add(new Bird('owl'));

let raven: Bird = birdCollection.getItemByName('raven'); // Ok

let fishCollection: Collection<Fish> = new Collection();
fishCollection.add(new Fish('shark'));
fishCollection.add(new Fish('barracuda'));

let shark: Fish = fishCollection.getItemByName('shark'); // Ok
~~~~~

Пример, когда параметр типа расширяет другой параметр типа, будет рассмотрен немного позднее.

Также не лишним будет заметить, что когда параметр типа расширяет другой тип, то в качестве аргумента типа можно будет передать только совместимый с ним тип.

~~~~~typescript
interface Bird { fly(): void; }
interface Fish { swim(): void; }

interface IEgg<T extends Bird> { child: T; }

let v1: IEgg<Bird>; // Ok
let v2: IEgg<Fish>; // Error -> Type 'Fish' does not satisfy the constraint 'Bird'
~~~~~

Кроме того, расширять можно любые предназначенные для расширения типы, полученные любым доступным путем.

~~~~~typescript
interface IAnimal {
    name: string;
    age: number;
}

let animal: IAnimal;

class Bird<T extends typeof animal> {} // T extends IAnimal
class Fish<K extends keyof IAnimal> {} // K extends "name" | "age"
class Insect<V extends IAnimal[K], K extends keyof IAnimal> {} // V extends string | number
class Reptile<T extends number | string, U extends number & string> {}
~~~~~


## Параметра типа - значение по умолчанию = (generic parameter defaults)
________________

В *TypeScript* существует возможность указывать значение по умолчанию в объявлении обобщенного типа.

Значение по умолчанию указывается с помощью оператора равно `=`, слева от которого располагается параметр типа, а справа конкретный тип, либо другой параметр типа `T = Type`. Параметры, которым заданы значения по умолчанию, являются необязательными параметрами. Необязательные параметры типа должны быть перечислены строго после обязательных. Если параметр типа указывается в качестве типа по умолчанию, то ему самому должно быть задано значение по умолчанию, либо он должен расширять другой тип. 

~~~~~typescript
class T1<T = string> {} // Ok
class T2<T = U, U> {} // Error -> необязательное перед обязательным
class T3<T = U, U  = number> {} // Ok

class T4<T = U, U extends number> {} // Error -> необязательное перед обязательным
class T5<U extends number, T = U> {} // Ok.
~~~~~

Кроме того, можно указывать значение по умолчанию для типа, расширяющего другой тип. В этом случае оператор равно `=` указывается после расширяемого типа.

~~~~~typescript
class T1 <T extends T2 = T3> {}
~~~~~

В момент, когда тип `T` расширяет другой тип, он получает признаки этого типа. Именно поэтому для параметра типа, расширяющего другой тип, в качестве типа по умолчанию можно указывать только совместимый с ним тип. 

Чтобы было проще понять, нужно представить два класса, один из которых расширяет другой. В этом случае переменной с типом суперкласса можно в качестве значения присвоить объект его подкласса, но — не наоборот.

~~~~~typescript
class Animal {
    public name: string;
}

class Bird extends Animal {
    public fly(): void {}
}

let bird: Animal = new Bird(); // Ok
let animal: Bird = new Animal(); // Error
~~~~~

Тот же самый механизм используется для параметров типа.

~~~~~typescript
class Animal {
    public name: string;
}

class Bird extends Animal {
    public fly(): void {}
}

class T1 <T extends Animal = Bird> {} // Ok
// -------(   Animal   ) = Bird

class T2 <T extends Bird = Animal> {} // Error
// -------(   Bird   ) = Animal
~~~~~

Важным моментом является понимание того, как вывод типов обрабатывает значение по умолчанию. Но чтобы не запутаться, нужно разграничить поведение типа `T` на внешнее (обозначим его как outside behavior), и внутреннее (inside behavior). Внешнее поведение обуславливается операциями, которые можно производить над значениями снаружи обобщенного типа. Соответственно, внутренним поведением обуславливаются операции, которые можно производить внутри обобщенного типа, то есть в области видимости параметров типа. В данном контексте слово "поведение" нужно понимать как "к какому типу данных вывод типов установит принадлежность для значения, чей тип указан с помощью параметра типа `T`". Но обо всем по порядку.

Как известно на данный момент, с точки зрения внешнего поведения обобщенный класс `GenericType<T>`, экземпляр которого был ассоциирован с конструкцией без явного аннотирования типа, будет расцениваться выводом типа, как `GenericType<unknown>`. 

~~~~~typescript
// outside behavior

class Animal { 
    name: string = 'animal'; 
}

class CustomArray<T> extends Array<T> {}

let animalArray = new CustomArray(); // let CustomArray: CustomArray<unknown>
let animal = animalArray[0]; // let animal: unknown
animal.name // Error, Object is of type 'unknown'
~~~~~

Установив для типа `T` значение по умолчанию, с точки зрения внешнего поведения, вывод типов будет расценивать тип `T` как тип, наделенный некоторыми характеристиками. Другими словами, вывод типов будет считать тип `T` принадлежащим к типу, указанному по умолчанию.

~~~~~typescript
// outside behavior

class Animal { 
    name: string = 'animal';
}

class CustomArray<T = Animal> extends Array<T> {}

let animalArray = new CustomArray(); // let animalArray: CustomArray<Animal>
let animal = animalArray[0]; // let animal: Animal
animal.name // Ok
~~~~~

При этом значение по умолчанию можно переопределить.

~~~~~typescript
// outside behavior

class Animal { 
    name: string = 'animal';
}

class Car { 
    type: string = 'car';
}

class CustomArray<T = Animal> extends Array<T> {}

let animalArray = new CustomArray(); // let animalArray: CustomArray<Animal>
let animal = animalArray[0]; // let anima: Animal
animal.name // Ok

let carArray = new CustomArray<Car>(); // let carArray: CustomArray<Car>
let car = carArray[0]; // let car: Car
car.type // Ok
~~~~~

Кроме того, обобщенный тип, которому задано значение по умолчанию, можно указать в аннотации без явного указания параметра типа.

~~~~~typescript
// outside behavior

class A<T> {}
class B<T = number> {}

let a: A = new A(); // Error
let b: B = new B(); // Ok, let b: B<number>
~~~~~

В случае с внутренним поведением главное не забывать, что поведение для значения по умолчанию не имеет ничего общего с поведением, возникающим при использовании механизма ограничения параметров типа с помощью ключевого слова `extends`. При использовании механизма ограничения, параметр типа в области его видения расценивается как тип, наделенный характеристиками типов, указанных после ключевого слова `extends`. Тем не менее параметр типа, которому указано лишь значение по умолчанию, в области видимости расценивается как параметр типа, которому вообще ничего не задано, то есть как тип `T`.

~~~~~typescript
// inside behavior

class A<T extends string> {
    method(p: T) {
        p.toLocaleLowerCase(); // Ok
    }
}

class B<T = string> {
    method(p: T) {
        p.toLocaleLowerCase(); // Error, Property 'toLocaleLowerCase' does not exist on type 'T'.
    }
}
~~~~~
Несмотря на то, что значения по умолчанию указываются в объявлении параметров типа, предназначаются они для аргументов типа. Простыми словами, с помощью оператора равно `=` указывается значение по умолчанию для аргументов типа, а не для параметров типа.


## Параметры типа - как тип данных
________________

Параметры типа, указанные в угловых скобках при объявлении обобщенного типа, изначально не принадлежат ни к одному типу данных. Несмотря на это, компилятор расценивает параметры типа, как совместимые с некоторыми типами данных.

Так, например, в обычном режиме, параметры типа считаются совместимыми с такими типами, как `Any`, `Null`, `Undefined`, `Never` и с самим собой. Активная опция компилятора `--strictNullChecks` выбивает из этого списка типы `Null` и `Undefined`.

~~~~~typescript
function f0<T>(p: any): T { // Ok, any совместим с T
    return p;
}

function f1<T>(p: null): T { // Ok, null при неактивном флаге --strictNullChecks совместим с T
    return p;
}

function f2<T>(p: undefined): T { // Ok, undefined при неактивном флаге --strictNullChecks совместим с T
    return p;
}

function f3<T>(p: never): T { // Ok, never совместим с T
    return p;
}

function f4<T>(p: T): T { // Ok, T совместим с T
    return p;
}
~~~~~

Если обобщенная коллекция, в качестве аргумента типа, получает тип данных объединение (`Union`), то все её элементы будут принадлежать к типу объединения. Простыми словами, элемент из такой коллекции не будет, без явного преобразования, совместим ни с одним из вариантов, составляющих тип объединение.

~~~~~typescript
interface IName { name: string; }

interface IAnimal extends IName {}

abstract class Animal implements IAnimal {
  constructor(readonly name: string) {}
}

class Bird extends Animal {
    public fly(): void {}
}

class Fish extends Animal {
    public swim(): void {}
}

class Collection<T extends IName> {
    private itemAll: T[] = [];
    
    public add(item: T): void {
        this.itemAll.push(item);
    }

    public getItemByName(name: string): T {
        return this.itemAll.find(item => item.name === name); // Ok
    }
}

let collection: Collection<Bird | Fish> = new Collection();
  collection.add(new Bird('bird'));
  collection.add(new Fish('fish'));

var bird: Bird = collection.getItemByName('bird'); // Error -> Type 'Bird | Fish' is not assignable to type 'Bird'
var bird: Bird = collection.getItemByName('bird') as Bird; // Ok
~~~~~

Но операцию приведения типов можно поместить (сокрыть) прямо в метод самой коллекции и тем самым упростить её использование. Для этого метод должен быть обобщенным, а его параметр типа, указанный в качестве возвращаемого из функции типа, расширять параметр типа самой коллекции. 

~~~~~typescript
// ...

class Collection<T extends IName> {
    private itemAll: T[] = [];
    
    public add(item: T): void {
        this.itemAll.push(item);
    }

    // 1. параметр типа U должен расширять параметр типа T
    // 2. возвращаемый тип указан как U
    // 3. возвращаемое значение нуждается в явном преобразовании к типу U
    public getItemByName<U extends T>(name: string): U {
        return this.itemAll.find(item => item.name === name) as U; // Ok
    }
}

let collection: Collection<Bird | Fish> = new Collection();
 collection.add(new Bird('bird'));
 collection.add(new Fish('fish'));

var bird: Bird = collection.getItemByName('bird'); // Ok
var birdOrFish = collection.getItemByName('bird'); // Bad, var birdOrFish: Bird | Fish
var bird = collection.getItemByName<Bird>('bird'); // Ok, var bird: Bird
~~~~~

Сокрытие приведения типов прямо в методе коллекции повысило “привлекательность” кода. Но, все же, в случаях, когда элемент коллекции присваивается конструкции без явной аннотации типа, появляется потребность вызывать обобщенный метод с аргументами типа.

Кроме того, нужно не забывать, что два разных объявления параметров типа несовместимы, даже если у них идентичные идентификаторы.

~~~~~typescript
class Identifier<T> {
    array: T[] = [];
    
    method<T>(param: T): void  {
        this.array.push(param); // Error, T объявленный в сигнатуре функции не совместим с типом T объявленном в сигнатуре класса
    }
}
~~~~~
