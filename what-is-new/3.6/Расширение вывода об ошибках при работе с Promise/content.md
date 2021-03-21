##Расширение вывода об ошибках при работе с Promise

Поскольку работа с `Promise` является очень важной частью повседневной разработки, `TypeScript`, начиная с версии `v3.6`, расширила информирование при возникновении ошибок связанными с ними, а также били добавлены механизмы их быстрого устранения.

`````ts
interface Person {
    name: string;
    age: number;
}

declare function getPersonData(): Promise<Person>;
declare function printPersonInfo(personData: Person): void;

async function main() {
    /**
     * До v3.6 возникала ошибка говорящая, что 
     * тип Promise<Person> не соответствует типу Person
     *
     * Argument of type 'Promise<Person>' is not assignable
     * to parameter of type 'Person'.
     * Type 'Promise<Person>' is missing the following properties
     * from type 'Person': name, age ts(2345)
     *
     *
     * После v3.6 вывод расширили предложением пофиксить
     * ошибку добавлением ключевого слова await
     *
     * Did you forget to use 'await'?
     *
     */
    printPersonInfo(getPersonData()); // Error
    printPersonInfo(await getPersonData()); // Ok
}

async function getPersonData(): Promise<Person> {
    /**
     * Также предлагается пофиксить ошибку путем
     * добавления ключевого слова await
     *
     * Property 'json' does not exist on type 'Promise<Response>'.ts(2339)
     * Did you forget to use 'await'?
     */
    return fetch(``).json(); // Error
    return (await fetch(``)).json(); // Ok
}
```
