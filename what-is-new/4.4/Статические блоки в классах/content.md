## Статические блоки в классах

Вслед за спецификацией _ECMAScript_, _TypeScript_ реализует механизм обозначаемый, как `статические классовые блоки`, которые позволяют работать со статическими членами в момент определения самого класса.
Статические блоки объявляются при помощи ключевого слова `static` после которого следуют открывающая и закрывающая фигурная скобка `{}`.

`````ts
class T {
    // статический блок
    static {
        // здесь можно выполнять обращение к статическим членам класса
    }
}
`````

`````ts
class Operators {
    static #isLock = false;

    static get isLock(){
        return Operators.#isLock;
    }

    static readonly Plus = new Operators("+");
    static readonly Minus = new Operators("-");


    // статический блок
    static {
        Operators.#isLock = true;
    }


    constructor(readonly operator: string){
        if(Operators.isLock){
            throw "creating instances is prohibited!";
        }
    }

}
`````

Поскольку статический блок является обычным блоком кода, его объявление создает уникальную только для него лексическую область, а также позволяет объявлять внутри себя любые синтаксические конструкции, как например `const`, `if` или `try/catch`.

`````ts
class T {
    static {
        const VALUE = 8080;

        if(/**some condition */){
    
        }else{
    
        }
    
        try {
            // ...
        }catch(error){
            // ...
        }
    }
}
`````

К тому же, тело одного класса может включать произвольное количество статических блоков, которые будут выполняться в порядке объявления.

`````ts
class T {
    static {
        console.log(0);
    }
    static {
        console.log(1);
    }
    static {
        console.log(2);
    }
}

/**
 * console output
 * > 0
 * > 1
 * > 2
 */
`````