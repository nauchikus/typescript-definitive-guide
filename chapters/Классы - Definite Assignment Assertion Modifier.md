## Классы — Definite Assignment Assertion Modifier
________________

Для того, чтобы повысить типобезопасность программы, рекомендуется вести разработку с активной опцией `--strict` (глава [“Опции компилятора”]()), которая активирует множество других опций, изменяющих поведение компилятора, заставляя разработчиков писать код, сводящий к минимуму ошибки на этапе выполнения. 

Это привело к созданию опции `--strictPropertyInitialization`, которая при активной опции `--strictNullChecks`, запрещает классу иметь поля, типам которых явно не указана принадлежность к `Undefined` и которые не были инициализированы в момент его создания. Таким образом предотвращается обращение к полям, которые могут иметь значение `undefined`.

~~~~~typescript
class Identifier {
    public a: number = 0; // Ok, инициализация при объявлении
    public b: number; // Ok, инициализация в конструкторе
    public c: number | undefined; // Ok, явное указание принадлежности к типу Undefined
    public d: number; // Error, инициализация отсутствует
    
    constructor() {
        this.b = 0;
    }
}
~~~~~

Но бывают случаи, при которых условия, устанавливаемые опцией `--strictPropertyInitialization`, не могут быть удовлетворены в полной мере. К самым распространенным случаям можно отнести установку значений полей с помощью *DI* (dependency injection), инициализация, вынесенная в методы так называемого жизненного цикла, а также методы инициализации, выполняемые из конструктора класса. 

~~~~~typescript
// инициализация с помощью DI
class A {
    @Inject(Symbol.for('key'))
    public field: number; // Error
}
~~~~~

~~~~~typescript
// метод жизненного цикла из Angular
class B {
    private field: number; // Error
    
    public ngOnInit(): void {
        this.field = 0;
    }
}
~~~~~

~~~~~typescript
// инициализация вне конструктора
class C {
    private field: number; // Error

    constructor(){
        this.init();
    }

    private init(): void {
        this.field = 0;
    }
}
~~~~~

Для таких случаев синтаксис *TypeScript* содержит модификатор *definite assignment assertion modifier*, который указывается с помощью символа восклицательного знака (`!`), располагаемого после идентификатора поля или переменной.

~~~~~typescript
class Identifier {
    public identifier!: Type;
}

// или

const identifier!: Type;
~~~~~

Применяя модификатор *definite assignment assertion modifier* разработчик сообщает компилятору, что берет ответственность за инициализацию поля на себя.

~~~~~typescript
// инициализация с помощью DI
class A {
    @Inject(Symbol.for('key'))
    public field!: number; // Ok
}
~~~~~

~~~~~typescript
// метод жизненного цикла из Angular
class B {
    private field!: number; // Ok
    
    public ngOnInit(): void {
        this.field = 0;
    }
}
~~~~~

~~~~~typescript
// инициализация вне конструктора
class C {
    private field!: number; // Ok
    
    constructor(){
        this.init();
    }


    private init(): void {
        this.field = 0;
    }
}
~~~~~
