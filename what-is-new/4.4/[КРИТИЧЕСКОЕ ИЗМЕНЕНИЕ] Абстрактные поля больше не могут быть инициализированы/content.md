## [КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ] Абстрактные поля больше не могут быть инициализированы

Начиная с текущей версии поля класса модифицированные ключевым словом `abstract` не могут быть инициализированы.

`````ts
abstract class T {
    /**
     * Ok раньше и
     * Error теперь -
     * Property 'field' cannot have an initializer because it is marked abstract.(1267)
     */
    abstract field = 5; // Ok раньше и Error начиная с этой версии
}
`````
Теперь, абстрактные поля ограничиваются одним лишь объявлением с указанием типа.

`````ts
abstract class T {
    abstract field: number; // Ok
}
`````
