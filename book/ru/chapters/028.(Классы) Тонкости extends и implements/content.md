# Тонкости extends и implements

![Chapter Cover](./images/chapter-cover.png)

## Классы - Тонкости

Помимо всего, что было рассказано о классах ранее, с ними связано несколько неочевидных моментов, о которых догадаться самостоятельно, не так просто.

## Классы - Тонкости implements

Кроме того, что класс может реализовать (`implements`) интерфейсы (`interface`), он также может реализовать другой класс.

```typescript
interface IAnimal {
    name: string;
}

class Animal {
    public name: string;
}

class Bird implements IAnimal {
    // Ok
    public name: string;
}
class Fish implements Animal {
    // Ok
    public name: string;
}
```

Как уже можно было догадаться, при реализации классом другого класса, действуют те же правила, что и при расширении класса, интерфейсом. То есть, класс у которого все члены объявлены, как публичные (`public`), может реализовать любой другой класс. В то время, как класс имеющий члены, с такими модификаторами доступа, как закрытые (`private`) или защищенные (`protected`), может реализовать только этот же класс или его потомки.

```typescript
class Animal {
    public name: string;
}

class Bird implements Animal {
    // Ok
    public name: string;
    protected age: number;
}
class Fish implements Animal {
    // Ok
    public name: string;
    private arial: string;
}

class Raven implements Bird {
    // Error
    public name: string;
    protected age: number;
}
class Owl extends Bird implements Bird {
    // Ok
    public name: string;
    protected age: number;
}

class Shark implements Fish {
    // Error
    public name: string;
}
class Barracuda extends Fish implements Fish {
    // Ok
    public name: string;
}
```

## Частичное Слияние интерфейса с классом

На текущий момент, известно, что два интерфейса объявленные, в одной области видимости, сливаются вместе. Кроме того, если интерфейс объявлен в одной области видимости с одноименным классом, то компилятор считает, что класс реализовал одноименный интерфейс.

```typescript
interface Animal {
    id: string;
    age: number;
}

class Animal {}

let animal = new Animal(); // Ok

animal.id = 'animal'; // Ok
animal.age = 0; // Ok

let { id, age } = animal; // Ok -> id: string and age: number

console.log(id, age); // 'animal', 0
```
