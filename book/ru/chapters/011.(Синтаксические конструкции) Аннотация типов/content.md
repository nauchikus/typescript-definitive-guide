# Аннотация типов

![Chapter Cover](./images/chapter-cover.png)

## Аннотация Типов

Как уже было сказано ранее, _TypeScript_, это типизированная надстройка над _JavaScript_. Другими словами, _TypeScript_ не добавляет никаких новых языковых конструкций (исключением можно назвать конструкцию `Enum`, который будет рассмотрен чуть позже), а лишь расширяет синтаксис _JavaScript_ при помощи добавления в него типов. По этой причине в этой книге не будут затрагиваться темы, относящиеся к _JavaScript_, так как она рассчитана на тех, кто уже знаком с его основами.

И прежде чем начать погружение в систему типов _TypeScript_, нужно рассмотреть такое важное понятие, как указание типа данных, для всех существующих в _JavaScript_ языковых конструкций.

Идеология типизированных языков, определяет правила, по которым указывать типы нужно везде, где это предусмотрено. В _TypeScript_ аннотация типа или указание типа осуществляется с помощью оператора двоеточия `:` после которого следует идентификатор типа данных. _TypeScript_ является статически типизированным языком, поэтому после того, как идентификатор будет связан с типом, изменить тип будет невозможно.

## Синтаксические конструкции var, let, const

При объявлении синтаксических конструкций, объявляемых с помощью операторов `var`, `let` и `const` тип данных указывается сразу после идентификатора.

```typescript
var identifier: Type = value;
let identifier: Type = value;
const IDENTIFIER: Type = value;
```

## Функции (function)

При объявлении функции, между её параметрами и телом, указывается тип возвращаемого ею значения. При наличии параметров, тип данных указывается и для них.

```typescript
function identifier(param1: Type, param2: Type): ReturnedType {}
```

Не будет лишнем напомнить, что в отличии от _JavaScript_, в _TypeScript_, в сигнатуру функции помимо её имени и параметров, также входит и возвращаемое значение.

Помимо этого, в _TypeScript_ можно объявлять параметризированные функции. Функции имеющие параметры типа называются обобщенными (подробнее о них речь пойдет в главе [“Типы - Обобщения (Generics)”](https://nauchikus.github.io/typescript-definitive-guide/book/contents/Tipy-Obobshcheniya-Generics). Параметры типа заключаются в угловые скобки `<>` и располагаются перед круглыми скобками `()`, в которые заключены параметры функции.

```typescript
function identifier<T, U>(): ReturnedType {}
```

_TypeScript_ расширяет границы типизации функций и методов таким новым для _JavaScript_ понятием, как перегрузка функций. С помощью перегрузки функций, можно аннотировать функции с одинаковыми идентификаторами, но с различными сигнатурами.

Для этого в первую очередь аннотируют сигнатуры функций, методов или конструкторов, которые не содержат тела. В последнюю очередь объявляют функцию, сигнатура которой совместима со всеми ранее аннотированными версиями. Более подробно эта тема будет освещена позднее.

```typescript
function identifier(p1: T1, p2: T2): T3;
function identifier(p1: T4, p2: T5): T6;
function identifier(p1: T, p2: T): T {
    return 'value';
}

class Identifier {
    constructor(p1: T1, p2: T2);
    constructor(p1: T3, p2: T4);
    constructor(p1: T, p2: T) {}

    identifier(p1: T1, p2: T2): T3;
    identifier(p1: T4, p2: T5): T6;
    identifier(p1: T, p2: T): T {
        return 'value';
    }
}
```

## Стрелочные Функции (arrow function)

К стрелочным функциям применимы те же правила указания типов данных, что и для обычных функций, за исключением того, что возвращаемый ими тип указывается между параметрами и стрелкой.

```typescript
<T, U>(param: Type, param: Type): Type => value;
```

## Классы (class)

Прежде чем продолжить рассмотрение изменений, которые привнес _TypeScript_ в нетипизированный мир _JavaScript_, хочу предупредить о том, что относительно классов будет использоваться терминология заимствованная из таких языков, как _Java_ или _C#_, так как она добавляет большей ясности (тем более, что в спецификации _TypeScript_ встречается подобная терминология). Так, _переменные экземпляра_ и _переменные класса_ (статические переменные) в этой книге обозначаются как _поля_ (field). _Аксессоры_ (get, set), обозначаются как _свойства_ (property). А кроме того, поля, свойства, методы, _вычисляемые свойства_ (computed property) и _индексируемые сигнатуры_ (index signature) обозначаются как _члены_ класса (member).

При объявлении поля класса, как и в случае с переменными, тип данных указывается сразу после идентификатора (имени класса). Для методов класса действуют те же правила указания типов данных, что и для обычных функций.

Для свойств, в частности для `get` указывается тип данных возвращаемого значения. Для `set` указывается лишь тип единственного параметра, а возвращаемый им тип и вовсе запрещается указывать явно.

Кроме того, классы в _TypeScript_ также могут быть обобщенными. В случае объявления обобщенного класса, параметры типа, заключенные в треугольные скобки, указываются сразу после идентификатора класса.

```typescript
class Identifier<T> {
    static staticField: Type = value; // member

    static get staticProperty(): Type {
        // member
        return value;
    }
    static set staticProperty(value: Type) {
        // member
    }

    static staticMethod<T, U>(param: Type, param: Type): Type {} // member

    [indexSignature: Type]: Type; // member

    [computedProp]: Type = value; // member

    field: Type = value; // member

    get property(): Type {
        // member
        return value;
    }
    set property(value: Type) {
        // member
    }

    constructor(param0: Type, param1: Type) {}

    method<T, U>(param: Type, param: Type): Type {} // member
}
```

## Сравнение Синтаксиса TypeScript и JavaScript

Перед тем, как подвести итоги этой главы, не будет лишним собрать обсуждаемое здесь в одном _TypeScript_ коде и сравнить его с аналогичным кодом написанным на _JavaScript_.

```typescript
// .ts
var identifier: Type = value;
let identifier: Type = value;
const IDENTIFIER: Type = value;
//  .js
var identifier = value;
let identifier = value;
const IDENTIFIER = value;

// .ts
function identifier(param1: Type, param2: Type): ReturnedType {}

// .js
function identifier(param1, param2) {}

// .ts
class Identifier<T> {
    static staticField: Type = value;

    static get staticProperty(): Type {
        return value;
    }
    static set staticProperty(value: Type) {}

    static staticMethod<T, U>(param: Type, param: Type): Type {}

    [indexSignature: Type]: Type;

    [computedProp]: Type = value;

    field: Type = value;

    get property(): Type {
        return value;
    }
    set property(value: Type) {}

    constructor(param0: Type, param1: Type) {}

    method<T, U>(param: Type, param: Type): Type {}
}

// .js
class Identifier {
    static staticField = value;

    static get staticProperty() {
        return value;
    }
    static set staticProperty(value) {}

    static staticMethod(param, param) {}

    [computedProp] = value;

    field = value;

    get property() {
        return value;
    }
    set property(value) {}

    constructor(param0, param1) {}

    method(param, param) {}
}
```

## Итог

Подведем итоги -

-   Аннотация типа устанавливается оператором двоеточия : после которого следует указание типа данных.
-   При объявлении переменных тип данных указывается сразу после идентификатора.
-   У функций и методов класса возвращаемый тип данных указывается между параметрами и телом.
-   У стрелочных функций возвращаемый тип данных указывается между параметрами и стрелкой.
-   У функций, стрелочных функций и методов класса, параметрам также указывается тип данных.
-   При необходимости функциям, стрелочным функциям и методам класса можно указать параметры типа, которые заключаются в угловые скобки и указываются перед круглыми скобками, в которых размещаются параметры функции.
-   В _TypeScript_, аннотирование типов у функций, методов и конструкторов, расширено при помощи перегрузки функций.
-   Полям класса, тип данных указывается сразу после идентификатора-имени.
-   Для геттеров (getters) указывается возвращаемый тип данных.
-   Для сеттеров (setters) указывается тип единственного параметра и вовсе не указывается возвращаемый тип.
