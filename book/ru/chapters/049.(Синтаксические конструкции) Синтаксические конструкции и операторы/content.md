# Синтаксические конструкции и операторы

Кроме типизации, _TypeScript_ пытается сделать жизнь разработчиков более комфортной за счет добавления синтаксического сахара в виде операторов не существующих в _JavaScript_ мире. Помимо этого, текущая глава поведает о неоднозначных моментах связанных с уже хорошо известными, по _JavaScript_, операторами.

## Операторы присваивания короткого замыкания (&&=, ||=, &&=)

В большинстве языков, в том числе и _JavaScript_, существует такое понятие как составные операторы присваивания (_compound assignment operators_) позволяющие совмещать операцию присваивания при помощи оператора `=`, с какой-либо другой допустимой операции (`+-*/!` и т.д.) и тем самым значительно сокращать выражения.

`````ts
let a = 1;
let b = 2;

a += b; // тоже самое, что a = a + b
a *= b; // тоже самое, что a = a * b
// и т.д.
`````

Множество существующих операторов совместимы с оператором `=` за исключением трех, таких часто применяемых операторов, как _логическое И_ (`&&`), _логическое ИЛИ_ (`||`) и оператор _нулевого слияния_ (`??`).

`````ts
a = a && b;
a = a || b;
a = a ?? b;
`````

Поскольку дополнительные синтаксические возможности лишь упрощают процесс разработки программ, благодаря комьюнити, в _TypeScript_ появился механизм обозначаемый как _операторы присваивания короткого замыкания_. Данный механизм позволяет совмещать упомянутые ранее операторы `&&`, `||` и `??` непосредственно с оператором присваивания.


`````ts
let a = {};
let b = {};

a &&= b; // a && (a = b)
a ||= b; // a || (a = b);
a ??= b; // a !== null && a !== void 0 ? a : (a = b);
`````

## Операнды для delete должны быть необязательными

Представьте случай при котором в _JavaScript_ коде вам необходимо удалить у объекта одно из трех определенных в нем полей.

`````js
let o = {
    a: 0,
    b: '',
    c: true
};

const f = o => delete o.b;

f(0); // удаляем поле b

Object
    .entries(o)
    .forEach( ([key, value]) => console.log(key, value) );
/**
 * log -
 * -> a, 0
 * -> b, true
 */
`````

Задача предельно простая только с точки зрения динамической типизации _JavaScript_. С точки зрения статической типизации _TypeScript_, удаление члена объекта нарушает контракт представляемый декларацией типа. Простыми словами, _TypeScript_ не может гарантировать типобезопасность, пока не может гарантировать существование членов объекта описанных в его типе.


`````ts
type O = {
    a: number;
    b: string;
    c: boolean;
}

let o: O = {
    a: 0,
    b: '',
    c: true
};

const f = (o: O) => delete o.b; // [*]

f(o); // удаляем поле b

/**
 * [*] Error ->
 * Объект o больше не отвечает
 * типу O поскольку в нем нет
 * обязательного поля b. Поэтому
 * если дальше по ходу выполнения
 * программы будут производится
 * операции над удаленным полем,
 *, то возникнет ошибка времени выполнения.
 */

`````

Поэтому _TypeScript_ позволяет удалять члены объекта при помощи оператора `delete` только в том случае, если они имеют тип `any`, `unknown`, `never` или объявлены как необязательные.

`````ts
type T0 = {
    field: any;
}

const f0 = (o: T0) => delete o.field; // Ok


type T1 = {
    field: unknown;
}

const f1 = (o: T1) => delete o.field; // Ok


type T2 = {
    field: never;
}

const f2 = (o: T2) => delete o.field; // Ok


type T3 = {
    field?: number;
}

const f3 = (o: T3) => delete o.field; // Ok


type T4 = {
    field: number;
}

const f4 = (o: T4) => delete o.field; // Error -> The operand of a 'delete' operator must be optional.

`````

## Объявление переменных 'необязательными' при деструктуризации массивоподобных объектов

При активном рекомендуемым флаге `--noUnusedLocals`, компилятор выбрасывает ошибки, если переменные, объявленные при деструктуризации массивоподобных объектов, не задействованы в коде.

`````ts
function getPlayerControlAll(){
    return [()=>{}, ()=>{}];
}

/**
 * Где-то в другом файле
 */
function f(){
    /**
     * [*] Error -> 'stop' is declared but its value is never read.
     */
    let [stop /** [*] */, play] = getPlayerControlAll();

    return play;
}
`````

Несмотря на то, что существует способ получать только необходимые значения, это не решит проблему семантики кода, поскольку идентификатор переменной является частью мозаики иллюстрирующей работу логики. И хотя в _TypeScript_, эту проблему можно решить и другими способами, они ни чем не смогут помочь скомпилированному в _JavaScript_ коду.

`````ts
function getPlayerControlAll(){
    return [()=>{}, ()=>{}];
}

/**
 * Где-то в другом файле
 */
function f(){
    /**
     * Ошибки больше нет, поскольку первый, неиспользуемый
     * элемент пропущен. Но не смотря на это, семантически становится
     * не понятно, что же возражает функция getPlayerControlAll().
     *
     * И несмотря на способы способные решить проблему в TypeScript,
     * в скомпилированном виде, от них не останется и следа.
     */
    let [, play] = getPlayerControlAll();

    return play;
}

`````

Для таких случаев, в _TypeScript_ существует возможность, при деструктуризации массивоподобных объектов, объявлять переменные, как _необязательные_. Что бы переменная расценивалась компилятором, как _необязательная_, её идентификатор должен начинаться с нижнего подчёркивания `_identifier`.

`````ts
function getPlayerControlAll(){
    return [()=>{}, ()=>{}];
}

/**
 * Где-то в другом файле
 */
function f(){
    /**
     * [*] Ok -> несмотря на то, что переменная stop не
     * задействована в коде, ошибки не возникает, что позволяет
     * более глубоко понять логику кода. 
     */
    let [_stop /** [*] */, play] = getPlayerControlAll();

    return play;
}
`````


## Модификатор abstract для описания типа конструктора

Абстрактные классы предназначены исключительно для расширения (невозможно создать его экземпляр с помощью оператора `new`), а его абстрактные члены должны обязательно должны быть переопределены потомками.

`````ts
/**
 * Абстрактный класс с одним абстрактным методом.
 */
abstract class Shape {
    abstract getRectangle(): ClientRect;
}

/**
 * Из-за того, что класс абстрактный не получится создать его экземпляр с помощью оператора new.
 */
new Shape(); // Error -> Cannot create an instance of an abstract class.ts(2511)


/**
 * [0] Кроме этого, подкласс обязательно должен переопределять абстрактные члены своего суперкласса.
 */
class Circle extends Shape {
    getRectangle(){// [0]
        return {
            width:0,
            height: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }
}
`````

Но правила, с помощью которых компилятор работает с абстрактными классами, делают типы абстрактных и конкретных конструкторов несовместимыми. Другими словами, абстрактный класс нельзя передать по ссылке ограниченной более общим типом.

`````ts
interface IHasRectangle {
    getRectangle(): ClientRect;
}

type HasRectangleClass = new() => IHasRectangle;

/**
 * [*] Type 'typeof Shape' is not assignable to type 'HasRectangleClass'.
 Cannot assign an abstract constructor type to a non-abstract constructor type.ts(2322)
 */
let ClassType: HasRectangleClass = Shape; // Error [*]

`````

Кроме этого, невозможно получить тип экземпляра абстрактного класса с помощью вспомогательного типа `InstanceType<T>`.

`````ts
/**
 * [*] Type 'typeof Shape' does not satisfy the constraint 'new (...args: any) => any'.
  Cannot assign an abstract constructor type to a non-abstract constructor type.ts(2344)
 */
type Instance = InstanceType<typeof Shape>; // Error [*]
`````

Это в свою очередь не позволяет реализовать механизм динамического наследования.

`````ts
function subclassCreator(Base: new() => IHasRectangle){
    return class extends Base {
        getRectangle(){
            return {
                width:0,
                height: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }
    }
}

/**
 * [*] Argument of type 'typeof Shape' is not assignable to parameter of type 'new () => IHasRectangle'.
 Cannot assign an abstract constructor type to a non-abstract constructor type.ts(2345)
 */
subclassCreator(Shape); // Error [*] -> передача в качестве аргумента абстрактный класс
subclassCreator(Circle); // Ok -> передача в качестве аргумента конкретный класс
`````

Для решения этой проблемы, в _TypeScript_ существует модификатор `abstract` предназначенный для указания в описании типа конструктора.

`````ts
interface IHasRectangle {
    getRectangle(): ClientRect;
}

type HasRectangleClass = abstract new() => IHasRectangle;


let ClassType: HasRectangleClass = Shape; // Ok
`````

Несмотря на то, что тип класса имеет абстрактный модификатор, он также остается совместимым с типами конкретных классов.

`````ts
function subclassCreator(Base: abstract new() => IHasRectangle){
    return class extends Base {
        getRectangle(){
            return {
                width:0,
                height: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }
    }
}

subclassCreator(Shape); // Ok -> абстрактный класс
subclassCreator(Circle); // Ok -> конкретный класс
`````

Также с помощью данного оператора можно реализовать собственный вспомогательный тип, позволяющий получить тип экземпляра.

`````ts
type AbstractInstanceType<T extends abstract new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

type Instance = AbstractInstanceType<typeof Shape>; // Ok
`````