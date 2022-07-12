## [КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ] Типы больше не могут быть импортированы и экспортированы в JavaScript файлах

До этого момента компилятор _TypeScript_ справлялся с компиляцией файлов _JavaScript_ в которых выполнялся импори или экспорт типов не имеющих реального значения. Поскольку в настоящем _JavaScript_ подобное вызывает ошибку, данное поведение было исправлено.



`````ts
// было

import { SomeValue, SomeType } from "some-module";

/**
 -  * @type {SomeType}
 +  * @type {import("some-module").SomeType}
 */
export const value = SomeValue;


// стало

import { SomeValue } from "some-module";

/**
 -  * @type {SomeType}
 +  * @type {import("some-module").SomeType}
 */
export const value = SomeValue;
`````

`````ts
// было

/**
 * @typedef {string | number} SomeType
 */

export { SomeType as SomeTypeExported };
    

// стало

  /**
 * @typedef {string | number} SomeType
 */

/**
 +  * @typedef {SomeType} SomeTypeExported
 +  */
`````

