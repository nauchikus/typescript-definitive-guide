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

Начиная с текущей версии, в _TypeScript_ появился модификатор `abstract` предназначенный для указания в описании типа конструктора.

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