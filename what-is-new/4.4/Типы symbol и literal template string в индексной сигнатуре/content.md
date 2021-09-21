## Типы symbol и literal template string в индексной сигнатуре

Начиная с текущей версии _TypeScript_ позволяет указывать в _индексной сигнатуре_ такие типы, как `symbol` и `literal template string`.

`````ts
// Пример для symbol

type Colors = {
    [color: symbol]: number;
}

const red = Symbol('red');


const colors: Colors = {};
colors[red] = 255; // Ok

const redColorValue = colors[red]; // const redColorValue: number
`````

`````ts
// пример для literal template string

type Attrs = {
    width: number;
    height: number;

    [dataAttr: `data-${string}`]: string;
}



const attrs: Attrs = {
    width: 100,
    height: 100,

    ["data-color"]: "#fff", // Ok
    ["bibbody-bobbody"]: "vzhuh", // Error
};
`````

Помимо этого, для множественного объявления индексной сигнатуры был добавлен так называемый _синтаксический сахар_ в лице типа `union`.

`````ts
// эта конструкция автоматически будети преобразована в...
type T = {
    [field: string | number]: boolean;
}

// ...эту конструкцию.
type T0 = {
    [field: string]: boolean;
    [field: number]: boolean;
}
`````