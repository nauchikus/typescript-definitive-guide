## typeof для #приватных членов

Начиная с текущей версии стало возможным выполнять запрос типа на приватных полях предусмотренных в _ECMAScript_ спецификации.

`````ts
class Class {
    #field = 100;

    method(): typeof this.#field {
    return this.#field;
}
}
`````

