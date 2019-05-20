Начиная с версии `v3.5` обобщенные параметры типа неявно определяются как принадлежащие к типу `unknown`.

`````typescript
declare class Stack<T> {
    getItem():T;
}


/**
 * <v3.5
 * let item: {}
 * 
 * >= v3.5
 * let item: unknown
 */
let stack = new Stack();
let item = stack.getItem();
`````