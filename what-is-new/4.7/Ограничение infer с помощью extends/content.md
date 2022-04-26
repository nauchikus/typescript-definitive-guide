## Ограничение infer с помощью extends

Условные типы позволяют творить настоящие чудеса, но иногда бывают немного громоздки. Для примера представьте сценарий при котором необходимо получить тип первого элемента кортежа, но только тогда, когда этот тип совместим со `string`.

`````ts
type FirstNumberItem<T> =
    T extends [infer S, ...unknown[]]
        ? S extends number ? S : never
        : never;

// type A = number
type A = FirstNumberItem<[number, boolean, string]>;

// type B = 100
type B = FirstNumberItem<[100, boolean, string]>;

// type C = 100 | 500
type C = FirstNumberItem<[100 | 500, boolean]>;

// type D = never
type D = FirstNumberItem<[boolean, number, number]>;
`````

Несмотря на то, что данный код решает возложенную на него задачу, вложенные условные выражения затрудняют его читаемость. Именно этот факт и стал причиной создания нового механизма позволяющий ограничивать переменные типа `infer` конкретным типом при помощи ключевого слова `extends`.

`````ts
type FirstNumberItem<T> =
    T extends [infer S extends number, ...unknown[]] ? S : never;

/**
 * ..здесь располагается код аналогичный предыдущему.
 */
`````


