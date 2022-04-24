## Выполнение кода в конструкторе потомке до вызова super

Поскольку при расширении одним классом друго
Спецификация _ECMScript_ запрещает потомкам любые операции в которых фигурирует ссылка `this` до вызова конструктора своего родителя (`super()`), поскольку в этот отрезок времени `объект` ещё не существует. _TypeScript_ же, при наличии полей класса и вовсе запретил выполнение любого кода до вызова `super()`. 


`````ts
class Base {
}
class Derived extends Base {
  private value = ``; // поле класса
  constructor() {
    console.log( ); // какой-то код
    super(); // Error -> Base constructor call must be the first statement in the constructor if a class contains initialized properties or has parameter properties
  }
}
`````


Это очень сильно затрудняло сценария при которых данные выступающие в качестве аргументов родительского конструктора предварительно требовали преобразования.

`````ts
class Base {
    constructor (readonly value: string) {
    }
}
class Derived extends Base {
    constructor(readonly value: string) {
        let arg = value === `a` ? `b` : `c`;
        super(arg); // Error до v4.6 и Ok после.
    }
}
`````
