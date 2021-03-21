## Добавление комментарной директивы @deprecated

Начиная с текущей версии в _TypeScript_ появилась возможность помечать код как устаревший с помощью комментарной директивы `/** @deprecated */`, что позволит современным _ide_ подсвечивать устаревшее _api_.

`````ts
class T {
    /** @deprecated use method new()*/
    old(){}
    new(){}
}

let t = new T();
/**
 * @deprecated — use method new()
 * 'old' is deprecated ts(6385)
 */
t.old();
`````
