# Защитники типа

Понимание механизмов, рассматриваемых в этой главе, научит определять конструкции, которые часто применяются на практике и способны сделать код более понятным и выразительным.


## Защитники Типа - общее

Помимо того, что _TypeScript_ имеет достаточно мощную систему выявления ошибок на этапе компиляции, разработчики языка, не останавливаясь на достигнутом, безостановочно работают над сведением их к нулю. Существенным шагом к достижению цели было добавление компилятору возможности активируемой при помощи флага `--strictNullChecks`, запрещающей неявные операции в которых участвует значение `null` и `undefined`. Простыми словами, компилятор научили во время анализа кода выявлять ошибки, способные возникнуть при выполнении операций, в которых фигурируют значения `null` или `undefined`.

Простейшим примером является операция получения элемента из dom-дерева при помощи метода `querySelector()`, который в обычном _нерекомендуемом_ режиме (с неактивной опцией `--strictNullChecks`) возвращает значение, совместимое с типом `Element`.

`````ts
const stage: Element = document.querySelector('#stage');
`````

Но в строгом _рекомендуемом_ режиме (с активной опцией `--strictNullChecks`) метод `querySelector()` возвращает объединенный тип `Element | null`, поскольку искомое значение может попросту не существовать.

`````ts
const stage: Element | null = document.querySelector('#stage');
`````

Не будет лишним напомнить, что на самом деле метод `querySelector` возвращает тип `Element | null` независимо от режима. Дело в том, что в обычном режиме тип `null` совместим с любыми типами. То есть, в случае отсутствия элемента в dom-дереве операция присваивания значения `null` переменной с типом `Element` не приведет к возникновению ошибки.

`````ts
// lib.es6.d.ts
interface NodeSelector {
    querySelector(selectors: string): Element | null;
}
`````

Возвращаясь к примеру с получением элемента из dom-дерева стоит сказать, что в строке кода, в которой происходит подписка элемента на событие, на этапе компиляции все равно возникнет ошибка, даже в случае, если элемент существует. Дело в том, что компилятор _TypeScript_ не позволит вызвать метод `addEventListener`, поскольку для него объект, на который ссылается переменная, принадлежит к типу `Element` ровно настолько же, насколько он принадлежит к типу `null`.

`````ts
const stage: Element | null = document.querySelector('#stage');
stage.addEventListener('click', stage_clickHandler); // тип переменной stage Element или Null?

function stage_clickHandler(event: MouseEvent): void {}
`````

Именно из-за этой особенности или другими словами, неоднозначности, которую вызывает тип `Union`, в _TypeScript_, появился механизм называемый _защитниками типа_ (`Type Guards`).

_Защитники типа_ — это правила, которые помогают выводу типов определить суженый диапазон типов для значения, принадлежащего к типу `Union`. Другими словами, разработчику предоставлен механизм, позволяющий с помощью выражений составить логические условия, проанализировав которые, вывод типов сможет сузить диапазон типов до указанного и выполнить над ним требуемые операции.

Понятно, что ничего не понятно. Поэтому, прежде чем продолжить разбирать определение по шагам, нужно рассмотреть простой пример, способный зафиксировать картинку в сознании.

Представим два класса, `Bird` и `Fish`, в обоих из которых реализован метод `voice`. Кроме этого, в классе `Bird` реализован метод `fly`, а в классе `Fish` — метод `swim`. Далее представим функцию с единственным параметром, принадлежащему к объединению типов `Bird` и `Fish`. В теле этой функции без труда получится выполнить операцию вызова метода `voice` у её параметра, так как этот метод объявлен и в типе `Bird`, и в типе `Fish`. Но при попытке вызвать метод `fly` или `swim` возникает ошибка, так как эти методы не являются общими для обоих типов. Компилятор попросту находится в подвешенном состоянии и не способен самостоятельно определится.

`````ts
class Bird {
    public fly(): void {}
    public voice(): void {}
}

class Fish {
    public swim(): void {}
    public voice(): void {}
}

function move(animal: Bird | Fish): void {
    animal.voice(); // Ok

    animal.fly(); // Error
    animal.swim(); // Error
}
`````

Для того, чтобы облегчить работу компилятору, _TypeScript_ предлагает процесс сужения множества типов, составляющих тип `Union`, до заданного диапазона, а затем закрепляет его за конкретной областью видимости в коде. Но, прежде чем диапазон типов будет вычислен и ассоциирован с областью, разработчику необходимо составить условия, включающие в себя признаки, недвусмысленно указывающие на принадлежность к нужным типам.

Из-за того, что анализ происходит на основе логических выражений, область, за которой закрепляется суженый диапазон типов, ограничивается областью выполняемой при истинности условия.

Стоит заметить, что от признаков, участвующих в условии, зависит место, в котором может находится выражение, а от типов, составляющих множество типа `Union`, зависит способ составления логического условия.


## Сужение диапазона множества типов на основе типа данных

При необходимости составления условия, в основе которого лежат допустимые с точки зрения _JavaScript_ типы, прибегают к помощи уже знакомых операторов как `typeof` и `instanceof`.
 
К помощи оператора `typeof` прибегают тогда, когда хотят установить принадлежность к типам `number`, `string`, `boolean`, `object`, `function`, `symbol` или `undefined`. Если значение принадлежит к производному от объекта типу, то установить его принадлежность к типу определяемого классом и находящегося в иерархии наследования, можно при помощи оператора `instanceof`.

Как уже было сказано, с помощью операторов `typeof` и `instanceof` составляется условие по которому компилятор может вычислить к какому конкретно типу или диапазону будет относиться значение в определяемой условием области.


`````ts
// Пример для оператора typeof


type ParamType = number | string | boolean | object | Function | symbol | undefined;

function identifier(param: ParamType): void {
    param; // param: number | string | boolean | object | Function | symbol | undefined

    if (typeof param === 'number') {
      param; // param: number
    } else if (typeof param === 'string') {
      param; // param: string
    } else if (typeof param === 'boolean') {
      param; // param: boolean
    } else if (typeof param === 'object') {
      param; // param: object
    } else if (typeof param === 'function') {
      param; // param: Function
    } else if (typeof param === 'symbol') {
      param; // param: symbol
    } else if (typeof param === 'undefined') {
      param; // param: undefined
    }

    param; // param: number | string | boolean | object | Function | symbol | undefined
}
`````


`````ts
// Пример для оператора instanceof


class Animal {
    constructor(public type: string) {}
}

class Bird extends Animal {}
class Fish extends Animal {}
class Insect extends Animal {}


function f(param: Animal | Bird | Fish | Insect): void {
    param; // param: Animal | Bird | Fish | Insect

    if (param instanceof Bird) {
        param; // param: Bird
    } else if (param instanceof Fish) {
        param; // param: Fish
    } else if (param instanceof Insect) {
        param; // param: Insect
    }

    param; // param: Animal | Bird | Fish | Insect
}
`````

Если значение принадлежит к типу `Union`, а выражение состоит из двух операторов, `if` и `else`, значение находящиеся в операторе `else` будет принадлежать к диапазону типов не участвующих в условии `if`.


`````ts
// Пример для оператора typeof


function f0(param: number | string | boolean): void {
    param; // param: number | string | boolean

    if (typeof param === 'number' || typeof param === 'string') {
        param; // param: number | string
    } else {
        param; // param: boolean
    }

    param; // param: number | string | boolean
}

function f1(param: number | string | boolean): void {
    param; // param: number | string | boolean

    if (typeof param === 'number') {
        param; // param: number
    } else {
        param; // param: string | boolean
    }

    param; // param: number | string | boolean
}
`````

`````ts
// Пример для оператора instanceof


class Animal {
    constructor(public type: string) {}
}

class Bird extends Animal {}
class Fish extends Animal {}
class Insect extends Animal {}
class Bug extends Insect {}

function f0(param: Bird | Fish | Insect): void {
    param; // param: Bird | Fish | Insect

    if (param instanceof Bird) {
        param; // param: Bird
    } else if (param instanceof Fish) {
        param; // param: Fish
    } else {
        param; // param: Insect
    }

    param; // param: Bird | Fish | Insect
}

function f1(param: Animal | Bird | Fish | Insect | Bug): void {
    param; // param: Animal | Bird | Fish | Insect | Bug
    if (param instanceof Bird) {
        param; // param: Bird
    } else if (param instanceof Fish) {
        param; // param: Fish
    } else {
        param; // param: Animal | Insect | Bug
    }

    param; // param: Animal | Bird | Fish | Insect | Bug
}
`````

Кроме того, условия можно поместить в тернарный оператор. В этом случае область на которую распространяется сужение диапазона типов, ограничивается областью содержащей условное выражение.

Представьте функцию, которой в качестве единственного аргумента можно передать как значение, принадлежащее к типу `T`, так и функциональное выражение, возвращающее значение принадлежащие к типу `T`. Для того чтобы было проще работать со значением параметра, его нужно сохранить в локальную переменную, принадлежащую к типу `T`. Но прежде компилятору нужно помочь конкретизировать тип данных, к которому принадлежит значение.

Условие, как и раньше, можно было бы поместить в конструкцию `if`/`else`, но в таких случаях больше подходит тернарный условный оператор. Создав условие, в котором значение проверяется на принадлежность к типу, отличному от типа `T`, разработчик укажет компилятору, что при выполнении условия тип параметра будет ограничен типом `Function`, тем самым создав возможность вызвать параметр как функцию. Иначе значение, хранимое в параметре, принадлежит к типу `T`.


`````ts
// Пример для оператора typeof


function f(param: string | (() => string)): void {
  param; // param: string | (() => string)

  let value: string = typeof param !== 'string' ? param() : param;

  param; // param: string | (() => string)
}
`````

`````ts
// Пример для оператора instanceof


class Animal {
    constructor(public type: string = 'type') {}
}

function identifier(param: Animal | (() => Animal)): void {
    param; // param: Animal | (() => Animal)

    let value: Animal = !(param instanceof Animal) ? param() : param;

    param; // param: Animal | (() => Animal)
}
`````

Так как оператор `switch` логически похож на оператор `if`/`else`, то может показаться, что механизм, рассмотренный в этой главе, будет применим и к нему. Но это не так. Вывод типов не умеет различать условия составленные при помощи операторов `typeof` и `instanceof` в конструкции `switch`.


## Сужение диапазона множества типов на основе признаков, присущих типу Tagged Union

Помимо определения принадлежности к единичному типу, диапазон типов, составляющих тип `Union`, можно сузить по признакам, характерным для типа `Tagged Union`.

Условия, составленные на основе идентификаторов варианта, можно использовать во всех условных операторах включая `switch`.

`````ts
// Пример для оператора if/else


enum AnimalTypes {
    Animal = "animal",
    Bird = "bird",
    Fish = "fish"
}

class Animal {
    readonly type: AnimalTypes = AnimalTypes.Animal;
}

class Bird extends Animal {
    readonly type: AnimalTypes.Bird = AnimalTypes.Bird;

    public fly(): void {}
}

class Fish extends Animal {
    readonly type: AnimalTypes.Fish = AnimalTypes.Fish;

    public swim(): void {}
}

function move(param: Bird | Fish): void {
    param; // param: Bird | Fish

    if (param.type === AnimalTypes.Bird) {
        param.fly();
    } else {
        param.swim();
    }

    param; // param: Bird | Fish
}
`````

`````ts
// Пример для тернарного оператора (?:)


function move(param: Bird | Fish): void {
    param; // param: Bird | Fish

    param.type === AnimalTypes.Bird ? param.fly() : param.swim();

    param; // param: Bird | Fish
}
`````

`````ts
// Пример для оператора switch


enum AnimalTypes {
    Animal = "animal",
    Bird = "bird",
    Fish = "fish"
}

class Animal {
    readonly type: AnimalTypes = AnimalTypes.Animal;
}

class Bird extends Animal {
    readonly type: AnimalTypes.Bird = AnimalTypes.Bird;

    public fly(): void {}
}

class Fish extends Animal {
    readonly type: AnimalTypes.Fish = AnimalTypes.Fish;

    public swim(): void {}
}

function move(param: Bird | Fish): void {
    param; // param: Bird | Fish

    switch (param.type) {
        case AnimalTypes.Bird:
            param.fly(); // Ok
            break;

        case AnimalTypes.Fish:
            param.swim(); // Ok
            break;
    }

    param; // param: Bird | Fish
}
`````

В случаях, когда множество типа `Union` составляют тип `null` и/или `undefined`, а также только один конкретный тип, выводу типов будет достаточно условия подтверждающего существование значения отличного от `null` и/или `undefined`. Это очень распространенный случай при активной опции `--strictNullChecks`. Условие, с помощью которого вывод типов сможет установить принадлежность значения к типам, отличными от `null` и/или `undefined`, может использоваться совместно с любыми условными операторами.


`````ts
// Пример с оператором if/else


function f(param: number | null | undefined): void {
    param; // param: number | null | undefined

    if (param !== null && param !== undefined) {
        param; // param: number
    }

    // or

    if (param) {
        param; // Param: number
    }

    param; // param: number | null | undefined
}
`````

`````ts
// Пример с тернарным оператором (?:), оператором нулевого слияния (??, nullish coalescing) и логическим "или" (||)


function f(param: number | null | undefined): void {
    param; // param: number | null | undefined

    var value: number = param ? param : 0;
    var value: number = param ?? 0;
    var value: number = param || 0;

    param; // param: number | null | undefined
}
`````

`````ts
// Пример с оператором switch


function identifier(param: number | null | undefined): void {
    param; // param: number | null | undefined

    switch(param) {
        case null:
            param; // param: null
            break;

        case undefined:
            param; // param: undefined
            break;

        default: {
            param; // param: number
        }
    }

    param; // param: number | null | undefined
}
`````

Кроме этого, при активной опции `--strictNullChecks`, в случаях со значением, принадлежащем к объектному типу, вывод типов может заменить оператор `Not-Null Not-Undefined`. Для этого нужно составить условие, содержащее проверку обращения к членам, в случае отсутствия которых может возникнуть ошибка.

`````ts
// Пример с Not-Null Not-Undefined (с учетом активной опции --strictNullChecks)


class Ability {
    public fly(): void {}
}

class Bird {
    public ability: Ability | null = new Ability();
}

function move(animal: Bird | null | undefined): void {
    animal.ability // Error, Object is possibly 'null' or 'undefined'
    animal!.ability // Ok
    animal!.ability.fly(); // Error, Object is possibly 'null' or 'undefined'
    animal!.ability!.fly(); // Ok
}
`````

`````ts
// Пример с защитником типа (с учетом активной опции --strictNullChecks)


class Ability {
    public fly(): void {}
}

class Bird {
    public ability: Ability | null = new Ability();
}

function move(animal: Bird | null | undefined): void {
    if (animal && animal.ability) {
        animal.ability.fly(); // Ok
    }

    // или с помощью оператора optional chaining
    if (animal?.ability) {
        animal.ability.fly(); // Ok
    }
}
`````


## Сужение диапазона множества типов на основе доступных членов объекта

Сужение диапазона типов также возможно на основе доступных (`public`) членов, присущих типам, составляющим диапазон (`Union`). Сделать это можно с помощью оператора `in`.

`````ts
class A { public a: number = 10; }
class B { public b: string = 'text'; }
class C extends A {}


function f0(p: A | B) {
    if ('a' in p) {
        return p.a;  // p: A
    }

    return p.b;  // p: B
}

function f1(p: B | C) {
    if ('a' in p) {
        return p.a;  // p: C
    }

    return p.b;  // p: B
}
`````


## Сужение диапазона множества типов на основе функции, определенной пользователем

Все перечисленные ранее способы работают только в том случае, если проверка происходит в месте отведенном под условие. Другими словами, с помощью перечисленных до этого момента способов, условие проверки нельзя вынести в отдельный блок кода (функцию). Это могло бы сильно ударить по семантической составляющей кода, а также нарушить принцип разработки программного обеспечения, который призван бороться с повторением кода (_Don’t repeat yourself, DRY_ (не повторяйся)). Но, к счастью для разработчиков, создатели _TypeScript_ реализовали возможность определять пользовательские защитники типа.

В роли пользовательского защитника может выступать функция, функциональное выражение или метод, которые обязательно должны возвращать значения, принадлежащие к типу `boolean`. Для того, чтобы вывод типов понял, что вызываемая функция не является обычной функцией, у функции вместо типа возвращаемого значения указывают предикат (предикат — это логическое выражение, значение которого может быть либо истинным `true`, либо ложным `false`).

Выражение предиката состоит из трех частей и имеет следующий вид `identifier is Type`.

Первым членом выражения является идентификатор, который обязан совпадать с идентификатором одного из параметров объявленных в сигнатуре функции. В случае, когда предикат указан методу экземпляра класса, в качестве идентификатора может быть указано ключевое слово `this`.

Стоит отдельно упомянуть, что ключевое слово `this` можно указать только в сигнатуре метода, определенного в классе или описанного в интерфейсе. При попытке указать ключевое слово `this` в предикате функционального выражения, не получится избежать ошибки, если это выражение определяется непосредственно в `prototype`, функции конструкторе, либо методе объекта, созданного с помощью литерала.


`````ts
// Пример с функцией конструктором


function Constructor() {}

Constructor.prototype.validator = function(): this is Object { // Error
    return true;
};
`````

`````ts
// Пример с литералом объекта


interface IPredicat {
    validator(): this is Object; // Ok
}

var object: IPredicat = { // Ok
    validator(): this is Object { // Error
        return this;
    }
};

var object: {validator(): this is Object} = { // Error
    validator(): this is Object { // Error
        return this;
    }
};
`````

Ко второму члену выражения относится ключевое слово `is`, которое служит в качестве утверждения. В качестве третьего члена выражения может выступать любой тип данных.


`````ts
// Пример предиката функции (function)


function isT1(p1: T1 | T2 | T3): p1 is T1 {
    return p1 instanceof T1;
}

function identifier(p1: T1 | T2 | T3): void {
    if (isT1(p1)) {
        p1; // p1: T1
    }
}
`````

`````ts
// Пример предиката функционального выражения (functional expression)


const isT2 = (p1: T1 | T2 | T3): p1 is T2 => p1 instanceof T2;

function identifier(p1: T1 | T2 | T3): void {
    if (isT2(p1)) {
        p1; // p1: T2
    }
}
`````

`````ts
// Пример предиката метода класса (static method)


class Validator {
    public static isT3(p1: T1 | T2 | T3): p1 is T3 {
        return p1 instanceof T3;
    }
}

function identifier(p1: T1 | T2 | T3): void {
    if (Validator.isT3(p1)) {
        p1; // p1: T3
    }
}
`````

Условие, на основании которого разработчик определяет принадлежность одного из параметров к конкретному типу данных, не ограничено никакими конкретными правилами. Исходя из результата выполнения условия `true` или `false`, вывод типов сможет установить принадлежность указанного параметра к указанному типу данных.

`````ts
class Animal {}
class Bird extends Animal {
    public fly(): void {}
}

class Fish extends Animal {
    public swim(): void {}
}

class Insect extends Animal {
    public crawl(): void {}
}

class AnimalValidator {
    public static isBird(animal: Animal): animal is Bird {
        return animal instanceof Bird;
    }

    public static isFish(animal: Animal): animal is Fish {
        return (animal as Fish).swim !== undefined;
    }

    public static isInsect(animal: Animal): animal is Insect {
        let isAnimalIsNotUndefinedValid: boolean = animal !== undefined;
        let isInsectValid: boolean = animal instanceof Insect;

        return isAnimalIsNotUndefinedValid && isInsectValid;
    }
}

function move(animal: Animal): void {
    if (AnimalValidator.isBird(animal)) {
        animal.fly();
    } else if (AnimalValidator.isFish(animal)) {
        animal.swim();
    } else if (AnimalValidator.isInsect(animal)) {
        animal.crawl();
    }
}
`````

Последнее, о чем осталось упомянуть, что в случае, когда по условию значение не подходит ни по одному из признаков, вывод типов установит его принадлежность к типу `never`.

`````ts
class Animal {
    constructor(public type: string) {}
}

class Bird extends Animal {}
class Fish extends Animal {}

function move(animal: Bird | Fish): void {
    if (animal instanceof Bird) {
        animal; // animal: Bird
    } else if (animal instanceof Fish) {
        animal; // animal: Fish
    } else {
        animal; // animal: never
    }
}
`````
