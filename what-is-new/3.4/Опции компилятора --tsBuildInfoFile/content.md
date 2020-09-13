##Опции компилятора --tsBuildInfoFile

Для того чтобы задать место сохранения файла `.tsbuildinf`, в компилятор _TypeScript_ был добавлен флаг `--tsBuildInfoFile`.

`--tsBuildInfoFile` - флаг с помощью которого указывается местосохранения файла `.tsbuildinf` генерирующегося при активной опции `--incremental` и служущий для хранения метаинформации призванной ускорить последуюзщие сборки.

`````ts
{
    "compilerOptions": {
        "incremental": true,
        "tsBuildInfoFile": "./buildinfo",
    }
}
```
