## Проверка вызова функций в логических выражениях

Теперь, проверка вызова функций доступна и для логических выражений с применением операторов `&&` и `||`. 

`````ts
function shouldDisplayElement(element: Element) {
    return true;
}

function getVisibleItems(elements: Element[]) {
    /**
     * [*] Error -> This condition will always return true since the function is always defined.
     * Did you mean to call it instead?
     */
    return elements.filter(e => shouldDisplayElement /**[*] */ && e.children.length);
}
`````
