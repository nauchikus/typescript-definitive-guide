## Улучшение пересечений, объединений и механизма сужения типов

Начиная с версии `4.8` _TypeScript_ вносит значительные изменения при работе в строгом режиме (конкретно `--strictNullChecks`) затрагивающие пересечения и объединения, а также механизм их сужения.

Теперь такой тип, как `unknown` стоит воспринимать в образе объединения `{} | null | undefined`, что даже выглядит логичным поскольку он представляет `null`, `undefined` или любой другой тип. Это в свою очередь делает совместимым тип `unknown` с перечисленными типами.

`````ts
function f ( a: unknown, b: {} | null | undefined ) {
    a = b; // (раньше) Ok (теперь) Ok
    b = a; // (раньше) Error (теперь) Ok
}
`````

Следующее изменение затронуло правило сужения пересечения типа `{}` с другим конкретным типом, в результате чего пересечение сужается до более конкретного типа.

`````ts
class A {
    value = true;
}

let a: {} & A; // (раньше) let a: {} & A (теперь) let a: A
let b: {} & string; // (раньше) let b: {} & string (теперь) let b: string
`````

Тем не менее пересечение `{}` с типами `null` или `undefined` сужается до типа `never`. 

Этот факт позволил улучшить логику такого типа, как `NonNullable<T>`, который, как все помнят, предназначен для исключения типов `null` и `undefined` из объединений.

`````ts
let v: NonNullable<string | number | null | undefined>; // let v: string | number
`````

`````ts
type NonNullable<T> = T extends null | undefined ? never : T;
type NonNullable<T> = T & {};
`````

Поскольку пересечения `{} & null` и `{} & undefined` сужаются до типа `never`, а объединение `never | ConcreteType` сужаются до конкретного типа, то по факту новая логика `NonNullable<T>` просто отбрасывает из объединения все `null` и `undefined`.

Результатом всего это стало возможным уменьшение условного типа (пока только его) `NonNullable<T>`.

`````ts
function foo<T> ( a: NonNullable<T>, b: NonNullable<NonNullable<T>> ) {
    a = b; // (раньше) Ok (теперь) Ok
    b = a; // (раньше) Error (теперь) Ok
}
`````

В свою очередь эти изменения позволили улучшить анализ потока управления и сужения типов.

`````ts
function f ( p: unknown ) {
    if ( p ) {
        // (раньше) unknown (теперь) {}
    } else {
        // (раньше) unknown (теперь) unknown
    }
}
`````

Данное поведение распространяется и на генерики.

`````ts
function nullableAssert<T> ( value: T ): NonNullable<T> {
    if ( value === undefined || value === null ) {
        throw Error( `Value not must null.` );
    }

    /**
     * (раньше) Error -> Type 'T' is not assignable to type 'NonNullable<T>'.(2322)
     * (теперь) Ok
     */
    return value;
}
`````

