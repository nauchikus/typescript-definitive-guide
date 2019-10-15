В *TypeScript* `v3.6` была добавлена возможность трансформации `import.meta` в `context.meta` что является  необходимым функционалом при работе с такой модульной системой, как *SystemJS* (`--module system`).

~~~~~typescript
// этот код .ts ...
console.log(import.meta);

// ...преобразуется в этот .js код
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            console.log(context_1.meta);
        }
    };
});
~~~~~