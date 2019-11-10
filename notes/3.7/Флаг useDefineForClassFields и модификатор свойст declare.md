Развитие стандарта _EsmaScript_ относительно объявлений полей в теле класса привело к пересмотрению подхода генерации _JavaScript_ кода. Устаревший подход предполагал что поля инициализированные при объявлении в теле класса после генерации помещались в конструктор, а не инициализированные исключались вовсе.

`````typescript
// до компиляции (.ts)

class T {
    f0: number = 5; // поле инициализированное при объявлении
    f1: number; // не инициализированное объявление поля
}

// после компиляции (.js)

class T {
    constructor(){
        this.f0 = 5;
        
        // отсутствует не инициализированное поле
    }
}
`````

Новый подход предполагает необходимость обязательного включения не инициализированных полей в сгенерированный исходный _JavaScript_ код, а также отказа от _синтаксического сахара_ в пользу применения `Object.defineProperty`. Стало быть код выше будет представлен следуюущим образом.


`````typescript
// после компиляции (.js)

class T {
    constructor() {
        Object.defineProperty(this, "f0", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        }); // поле инициализированное при объявлении
        Object.defineProperty(this, "f1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); // включено не инициализированное объявление поля
    }
}
`````

Но новое поведение, при некоторых сценариях вовлеченных в механизм наследования, ломает устаревшее. Расхождение поведения происходит при объявлении в наследнике поля чей идентификатор совпадает с идентификатором аксессоров определенных в классе-предке.


`````typescript
// до компиляции (.ts)

class SuperClass {
    set prop(value: number){
        console.log('setter');
    }
    get prop(): number {
        console.log('getter');

        return 0;
    }
}

class SubClass extends SuperClass {
    prop: number = 5;
}

let subClass = new SubClass();
let prop = subClass.prop;
`````

`````javascript
/**
 * УСТАРЕВШЕЕ ПОВЕДЕНИЕ
 */

// после компиляции (.js)
class SuperClass {
    set prop(value) {
        console.log('setter');
    }
    get prop() {
        console.log('getter');
        return 0;
    }
}
class SubClass extends SuperClass {
    constructor() {
        super(...arguments);
        this.prop = 5; // [0] установка значения сеттеру определенному в суперклассе
    }
}
let subClass = new SubClass();
let prop = subClass.prop; // [1]

/**
 * Вывод в консоль - 
 * [0] > setter
 * [1] > getter
 */

`````

`````javascript
/**
 * НОВОЕ ПОВЕДЕНИЕ
 */

// после компиляции (.js)

class SuperClass {
    set prop(value) {
        console.log('setter');
    }
    get prop() {
        console.log('getter');
        return 0;
    }
}
class SubClass extends SuperClass {
    constructor() {
        super(...arguments);
        /**
         * Происходит ПЕРЕОПРЕДЕЛЕНИЕ свойств
         * определенных в суперклассе. При дальнейшем
         * обращении к prop через ссылку экземпляра
         * SubClass вызовы аксессоров производится
         * не будут.
         */
        Object.defineProperty(this, "prop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 5
        });
    }
}
let subClass = new SubClass();
let prop = subClass.prop;

`````

Во избежание проблемы продемонстрированной выше новое поведение предполагае отказ от подобных действий непосредственно в теле класса и реализацией их в любом другом месте, как например конструктор или тело метода.

Прежний код мог бы быть переписан следующим образом.

``````typescript
// .ts

// Плохо!
class SubClass extends SuperClass {
    prop: number = 5;
}

// Хорошо.
class SubClass extends SuperClass {
    constructor(){
        super();

        this.prop = 5;
    }
}

// Хорошо.
class SubClass extends SuperClass {
    constructor(){
        super();

        this.init();
    }

    init(){
        this.prop = 5;
    }
}
``````


Кроме того специализация свойств также не будет работать.

`````typescript
/**
 * НОВОЕ ПОВЕДЕНИЕ
 */

// до компиляции (.ts)

interface IAnimal { type: string; }
interface IBird extends IAnimal { isFly:boolean; }

class AnimalHouse {
    constructor(public resident: IAnimal){}
}
class BirdHouse extends AnimalHouse {
    resident: IBird; // специализация свойства
    /**
     * Данный работать не будет, поскольку
     * неинициализированное поле resident
     * ОБЯЗАТЕЛЬНО БУДЕТ ВКЛЮЧЕНО в определение
     * класса, а его объявление, которое обязательно
     * будет выполнять после вызова super(bird) переопределит
     * переданное в родительский класс значение на undefined.
     */

    constructor(bird: IBird){
        super(bird);
    }
}

`````

Для решения этой проблемы в синтаксис _TypeScript_ было добавлено ключевое слово `declare` указывающее компилятору о необходимости учесть специализированное свойство.  

`````typescript
/**
 * НОВОЕ ПОВЕДЕНИЕ
 */

// ...

class BirdHouse extends AnimalHouse {
    declare resident: IBird; // специализация свойства

    constructor(bird: IBird){
        super(bird);
    }
}

`````

Стоит упомянуть, что в случаи со специализированными свойствами флаг компилятора `strictPropertyInitialization` установленный в значение `false`, точно также как и модификатор `!` (_definite assignment assertion_) никакого влияния не оказывают.


По причине того, что новое поведение столь сильно изменило привычное направление, доступ к нему (скорее всего пока) сокрыт за новым, рекомендуемым разработчиками _TypeScript_, флагом `useDefineForClassFields`. Проще всего поведение активируемое данным флагом воспринимать как запрещающее при наследовании переопределение аксессоров полями и наоборот.

`````typescript
class A{
    f = 0;
}
class B extends A {
    f = 1; // Ok
}
class C extends A {
    /**
     * [!] - Ok при неактивном флаге useDefineForClassFields
     *       Error при активном флаге useDefineForClassFields
     */
    set f(value: number){} // !
    get f(): number {return 1;} // !
}
`````
`````typescript
class A{
    set f(value: number) {}
    get f(): number {return 0;}
}
class B extends A {
    set f(value: number){} // Ok
    get f(): number {return 1;} // Ok
} 
class C extends A {
    /**
     * [!] - Ok при неактивном флаге useDefineForClassFields
     *       Error при активном флаге useDefineForClassFields
     */
    f: number = 1 // !
}
`````
