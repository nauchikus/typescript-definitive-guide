## Рекурсивность для псевдонимов типов
Псевдонимы типов (_type aliases_) всегда имели строгие правила относительно рекурсии поскольку больше остальных могли привести к бесконечному обращению.

```ts
type T = T; // Бесконечная рекурсия
```

Тем не менее относительно рекурсивности существовали правила, которые можно было обойти введя дополнительные интерфейсные типы (`interface`).

```ts
// TypeScript < v3.7

type Json = string | number | boolean | null | JsonObject | JsonArray;

interface JsonObject {
    [property: string]: Json;
}

interface JsonArray extends Array<Json> {}
```

Поэтому начиная с текущей версии _TypeScript_ вычисление правил относящихся к рекурсивности для псевдонимов типов были изменены, что позволило избавиться от определения дополнительных типов.

```ts
// TypeScript >= v3.7

type Json =
    | string
    | number
    | boolean
    | null
    | { [property: string]: Json }
    | Json[];
```
