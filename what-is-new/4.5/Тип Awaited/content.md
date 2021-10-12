## Тип Awaited

Новый расширенный тип `Awaited<T>` предназначен для рекурсивного развертывания промисов, поможет без труда указывать тип, к которому принадлежит результат асинхронных операций.

`````ts
// A = string
type A = Awaited<Promise<string>>;

// B = string
type B = Awaited<Promise<Promise<string>>>;

// C = string | number
type C = Awaited<string | Promise<number>>;
`````
