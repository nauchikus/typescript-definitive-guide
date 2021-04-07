## Ужесточение правил проверки для in-оператора

В _JavaScript_ при использовании необъектного типа в правой части выражения с оператором `in` возникнет ошибка времени выполнения. Начиная с текущей версии, _TypeScript_ умеет распознавать данную ошибку во время компиляции.

`````ts
"hasOwnProperty" in {}; // Ok
"hasOwnProperty" in 0; // Error -> The right-hand side of an 'in' expression must not be a primitive.ts(2361)
`````
