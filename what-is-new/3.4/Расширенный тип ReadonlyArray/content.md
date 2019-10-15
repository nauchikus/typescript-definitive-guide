##Расширенный тип ReadonlyArray

Расширенный тип `ReadonlyArray<T>` предназначен для создания неизменяемых массивов. `ReadonlyArray<T>` запрещает изменять значения массива использую индексную сигнатуру `array[...]`.

`````typescript
let array: ReadonlyArray<number> = [0,1,2];

array[0] = 1; // Error, Index signature in type 'readonly number[]' only permits reading.ts(2542)
array[array.length] = 3; // Error, Index signature in type 'readonly number[]' only permits reading.ts(2542)
`````

Кроме того, тип `ReadonlyArray<T>` не сождержит методы, способные изменить, удалить существующие или добавить новые элементы.


`````typescript
let array: ReadonlyArray<number> = [0,1,2];

array.push(3); // Error, Property 'push' does not exist on type 'readonly number[]'.ts(2339)
array.shift(); // Error, Property 'shift' does not exist on type 'readonly number[]'.ts(2339)

array.indexOf(0); // Ok 
`````