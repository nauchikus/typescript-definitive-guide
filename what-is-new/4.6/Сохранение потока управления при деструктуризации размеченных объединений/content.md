## Сохранение потока управления при деструктуризации размеченных объединений

Дискриминантные свойства позволяют сужать тип до более конкретного..

`````ts
type Actions =
    | { type: `number`; value: number }
    | { type: `string`; value: string };

function f(action: Actions){
    // на основе дискриминантного поля type анализатор понимает, что работает..
    if ( action.type === "number" ) {
        action.value.toFixed(); // ..со строкой
    }else if ( action.type === "string" ) {
        action.value.repeat( 2 ); // ..с числом
    }
}
`````
..но до текущей версии данный механизм не работал в сочетании с деструкторизацией.

`````ts
type Actions =
    | { type: `number`; value: number }
    | { type: `string`; value: string };

function f(action: Actions){
    const { type, value } = action;

    if ( type === "number" ) {
        value.toFixed(); // Error
    }else if ( type === "string" ) {
        value.repeat( 2 ); // Error
    }
}
`````

Начиная с текущей версии модели создаваемые анализатором потока кода распространяются и на механизм деструктуризации.

`````ts
type Actions =
    | { type: `number`; value: number }
    | { type: `string`; value: string };

function f(action: Actions){
    const { type, value } = action;

    if ( type === "number" ) {
        value.toFixed(); // Ok -> После v4.6
    }else if ( type === "string" ) {
        value.repeat( 2 ); // Ok -> После v4.6
    }
}
`````

Но стоит уточнить, что новый механизм работает лишь при деструктуризации определения параметра (функции/метода) и объявления `const`.

`````ts
// для параметра
function f( { type, value }: Actions){
  if ( type === "number" ) {
    value.toFixed(); // Ok
  }else if ( type === "string" ) {
    value.repeat( 2 ); // Ok
  }
}
`````
`````ts
// для const
function f( action: Actions){
  const { type, value } = action;
  
  if ( type === "number" ) {
    value.toFixed(); // Ok
  }else if ( type === "string" ) {
    value.repeat( 2 ); // Ok
  }
}
`````
`````ts
// для let
function f( action: Actions){
  let { type, value } = action;
  
  if ( type === "number" ) {
    value.toFixed(); // Error
  }else if ( type === "string" ) {
    value.repeat( 2 ); // Error
  }
}
`````