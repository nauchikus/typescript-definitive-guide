## Конкретизация ссылки на функцию

Существуют ситуации при которых обычные конструкции могут быть более общими, чем это требуется.

`````ts
interface Box<T> {
    value: T;
}

// функция, которая порождает коробки с любым содержимым
function createBox<T>(value: T): Box<T> {
    return {value};
}
`````

До текущей версии конкретизация типа могла бы быть осуществлена с помощью излишнего кода в виде обертки..

`````ts
interface Food{}

// более конкретная функция, которая порождает исключительно коробки с Food
function createFoodBox(value: Food) {
    return createBox(value);
}
`````

..или же при помощи псевдонима типа.

`````ts
type FoodBox = (value: Food) => Box<Food>;

// ссылка на более общую функцию createBox, но конкретизированная псевдонимом типа
const createFoodBox: FoodBox = createBox;
`````

Первый вариант немного излишен, а второй слишком громоздкий. Поэтому для разрешения подобных сценариев был добавлен механизм конкретизации непосредственно самой ссылки на порождающий объект.

`````ts

// сохранение ссылки и конкретизация типа одновременно
const createFoodBox = createBox<Food>;
`````

Этот же механизм распространяется на функции-конструкторы..

`````ts
class Box<T> {
    constructor(readonly value: T){}
}

const NumberBox = Box<number>;
let a = new NumberBox(5); // Ok
let b = new NumberBox(`5`); // Error -> Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
`````

.. в том числе и `Array`, `Map` и `Set`.
`````ts
const NumberMap = Map<string, number>;
let numberMap = new NumberMap();
`````
