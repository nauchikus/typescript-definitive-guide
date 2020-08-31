Раньше параметр типа расширяющий тип `any` наделялся всеми его характеристиками, что при указании его в качестве типа снижало уровень типобезопасности программы. 

`````typescript
const f = <T extends any>(p: T) => {
    /**
     * [*]
     * До версии 3.9 - Ok
     * Начиная с версии 3.9 - Error ->
     * Property 'notExistsMethod' does not exist on type 'T'.
     */
    p.notExistsMethod(); // [*]
}
`````