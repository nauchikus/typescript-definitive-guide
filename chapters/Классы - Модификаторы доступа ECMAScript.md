## Закрытые поля определенные спецификацией ECMAScript
________________

Помимо сокрытия полей класса от внешней среды с помощью модификатора доступа `private`, присущего исключительно _TypeScript_, существует возможность прибегнуть к механизму предусмотренному спецификацией _ECMAScript_. Для того чтобы воспользоваться им, идентификаторы скрываемых полей должны начинаться с символа решетки `#`.
Доступ к защищенному полю класса ограничивается областью видимости класса в котором оно объявлено, а при обращении к нему необходимо также указывать символ решетки. 

`````typescript
class Animal {
    #isLife:boolean = true; // защищенное поле класса

    get isLife() {
        return this.#isLife;
    }
}

let animal = new Animal();
console.log(animal.isLife); // обращение к аксессору, а не защищенному полю
`````

Поскольку доступ ограничивается областью видимости класса, потомки не могут обращаться к защищенным полям своих предков.

`````typescript
class Animal {
    #isLife:boolean = true; // защищенное поле класса
}

class Bird extends Animal {
    constructor() {
        super();
        this.#isLife; // Error! > Property '#isLife' is not accessible outside class 'Animal' because it has a private identifier.ts(18013)
    }
}
`````

В отличие от модификатора доступа `private`, данный механизм не может быть применен к методам класса, но так как за его появлением стоит спецификация _ECMAScript_, он продолжает действовать в скомпилированной программе. Именно поэтому, в отличие от сценария с модификатором доступа `private`, _потомки_ могут без страха нарушить ожидаемый ход выполнения программы объявлять защищенные поля чьи идентификаторы идентичны объявлениям в их _супер-классах_. 

Сценарий с модификатором доступа private:

`````typescript
class Animal {
    private _isLife:boolean = true;
}

/**
 * Error!
 * 
 * Class 'Bird' incorrectly extends base class 'Animal'.
 * Types have separate declarations of a private property '_isLife'.ts(2415)
 */
class Bird extends Animal {
    private _isLife: boolean = false;
}
`````
Сценарий с защищенными полями предусмотренными спецификацией ECMAScript:

`````typescript
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

И в заключение стоит упомянуть что существует несколько нюансов. Один из них заключается в том, что закрытые поля нельзя объявлять непосредственно в конструкторе.

`````typescript
class Animal {
    // Parameter declaration expected.ts(1138)
    constructor(#isLife = true) {}
}
`````

Другой нюанс связан с тем, что код содержащий закрытые поля класса может быть скомпилирован исключительно в версии `es6` и выше.
