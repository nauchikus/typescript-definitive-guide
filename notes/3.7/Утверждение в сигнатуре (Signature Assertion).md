Во многих языках, в том числе и _Node.js_, реализован функционал обозначаемый как `assert` и представленный функциями принимающими условие, в случае ложности которого выбрасывается исключение.

```ts
import assert, { AssertionError } from "assert";

try {
    assert(5 === Math.round(Math.random() * 5));
} catch (error) {
    console.log(error instanceof AssertionError);// true
}
```

До версии ёё `v3.7` полноценно реализовать подобный механизм было невозможно. Поэтому начиная с текущей версии, язык _TypeScript_ пополнился новой концепцией обозначаемой как _утверждение в сигнатуре_ (_assertion signatures_) с помощью которых стало возможным моделирование рассмотренного выше приведения поведения.

```ts
import {AssertionError} from "assert";


/**custom assert */
const DEFAULT_ASSERTION_MESSAGE='this condition is false';
function stringAssert(condition: any, message?: string): asserts condition {
    if (!condition) {
        throw new AssertionError({
            message:message??DEFAULT_ASSERTION_MESSAGE
        });
    }
}

const toUpperCase=(text:any)=>{
    text.touppercase(); // not error

    stringAssert(typeof text === "string");

    // text.touppercase(); // error

    return text.toUpperCase();
}
```

При использовании механизма _утверждения в сигнатуре_ с имеющимся механизмом _утверждения типа_ условие из вызова утверждающей функции можно перенести в её тело.

```ts
function isStringAssert(value: any): asserts value is string {
    if (typeof value !== "string") {
        throw new Error(`value is not type string`);
    }
}
const toUpperCase = (text: any) => {
    text.touppercase(); // not error

    isStringAssert(text);

    // text.touppercase(); // error

    return text.toUpperCase();
}
```

Стоит заметить, что в случае переноса условного выражения в тело утверждающей функции сигнатура которой лишина _утверждения типов_, то есть содержащей исключительно _утверждения в сигнатуре_, подобный механизм функционировать не будет.

```ts
function isStringAssert(value: any): asserts value {
    if (typeof value !== "string") {
        throw new Error(`value is not type string`);
    }
}
const toUpperCase = (text: any) => {
    text.touppercase(); // not error

    isStringAssert(text);

    text.touppercase(); // not error

    return text.toUpperCase();
}
```
