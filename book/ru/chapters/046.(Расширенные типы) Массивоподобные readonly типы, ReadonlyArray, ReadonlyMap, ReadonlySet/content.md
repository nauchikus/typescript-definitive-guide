# Массивоподобные readonly типы, ReadonlyArray, ReadonlyMap, ReadonlySet

Чем меньше шансов случайного изменения значений определенных в объектных типах, тем больше программа защищена от ошибок во время выполнения. Очередным шагом в этом направлении стали неизменяемые массивоподобные типы `ReadonlyArray<T>`, `ReadonlyMap<K, V>`, `ReadonlySet<T>`, а также механизм указания модификатора `readonly` в аннотации типа.


## Массивоподобные readonly типы (модифицировать непосредственно в аннотации типа)

_TypeScript_ реализует механизм позволяющий определять массивы и кортежи, как неизменяемые структуры данных. Для этого к типу указанному в аннотации типа добавляется модификатор `readonly`.

`````ts
let array: readonly string[] = ['Kent', 'Clark']; // Массив
let tuple: readonly [string, string] = ['Kent', 'Clark']; // Кортеж
`````

Элементы массивоподобных структур, определенных как `readonly`, невозможно заменить или удалить. Кроме того, в подобные структуры невозможно добавить новые элементы. Иными словами, у массивоподобных `readonly` типов отсутствуют признаки предназначенные для изменения их содержимого.

В случае объявления `readonly` массива становится невозможно изменить его элементы с помощью индексной сигнатуры (`array[...]`) 

`````ts
let array: readonly string[] = ['Kent', 'Clark']; // Массив
array[0] = 'Wayne'; // Error, -> Index signature in type 'readonly string[]' only permits reading.
array[array.length] = 'Batman'; // Error ->  Index signature in type 'readonly string[]' only permits reading.
`````

Помимо этого, у `readonly` массива отсутствуют методы, с помощью которых можно изменить элементы массива.

`````ts
let array: readonly string[] = ['Kent', 'Clark'];
array.push('Batman'); // Error ->  Property 'push' does not exist on type 'readonly string[]'.
array.shift(); // Error -> Property 'shift' does not exist on type 'readonly string[]'.

array.indexOf('Kent'); // Ok
array.map(item => item); // Ok
`````

С учетом погрешности на известные различия между массивом и кортежем, справедливо утверждать, что правила для `readonly` массива справедливы и для `readonly` кортежа. Помимо того, что невозможно изменить или удалить слоты кортежа, он также теряет признаки массива, которые способны привести к его изменению.

`````ts
let tuple: readonly [string, string] = ['Kent', 'Clark'];
tuple[0] = 'Wayne'; // Error -> Cannot assign to '0' because it is a read-only property.

tuple.push('Batman'); // Error -> Property 'push' does not exist on type 'readonly [string, string]'.
tuple.shift(); // Error -> Property 'shift' does not exist on type 'readonly [string, string]'.

tuple.indexOf('Kent'); // Ok
tuple.map(item => item); // Ok
`````


Также не будет лишним упомянуть, что массив или кортеж указанный в аннотации с помощью расширенного типа `Readonly<T>`, расценивается выводом типов как помеченный модификатором `readonly`.

`````ts
// type A = readonly number[];
type A = Readonly<number[]>;

// type B = readonly [string, boolean];
type B = Readonly<[string, boolean]>;
`````

Благодаря данному механизму в сочетании с механизмом множественного распространения (`spread`), становится возможным типизировать сложные сценарии, одним из которых является реализация известной всем функции `concat` способной объединить не только массивы, но и кортежи.
 
`````ts
type A = readonly unknown[];

function concat<T extends A, U extends A>(a: T, b: U): [...T, ...U] {
    return [...a, ...b];
}

// let v0: number[]
let v0 = concat([0, 1], [2, 3]);

// let v1: [0, 1, 2, 3]
let v1 = concat([0, 1] as const, [2, 3] as const);

// let v2: [0, 1, ...number[]]
let v2 = concat([0, 1] as const, [2, 3]);

// let v3: number[]
let v3 = concat([0, 1], [2, 3] as const);
`````

Напоследок стоит упомянуть, что вывод типов расценивает `readonly` массив как принадлежащий к интерфейсу `ReadonlyArray<T>`, речь о котором пойдет далее.


## ReadonlyArray<T> (неизменяемый массив)

Расширенный тип `ReadonlyArray<T>` предназначен для создания неизменяемых массивов. `ReadonlyArray<T>` запрещает изменять значения массива, используя индексную сигнатуру `array[n]`.

`````ts
let array: ReadonlyArray<number> = [0, 1, 2];

array[0] = 1; // Error -> Index signature in type 'readonly number[]' only permits reading.
array[array.length] = 3; // Error -> Index signature in type 'readonly number[]' only permits reading.
`````

Кроме того, тип `ReadonlyArray<T>` не содержит методы, способные изменить, удалить или добавить элементы.

`````ts
let array: ReadonlyArray<number> = [0, 1, 2];

array.push(3); // Error -> Property 'push' does not exist on type 'readonly number[]'.
array.shift(); // Error -> Property 'shift' does not exist on type 'readonly number[]'.

array.indexOf(0); // Ok 
`````


## ReadonlyMap<K, V> (неизменяемая карта)

Расширенный тип `ReadonlyMap<K, V>`, в отличие от своего полноценного прототипа, не имеет методов, способных его изменить.

`````ts
let map: ReadonlyMap<string, number> = new Map([["key", 0]]);
`````

## ReadonlySet<T> (неизменяемое множество)

Аналогично другим структурам данных предназначенных только для чтения, расширенный тип `ReadonlySet<T>` не имеет методов, способных его изменить.

`````ts
let set: ReadonlySet<number> = new Set([0, 1, 2]);
`````
