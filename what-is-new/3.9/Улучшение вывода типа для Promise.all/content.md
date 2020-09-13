## Улучшение вывода типа для Promise.all

В последних версиях _TypeScript_ (начиная с версии `3.7`) были обновлены декларации для таких методов как `Promise.all` и `Promise.race`. Но к сожалению это привело к неожиданным результатам в работе вывода типа, что более всего стало очевидно если в выводе учавствуют `null` или `undefined`.

`````ts
interface Foodstuff{
    isExpirationDate():boolean;
}
interface Milk extends Foodstuff {
}
interface Coffee extends Foodstuff {
}

async function factory(milkOrder: Promise<Milk>, coffeeOrder: Promise<Coffee | undefined>) {
    let [milk, coffee] = await Promise.all([milkOrder, coffeeOrder]);
    
    /**
     * [error] Object is possibly 'undefined'.
     * [сейчас] let milk: Milk | undefined
     * [должно] let milk: Milk
     * 
     * [ERROR] Ошибочное поведение!
     */
    milk.isExpirationDate();
    /**
     * [error] Object is possibly 'undefined'.
     * [сейчас] let milk: Coffee | undefined
     * 
     * [Ok] Ожидаемое\правильное поведение!
     */
    coffee.isExpirationDate();

}
`````

Поскольку данное поведение ошибочно, начиная с версии `3.9` оно было исправленно должным образом.

`````ts
// ...

async function factory(milkOrder: Promise<Milk>, coffeeOrder: Promise<Coffee | undefined>) {
    let [milk, coffee] = await Promise.all([milkOrder, coffeeOrder]);
    
    milk.isExpirationDate(); // Ok! let milk: Milk
    coffee.isExpirationDate(); // Error! let coffee: Coffee | undefined

}
`````
