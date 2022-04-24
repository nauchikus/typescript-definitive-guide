## Анализ потока управления для остаточных параметров

Начиная с текущей версии анализатор _TypeScript_ научился разрешать ситуации в которых остаточные параметры представлены _размеченными объединениями кортежей_.

`````ts
type Func = (...rest: [`a`, string] | [`b`, number]) => void;

const f: Func = (type, value) => {
    if(type === "a"){
        value.charAt(0); // Ok -> value: string
    }else if(type === "b"){
        value.toFixed(); // Ok -> value: number
    }
}
`````
