## \[КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ\] any и unknown доминируют в ложных позициях

Если в условии с логическим _И_ (`&&`) значение левого операнда принадлежало к типу `any` или `unknown`, то вывод типа выводил тип правого операнда. Начиная с текущей версии в подобных условиях всегда будут выводится `any` или `unknown`.

`````ts 
declare let a: any;
declare let n: number;
declare let u: unknown;

/**
 * Вывод типов видит так ->
 *         <v4.1  |  >=v4.1
 * let v0: number    any
 * let v1: number    unknown
 * let v2: any       any
 * let v3: unknown   unknown
 */
let v0 = a && n;
let v1 = u && n;
let v2 = n && a;
let v3 = n && u;
````` 

