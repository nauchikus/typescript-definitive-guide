## [КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ] Остаточные параметры исключают некоторые члены объекта

Начиная с текущей версии методы объекта исключаются из механизма остаточных параметров.

`````ts
class Class {
    field = ``;

    method(){

    }
}

function f0<T extends Class>(param: T){
    const {...rest} = param;

    console.log(rest.field); // Ok
    console.log(rest.method()); // Error -> Property 'method' does not exist on type 'Omit<T, "field" | "method">'.ts(2339)
}
function f1(param: Class){
    const {...rest} = param;

    console.log(rest.field); // Ok
    console.log(rest.method()); // Error -> Property 'method' does not exist on type '{}'.ts(2339)
}
`````

Аналогичным образом данное поведение распространяется и на деструктуризацию ссылки на экземпляр `this`.

`````ts
class Class {
    field = ``;
    
    constructor(){
        const { ...rest } = this;
        
        console.log(rest.field); // Ok
        console.log(rest.method()); // Error -> Property 'method' does not exist on type 'Omit<this, "method">'.ts(2339)
        
    }

    method(){

    }
}
`````