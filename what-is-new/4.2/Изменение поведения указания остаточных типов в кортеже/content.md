## Изменение поведения указания остаточных типов в кортеже

Начиная с текущей версии вводятся ограничения на указание в кортеже остаточных типов (`...rest`). Теперь, в случае если перед остаточным типом указан другой остаточный тип или после него следует необязательный тип (`[number?]`), возникнет ошибка.

`````ts
/**
 * [0] A rest element cannot follow another rest element.ts(1265)
 *
 */
let v0: [...boolean[], ...string[]]; // Error [0]
let v1: [...boolean[], boolean, ...string[]]; // Error [0]

let v2: [...boolean[], number]; // Ok
let v3: [number, ...boolean[]]; // Ok
let v4: [number, ...boolean[], number]; // Ok

/**
 * [0] An optional element cannot follow a rest element.ts(1266)
 *
 */
let v5: [...boolean[], boolean?]; // Error [1]

let v6: [boolean?, ...boolean[]]; // Ok
`````
