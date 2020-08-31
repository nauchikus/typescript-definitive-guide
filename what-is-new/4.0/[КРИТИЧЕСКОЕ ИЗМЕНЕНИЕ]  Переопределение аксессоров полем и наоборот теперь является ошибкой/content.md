Начиная с версии `3.7` был введен флаг `useDefineForClassFields` активация которого запрещала переопределение аксессоров полями и полей аксессорами при реализации механизма наследования (`extends`). Начиная с текущей версии поведение равное активируемому флагом `useDefineForClassFields` становится неотключаемым.

`````typescript
class Base {
    get value() {
        return 'value';
    }
    set value(value: string) {
        
    }
}

class Derived extends Base {
    /**
     * Error ->
     * 
     * 'value' is defined as an accessor in class 'Base',
     * but is overridden here in 'Derived'
     * as an instance property.
     */
    value = 'value';
}
`````
`````typescript
class Base {
     value = 'value';
}

class Derived extends Base {
    /**
     * Error ->
     * 
     * 'value' is defined as a property in class 'Base',
     * but is overridden here in 'Derived' as an accessor.
     */
   
    get value() {
        return 'value';
    }
    set value(value: string) {
        
    }
}
`````