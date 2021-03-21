##Опции компилятора --tsBuildInfoFile

Для того, что бы задать место сохранения файла `.tsbuildinfo`, в компилятор _TypeScript_ был добавлен флаг `--tsBuildInfoFile`.

`--tsBuildInfoFile` - флаг, с помощью которого указывается место сохранения файла `.tsbuildinfo` генерирующегося при активной опции `--incremental` и служащий для хранения метаинформации призванной ускорить последующие сборки.

`````ts
{
    "compilerOptions": {
        "incremental": true,
        "tsBuildInfoFile": "./buildinfo",
    }
}
```
