## Вывод типов для полей класса по параметрам конструктора

До текущей версии при активном флаге `noImplicitAny` возникала ошибка если тело класса содержало поле без аннотации типа. И не спасало даже то, что они были инициализированны в конструкторе.

`````ts
class Square {
    /**
     * До версии 4.0 поля без аннотации вызывали ошибку .-
     * Member 'area' implicitly has an 'any' type.
     * Member 'sideLength' implicitly has an 'any' type.
     * 
     */
    area;
    sideLength;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
        this.area = sideLength ** 2;
    }
}
`````

Простыми словами вывод типов не был обучен выводить типы в подобных случаях. Но как можно догадатся больше для него это не проблема!

Начиная с текущей версии вывод типов способен вывести тип полю класса, если оно было инициализированно в конструкторе.

`````ts
class Square {
    /**
     * Начиная с версии 4.0 -
     * (property) Square.area: number
     * (property) Square.sideLength: number
     * 
     * Вывод типов видит что полю sideLength
     * присваивают значение с типом number, а
     * полю area результат выражения над числовыми
     * типами.
     */
    area;
    sideLength;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
        this.area = sideLength ** 2;
    }
}
`````

Не будет лишним сделать акцент на словах об инициализации в конструкторе, поскольку это условие является обязательным. При попытке инициализации полей вне тела конструктора будет вызвана ошибка, даже если инициализация производится в методе вызываемом из конструктора.

`````ts
class Square {
    /**
     * Error ->
     * Member 'area' implicitly has an 'any' type.
     * 
     */
    area;
    sideLength;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
        this.init();
    }

    init(){
        this.area = this.sideLength ** 2;
    }
}
`````



Если инициализация полей класса без аннотации по каким-то причинам может не состоятся, то тип будет выведен как объединение включающее так же и тип `undefined`.

`````ts
class Square {
    /**
     * [1] ...вывод типов определяет принадлежность
     * поля sideLength как ->
     * 
     * (property) Square.sideLength: number | undefined
     */
    sideLength;

    constructor(sideLength: number) {
        /**
         * [0] Поскольку инициализация зависи от
         * условия выражения которое выполнится
         * только во время выполнения программы...
         */
        if (Math.random()) {
            this.sideLength = sideLength;
        }
    }

    get area() {
        /**
         * [2] Тем не менее возникает ошибка
         * поскольку операция возведения в степень
         * производится над значение которое может
         * быть undefined
         * 
         * Error ->
         * Object is possibly 'undefined'.
         */
        return this.sideLength ** 2;
    }
}
`````

