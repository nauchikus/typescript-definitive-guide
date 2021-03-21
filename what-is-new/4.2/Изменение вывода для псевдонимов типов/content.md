## Изменение вывода для псевдонимов типов

До текущей версии, псевдонимы типов, в разных ситуациях, выводились по-разному. Если тип значения представлялся псевдонимом типа, то таковым оно и определялось при выводе информации в консоль или подсказках ide. Но когда псевдоним типа участвует при определении другого типа, то выводится типом(и) для которого он был назначен, то есть разворачивается.

`````ts
type ValueType = number | string | boolean;


/**
 * Тип параметра value выводится как псевдоним типа,
 * который в выводе типа возвращаемого значения разворачивается. 
 * function action(value: ValueType): string | number | boolean | undefined
 * 
 */
function action(value: ValueType){
    if(Math.random() < 0.5){
        return undefined;
    }
    return value;
}


/**
 * Подобное поведение аналогично и для любых
 * других похожих случаев.
 * 
 * let v0: ValueType
 * let v1: string | number | boolean | undefined
 */
declare let v0: ValueType;
let v1 = Math.random() < 0.5 ? v0 : undefined;
`````

Начиная с текущей версии, поведение вывода для псевдонимов типов стало одинаковым. Теперь, при выводе псевдоним типа он больше не разворачивается.

`````ts
type ValueType = number | string | boolean;


/**
 * Псевдоним типа не разворачивается
 * function action(value: ValueType): ValueType | undefined
 * 
 */
function action(value: ValueType){
    if(Math.random() < 0.5){
        return undefined;
    }
    return value;
}


/**
 * Подобное поведение аналогично и для любых
 * других похожих случаев.
 * 
 * let v0: ValueType
 * let v1: ValueType | undefined
 */
declare let v0: ValueType;
let v1 = Math.random() < 0.5 ? v0 : undefined;
`````
