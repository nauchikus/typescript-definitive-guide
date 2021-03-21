##Улучшена поддержка для типа never возвращаемого из функций

Основное предназначение типа `never` явным образом указывать, что из вызываемой функции возврата никогда не произойдет. Как известно подобный сценарий может произойти по причине бесконечного цикла или выброса исключения.

До _TypeScript_ `v3.7`, в случаях когда одна функция имеющая декларацию возвращаемого типа отличного от `void` прерывала нормальное выполнение программы за счет вызова функции с возвращающим типом `never`, выводу типов требовалось либо явного указания возврата с помощью оператора `return`, либо применения инструкции `throw`.

```ts
// [TypeScript < v3.7]

interface User {
    name: string;
}

function critical(message: string): never {
    throw new Error(message);
}

/**
 * Несмотря, что в случае вызова функции critical
 * возврата из функции validate не произойдет,
 * из-за непонимания этого вывод типов считает
 *, что для функции validate забыли указать
 * возвращаемое значение.
 *
 * (!) [ошибка в аннотации возвращаемого типа]
 * Function lacks ending return statement and
 * return type does not include 'undefined'.
 */
function validate(data: any): User /**Error (!) */ {
    if (data && data.user) {
        return data.user;
    }

    critical(`Field "user" not found in object "data."`);
}

/**
 * Для устранения ошибки требуется явно
 * указать возвращаемое значение...
 */
function validate_a(data: any): User /**Error (!) */ {
    if (data && data.user) {
        return data.user;
    }

    return critical(`Field "user" not found in object "data."`);
}
/**
 * ...либо выбросить исключение.
 */
function validate_b(data: any): User /**Error (!) */ {
    if (data && data.user) {
        return data.user;
    }

    throw critical(`Field "user" not found in object "data."`);
}
```

Начиная с версии `v3.7` вывод типов научился распознавать прерывание нормального хода программы без явного указания `return` или `throw`.

```ts
// [TypeScript >= v3.7]

interface User {
    name: string;
}

function critical(message: string): never {
    throw new Error(message);
}

/**
 * Явного указания return или throw
 * больше не требуется.
 */
function validate(data: any): User {
    if (data && data.user) {
        return data.user;
    }

    critical(`Field "user" not found in object "data."`);
}
```
