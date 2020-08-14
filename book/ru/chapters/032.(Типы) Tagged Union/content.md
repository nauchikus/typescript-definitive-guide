# Tagged Union

![Chapter Cover](./images/chapter-cover.png)

## Размеченные Объединения (Tagged Union)

Тип `Tagged Union` (Размеченное Объединение), ещё известный как `Discriminated Unions`, также как и тип `Union` (Объединение), представляет из себя множество типов данных, значение которого может принадлежать к одному конкретному типу. Размеченные Объединения указывается с помощью оператора прямой черты `|`, по обе стороны которой, располагаются типы данных.

```typescript
let v1: T1 | T2 | T3;
```

Из-за того, что все описанное ранее, для типа `Union` (глава [“Типы - Union, Intersection”]()), идентично и для `Tagged Union`, будет более разумно, не повторяться, а сделать упор на различия. Но так как полное погружение, которое сможет приоткрыть завесу тайны `Tagged Union`, выходит за рамки темы, или более точнее, будет преждевременным, остается лишь описать детали, к которым рекомендуется вернуться, как только наступит время. И так…

Несмотря на то, что `Tagged Union` в большей степени идентичен типу Union, все же существует два отличия. Первое отличие заключается в том, что к типу `Tagged Union` могут принадлежать только ссылочные типы данных. Второе отличие в том, что каждому объектному типу, которые ещё называют варианты, составляющему `Tagged Union`, указывается идентификатор варианта.

Помните что компилятор, без помощи разработчика, способен работать лишь с общими для всех типов признаками?

```typescript
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
    animal.fly(); // Error
    animal.swim(); // Error
    animal.crawl(); // Error

    animal.toString(); // Ok
}
```

Так вот, чтобы компилятор смог работать с членами характерных для конкретных типов, одним из способов является, указание ему конкретного диапазона типов, с помощью идентификатора варианта.

```typescript
class Bird {
    type: 'bird' = 'bird';

    fly(): void {}

    toString(): string {
        return 'bird';
    }
}
class Fish {
    type: 'fish' = 'fish';

    swim(): void {}

    toString(): string {
        return 'fish';
    }
}
class Insect {
    type: 'insect' = 'insect';

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
```

Механизм, с помощью которого разработчик помогает выводу типов, называется _“защитники типа”_, и будет рассмотрен позднее в одноименной главе (глава [“Типизация - Защитники типа”]()). А пока стоит сосредоточится на самих идентификаторах вариантов.

Прежде всего стоит пояснить, что идентификаторы вариантов, это обычные поля объекта, которые имеют одинаковые имена и которые обязательно должны присутствовать в каждом типе множества составляющего `Tagged Union`. Помимо этого, поля обязательно должны принадлежать только к литеральным типам, таким как `Literal Number`, `Literal String`, `Literal Boolean`, `Literal Enum`. Кроме того, поля обязательно должны быть инициализированы при объявлении, либо конструкторе. Но если быть до конца откровенным, то нет разницы, в каком месте и в какое время, полю будет присвоено значение. Главное чтобы оно было присвоено раньше, чем наступит момент использовать его в условии, на основе которого, будет определяться его принадлежность к конкретному типу данных.

```typescript
class Bird {
    type: 'bird' = 'bird';

    fly(): void {}
}
class Fish {
    type: 'fish' = 'fish';

    swim(): void {}
}
class Insect {
    type: 'insect';

    constructor() {
        this.type = 'insect';
    }

    crawl(): void {}
}

function move(animal: Bird | Fish | Insect): void {}
```

В случае, когда типы полей являются уникальными для всего множества, они идентифицируют только свой тип.

```typescript
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
```

Тогда, когда тип поля не является уникальном, то он идентифицирует множество типов, у которых совпадают типы, одноименных идентификаторов вариантов.

```typescript
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
```

Количество полей, которые служат идентификаторами вариантов, может быть сколько угодно.

```typescript
enum AnimalTypes {
    Bird = 'bird',
    Fish = 'fish',
    Insect = 'insect',
}

class Bird {
    type: AnimalTypes.Bird = AnimalTypes.Bird;
    uid: 0 = 0;
    name: 'bird' = 'bird';

    fly(): void {}
}
class Fish {
    type: AnimalTypes.Fish = AnimalTypes.Fish;
    uid: 1 = 1;
    name: 'fish' = 'fish';

    swim(): void {}
}
class Insect {
    type: AnimalTypes.Insect = AnimalTypes.Insect;
    uid: 2 = 2;
    name: 'insect' = 'insect';

    crawl(): void {}
}

// type AnimalTypes.Bird === Bird
// type AnimalTypes.Fish === Fish
// type AnimalTypes.Insect === Insect

// uid 0 === Bird
// uid 1 === Fish
// uid 2 === Insect

// name 'bird' === Bird
// name 'fish' === Fish
// name 'insect' === Insect
```

Если по какой-либо причине, разработчик забудет присвоить идентификатору вариантов значение, то для того, чтобы компиляция завершилась успехом, выводу типов достаточно литерального типа данных, указанного в качестве типа поля.

_Пример с неправильным исходным кодом_

```typescript
class Bird {
    type: 'bird';
}
class Fish {
    type: 'fish';
}

function move(animal: Bird | Fish): void {
    if (animal.type === 'bird') {
        // is equal undefined === 'bird'
        // ...
    } else if (animal.type === 'fish') {
        // is equal undefined === 'fish'
        // ...
    }
}
```

Однако в скомпилированном коде от типов не останется и следа. Таким образом, в условие вместо значения будет находится значение `undefined`, что сделает условия неверными.

_Пример с неправильным скомпилированным кодом_

```typescript
class Bird {
    // missing field type
}
class Fish {
    // missing field type
}
function move(animal) {
    if (animal.type === 'bird') {
        // ...
    } else if (animal.type === 'fish') {
        // ...
    }
}
```

Поэтому очень важно не забыть присвоить значение идентификаторам вариантов, иначе может возникнуть трудно выявляемая ошибка.

_Пример с правильным исходным кодом_

```typescript
class Bird {
    type: 'bird' = 'bird';
}
class Fish {
    type: 'fish' = 'fish';
}

function move(animal: Bird | Fish): void {
    if (animal.type === 'bird') {
        // is equal 'bird' === 'bird'
        // ...
    } else if (animal.type === 'fish') {
        // is equal 'fish' === 'fish'
        // ...
    }
}
```

_Пример с правильным скомпилированным кодом_

```typescript
class Bird {
    type: 'bird' = 'bird';
}
class Fish {
    type: 'fish' = 'fish';
}

function move(animal: Bird | Fish): void {
    if (animal.type === 'bird') {
        // is equal 'bird' === 'bird'
        // ...
    } else if (animal.type === 'fish') {
        // is equal 'fish' === 'fish'
        // ...
    }
}
```
