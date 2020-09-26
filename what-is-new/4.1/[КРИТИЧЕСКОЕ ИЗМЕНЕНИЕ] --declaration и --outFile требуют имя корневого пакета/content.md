## \[КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ\] --declaration и --outFile требуют имя корневого пакета

До текущего момента при совместном использовании `--declaration` и `--outFile` пути в `.d.ts` файлах выглядели привычным образом.

`````ts
/**
 * До компиляции
 */

// @filename: ./utils.ts
export const toLowerCase = (text: string) => text.toLowerCase();

// @filename: ./index.ts
export * from "./utils";
`````

`````ts
/**
 * После компиляции .d.ts
 */

declare module "utils" {
    export const toLowerCase: (text: string) => string;
}
declare module "index" {
    export * from "utils";
}
`````

Начиная с текущей версии при совместном использовании параметров `--declaration` и `--outFile` необходимо задавать значение (имя пакета) параметру `bundledPackageName`. В противном случае возникнет ошибка - `The `bundledPackageName` option must be provided when using outFile and node module resolution with declaration emit.`.


`````json
{
    "compilerOptions": {
        "module": "amd",
        "target": "esnext",
        "jsx": "preserve",
        "sourceMap": true,

        "declaration": true,
        "outFile": "./dest/my-lib.js",
        "bundledPackageName": "my-lib"
    },
    "include": ["./src/"],
    "exclude": [
        "node_modules",
        "**/node_modules/*"
    ]
}
`````

`````ts
/**
 * После компиляции .d.ts
 */

declare module "my-lib/utils" {
    export const toLowerCase: (text: string) => string;
}
declare module "my-lib/index" {
    export * from "utils";
}
`````


