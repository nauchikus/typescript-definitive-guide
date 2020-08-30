# Классы — Тонкости
## Классы — Тонкости
________________

Помимо всего, что было рассказано о классах ранее, с ними связано несколько неочевидных моментов, о которых догадаться самостоятельно не так то просто.


## Классы - Тонкости implements
________________

Кроме того, что класс может реализовать (`implements`) интерфейсы (`interface`), он также может реализовать другой класс.

~~~~~typescript
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
~~~~~

Как уже можно было догадаться, при реализации классом другого класса действуют те же правила, что и при расширении класса интерфейсом. То есть класс, у которого все члены объявлены как публичные (`public`), может реализовать любой другой класс. В то время как класс, имеющий члены с такими модификаторами доступа, как закрытые (`private`) или защищенные (`protected`), может реализовать только этот же класс или его потомки.

~~~~~typescript
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
~~~~~


## Частичное Слияние интерфейса с классом
________________

На текущий момент известно, что два интерфейса, объявленные в одной области видимости, сливаются вместе. Кроме того, если интерфейс объявлен в одной области видимости с одноимённым классом, то компилятор считает, что класс реализовал одноимённый интерфейс.

~~~~~typescript
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
~~~~~

## Переопределение свойств полями и наоборот при наследовании

В _JavaScript_ при использовании механизма наследования (`extends`) производный класс в состоянии переопределить свойство объявленное в базовом классе полем и наоборот, поле свойством.

`````javascript
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

Но во избежание казусов сопряженных с подобным поведением, _TypeScript_ запрещает подобные переопределения при наследовании.

`````typescript
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
`````typescript
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
