## Разрешение импорта и экспорта только типа с помощью resolution-mode

Компилятор _TypeScript_ умеет успешно разрешать сценарии при импортировании таких модулей, как `CommonJS` и `ECMAScript`. Для разрешения импорта только типа теперь существует отдельный механизм, который осуществляется путем указания после пути до модуля ключевого слова `assert` за которым в фигурных скобках определяется конфигурация позволяющая конкретизировать вид модулей.

`````ts
// Для require()
import type { TypeFromRequere } from "module-name" assert {
    "resolution-mode": "require"
};

// Для import
import type { TypeFromImport } from "module-name" assert {
    "resolution-mode": "import"
};

export interface MergedType extends TypeFromRequere, TypeFromImport {}
`````

Помимо этого, утверждения можно применить и к динамическому импорту..

`````ts
import("module-name", { assert: { "resolution-mode": "require" } }).TypeFromRequire;
import("module-name", { assert: { "resolution-mode": "import" } }).TypeFromImport;
`````

..а также, к коментарной директиве.

`````ts
/// <reference types="module-name" resolution-mode="require" />
/// <reference types="module-name" resolution-mode="import" />
`````