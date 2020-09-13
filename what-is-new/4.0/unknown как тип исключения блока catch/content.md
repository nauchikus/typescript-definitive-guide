## unknown как тип исключения блока catch

До текущей версии при попытке типизировать параметр блока `catch` возникала ошибка, хотя по умолчанию тип исключения расценивался копилятором как тип `any` что снижало типобезопасность программы.

`````ts
/**
 * До версии 4.0
 */

try {
    throw new Error(`Error!`);
}catch(e){ // Ok
    e.meSSage.touppercase(); // Ошибка времени исполнения
}

try {

}catch(e: Error){ // Error -> [*]
    e.meSSage.touppercase();
}

try {
    
}catch(e: any){ // Error -> [*]
    e.meSSage.touppercase();
}

try {
    
}catch(e: unknown){ // Error -> [*]
    e.meSSage.touppercase();
}

/**
 * [*] Catch clause variable cannot have a type annotation.
 */
`````

Начиная с текущей версии в аннотации исключения блока `catch` допускается указывать такие типы как `unknown` и `any`.

`````ts
/**
 * Начиная с версии 4.0
 */

try {
    throw new Error(`Error!`);
}catch(e){ // Ok
    e.meSSage.touppercase(); // Ошибка времени исполнения
}

try {

}catch(e: Error){ // Error -> Catch clause variable type annotation must be 'any' or 'unknown' if specified.
    e.meSSage.touppercase();
}

try {
    
}catch(e: any){ // Ok
    e.meSSage.touppercase(); // Ошибка времени исполнения
}

try {
    
} catch (e: unknown) { // Ok
    e.meSSage.touppercase(); // Ошибка времени исполнения
    e.message; // Error -> поскольку у типа unknown отсутствует свойство message
}
`````

Тип `any` остается значением по умолчанию и пока остается для обратной совместимости. В будущем планируется добавить новый _strict mode_ флаг, с помощь которого можно будет изменить тип исключения по умолчанию на более строгий `unknown`, который позволит избежать ошибок при помощи дополнительного уровня проверок.


`````ts
try {
    
} catch (e: unknown) { // Ok
    e.meSSage.touppercase(); // Ошибка времени исполнения
    e.message; // Error -> поскольку у типа unknown отсутствует свойство message

    if (e instanceof Error) {
        e.message; // Ok
    }
}
`````

