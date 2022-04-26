## [КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ] Свойство length у кортежа теперь readonly

Начиная с текущей версии свойство `length` у кортежей стало только для чтения `readonly`.

`````ts
function f(tuple: [boolean, number, string]) {
    tuple.length = 0; // Error -> Type '0' is not assignable to type '3'.
}
`````
