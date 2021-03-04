## \[КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ\] Изменение правил для оператора in

Изменение поведения оператора `in`, о котором было рассказано ранее, могут привести к ошибкам в существующем коде.

`````ts
"hasOwnProperty" in {}; // Ok
"hasOwnProperty" in 0; // Error -> The right-hand side of an 'in' expression must not be a primitive.ts(2361)
`````