## Анализ потока для результата условного выражения

ДЛя конкретизации типа очень часто приходится прибегать к такому механизму, как `защитники типа`.

`````ts
function f(param: unknown) {
    if(typeof param === "string"){
        // компилятор понимает, что в этом блоке кода param принадлежит к типу string
        param.toLocaleLowerCase();
    }
}
`````

Поскольку анализ потока управления понимает, к какому типу принадлежит идентификатор параметра в конкретном блоке кода, механизм прекрасно справляется со своей задачей, но все же у него существует один значительный недостаток - результат проверки нельзя вынести за пределы условного выражения.

`````ts
function f(param: unknown) {
    const isString = typeof param === "string";

    if(isString){
        param.toLocaleLowerCase(); // Ошибка! Компилятор не понимает, что param принадлежит к типу string
    }
}
`````

Особенно этот досадный факт заметен при многократном использовании механизма защитника типа.
По этой причине, начиная с текущей версии, поведение анализа потока управления было переработано таким образом, чтобы механизм защитника типа полноценно работал с результатами выражений выполненных вне условных конструкций. Единственное условие заключается в том, что значение условного выражение должно быть неизменяемо, то есть ассоциировано с `const` или `readonly`.

`````ts
function f(param: unknown) {
    const isString = typeof param === "string";

    if(isString){
        param.toLocaleLowerCase(); // Ok - начиная с версии 4.4!
    }
}
`````

Стоит заметить, что новый механизм справляется и с более сложными условиями, как например проверка существования значений множества параметров функции.

`````ts
function f(p0: string | undefined, p1: string | undefined) {
    // Выполняем проверку на существование значения обоих параметров
    const isParamsExists = p0 && p1;

    if(isParamsExists){
        p0.toLocaleLowerCase(); // Ok
        p1.toLocaleLowerCase(); // Ok
        // Ошибки не возникаетпоскольку помилятор понимает, что isParamsExists содержится результат подтверждающие наличие значения у обоих параметров
    }
}
`````

Помимо этого, новый анализ работает _транзитивно_, то есть, компилятор будет "распутывать" цепочку выполненных проверок.

`````ts
function f(param: string | number | boolean) {
    const isString = typeof param === "string";
    const isNumber = typeof param === "number";

    const isStringOrNumber = isString || isNumber;

    if(isStringOrNumber){
        param; // string | number
    }else{
        param; // boolean
    }
}
`````

Этот механизм отлично справляется и с `дескременантными объединениями`.

`````ts
type Animal = 
 | {kind: "bird"; fly(): void;}
 | {kind: "fish"; swim(): void;}

function move(animal: Animal){
    const isBird = animal.kind === "bird";

    if(isBird){
        animal.fly();
    }else{
        animal.swim();
    }
}
`````

Относительно дискриминантных объединений этот механизм остается работать даже при использовании объектной деструктуризации.

`````ts
type Animal = 
 | {kind: "bird"; fly(): void;}
 | {kind: "fish"; swim(): void;}

function move(animal: Animal){
    const {kind} = animal;

    if(kind === "bird"){
        animal.fly();
    }else{
        animal.swim();
    }
}
`````
