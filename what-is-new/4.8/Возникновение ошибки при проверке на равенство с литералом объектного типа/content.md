## Возникновение ошибки при проверке на равенство с литералом объектного типа

В некоторых языках (как например `Phyton`) оператор `==` в операциях с объектными типами выполняет проверку над _значениями_ объектов, как если бы эти объекты были примитивами. 

`````py
// выражение проверяет person_array на отсутствие в нем элементов
if person_array == []:
    print("Длина массива равна 0!")
`````

В _JavaScript_ объектные типы представлены ссылками на них, поэтому схожее выражение всегда будет ложным. Поэтому, чтобы облегчить новичкам переход из одного языка в _TypeScript_, его поведение было откорректировано. 

`````ts
let array: number[] = [];
// бессмысленное условие (раньше) Ok (теперь) Error -> This condition will always return 'false' since JavaScript compares objects by reference, not value.(2839)
if (array === []) {

}


let object: object = {};
// бессмысленное условие (раньше) Ok (теперь) Error -> This condition will always return 'false' since JavaScript compares objects by reference, not value.(2839)
if (object === {}) {

}
`````
