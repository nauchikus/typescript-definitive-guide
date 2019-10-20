# Модификаторы доступа
![Chapter Cover](./images/chapter-cover.png)
## Модификаторы доступа (Access Modifiers)
________________

*Модификаторы доступа*, это ключевые слова, с помощью которых осуществляется управление инкапсуляцией. Другими словами, с помощью модификаторов доступа, членам, устанавливается уровень доступности. В свою очередь сокрытие является одним из основных принципов структурного и объектно ориентированного проектирования.

При проектировании приложений, принято скрывать как можно больше информации об объектах, для того чтобы снизить количество кода, который будет затронут, при возможных изменениях, в будущем.

В *TypeScript* существует три модификатора доступа, указывающихся с помощью ключевых слов - `public`, `protected` и `private`. Влияние модификаторов доступа ограничивается *TypeScript* и после компиляции от них не остается и следа. Кроме того, в скомпилированном коде нет никакой разницы между членами, к которым были применены те или иные модификаторы доступа.

С помощью модификаторов доступа, можно указать уровень доступа для полей, аксессоров и методов, в том числе статических. Кроме того, в *TypeScript* при помощи модификаторов доступа, можно ограничивать доступ к конструктору класса.

~~~~~typescript
class Animal {
  private static DEFAULT_NICKNAME: string = 'animal';
  protected static inputInfoDecor( text: string ): string {
      return `[object ${ text }]`;
  }

  private _nickname: string = Animal.DEFAULT_NICKNAME;

  public get nickname(): string {
      return this._nickname;
  }
  public set nickname( value: string ){
      this._nickname = value;
  }

  public constructor(){}
 
  public toString(): string {
      return Animal.inputInfoDecor( 'Animal' );
  }
}
~~~~~


## Модификатор доступа public (публичный)
________________

Члены помеченные ключевым словом `public`, доступны как в классах, в которых они объявлены, так и в классах потомках. Также к публичным членам можно обращаться через экземпляры класса.

Если при разработки приложения, особое внимание уделяется архитектуре, то как правило, модификатором доступа `public` помечаются только члены, описанные в интерфейсе (глава [“Типы - Interface”]()).

~~~~~typescript
class Animal {
  public nickname: string;

  constructor(){
      this.nickname = 'animal';
  }
}

class Bird extends Animal {
  constructor(){
      super();
      super.nickname = 'bird';
  }
}

let animal: Animal = new Animal();
animal.nickname = 'newanimal';

let bird: Bird = new Bird();
bird.nickname = 'newbird';
	Члены у которых отсутствует указание какого-либо модификатора доступа, воспринимаются компилятором, как public.


class Animal {
 nickname: string; // is equal public nickname: string
}
~~~~~


## Модификатор доступа private (закрытый или скрытый)
________________

Модификатор доступа `private` является полной противоположностью модификатору доступа `public`. Члены помеченные с помощью ключевого слова `private`, доступны только контексту класса, в котором они объявлены.

Чем меньше окружающему миру известно о внутреннем устройстве классов, тем меньше оно взаимодействует с ним. Взаимодействия программы с объектом, называют *сопряжением* (coupling), уровень которой варьируется от сильной до слабой. *Слабая сопряжённость* (loose coupling) является признаком качественной архитектуры программы. Этот факт подталкивает скрывать,как можно больше информации, при проектировании программы. В языках программирования, в которых существуют модификаторы доступа, скрывать различные конструкции принято с помощью модификатора `private`.

~~~~~typescript
class Animal {
 private metainfo: string;

 constructor(){
     this.metainfo = '...';
 }
}

class Bird extends Animal {
 constructor(){
     super();
     super.metainfo = 'bird'; // Error
 }
}

let animal: Animal = new Animal();
animal.metainfo = 'newanimal'; // Error

let bird: Bird = new Bird();
bird.metainfo = 'newbird'; // Error
~~~~~


## Модификатор доступа protected (защищенный)
________________

Члены, которым установлен модификатор доступа `protected`, доступны только контексту класса, в котором они объявлены, а также всем его потомкам. Попытка обратится к членам помеченным как `protected`, приведет к возникновению ошибки.

Как правило, при современной разработке упор делается только на два вида модификаторов доступа - `public` и `private`. Но в редких случаях, по сценарию может возникнуть необходимость, в подклассах обращаться к членам своего суперкласса, которые, при этом, должны быть скрыты от окружающего мира. В таких случаях, члены, помечают как `protected`.

~~~~~typescript
class Animal {
  protected isUpdate: boolean;

  constructor(){
      this.isUpdate = false;
  }
}

class Bird extends Animal {
  constructor(){
      super();
      super.isUpdate = false;
  }
}

let animal: Animal = new Animal();
animal.isUpdate = true; // Error

let bird: Bird = new Bird();
bird.isUpdate = true; // Error
~~~~~

## Модификаторы доступа и конструкторы класса
________________

В *TypeScript* существует возможность управлять доступом конструкторов. Конструктор. который не отмечен ни одним модификатором доступа, эквивалентен конструктору помеченным, как `public`.

~~~~~typescript
class A {
  public constructor(){} // access modifier public explicitly set
}

class B {
  constructor(){} // access modifier public is not set explicitly
}
~~~~~

В случаях, когда класс состоит только из статических свойств и методов, как например класс `Math`, его конструктор можно пометить, как приватный, и тем самым запретить создавать его экземпляры.

~~~~~typescript
class AnimalUtil {
   private static MS_TO_DAY: number = 1000 * 60 * 60 * 24;

   public static ageFromMsToDayFormat( time: number ): number { 
       return Math.ceil( time / AnimalUtil.MS_TO_DAY );
   }

   private constructor() { };
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

// нельзя создать экземпляр
let util = new AnimalUtil(); // compilation error
~~~~~

Кроме того, класс, у которого конструктор объявлен с модификатором доступа `private`,  нельзя расширять (`extends`). 

~~~~~typescript
class AnimalUtil {
   // ...

   private constructor() { };
}

// нельзя расширить класс конструктор которого имеет модификатор доступа private
class AnimalStringUtil extends AnimalUtil { } // compilation error
~~~~~

Класс, в котором конструктор объявлен с модификатором доступа `protected`, также, как и в случае с модификатором доступа `private`, не позволит создать свой экземпляр, но открыт для расширения (`extends`).

~~~~~typescript
class Animal {
  protected constructor(){}
}


// можно наследоваться от класса с защищенным конструктором
class Bird extends Animal {
  constructor( ){
      super( );
  }
}

let animal: Animal = new Animal(  ); // Error
let bird: Bird = new Bird(  ); // Ok
~~~~~

Тем не менее есть один нюанс. Не получится создать экземпляр подкласса, если он не переопределил конструктор суперкласса.

~~~~~typescript
class Animal {
  protected constructor(){}
}


// потомок переопределяет конструктор предка
class Bird extends Animal {
  constructor( ){
      super( );
  }
}

// потомок не переопределяет конструктор предка
class Fish extends Animal {}

let bird: Bird = new Bird(); // Ok
let fish: Fish = new Fish(  ); // Error
~~~~~


## Быстрое объявление полей
________________

В разработке очень часто используются классы, которые состоят только из открытых полей ассоциированных со значениями, переданные в качестве аргументов при вызове конструктора.

Помимо обычного способа, объявления полей в теле класса, с последующей инициализаций в конструкторе, существует сокращенный вариант.

~~~~~typescript
class BirdEntity { // default
  public name: string;
  public age: number;
  public isLife: boolean;

   // обычный способ инициализации полей класса
  constructor( name: string, age: number, isLife: boolean ){
      this.name = name;
      this.age = age;
      this.isLife = isLife;
  }
}

class FishEntity { // short
   // сокращенный способ инициализации полей класса
  constructor(
      public name: string,
      public age: number,
      public isLife: boolean
  ){}
}
~~~~~

В сокращенном варианте, поля не указываются в теле класса, а указываются только в конструкторе. При этом обязательным условием является указание одного из существующих модификатора доступа (либо модификатора `readonly`, о котором речь пойдет в главе [“Классы - Модификатор readonly”]()), без которого идентификатор является обычным параметром.

~~~~~typescript
class FishEntity { // short
  constructor(
      public name: string, // field
      public age: number, // field
      isLife: boolean // param
  ){}
}
~~~~~

При этом не существует строго заданного порядка, в котором должны объявляться параметры и сокращенное объявление полей.

~~~~~typescript
class FishEntity { // short
  constructor(
      name: string, // param
      public age: number, // field
      isLife: boolean // param
  ){}
}
~~~~~

Полям объявленным в конструкторе, также как и полям объявленным в теле класса, можно устанавливать различные модификаторы доступа.

~~~~~typescript
class FishEntity { // short
  constructor(
      public name: string,
      protected age: number,
      private isLife: boolean
  ){}
}
~~~~~

При наличии у класса логики, обращение, к полям объявленным прямо в конструкторе, ничем не отличается от обращения к полям объявленным в теле класса.

~~~~~typescript
class Animal { // short
  constructor(
      public name: string,
      protected age: number,
      private isLife: boolean
  ){}

  public dead(): void {
      this.isLife = false;
  }
}

class Bird extends Animal {
  public toString(): string {
      return `[bird ${ super.name }]`;
  }
}
~~~~~
