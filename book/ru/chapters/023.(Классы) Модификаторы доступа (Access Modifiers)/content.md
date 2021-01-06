# Модификаторы доступа (Access Modifiers)

Поскольку сокрытие является одним из основных принципов структурного и объектно-ориентированного проектирования, при создании программ принято скрывать как можно больше информации об объектах. Это необходимо не только для предотвращения случайного изменения, но и для повышения слабого зацепления (_low coupling_). Для этих целей _TypeScript_ реализует механизм, называемый _модификаторы доступа_.
 
_Модификаторы доступа_ — это ключевые слова, с помощью которых осуществляется управление сокрытием данных в классе. Простыми словами, модификаторы доступа задают уровень доступности членам класса ограничивая область их видимости.

В _TypeScript_ существует три модификатора доступа, указывающихся с помощью ключевых слов `public`, `protected` и `private`. Влияние модификаторов доступа ограничивается _TypeScript_ и после компиляции от них не остается ни следа. В скомпилированном коде нет никакой разницы между членами, к которым были применены те или иные модификаторы доступа.

С помощью модификаторов доступа можно указать уровень доступа для полей, аксессоров и методов, в том числе статических. Кроме того, в _TypeScript_ при помощи модификаторов доступа можно ограничивать доступ к конструктору класса.

`````ts
class Animal {
    private static DEFAULT_NICKNAME: string = 'animal';

    protected static inputInfoDecor(text: string): string {
        return `[object ${text}]`;
    }
    
    private _nickname: string = Animal.DEFAULT_NICKNAME;
    
    public get nickname(): string {
        return this._nickname;
    }

    public set nickname(value: string){
        this._nickname = value;
    }
    
    public constructor() {}
    
    public toString(): string {
        return Animal.inputInfoDecor('Animal');
    }
}
`````


## Модификатор доступа public (публичный)

Члены, помеченные ключевым словом `public`, доступны в определяющих их классах, их потомках, а также к ним можно обращаться через экземпляр или, в случае статических членов, через ссылку на класс.

Если при разработке приложения особое внимание уделяется архитектуре, то, как правило, модификатором доступа `public` помечаются только члены описанные в интерфейсе (глава [“Типы - Interface”](../021.(Типы)%20Interfaces)).

`````ts
class Animal {
    public nickname: string;
    
    constructor() {
        this.nickname = 'animal';
    }
}

class Bird extends Animal {
  constructor() {
      super();
      super.nickname = 'bird';
  }
}

let animal: Animal = new Animal();
animal.nickname = 'newanimal';

let bird: Bird = new Bird();
bird.nickname = 'newbird';
`````

Члены, у которых отсутствует указание какого-либо модификатора доступа, воспринимаются компилятором как `public`:

`````ts
class Animal {
 nickname: string; // эквивалентно public nickname: string
}
`````


## Модификатор доступа private (закрытый или скрытый)

Модификатор доступа `private` является полной противоположностью модификатору доступа `public`. Члены, помеченные с помощью ключевого слова `private`, доступны только контексту класса, в котором они определены.

Чем меньше окружающему миру известно о внутреннем устройстве классов, тем меньше оно взаимодействует с ним. Взаимодействия программы с объектом называют _сопряжением_ (coupling), уровень которого варьируется от сильного до слабого. _Слабое сопряжение_ (_loose coupling_) является признаком качественной архитектуры программы. Этот факт подталкивает скрывать как можно больше информации при проектировании программы. В языках программирования, в которых существуют модификаторы доступа, скрывать различные конструкции принято с помощью модификатора `private`.

`````ts
class Animal {
    private metainfo: string;
    
    constructor() {
        this.metainfo = '...';
    }
}

class Bird extends Animal {
    constructor() {
        super();
        super.metainfo = 'bird'; // Error
    }
}

let animal: Animal = new Animal();
animal.metainfo = 'newanimal'; // Error

let bird: Bird = new Bird();
bird.metainfo = 'newbird'; // Error
`````

## Модификатор доступа protected (защищенный)

Члены, которым установлен модификатор доступа `protected`, доступны только контексту класса, в котором они определенны, а также всем его потомкам. Попытка обратится к членам, помеченным как `protected` снаружи, приведет к возникновению ошибки.

Как правило, при современной разработке, упор делается только на два вида модификаторов доступа - `public` и `private`. Но, в редких случаях, по сценарию может возникнуть необходимость обращаться к членам своего суперкласса в подклассах, которые при этом, должны быть скрыты от окружающего мира. В таких случаях члены помечают как `protected`.

`````ts
class Animal {
    protected isUpdate: boolean;
    
    constructor() {
        this.isUpdate = false;
    }
}

class Bird extends Animal {
    constructor() {
        super();
        super.isUpdate = false;
    }
}

let animal: Animal = new Animal();
animal.isUpdate = true; // Error

let bird: Bird = new Bird();
bird.isUpdate = true; // Error
`````

## Модификаторы доступа и конструкторы класса

В _TypeScript_ существует возможность управлять доступом конструкторов. Конструктор, который не отмечен ни одним модификатором доступа эквивалентен конструктору, помеченному как `public`.

`````ts
class A {
    public constructor() {} // модификатор public установлен явно
}

class B {
    constructor() {} // модификатор public установлен не явно
}
`````

Если класс состоит только из статических свойств и методов, как например класс `Math`, то его конструктор более разумно пометить как приватный и, тем самым, запретить создание его экземпляров.

`````ts
class AnimalUtil {
    private static MS_TO_DAY: number = 1000 * 60 * 60 * 24;
    
    public static ageFromMsToDayFormat(time: number): number { 
        return Math.ceil(time / AnimalUtil.MS_TO_DAY);
    }
    
    private constructor() {};
}

class Animal {
    private _timeOfBirth: number = Date.now();
    
    public get age(): number {
        return this._timeOfBirth - Date.now();
    }
    
    public constructor() {}
}

let animal: Animal = new Animal();
let age: number = AnimalUtil.ageFromMsToDayFormat(animal.age);

let util = new AnimalUtil(); // Ошибка при компиляции, нельзя создать экземпляр
`````

Кроме того, класс, у которого конструктор объявлен с модификатором доступа `private`, нельзя расширять (`extends`). 

`````ts
class AnimalUtil {
    // ...
    
    private constructor() {};
}

class AnimalStringUtil extends AnimalUtil {} // Ошибка
`````

Класс, в котором конструктор объявлен с модификатором доступа `protected`, как и в случае с модификатором доступа `private`, также не позволит создать свой экземпляр, но открыт для расширения (`extends`).

`````ts
class Animal {
    protected constructor() {}
}

// можно наследоваться от класса с защищенным конструктором
class Bird extends Animal {
    constructor() {
        super();
    }
}

let animal: Animal = new Animal(); // Error
let bird: Bird = new Bird(); // Ok
`````

Тем не менее есть один нюанс. Не получится создать экземпляр подкласса, если он не переопределил конструктор суперкласса.

`````ts
class Animal {
    protected constructor() {}
}

// потомок переопределяет конструктор предка
class Bird extends Animal {
    constructor() {
        super();
    }
}

// потомок не переопределяет конструктор предка
class Fish extends Animal {}

let bird: Bird = new Bird(); // Ok
let fish: Fish = new Fish(); // Error
`````


## Быстрое объявление полей

В разработке очень часто используются классы, состоящие только из открытых полей, ассоциированных со значением, переданным в качестве аргументов конструктора.

Помимо обычного способа объявления полей в теле класса с последующей инициализацией в конструкторе, существует сокращенный вариант с объявлением непосредственно в конструкторе за счет добавления его параметрам модификаторов.

Обычный способ:

`````ts
class BirdEntity {
    public name: string;
    public age: number;
    public isAlive: boolean;

    constructor(name: string, age: number, isAlive: boolean){
        this.name = name;
        this.age = age;
        this.isAlive = isAlive;
    }
}
`````

Сокращенный способ инициализации полей класса:

`````ts
class FishEntity { 
    constructor(
        public name: string,
        public age: number,
        public isAlive: boolean
    ) {}
}
`````

В сокращенном варианте поля не указываются в теле класса, а указываются непосредственно в конструкторе. При этом обязательным условием является указание одного из существующих модификаторов доступа (либо модификатора `readonly`, о котором речь пойдет в главе [“Классы - Модификатор readonly”](../027.(Классы)%20Модификатор%20readonly%20(только%20для%20чтения))), после чего параметры начинают расцениваться компилятором в качестве полей класса.

`````ts
class FishEntity {
    constructor(
        public name: string, // поле
        public age: number, // поле
        isAlive: boolean // параметр
    ) {}
}
`````

При этом не существует строго заданного порядка, в котором должны объявляться параметры и сокращенное объявление полей.

`````ts
class FishEntity {
    constructor(
        name: string, // параметр
        public age: number, // поле
        isAlive: boolean // параметр
    ) {}
}
`````

Полямб объявленным в конструкторе, также, как и полям, объявленным в теле класса, можно устанавливать различные модификаторы доступа.

`````ts
class FishEntity {
    constructor(
        public name: string,
        protected age: number,
        private isAlive: boolean
    ) {}
}
`````

Обращение к полямб объявленным прямо в конструктореб ничем не отличается от обращения к полям, объявленным в теле класса.

`````ts
class Animal {
    constructor(
        public name: string,
        protected age: number,
        private isAlive: boolean
    ) {}

    public dead(): void {
        this.isAlive = false;
    }
}

class Bird extends Animal {
    public toString(): string {
        return `[bird ${super.name}]`;
    }
}
`````
