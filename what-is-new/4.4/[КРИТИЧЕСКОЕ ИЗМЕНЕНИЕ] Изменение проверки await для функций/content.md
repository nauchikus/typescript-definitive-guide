## [КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ] Изменение проверки await для функций

До текущей версии _TypeScript_ всеми силами старался не допускать ошибок вызываемых вызовом асинхронных функций без ключевого слова `await`. Но механизм был реализован не полностью, поскольку работал только при сохранении результата вызова асинхронной функции в переменную.

`````ts
// До теккущей версии

async function validate(): Promise<boolean> {
    return false;
}

async function a(): Promise<string> {
    const isExpressionValid = validate();


    /**
     * [*] This condition will always return true since this 'Promise<boolean>' is always defined.ts(2801)
     */
    if (isExpressionValid) { // [*]
        return "true";
    }


    return "false";
}
`````

Однако при вызове асинхронной функции без указания ключевого слова `await` непосредственно в условном выражении ошибки не возникало.

`````ts
async function validate(): Promise<boolean> {
    return false;
}

async function a(): Promise<string> {
    const isExpressionValid = validate();


    /**
     * [*]
     * Ok до текущей версии
     * Начиная с текущей версии - 
     * This condition will always return true since this 'Promise<boolean>' is always defined.ts(2801)
     */
    if (validate()) { // [*]
        return "true";
    }


    return "false";
}
`````

Поэтому начиная с текущей версии анализ относительно вызова асинхронных функций был существенно доработан.
