##Строковой идентификатор функции-конструктора

`TypeScript`, начиная с версии `v3.6` реализовывает механизм ecmascript спецификации предусматривающей строковое именование функции-конструктора. Другими словами, определение метода идентификатор которого представлен в виде строки эквивалентной `"constructor"` расценивается как определение функции-конструктора. Если идентификатор помечается, как вычисляемый `["constructor"]`, то такое объявление расценивается обычным методом класса.

`````ts
// этот ts код...

class T {
    constructor() {
        console.log(`Constructor!`);
    }

    ['constructor']() {
        console.log(`Method with name "constructor"!`);
    }
}

let t = new T(); // output: Constructor!
t.constructor(); // output: Method with name "constructor"!

// ...будет скомпилирован в этот js код

class T {
    constructor() {
        console.log(`Constructor!`);
    }
    ['constructor']() {
        console.log(`Method with name "constructor"!`);
    }
}
let t = new T(); // output: Constructor!
t.constructor(); // output: Method with name "constructor"!
```
