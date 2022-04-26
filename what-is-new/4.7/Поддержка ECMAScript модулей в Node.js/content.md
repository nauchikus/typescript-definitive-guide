## Поддержка ECMAScript модулей в Node.js

Начиная с текущей версии _TypeScript_ реализует поддержку _ECMAScript_ модулей в _Node.js_, который указывается с помощью новых значений `node12` и `nodenext` свойства компилятора `module`.

`````json
{
    "compilerOptions": {
        "module": "nodenext"
    }
}
`````