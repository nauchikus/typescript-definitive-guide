## [КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ]  Операнды для delete должны быть необязательными

Начиная с текущей версии члены объектов подвергающиеся удалению с помощью оператора `delete` должны иметь тип `any`, `unknown`, `never` или иметь быть необязательными.

`````ts
type T0 = {
    field: any;
}

const f0 = (o: T0) => delete o.field; // Ok


type T1 = {
    field: unknown;
}

const f1 = (o: T1) => delete o.field; // Ok


type T2 = {
    field: never;
}

const f2 = (o: T2) => delete o.field; // Ok


type T3 = {
    field?: number;
}

const f3 = (o: T3) => delete o.field; // Ok


type T4 = {
    field: number;
}

const f4 = (o: T4) => delete o.field; // Error -> The operand of a 'delete' operator must be optional.

`````
