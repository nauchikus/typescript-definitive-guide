## Поддержка ECMAScript модулей в NodeJs

Начиная с текущей версии _TypeScript_ реализует поддержку _ECMAScript_ (ESM) модулей в среде _nodejs_. Для активации данного функционала, в `tsconfig.json` необходимо задать свойству `module` значение `nodenext`.


`````json
{
    "compilerOptions": {
        "module": "nodenext",
    }
}
`````

Основные правила придерживаются спецификации _ECMAScript_, но существует один момент, о котором стоит упомянуть.

В случае активации _esm_ в `package.json` и выборе модулей `nodenext` относительные пути в импортах требуют уточнение расширения, как `.js`. Другими словами импорт файла `file.(ts|tsx|js|jsx)` должен выглядить, как `import "./file.js"`, а не `import "./file"`.


`````ts
// file f.ts

export const f = () => {};


// file index.ts

import {f} from "./f"; // Error
import {f} from "./f.js"; // Ok
`````

Как известно, при реализации `esm` в _nodejs_ появилась поддержка двух новых форматов файлов - `.mjs` для _ECMAScript_ модулей и `.cjs` для _CommonJs_ модулей. Следуя этому, в _TypeScript_ также появилась поддержка двух новых расширений `.mts` и `.cts`, и кроме того `.d.mts` и `.d.cts`.


_ECMAScript_ позволяют импортировать _CommonJs_ модули таким образом, как если бы они имели экспор по умолчанию.

`````ts
// file f.сts

export const f = () => {};


// file index.ьts

import f from "./f";
`````

Кроме этого, после реализации `esm` _nodejs_, в `package.json` было добавлено новое свойство `exports` позволяющее конкретизировать точки входа.

`````json
// package.json

// package.json
{
    "type": "module",
    "exports": {
        ".": {
            "import": "./esm/index.js",
            "require": "./commonjs/index.cjs",
        },
    },

    // для поддержки старых версий
    "main": "./commonjs/index.cjs",
}
`````

Таким образом, _TypeScript_ также добавляет новую возможность указания деклараций типов.

`````json
// package.json
{
    "type": "module",
    "exports": {
        ".": {
            "import": "./esm/index.js",
            "require": "./commonjs/index.cjs",


            "types": "./types/index.d.ts"
        },
    },

    // для поддержки старых версий
    "main": "./commonjs/index.cjs",
    "types": "./types/index.d.ts"
}
`````
