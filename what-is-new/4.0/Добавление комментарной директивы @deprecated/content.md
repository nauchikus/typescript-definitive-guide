## Добавление комментарной директивы @deprecated

Начиная с текущей версии в _TypeScript_ появилась возможность помечать код как устаревший с помощью комментарной директивы `/** @deprecated */`, что позволит современным _ide_ подсвечивать устаревшее _api_.

`````typescript
class T {
    /** @deprecated use method new()*/
    old(){}
    new(){}
}

let t = new T();
/**
 * @deprecated — use method new()
 * 'old' is deprecatedts(6385)
 */
t.old();
`````
