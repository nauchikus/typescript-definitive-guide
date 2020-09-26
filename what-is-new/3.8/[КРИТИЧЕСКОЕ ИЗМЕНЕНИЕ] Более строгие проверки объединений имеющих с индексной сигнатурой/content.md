## \[КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ\] Более строгие проверки объединений имеющих с индексной сигнатурой

До текущей версии типу объединения включающего тип с индексной сигнатурой было возможно присвоить значение имеющее поля неудовлетворяющие этой индексной сигнатуре. Начиная с версии `3.8` это поведение стало строже и описанный выше сценарий считается ошибочным.


`````ts
let o0: { [key: string]: number } | { field: number };
/**
 * [< v3.8] Ok
 * [>= v3.8] Error
 * Type 'string' is not assignable to type 'number'.ts(2322)
 */
o0 = { field: 5, dynamicKey: '' };


let o1: { [key: string]: number } | { [key: number]: number };
/**
 * [< v3.8] Ok
 * [>= v3.8] Error
 * Type 'string' is not assignable to type 'number'.ts(2322)
 */
o1 = { dynamicKey: '' };
`````
