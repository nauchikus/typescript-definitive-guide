# Модификатор readonly (только для чтения)
Локальную переменную можно определить _неизменяемой_ при помощи ключевого слова `const`. Но как реализовать подобное поведение для полей класса? На данный вопрос как раз и призвана ответить текущая глава.


## Модификатор readonly

В _TypeScript_ существует модификатор, с помощью которого поле объекта помечается как _“только для чтения”_. Модификатор, запрещающий изменение значений полей объектов, указывается с помощью ключевого слова `readonly`. Он применяется к полям как при их объявлении в классе, так и при их описании в интерфейсе.

`````ts
interface IAnimal {
    readonly name: string;
}

class Animal {
    public readonly name: string = 'name';
}
`````

Если при описании интерфейса поле было помечено как `readonly`, то классам, реализующим этот интерфейс, необязательно указывать модификатор `readonly`. Но в таком случае значение поля будет изменяемым.

`````ts
interface IAnimal {
    readonly name: string;
}

class Bird implements IAnimal {
    public readonly name: string = 'bird'; // Ok
}

class Fish implements IAnimal {
    public name: string = 'fish'; // Ok
}

const bird: Bird = new Bird();
bird.name = 'newBird'; // Error

const fish: Fish = new Fish();
fish.name = 'newFish'; // Ok
`````

Это правило работает и в обратном направлении — поле, описанное в интерфейсе без указания модификатора `readonly`, может быть помечено этим модификатором при реализации.

`````ts
interface IAnimal {
    name: string;
}

class Bird implements IAnimal {
    public readonly name: string = 'bird'; // Ok
}

const bird: Bird = new Bird();
bird.name = 'newBird'; // Error
`````

Модификатор `readonly`, примененный к параметрам конструктора, заставляет компилятор расценивать их как поля класса.

`````ts
interface IAnimal {
    name: string;
}

class Bird implements IAnimal {
    constructor(readonly name: string) {}
}

const bird: Bird = new Bird('bird');
`````

Кроме того, модификатор `readonly`, примененный к параметрам конструктора, можно комбинировать с другими модификаторами доступа.


`````ts
interface IAnimal {
    name: string;
}

class Bird implements IAnimal {
    constructor(private readonly name: string) {}
}

const bird: Bird = new Bird('bird');
`````

Полю, к которому применен модификатор `readonly`, необязательно присваивать значение в момент объявления. Но в таком случае присвоить ему значение можно будет только из конструктора класса, в котором это поле объявлено. Если полю был применён модификатор `readonly` и не было присвоено значение, то такое поле, так же как и любое другое неинициализированное поле, будет иметь значение `undefined`.

`````ts
interface IAnimal {
    readonly name: string;
}

class Animal implements IAnimal {
    public readonly name: string; // Ok
    
    constructor(){
        this.name = 'animal'; // Ok
    }
}
`````

Попытка присвоить значение полю, к которому применен модификатор `readonly`, в месте, отличном от места объявления или конструктора класса, приведет к возникновению ошибки.

`````ts
interface IAnimal {
    readonly name: string;
}

class Animal implements IAnimal {
    public readonly name: string; // Ok
    
    public setName(name: string): void {
        this.name = name; // Error
    }
}
`````

Не получится избежать возникновения ошибки и при попытке присвоить значение из конструктора класса-потомка (с условием, что потомок не переопределяет его).

`````ts
interface IAnimal {
    readonly name: string;
    readonly age: number;
}

class Animal implements IAnimal {
    public readonly name: string; // Ok
    public readonly age: number; // Ok
}

class Bird extends Animal {
    public readonly age: number; // переопределение поля

    constructor(){
        super();
        super.name = 'bird'; // Error
        this.age = 0; // Ok
    }
}
`````

Поле объекта, созданного с помощью литерала объекта, будет невозможно изменить, если в связанном с ним типе к этим полям применен модификатор `readonly`.

`````ts
interface IAnimal {
    readonly name: string;
}

const animal: IAnimal = { name: 'animal' };

animal.name = 'newAnimal'; // Error
`````

Если полям, помеченным _“только для чтения”_, не указан тип, а присвоение примитивного значения происходит в месте объявления, то для таких полей вывод типов укажет принадлежность к литеральному типу.

`````ts
class Animal {
    public readonly nameReadonly = 'animal'; // nameReadonly: "animal"
    public nameDefault = 'animal';           // nameDefault: string
    
    public readonly ageReadonly = 0; // ageReadonly: 0
    public ageDefault = 0;           // ageReadonly: number
    
    public readonly isLifeReadonly = true; // isLifeReadonly: true
    public isLifeDefault = true;           // isLifeDefault: boolean
}
`````
