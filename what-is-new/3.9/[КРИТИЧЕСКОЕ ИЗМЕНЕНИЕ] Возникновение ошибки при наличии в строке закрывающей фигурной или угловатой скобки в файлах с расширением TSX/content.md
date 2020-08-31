Спецификация `JSX` не допускает наличие закрывающих фигурных (`}`) и угловых (`>`) скобок в строках. Поэтому начиная с текущей версии при явном их указании будет возникать ошибка текст которой предложит решение в виде их экранирования или замены на спец-символы допускаемые `JSX` спецификацией.

`````typescript
let text = [
    // Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
    <span>Text with closing curly bracket }.</span>,
    // Unexpected token. Did you mean `{'>'}` or `&gt;`?
    <span>Text with closing angle bracket >.</span>,
];

`````
