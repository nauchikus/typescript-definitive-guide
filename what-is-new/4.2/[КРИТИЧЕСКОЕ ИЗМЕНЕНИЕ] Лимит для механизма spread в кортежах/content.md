## \[КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ\] Лимит для механизма spread в кортежах

Поскольку механизм распространения (`spread`) в кортежах может привести к зависанию компилятора, было принято решение, установить ограничение глубины в значение 10.000.

`````ts
const tuple = [0, '', true] as const; // инициализация кортежа с тремя значениями
const doubleTuple = [...tuple, ...tuple]; // инициализация кортежа с помощью механизма распространения, который приведет к удваиванию значений

`````