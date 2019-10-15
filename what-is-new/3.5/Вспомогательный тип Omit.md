В повседневной разработке очень часто требуется определить новый тип описывающий некоторую часть существующего. До версии *TypeScript* `3.5` подобное можно было реализовать при помощи типов `Exclude<T, U>` и `Pick<T, K>`.


`````typescript
type Person = {
    firstName: string;
    lastName: string;

    age: number;
};

/**
 * определяем тип Union состоящий из строковых литеральных типов
 * представляемых ключами типа Person, за исключением исключенного
 * поля age.
 * 
 * type RemainingKeys = "firstName" | "lastName"
 */
type RemainingKeys = Exclude<keyof Person, "age">;

/**
 * определяем новый тип состоящий из ключей
 * полученных на предыдущем шаге.
 * 
 * type PersonName = {
 *  firstName: string;
 *  lastName: string;
 * }
 */
type PersonName = Pick<Person, RemainingKeys>;
`````

Поскольку потребность в сужении типа возникает довольно часто, это вынуждает разработчиков выносить требующийся функционал в отдельную сущность, что неизбежно затрудняет чтение кода другими разработчиками, так как знакомый всем механизм скрыт за незнакомым им идентификатором типа (именем типа).

По этой причине разработчики `TypeScript` расширили стандартную библиотеку `lib.d.ts` новым вспомогательным типом `Omit<T, K>`, который стандартизирует, обсуждаемую на протяжении главы, логику.

`````typescript
type Person = {
    firstName: string;
    lastName: string;

    age: number;
};

/**
 * type PersonName = {
 *  firstName: string;
 *  lastName: string;
 * }
 */
type PersonName = Omit<Person, 'age'>;
`````
