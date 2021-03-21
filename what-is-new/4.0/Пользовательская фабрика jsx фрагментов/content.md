## Пользовательская фабрика jsx фрагментов

До текущей версии было не возможно использовать `react` фрагменты при определении пользовательской фабрики в _tsconfig.json_ `"jsxFactory": "h"` или с помощью инлайн директивы `/** @jsx dom */`. По этой причине, начиная с текущей версии в _TypeScript_ появилась возможность определять пользовательскую фабрику фрагментов с помощью новой опции `jsxFragmentFactory` значение `Fragment` которой выполняет компиляцию с помощью определенного вместо встроенного в `react` механизма `React.Fragment`.
 
`````json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "jsx": "react",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment"
  }
}
`````

Кроме того, для реализации того же поведения можно воспользоваться новой инлайн директивой `/** @jsxFrag */`.


`````ts
/**
 * Данный код будет скомпилирован
 * с помощью механизмов библиотеки preact
 * подменяющих React.createElement и
 * React.Fragment
 */

/** @jsx h */
/** @jsxFrag Fragment */

import { h, Fragment } from "preact";

let Title = <>
    <h1>Title</h1>
    <h2>Subtitle</h2>
</>;
`````
