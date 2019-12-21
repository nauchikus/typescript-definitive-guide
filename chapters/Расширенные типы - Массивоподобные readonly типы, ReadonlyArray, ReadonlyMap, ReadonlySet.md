## Массивоподобные readonly типы
________________

Начиная с версии `3.4`, в *TypeScript* появилась возможность объявлять `Массивоподобные readonly структуры`: типы, к которым относятся массивы (`Array`) и кортежи (`Tuples`). Данный механизм призван защитить элементы массиовоподобных структур от изменения и тем самым повысить типобезопасность разрабатываемых на *TypeScript* программ. Элементы массивоподобных структур, объявленных как `readonly`, невозможно заменить или удалить. Кроме того, в подобные структуры невозможно добавить новые элементы.

Для того чтобы объявить `readonly` массив или кортеж достаточно указать в сигнатуре типа модификатор `readonly`.

`````typescript
let array: readonly string[ ] = ['Kent', 'Clark']; // Массив
let tuple: readonly [string, string] = ['Kent', 'Clark']; // Кортеж
`````

В случае объявления `readonly` массива становится невозможно изменить его элементы с помощью индексной сигнатуры (`array[...]`) 

`````typescript
let array: readonly string[] = ['Kent', 'Clark'];
array[0] = 'Wayne'; // Error, Index signature in type 'readonly number[]' only permits reading.ts(2542)
array[array.length] = 'Batman'; // Error, Index signature in type 'readonly number[]' only permits reading.ts(2542)
`````

У `readonly` массива также отсутствуют методы, с помощью которым можно изменить элементы массива.

`````typescript
let array: readonly string[] = ['Kent', 'Clark'];
array.push('Batman'); // Error, Property 'push' does not exist on type 'readonly number[]'.ts(2339)
array.shift(); // Error, Property 'shift' does not exist on type 'readonly number[]'.ts(2339)

array.indexOf('Kent'); // Ok
array.map( item => item ); // Ok
`````

С учетом погрешности на известные различия между массивом и кортежем, справедливо утверждать, что правила для `readonly` массива справедливы и для `readonly` кортежа.

Помимо того, что невозможно изменить или удалить слоты кортежа, он также теряет признаки массива, которые способны привести к его изменению.

`````typescript
let tuple: readonly [string, string] = ['Kent', 'Clark'];
tuple[0] = 'Wayne'; // Error, Cannot assign to '0' because it is a read-only property.ts(2540)

tuple.push('Batman'); // Error, Property 'push' does not exist on type 'readonly [string, string]'.ts(2339)
tuple.shift(); // Error, Property 'shift' does not exist on type 'readonly [string, string]'.ts(2339)

tuple.indexOf('Kent'); // Ok
tuple.map( item => item ); // Ok
`````

Кроме того механизм массивоподобных `readonly` структур, начиная с версии *TypeScript* `3.4`, повлиял на поведение такого расширенного типа, как `Readonly<T>`. 

До версии `3.4` поведение типа `Readonly<T>` полноценно распростронялось только на объекты.

`````typescript
// Ok, { readonly a: string, readonly b: number }
type A = Readonly<{ a: string, b: number }>;

// Bad, number[]
type B = Readonly<number[]>;

// Bad, [string, boolean]
type C = Readonly<[string, boolean]>;
`````

Но, начиная с версии `3.4`, поведение для типа `Readonly<T>` дополняется поведением массивоподобных `readonly` структур.

`````typescript
// Ok, { readonly a: string, readonly b: number }
type A = Readonly<{ a: string, b: number }>;

// Ok, readonly number[]
type B = Readonly<number[]>;

// Ok, readonly [string, boolean]
type C = Readonly<[string, boolean]>;
`````

Напоследок стоит упомянуть, что, используя механизм массивоподобных `readonly` структур, по своей сути компилятор расценивает эти структуры как принадлежащие к  добавленному в версии `3.4` интерфейсу `ReadonlyArray<T>`.


## ReadonlyArray
________________

Расширенный тип `ReadonlyArray<T>` предназначен для создания неизменяемых массивов. `ReadonlyArray<T>` запрещает изменять значения массива, используя индексную сигнатуру `array[...]`.

`````typescript
let array: ReadonlyArray<number> = [0,1,2];

array[0] = 1; // Error, Index signature in type 'readonly number[]' only permits reading.ts(2542)
array[array.length] = 3; // Error, Index signature in type 'readonly number[]' only permits reading.ts(2542)
`````

Кроме того, тип `ReadonlyArray<T>` не сождержит методы, способные изменить, удалить или добавить элементы.


`````typescript
let array: ReadonlyArray<number> = [0,1,2];

array.push(3); // Error, Property 'push' does not exist on type 'readonly number[]'.ts(2339)
array.shift(); // Error, Property 'shift' does not exist on type 'readonly number[]'.ts(2339)

array.indexOf(0); // Ok 
`````

## ReadonlyMap
________________

Расширенный тип `ReadonlyMap<K, V>`, в отличие от своего полноценного протатипа, не имеет методов, способных его изменить.

~~~~~typescript
let map: ReadonlyMap<string, number> = new Map([["key", 0]]);
~~~~~

## ReadonlySet
________________

Аналогично расширенный тип `ReadonlySet<T>` не имеет методов, способных его изменить.

~~~~~typescript
let set: ReadonlySet<number> = new Set([0, 1, 2]);
~~~~~

