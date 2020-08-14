##Совместное использование флагов --declaration и --allowJs

До текущей версии _TypeScript_ акивный флаг компилятора `--declaration` позволял генерировать файлы декларации `.d.ts` только из файлов имеющих расширение `.ts` и `.tsx`. Файлы декларации существуенно снижают нагрузку возложенную на компилятор, что является важным критерием для такого механизма как ссылки на проект, который существенно ускоряет процесс сборки больших приложений.

Но к сожалению флаг `--declaration` не совместим с другим таким важным флагом как `--allowJs`, который позволяет использовать в впроекте модули с расширением `.js` код в которых не поддается декларированию даже если объявления аннотированны с помощью _JSDoc_.

Начиная с _TypeScript_ `v3.7` это проблема устранена и теперь компилятор из-за всех сил будет пытаться описать структуру `JavaScript` кода с помощью типов, к тому же прибегая к помощи оставленной разработчиками при помощи _JSDoc_.

```js
// [File: module.js]

export const VALUE = 5;
export const SUM = 5 + 5;
export const toString = (value) => value.toString();
```

```ts
// [File: module.d.ts]

export const VALUE: 5;
export const SUM: number;
export function toString(value: any): any;
```

```js
// [File: module.js]

export const VALUE = 5;
export const SUM = 5 + 5;
/**
 *
 * @param {string} value
 * @returns {string}
 */
export const toString = (value) => value.toString();
```

```ts
// [File: module.d.ts]

export const VALUE: 5;
export const SUM: number;
export function toString(value: any): string;
```
