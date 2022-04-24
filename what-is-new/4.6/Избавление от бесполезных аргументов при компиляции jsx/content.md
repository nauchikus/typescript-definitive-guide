## Избавление от бесполезных аргументов при компиляции jsx

До текущей версии данный код..




`````tsx
export const el = <div>foo</div>;
`````

..преобразовывался в -

`````ts
import { jsx as _jsx } from "react/jsx-runtime";
export const el = _jsx("div", { children: "foo" }, void 0);
`````

Начиная с текущей версии, конечный код буде лишен фрагмента `void 0`.

`````ts
import { jsx as _jsx } from "react/jsx-runtime";
export const el = _jsx("div", { children: "foo" });
`````
