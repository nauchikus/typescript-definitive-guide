## \[КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ\] noImplicitAny и новое поведение для оператора yield тип которого не может быть установлен явно

Начиная с текущей версии, при активном флаге `--noImplicitAny`, поведение оператора `yield`, тип значения которого не может быть установлен контекстуально, было изменено. Теперь, если тип значения не может быть выявлен явно, возникает ошибка.

`````ts
function* g0 () {
    /**
     * Версия <4.2 -> Ok
     * Версия >=4.2 -> Error
     * 'yield' expression implicitly results in an 'any' type because its containing generator lacks a return-type annotation.
     */
    const value = yield 1; // Error
}

function* g1 () {
    /**
     * Версия <4.2 -> Ok
     * Версия >=4.2 -> Ok
     * Потому что значение не используется.
     */
    yield 1;
}

function* g2 () {
    /**
     * Версия <4.2 -> Ok
     * Версия >=4.2 -> Ok
     * Потому что явно задан тип string.
     */
    const value: string = yield 1;
}


function* g3 (): Generator<number, void, string> {
    /**
     * Версия <4.2 -> Ok
     * Версия >=4.2 -> Ok
     * Потому что тип указан в возвращаемом типе.
     */
    const value = yield 1;
}
`````