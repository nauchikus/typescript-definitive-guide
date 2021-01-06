# Классы — Тонкости

В _TypeScript_ с классами связанно несколько неочевидных моментов. Неожиданная встреча с ними на практике непременно приведет к возникновению множества вопросов, ответы на который содержит текущая глава. 


## Классы - Тонкости implements

Кроме того, что класс может реализовать (`implements`) интерфейсы (`interface`), он также может реализовать другой класс.

`````ts
interface IAnimal {
    name: string;
}

class Animal {
    public name: string;
}

class Bird implements IAnimal { // Ok
    public name: string;
}
class Fish implements Animal { // Ok
    public name: string;
}
`````

Как уже можно было догадаться, при реализации классом другого класса действуют те же правила, что и при расширении класса интерфейсом. То есть класс, у которого все члены объявлены как публичные (`public`), может реализовать любой другой класс. Если класс имеет определение членов с модификаторами доступа `private` или `protected`, то его может реализовать только этот же класс или его потомки.

`````ts
class Animal {
    public name: string;
}

class Bird implements Animal { // Ok
    public name: string;
    protected age: number;
}

class Fish implements Animal { // Ok
    public name: string;
    private arial: string;
}

class Raven implements Bird { // Error
    public name: string;
    protected age: number;
}

class Owl extends Bird implements Bird { // Ok
    public name: string;
    protected age: number;
}

class Shark implements Fish { // Error
    public name: string;
}

class Barracuda extends Fish implements Fish { // Ok
    public name: string;
}
`````


## Частичное слияние интерфейса с классом

На текущий момент известно, что два интерфейса, объявленные в одной области видимости, сливаются вместе. Кроме этого, если интерфейс объявлен в одной области видимости с одноимённым классом, то компилятор считает, что класс реализовал этот интерфейс.

`````ts
interface Animal {
    id: string;
    age: number;
}

class Animal {}

const animal = new Animal(); // Ok

animal.id = 'animal'; // Ok
animal.age = 0; // Ok

const { id, age } = animal; // Ok -> id: string and age: number

console.log(id, age); // 'animal', 0
`````


## Переопределение свойств полями и наоборот при наследовании

В _JavaScript_ при использовании механизма наследования (`extends`) производный класс в состоянии переопределить свойство объявленное в базовом классе полем и наоборот, поле свойством.

`````js
class Base {
    get value(){
        return 'base'
    }
    set value(value){
        console.log(value);
    }
}

class Derived extends Base {
    value = 'derived'
}

let derived = new Derived();

console.log(derived.value); // 'derived'

derived.value = `new derived`; // не сложно догадатся что при пресваивании нового значения console.log в сеттер базового класса вызвана не будет

console.log(derived.value); // 'new derived'

/**
 * Тоже справедливо и для переопределения
 * поля объявленного в базовом классе свойствами
 * производного класса.
 */
`````

Но, во избежание казусов сопряженных с этим поведением, _TypeScript_ запрещает переопределения при наследовании.

`````ts
class Base {
    get value() {
        return 'value';
    }
    set value(value: string) {
        
    }
}

class Derived extends Base {
    /**
     * Error ->
     * 
     * 'value' is defined as an accessor in class 'Base',
     * but is overridden here in 'Derived'
     * as an instance property.
     */
    value = 'value';
}
`````
`````ts
class Base {
     value = 'value';
}

class Derived extends Base {
    /**
     * Error ->
     * 
     * 'value' is defined as a property in class 'Base',
     * but is overridden here in 'Derived' as an accessor.
     */
   
    get value() {
        return 'value';
    }
    set value(value: string) {
        
    }
}
`````
