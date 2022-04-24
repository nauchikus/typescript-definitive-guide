## Улучшение вывода для индексных значений

Начиная с текущей версии стало возможно производить правильный вывод сопоставимых индексных типов.

`````ts
interface TypeMap {
    "number": number;
    "string": string;
    "boolean": boolean;
}

type TransformOperation<P extends keyof TypeMap> = {
    [K in P]: {
        type: K;
        value: TypeMap[K];
        transform: (p: TypeMap[K]) => void;
    }
}[P];

function exec<K extends keyof TypeMap>(operation: TransformOperation<K>) {
    operation.transform(operation.value);
}

// This call used to have issues - now works!
exec({
    type: "string",
    value: "Hello World!",
    transform: value => value.toUpperCase() // [*]
});

/**
 * [*] Error до текущей версии, поскольку value
 * определялось, как string | number | boolean.
 * Ok начиная с текущей версии.
 */
`````
