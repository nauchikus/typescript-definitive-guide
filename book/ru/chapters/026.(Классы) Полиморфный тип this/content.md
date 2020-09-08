# Полиморфный тип this
## Полиморфный тип this


В *TypeScript* существует возможность указывать в качестве типа данных *полиморфный тип* `this`. 

Полиморфный тип данных — это тип, который представляет множество типов, как единое целое.

Полиморфный тип `this` является совокупностью типов, определяющих тип экземпляра. Кроме того, полиморфный тип `this` доступен для указания только в классах и интерфейсах.

Чтобы понять о чем идет речь, нужно представить два класса, связанных с помощью механизма наследования, в каждом из которых объявлен метод с типом возвращаемого значения, принадлежащему к типу класса, в котором он объявлен. 

~~~~~typescript
class Animal {
    public sit(): Animal { // реализация метода
        return this;
    }
}

class Bird extends Animal {
    public fly(): Bird { // дополнение супертипа специфичным методом
        return this;
    }
}
~~~~~

Если создать экземпляр подкласса и вызвать по цепочке метод подкласса, а затем — суперкласса, то операция завершится успехом.

~~~~~typescript
const bird: Bird = new Bird()
    .fly() // Ok, возвращает тип Bird
    .sit(); // Ok, возвращает тип Animal
~~~~~

Если попробовать изменить порядок вызова методов, то возникнет ошибка. Произойдет это по той причине, что метод, объявленный в суперклассе, возвращает значение, принадлежащие к типу самого суперкласса, который ничего не знает о методах, объявленных в его подтипах.

~~~~~typescript
const bird: Bird = new Bird()
    .sit() // Ok, возвращает тип Animal
    .fly(); // Error, в типе Animal, возвращенного на предыдущем шаге, метод нет объявления метода fly
~~~~~

Можно, конечно, в качестве возвращаемого значения указать тип `Any`, но помимо того, что пропадет автодополнение, ещё и пострадает семантическая привлекательность кода.

~~~~~typescript
class Animal {
    public sit(): any {
        return this;
    }
}

class Bird extends Animal {
    public fly(): any {
        return this;
    }
}

let bird: Bird = new Bird()
    .fly() // Ok
    .sit(); // Ok

bird = new Bird()
    .sit() // Ok
    .fly(); // Ok, работает, но так лучше не делать
~~~~~

*TypeScript* предлагает решить эту проблему с помощью полиморфного типа `this`. Ожидаемое поведение достигается за счет того, что полиморфный тип `this` является множеством типов, определяемого цепочкой наследования. Другими словами, тип `this` будет принадлежать к тому же типу, что и экземпляр подкласса, который принадлежит к типу подкласса и типу суперкласса одновременно.

Такое поведение называется *F-ограниченный полиморфизм* (F-bounded polymorphism).

~~~~~typescript
class Animal {
    public sit(): this {
        return this;
    }
}

class Bird extends Animal {
    public fly(): this {
        return this;
    }
}

let bird = new Bird()
    .fly() // Ok
    .sit(); // Ok

bird = new Bird()
    .sit() // Ok, возвращает тип Bird
    .fly(); // Ok
~~~~~

Стоит отдельно подчеркнуть, что полиморфный тип `this` не принадлежит к типу класса или интерфейса, в котором указан. Полиморфный тип `this` может быть определен только на основе экземпляра класса. Проще говоря, полиморфный тип `this` принадлежит к типу своего экземпляра и может быть определен только в момент создания экземпляра. Так же тип `this` совместим с типом `Any`, а при условии что флаг `--strictNullChecks` установлен в `false`, ещё и к типам `Null` и `Undefined`. К тому же тип `this` совместим с типом экземпляра, ссылку на который можно получить с помощью ключевого слова `this`.

~~~~~typescript
class Animal {
    public animalAll: this[] = []; // массив с полиморфным типом this

    constructor() {
        this.add(new Animal()); // Error, так как на данном этапе не известно, к какому типу будет принадлежать полиморфный тип this
        this.add(this); // Ok
    }

    public add(animal: this): this {
        this.animalAll.push(animal);
        
        return this;
    }
}

class Type {
    static interface: Animal = new Animal();
    static animal: Animal = new Animal();
    static any: any = new Animal();
    static null: null = null;
    static undefined: undefined = undefined;
}

const animal = new Animal()
    .add(Type.animal) // Ok
    .add(Type.interface) // Error
    .add(Type.any) // Ok
    .add(Type.null) // Ok
    .add(Type.undefined); // Ok
~~~~~

Не будет лишним упомянуть, что в тех случаях, когда тип не указан явно, а в качестве значения выступает ссылка на экземпляр (`this`), то вывод типов будет указывать на принадлежность к полиморфному типу `this`.

~~~~~typescript
class Animal {
    public instance = this; // instance: this
    
    public getInstance() { // getInstance(): this
        const instance = this; // instance: this
        
        return this;
    }
}
~~~~~
