##Опции компилятора --tsBuildInfoFile

Для того чтобы задать место сохранения файла `.tsbuildinf`, в компилятор *TypeScript*  был добавлен флаг `--tsBuildInfoFile`.

`--tsBuildInfoFile` - флаг с помощью которого указывается местосохранения файла `.tsbuildinf` генерирующегося при активной опции `--incremental` и служущий для хранения метаинформации призванной ускорить последуюзщие сборки.


`````typescript
{
    "compilerOptions": {
        "incremental": true,
        "tsBuildInfoFile": "./buildinfo",
    }
}
`````
