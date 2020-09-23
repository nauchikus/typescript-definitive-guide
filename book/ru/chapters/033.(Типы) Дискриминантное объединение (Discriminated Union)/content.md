# Дискриминантное объединение (Discriminated Union)

Чтобы вывод типов мог отличить один тип входящий в множество `union`  от другого, необходимо чтобы каждый из них определял специальное поле способное идентифицировать его уникальным образом. Данная глава расскажет как определить подобные поля и научит как на их основе привязывать тип к лексическому окружению.


## Дискриминантное объединение

Тип `Discriminated Unions` (_дискриминантное объединение_), часто обозначаемое как `Tagged Union` (_размеченное объединение_) и так же как и тип `union` (объединение) является множеством типов перечисленных через прямую черту `|`. Значение ограниченное дискриминантным объединением может принадлежать только к одному типу из множества. 

`````ts
let v1: T1 | T2 | T3;
`````

Из-за того, что все описанное ранее для типа `union` (глава [“Типы - Union, Intersection”](../016.(Типы)%20Типы%20-%20Union,%20Intersection)) идентично и для `Tagged Union`, будет более разумно не повторяться, а сделать упор на различия. Но так как полностью открыть завесу тайны `Tagged Union` на данный момент будет преждевременным, остается лишь описать детали к которым рекомендуется вернуться при необходимости.

Несмотря на то, что `Discriminated Union` в большей степени идентичен типу `Union`, все же существует два отличия. Первое отличие заключается в том, что к типу `Discriminated Union` могут принадлежать только ссылочные типы данных. Второе отличие в том, что каждому объектному типу (также называемые _варианты)_ составляющему `Discriminated Union`, указывается идентификатор варианта - _дискриминант_.

Помните, что вывод типов, без помощи разработчика, способен работать лишь с общими для всех типов признаками?

`````ts
class Bird {
    fly(): void {}

    toString(): string {
        return 'bird';
    }
}

class Fish {
    swim(): void {}

    toString(): string {
        return 'fish';
    }
}
class Insect {
    crawl(): void {}

    toString(): string {
        return 'insect';
    }
}

function move(animal: Bird | Fish | Insect): void {
    animal.fly(); // Error -> [*]
    animal.swim(); // Error -> [*]
    animal.crawl(); // Error -> [*]

    animal.toString(); // Ok -> [*]

    /**
     * [*]
     * 
     * Поскольку вывод типо не может
     * определить к какому конкретно
     * из трех типов принадлежит параметр
     * animal он не позволяет обращатся к
     * уникальным для каждого типа членам
     * коими являются методы fly, swim, crawl.
     * 
     * В отличии от этих методов, метод toString
     * определен в каждом из возможных типов,
     * поэтому при его вызове ошибки не возникает. 
     */
    
}
`````

Чтобы компилятор мог работать с членами присущих конкретным типам составляющих дискриминантное объединение, одним из способов является сужение диапазона типов при помощи _дискриминанта_.

`````ts
class Bird {
    type: 'bird' = 'bird'; // дискриминант

    fly(): void {}

    toString(): string {
        return 'bird';
    }
}

class Fish {
    type: 'fish' = 'fish'; // дискриминант

    swim(): void {}

    toString(): string {
        return 'fish';
    }
}

class Insect {
    type: 'insect' = 'insect'; // дискриминант

    crawl(): void {}

    toString(): string {
        return 'insect';
    }
}

function move(animal: Bird | Fish | Insect): void {
    if (animal.type === 'bird') {
        animal.fly(); // Ok
    } else if (animal.type === 'fish') {
        animal.swim(); // Ok
    } else {
        animal.crawl(); // Ok
    }

    animal.toString(); // Ok
}
`````

Механизм, с помощью которого разработчик помогает выводу типов, называется _защитники типа_, и  будет рассмотрен позднее в одноимённой главе  (глава [“Типизация - Защитники типа”](../036.(Типизация)%20Защитники%20типа)). А пока стоит сосредоточиться на самих идентификаторах вариантов.

Прежде всего стоит прояснить, что дискриминант, это поле, которое обязательно должно принадлежать к литеральному типу отличному от `sunique symbol` и определенное в каждом типе составляющем _дискриминантное объединение_. Кроме того, поля обязательно должны быть инициализированы при объявлении или в конструкторе. Также не будет лишним напомнить что список литеральных типов к которому может принадлежать дискриминант состоит из `Literal Number`, `Literal String`, `Template Literal String`, `Literal Boolean`, `Literal Enum`. 

`````ts
class Bird {
    type: 'bird' = 'bird'; // инициализация в момент объявления поля

    fly(): void {}
}

class Fish {
    type: 'fish' = 'fish'; // инициализация в момент объявления поля

    swim(): void {}
}

class Insect {
    type: 'insect';

    constructor(){
        this.type = 'insect'; // инициализация в конструкторе
    }

    crawl(): void {}
}

function move(animal: Bird | Fish | Insect): void {}
`````

В случае, когда типы полей являются уникальными для всего множества, они идентифицируют только свой тип.

`````ts
class Bird {
    groupID: 0 = 0;

    fly(): void {}
}

class Fish {
    groupID: 1 = 1;

    swim(): void {}
}

class Insect {
    groupID: 2 = 2;

    crawl(): void {}
}

// groupID 0 === Bird
// groupID 1 === Fish
// groupID 2 === Insect
`````

Тогда, когда тип поля не является уникальным, он идентифицирует множество типов, у которых совпадают типы одноимённых идентификаторов вариантов.

`````ts
class Bird {
    groupID: 0 = 0;

    fly(): void {}
}

class Fish {
    groupID: 0 = 0;

    swim(): void {}
}

class Insect {
    groupID: 1 = 1;

    crawl(): void {}
}

// groupID 0 === Bird | Fish
// groupID 1 === Insect
`````

Количество полей, которые служат идентификаторами вариантов, может быть любым.

`````ts
enum AnimalTypes {
    Bird = 'bird',
    Fish = 'fish',
}


class Bird {
    type: AnimalTypes.Bird = AnimalTypes.Bird;

    fly(): void {}
}
class Robin extends Bird {
    id: 0 = 0;
}
class Starling extends Bird {
    id: 1 = 1;
}


class Fish {
    type: AnimalTypes.Fish = AnimalTypes.Fish;

    swim(): void {}
}

class Shark extends Fish {
    id: 0 = 0;
}
class Barracuda extends Fish {
    id: 1 = 1;
}



declare const animal: Robin | Starling | Shark | Barracuda;



if(animal.type === AnimalTypes.Bird){
    /**
     * В области вижимости этого блока if
     * константа animal принадлежит к типу Bird или Starling
     */
    animal; // const animal: Robin | Starling

    if(animal.id === 0){
        /**
         * В области вижимости этого блока if
         * константа animal принадлежит к типу Robin
         */
        animal; // const animal: Robin
    }else{
        /**
         * В области вижимости этого блока else
         * константа animal принадлежит к типу Starling
         */

        animal; // const animal: Starling
    }
}else{
    /**
     * В области вижимости этого блока if
     * константа animal принадлежит к типу Shark или Barracuda
     */

    animal; // const animal: Shark | Barracuda

    if(animal.id === 0){
        /**
         * В области вижимости этого блока if
         * константа animal принадлежит к типу Shark
         */
        animal; // const animal: Shark
    }else{
        /**
         * В области вижимости этого блока else
         * константа animal принадлежит к типу Barracuda
         */

        animal; // const animal: Barracuda
    }
}

`````

При необходимости декларирования поля, выступающего в роли дискриминанта, в интерфейсе, ему указывается более общий совместимый тип. Для литерального строкового типа, это тип `string`, для литерального числового, это `number` и т.д.

`````ts
interface IT {
  /**
   * Дискриминантное поле
   */
  type: string; // это поле предполагается использовать в качестве дискриминанта поля
}


class A implements IT {
  type: "a" = "a"; // переопределение более конкретным типом
}
class B implements IT {
  type: "b" = "b"; // переопределение более конкретным типом
}


function valid(value: A | B){
  if (value.type === "a") {
    // здесь value расценивается как принадлежащее к типу A
  }else if (value.type === "b") {
    // здесь value расценивается как принадлежащее к типу B
  }

  // здесь value расценивается как тип обладающий общими для A b B признаками
}
`````
