## jsx фабрики для React 17

Текущая версия _TypeScript_ получила поддерку будущих `jsx` и `jsxs` фабрик предполагаемых _React 17_. Для этого были реализованны две новые опции `react-jsx` и `react-jsxdev`.

При разделении конфигурации на _production_ и _development_ конфигурация проекта могла бы выглядеть следующим образом.

`````json
// tsconfig.json
{
    "compilerOptions": {
        "module": "esnext",
        "target": "es2015",
        "jsx": "react-jsx",
        "strict": true
    },
    "include": [
        "./**/*"
    ]
}
`````
`````json
// tsconfig.dev.json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "jsx": "react-jsxdev"
    }
}
`````

