## Проверка вызова функции в тернарном условном операторе

В версии `3.7` была добавлена проверка обязательного вызова функций участвующих в условном выражении `if`.

`````ts
declare function isValid(): boolean;

function action(){
    /**
     * Начиная с версии 3.7
     * 
     * [error] This condition will always return true 
     * since the function is always defined.
     * Did you mean to call it instead?
     */
    if(isValid){
        /**
         * По факту этот блок кода будет
         * выполняться всегда, поскольку
         * в условном выражении участвует
         * ссылка на функцию, а не предполагаемый
         * результат её вызова!
         */
    }
}
`````

Начиная с версии `3.9` подобное поведение было реализованно и для тернарного условного оператора.

`````ts
declare function isValid(): boolean;

function action(){
    /**
     * Начиная с версии 3.9
     * 
     * [error] This condition will always return true 
     * since the function is always defined.
     * Did you mean to call it instead?
     */
    return isValid ? 'true' : 'false';
}
`````
