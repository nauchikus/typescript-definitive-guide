## Указание шаблонного литерального строкового типа в качестве дискриминанта

Начиная с текущей версии, в качестве дескременантного типа можно указывать шаблонный строковой литеральный тип.

`````ts
interface Success {
    type: `${string}Success`;
    body: string;
}

interface Error {
    type: `${string}Error`;
    message: string;
}

function handler(result: Success | Error) {
    if (result.type === "HttpSuccess") {
        let token = result.body;
    }
}
`````
