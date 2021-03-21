## Шаблонный литеральный строковой тип

Думаю, что каждый знакомый с _TypeScript_ не понаслышке не в состоянии забыть пользу от _строковых литеральных типов_ которые эффективно помогают выявлять орфографические ошибки строковых значений на этапе компиляции...

`````ts
function setAnimation(animationType: "ease" | "ease-in" | "ease-out"){
    // ... какая-то логика
}
setAnimation("ease"); // Error -> Argument of type '"ease"' is not assignable to parameter of type '"ease" | "ease-in" | "ease-out"'.
`````

...а также используются при определении новых типов выступают в качестве ключей сопоставленных типов.

`````ts
type Animation = {
    [K in "ease" | "ease-in" | "ease-out"]?: boolean;
}
`````

И вот, начиная с версии `v4.1` они нашли новое применение в удивительном механизме получившем название _Шаблонный литеральный строковой тип_.

_Шаблонный литеральный строковой тип_ — это тип, позволяющий на основе литеральных строковых типах динамически определять новый литеральный строковой тип. Простыми словами, это известный по _JavaScript_ механизм создания шаблонных строк только для типов.

`````ts
type Type = "Type";
type Script = "Script";

/**
 * type Message = "I ❤️ TypeScript"
 */
type Message = `I ❤️ ${Type}${Script}`;
`````

Но вся мощь данного типа раскрывается в момент определение нового типа на основе объединения (`union`). В подобных случаях новый тип будет также представлять объединение элементы которого представляют все возможные варианты полученные на основе исходного объединения. 

`````ts
type Sides = "top" | "right" | "bottom" | "left";

/**
 * type PaddingSides = "padding-top" | "padding-right" | "padding-bottom" | "padding-left"
 */
type PaddingSides = `padding-${Sides}`;
`````

Аналогичное поведение будет справедливо и для нескольких типов объединения.

`````ts
type AxisX = "top" | "bottom";
type AxisY = "left" | "right";


/**
 * type Sides = "top-left" | "top-right" | "bottom-left" | "bottom-right"
 */
type Sides = `${AxisX}-${AxisY}`;

/**
 * type BorderRadius = "border-top-left-radius" | "border-top-right-radius" | "border-bottom-left-radius" | "border-bottom-right-radius"
 */
type BorderRadius = `border-${Sides}-radius`;
`````

Поскольку с высокой долей вероятности в подобных операциях потребуется трансформация регистра строк, создателями данного механизма так же были добавлены новые операторы преобразования `uppercase`, `lowercase`, `capitalize` и `uncapitalize`. Данные операторы применяются непосредственно к литеральному строковому типу который указывается справа от него.

`````ts
type A = `${uppercase "AbCd"}`; // type A = "ABCD"
type B = `${lowercase "AbCd"}`; // type B = "abcd"
type C = `${capitalize "abcd"}`; // type C = "Abcd"
type D = `${uncapitalize "Abcd"}`; // type D = "abcd"
`````

Нужно обратить внимание, что в конечном релизе данные операторы могут быть определены в виде типов, о чем непременно будет упомянуто.
