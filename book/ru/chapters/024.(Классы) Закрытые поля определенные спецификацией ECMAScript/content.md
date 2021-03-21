# Закрытые поля определенные спецификацией ECMAScript

Помимо сокрытия полей класса от внешней среды с помощью модификатора доступа `private`, присущего исключительно _TypeScript_, существует возможность прибегнуть к механизму, предусмотренному спецификацией _ECMAScript_. 


## Нативный закрытый (private) модификатор доступа

Для того, что бы поля класса оставались закрытыми после компиляции в _JavaScript_, необходимо прибегнуть к модификатору, определенному спецификацией _ECMAScript_ `#` который указывается в качестве префикса их идентификаторов (имен) `#identifier`.

Доступ к защищенному полю класса ограничивается областью видимости класса в котором оно объявлено, а при обращении к нему необходимо также указывать символ решетки. 

`````ts
class Animal {
    #isLife: boolean = true; // защищенное поле класса

    get isLife() {
        return this.#isLife;
    }
}

let animal = new Animal();
console.log(animal.isLife); // обращение к аксессору, а не защищенному полю
`````

Поскольку доступ ограничивается областью видимости класса, потомки не могут обращаться к защищенным полям своих предков.

`````ts
class Animal {
    #isLife: boolean = true; // защищенное поле класса
}

class Bird extends Animal {
    constructor() {
        super();
        this.#isLife; // Error, TS18013: Property '#isLife' is not accessible outside class 'Animal' because it has a private identifier.
    }
}
`````

В отличие от модификатора доступа `private`, этот механизм не может быть применён к методам и аксессорам класса, но, так как за его появлением стоит спецификация _ECMAScript_, он продолжает действовать в скомпилированной программе. Именно поэтому, в отличие от сценария с модификатором доступа `private`, _потомки_ могут без страха нарушить ожидаемый ход выполнения программы и объявлять защищенные поля, чьи идентификаторы идентичны объявлениям в их _супер-классах_. 

Сценарий с модификатором доступа private:

`````ts
class Animal {
    private _isLife: boolean = true;
}

/**
 * Error!
 * 
 * TS2415: Class 'Bird' incorrectly extends base class 'Animal'.
 * Types have separate declarations of a private property '_isLife'
 */
class Bird extends Animal {
    private _isLife: boolean = false;
}
`````

Сценарий с защищенными полями предусмотренными спецификацией _ECMAScript_:

`````ts
class Animal {
    #isLife: boolean = true;
}

/**
 * Ok!
 */
class Bird extends Animal {
    #isLife: boolean = false;
}
`````

И в заключение, стоит упомянуть, что существует несколько нюансов — один из них заключается в том, что закрытые поля нельзя объявлять непосредственно в конструкторе.

`````ts
class Animal {
    constructor(#isLife = true) {} // Error, TS18009: Private identifiers cannot be used as parameters.
}
`````

Другой нюанс связан с тем, что код, содержащий закрытые поля класса, может быть скомпилирован исключительно в версии `es6` и выше.

