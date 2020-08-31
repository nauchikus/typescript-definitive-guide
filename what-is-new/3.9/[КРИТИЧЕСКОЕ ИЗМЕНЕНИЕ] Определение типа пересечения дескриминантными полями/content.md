## [КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ] Определение типа пересечения дескриминантными полями

До версии `3.9` сужение на основе дескиминантных полей определяющих тип пересечение (`Intersection`) определяло такие поля, как принадлежащие к типу `never`.

`````typescript
declare function join<T, U>(a: T, b: U): T & U;


interface NameInfo {
    type: "name";

    firstName: string;
    lastName: string;
}
interface AddressInfo {
    type: "address";

    country:string;
    city: string;
}


declare let nameInfo: NameInfo;
declare let addressInfo: AddressInfo;

/**
 * let person: NameInfo & AddressInfo
 */
let person = join(nameInfo, addressInfo);

/**
 * Ok, До версии 3.9
 */
person.type; // (property) type: never
`````

Поскольку на практике потеря информации о типах полей недопустима начиная с текущей версии вывод типов определит как тип `never` не дескриминантные поля, а сам тип пересечения.

`````typescript
// ...код


/**
 * let person: never
 */
let person = join(nameInfo, addressInfo);

/**
 * Error, Начиная с версии 3.9 -
 * 
 * Property 'type' does not exist on type 'never'.
 */
person.type; // (property) type: never
`````
