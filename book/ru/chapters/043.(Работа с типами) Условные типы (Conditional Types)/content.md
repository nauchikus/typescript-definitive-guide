# Условные типы (Conditional Types)
## Условные типы (Conditional Types)


*Условные типы* (Conditional Types) — это типы, способные принимать одно из двух значений, основываясь на выражении, в котором устанавливается принадлежность к заданному типу данных. Условные типы семантически схожи с тернарным оператором. 

<<<<<<< HEAD
```typescript
T extends U ? T1 : T2
```
=======
`````ts
T extends U ? T1 : T2
`````
>>>>>>> master

В блоке выражения с помощью ключевого слова `extends` устанавливается принадлежность к заданному типу. Если тип, указанный слева от ключевого слова `extends`, совместим с типом, указанным по правую сторону, то условный тип будет принадлежать к типу `T1`, иначе — к типу `T2`. Стоит заметить, что в качестве типов `T1` и `T2` могут выступать, в том числе и условные типы, что в свою очередь создаст цепочку условий для определения типа.

Помимо того, что невозможно переоценить пользу от условных типов, очень сложно придумать минимальный пример, который бы эту пользу проиллюстрировал. Поэтому в этой главе будут приведены лишь бессмысленные примеры, демонстрирующие принцип их работы.

<<<<<<< HEAD
```typescript
=======
`````ts
>>>>>>> master
type T0<T> = T extends number ? string : boolean;

let v0: T0<5>; // let v0: string
let v1: T0<'text'>; // let v1: boolean

type T1<T> = T extends number | string ? object : never;

let v2: T1<5>; // let v2: object
let v3: T1<'text'>; // let v3: object
let v4: T1<true>; // let v2: never

type T2<T> = T extends number ? "Ok" : "Oops";

let v5: T2<5>; // let v5: "Ok"
let v6: T2<'text'>; // let v6: "oops"

// вложенные условные типы

type T3<T> =
    T extends number ? "IsNumber" :
    T extends string ? "IsString" :
    "Oops";

let v7: T3<5>; // let v7: "IsNumber"   
let v8: T3<'text'>; // let v8: "IsString"
let v9: T3<true>; // let v9: "Opps"
<<<<<<< HEAD
```

Нужно быть внимательным, когда в условиях вложенных условных типов проверяются совместимые типы, так как порядок условий может повлиять на  результат.

```typescript
=======
`````

Нужно быть внимательным, когда в условиях вложенных условных типов проверяются совместимые типы, так как порядок условий может повлиять на  результат.

`````ts
>>>>>>> master
type T0<T> =
    T extends IAnimal ? "animal" :
    T extends IBird ? "bird" :
    T extends IRaven ? "raven" :
    "no animal";

type T1<T> =
    T extends IRaven ? "raven" :
    T extends IBird ? "bird" :
    T extends IAnimal ? "animal" :
    "no animal";

// всегда "animal"
let v0:T0<IAnimal>; // let v0: "animal"
let v1: T0<IBird>; // let v1: "animal"
let v2: T0<IRaven>; // let v2: "animal"

// никогда "bird"
let v3:T1<IRaven>; // let v3: "raven"
let v4: T1<IBird>; // let v4: "raven"
let v5: T1<IAnimal>; // let v5: "animal"
<<<<<<< HEAD
```

Если в качестве аргумента условного типа выступает тип-объединение (`Union`, глава [“Типы - Union, Intersection”](../016.(Типы)%20Типы%20-%20Union,%20Intersection)), то условия будут выполняться для каждого типа, составляющего объединенный тип.

```typescript
=======
`````

Если в качестве аргумента условного типа выступает тип-объединение (`Union`, глава [“Типы - Union, Intersection”](../016.(Типы)%20Типы%20-%20Union,%20Intersection)), то условия будут выполняться для каждого типа, составляющего объединенный тип.

`````ts
>>>>>>> master
interface IAnimal { type: string; }
interface IBird extends IAnimal { fly(): void; }
interface IRaven extends IBird {}

type T0<T> =
    T extends IAnimal ? "animal" :
    T extends IBird ? "bird" :
    T extends IRaven ? "raven" :
    "no animal";

type T1<T> =
    T extends IRaven ? "raven" :
    T extends IBird ? "bird" :
    T extends IAnimal ? "animal" :
    "no animal";

// всегда "animal"
let v0:T0<IAnimal | IBird>; // let v0: "animal"
let v1: T0<IBird>; // let v1: "animal"
let v2: T0<IRaven>; // let v2: "animal"

// никогда "bird"
let v3:T1<IAnimal | IRaven>; // let v3: "raven"
let v4: T1<IBird>; // let v4: "raven"
let v5: T1<IAnimal | IBird>; // let v5: "animal"
<<<<<<< HEAD
```

Помимо конкретного типа, в качестве правого (от ключевого слова `extends`) типа также может выступать другой параметр типа. 

```typescript
=======
`````

Помимо конкретного типа, в качестве правого (от ключевого слова `extends`) типа также может выступать другой параметр типа. 

`````ts
>>>>>>> master
type T0<T, U> = T extends U ? "Ok" : "Oops";

let v0: T0<number, any>; // Ok
let v1:T0<number, string>; // Oops
<<<<<<< HEAD
```
=======
`````
>>>>>>> master


## Распределительные условные типы (Distributive Conditional Types)


Условные типы, которым в качестве аргумента типа устанавливается объединенный тип (`Union Type`, глава [“Типы - Union, Intersection”](../016.(Типы)%20Типы%20-%20Union,%20Intersection)), называются *распределительные условные типы* (`Distributive Conditional Types`). Называются они так, потому что каждый тип, составляющий объединенный тип, будет распределен таким образом, чтобы выражение условного типа было выполнено для каждого. Это, в свою очередь, также может определить условный тип, как тип-объединение.

<<<<<<< HEAD
```typescript
=======
`````ts
>>>>>>> master
type T0<T> =
    T extends number ? "numeric" :
    T extends string ? "text" :
    "other";

let v0: T0<string | number>; // let v0: "numeric" | "text"
let v1: T0<string | boolean>; // let v1: "text" | "other"
<<<<<<< HEAD
```

Для лучшего понимания процесса происходящего при определении условного типа в случае, когда аргумент типа принадлежит к объединенному типу, стоит рассмотреть следующий минимальный пример, в котором будет проиллюстрирован условный тип так, как его видит компилятор.

```typescript
=======
`````

Для лучшего понимания процесса происходящего при определении условного типа в случае, когда аргумент типа принадлежит к объединенному типу, стоит рассмотреть следующий минимальный пример, в котором будет проиллюстрирован условный тип так, как его видит компилятор.

`````ts
>>>>>>> master
// так видит разработчик

type T0<T> =
    T extends number ? "numeric" :
    T extends string ? "text" :
    "other";

let v0: T0<string | number>; // let v0: "numeric" | "text"
let v1: T0<string | boolean>; // let v1: "text" | "other"

// так видит компилятор

type T0<T> =
  // получаем первый тип, составляющий union тип (в данном случае number) и начинаем подставлять его на место T

  number extends number ? "numeric" : // number соответствует number? Да! Определяем "numeric"
  T extends string ? "text" :
  "other"

  | // закончили определять один тип, приступаем к другому, в данном случае string

  string extends number ? "numeric" : // string соответствует number? Нет! Продолжаем.
  string extends string ? "text" : // string соответствует string? Да! Определяем "text".
  "other"

  // Итого: условный тип T0<string | number> определен, как "numeric" | "text"
<<<<<<< HEAD
```
=======
`````
>>>>>>> master


## Вывод типов в условном типе


Условные типы позволяют в блоке выражения объявлять переменные, тип которых будет устанавливать вывод типов. Переменная типа объявляется с помощью ключевого слова `infer` и, как уже говорилось, может быть объявлена исключительно в типе, указанном в блоке выражения, расположенном правее оператора `extends`.

Это очень простой механизм, который проще сразу рассмотреть на примере.

Предположим что нужно установить, к какому типу принадлежит единственный параметр функции. 

<<<<<<< HEAD
```typescript
function f(param: string): void {}
```

Для этого нужно создать условный тип, в условии которого происходит проверка на принадлежность к типу-функции. Кроме того, единственный параметр, вместо конкретного типа, в аннотации будет содержать объявление переменной типа.

```typescript
=======
`````ts
function f(param: string): void {}
`````

Для этого нужно создать условный тип, в условии которого происходит проверка на принадлежность к типу-функции. Кроме того, единственный параметр, вместо конкретного типа, в аннотации будет содержать объявление переменной типа.

`````ts
>>>>>>> master
type ParamType<T> = T extends (p: infer U) => void ? U : undefined;

function f0(param: number): void {}
function f1(param: string): void {}
function f2(): void {}
function f3(p0: number, p1: string): void {}
function f4(param: number[]): void {}

let v0: ParamType<typeof f0>; // let v0: number
let v1: ParamType<typeof f1>; // let v1: string
let v2: ParamType<typeof f2>; // let v2: {}
let v3: ParamType<typeof f3>; // let v3: undefined
let v4: ParamType<typeof f4>; // let v4: number[]. Oops, ожидалось тип number вместо number[]

// определяем новый тип, чтобы разрешить последний случай

type WithoutArrayParamType<T> =
    T extends (p: (infer U)[]) => void ? U :
    T extends (p: infer U) => void ? U :
    undefined;

 
let v5: WithoutArrayParamType<typeof f4>; // let v5: number. Ok
<<<<<<< HEAD
```

Принципы определения переменных в условных типах, продемонстрированные на примере функционального типа, идентичны и для объектных типов.

```typescript
type ParamType<T> = T extends { a: infer A, b: infer B } ? A | B : undefined;

let v: ParamType<{ a: number, b:string }>; // let v: string | number
```
=======
`````

Принципы определения переменных в условных типах, продемонстрированные на примере функционального типа, идентичны и для объектных типов.

`````ts
type ParamType<T> = T extends { a: infer A, b: infer B } ? A | B : undefined;

let v: ParamType<{ a: number, b:string }>; // let v: string | number
`````
>>>>>>> master
