##Повышение типобезопасности генероторов

До текущей версии такие конструкции как генераторы (`generators`) имели недоработки косающиеся определения типа данных возвращаемых, как из, так и во внутрь генератора, значений.

`````ts
// пример со значением возвращающимся из генератора

// function generator(): IterableIterator<"Done" | 100>
function* generator() {
    yield 100;

    return `Done`;
}

let iterator = generator(); // let iterator: IterableIterator<"Done" | 100>
let result = iterator.next(); // let result: IteratorResult<"Done" | 100>

/**
 * Поскольку генератор перешел взавершенное состояние
 * значение result.value может принадлежать исключительно
 * к типу string ...
 */
if (result.done) {
    /**
     * ... тем не менее, вывод типов определеяет его
     * как тип объединение (Union) string | number
     */
    let value = result.value; // let value: string | number
}
```

`````ts
// пример со значением возвращаемым в генератор

type Greeter = {
    greet(): void;
};

// function generator(): IterableIterator<undefined>
function* generator() {
    /**
     * В строке - let greeter: Greeter = yield;
     * предполагается, что возвращенное извнешнего кода
     * значение будетпринадлежать к типу Greeter...
     *
     */
    let greeter: Greeter = yield;
    greeter.greet();
}

let iterator = generator(); // let iterator: IterableIterator<undefined>
iterator.next();
/**
 * Строка ниже приведт кошибке во время выполнения
 * внутри  генератора при вызове метода greeter.greet();
 * поскольку возращенное значение принадлежит к типу number,
 * в то время как ожидается тип Greeter.
 */
iterator.next(123); // Error, runtime error
```

Начиная с версии _TypeScript_ `3.6` описанные выше недостатки были устранены.

`````ts
// пример со значением возвращающимся из генератора

/**
 *  <v3.6: function generator(): IterableIterator<"Done" | 100>
 * >=v3.6: function generator(): Generator<number, string, unknown>
 */
function* generator() {
    yield 100;

    return `Done`;
}

/**
 *  <v3.6: let iterator: IterableIterator<"Done" | 100>
 * >=v3.6: let iterator: Generator<number, string, unknown>
 */
let iterator = generator();

/**
 *  <v3.6: let result: IteratorResult<"Done" | 100>
 * >=v3.6: let result: IteratorResult<number, string>
 */
let result = iterator.next();

if (result.done) {
    /**
     *  <v3.6: let value: string | number
     * >=v3.6: let value: string
     */
    let value = result.value;
}
```

`````ts
// пример со значением возвращаемым в генератор

type Greeter = {
    greet(): void;
};

/**
 *  <v3.6: function generator(): IterableIterator<undefined>
 * >=v3.6: function generator(): Generator<undefined, void, Greeter>
 */
function* generator() {
    let greeter: Greeter = yield;
    greeter.greet();
}

/**
 *  <v3.6: let iterator: IterableIterator<undefined>
 * >=v3.6: let iterator: Generator<undefined, void, Greeter>
 */
let iterator = generator();
iterator.next();
iterator.next(123); // Error! Argument of type '[123]' is not assignable to parameter of type '[] | [Greeter]'.
```

Подобноестало возможно благодаря добавлению шести новых типов перечисленных ниже, которые вы также можете использовать при работе с генераторами.

`````ts
interface Iterator<T, TReturn = any, TNext = undefined> {
    /** ... */
}
type IteratorResult<T, TReturn = any> =
    | IteratorYieldResult<T>
    | IteratorReturnResult<TReturn>;
interface IteratorReturnResult<TReturn> {
    /** ... */
}
interface IteratorYieldResult<TYield> {
    /** ... */
}

interface Generator<T = unknown, TReturn = any, TNext = unknown>
    extends Iterator<T, TReturn, TNext> {
    /** ... */
}
interface GeneratorFunction {
    /** ... */
}
interface GeneratorFunctionConstructor {
    /** ... */
}
```

И напоследок будет не лишним ещё раз взглянуть на очень простой и информативный пример более эффективной работы с генераторами.

`````ts
/**
 * Generator<number, string, boolean>
 * или по другому
 * Generator<
 *  возвращаемое с помощью оператора yield  значение,
 *  возвращаемое с помощью оператора return значение,
 *  передаваемое в метод next, то есть возвращаемое в генератор, значение
 * >
 */
function* counter(): Generator<number, string, boolean> {
    let i = 0;

    while (true) {
        if (yield i++) {
            console.log(
                `[if]  Block if in counter generator.
                       Variable value "i": ${i}`
            );

            break;
        }
    }

    return 'Done';
}

let iterator = counter();
let result = iterator.next();

while (!result.done) {
    let returnedFromGeneratorValue = result.value;
    let passedToGeneratorValue = returnedFromGeneratorValue === 3;

    console.log(
        `[out] Returned from generator value: ${returnedFromGeneratorValue}`
    );
    console.log(`[in]  Passed to generator  value: ${passedToGeneratorValue}`);

    result = iterator.next(passedToGeneratorValue);
}

console.log(
    `[end] Return from generator resultant value: ${result.value.toUpperCase()}`
);

/**
 * "[out] Returned from generator value: 0"
 * "[in]  Passed to generator  value: false"
 * "[out] Returned from generator value: 1"
 * "[in]  Passed to generator  value: false"
 * "[out] Returned from generator value: 2"
 * "[in]  Passed to generator  value: true"
 * "[if]  Block if in counter generator.
          Variable value "i": 3"
 * "[end] Return from generator resultant value: DONE"
 */
```
