## [КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ] get и set больше не перечисляемы

До версии `3.9` при генерации кода для аксессоров определенных в теле класса под `es5` \ `es2015` поле `enumerable` устанавливалось в значение `true`, в то время как спецификация _ESMAScript_ предполагает `false`.

`````typescript
class T {
    set accessor(value: string){

    }
    get accessor(){
        return "accessor";
    }
}
`````
`````javascript
"use strict";
var T = /** @class */ (function () {
    function T() {
    }
    Object.defineProperty(T.prototype, "accessor", {
        get: function () {
            return "accessor";
        },
        set: function (value) {
        },
        enumerable: false, // false начиная с версии 3.9, но true для версий ниже
        configurable: true
    });
    return T;
}());
`````

Начиная с текущей версии расхождение со спецификацией _ESMAScript_ было исправленно.
