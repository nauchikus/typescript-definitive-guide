## Ужесточение проверок на NaN

Поскольку результаты логических выражений на равенство\неравенство со значением `NaN` способны ввести в заблуждение...

`````ts
console.log(NaN === NaN); // false
console.log(NaN !== NaN); // true
`````

...начиная с текущей версии компилятор _TypeScript_ вызывает ошибку при их обнаружении.

`````ts
function isNumberValue(value: number){
    /**
     * [*] Ok до текущей версии и Error отсчитывая от нее ->
     *
     * This condition will always return 'true'.ts(2845)
     * Did you mean '!Number.isNaN(value)'?
     */
    return value !== NaN; // [*]
}
`````
