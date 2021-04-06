## Отдельные типы аксеcсоров

Автоматическое преобразование типов в _JavaScript_ сокращает время, но мешает _TypeScript_ повысить его типобезопасность. Не редко можно встретить код, в котором предполагается, что геттер принадлежит к типу `number`, в то время как сеттер ожидает значение принадлежащее к любому типу, а соответствие производится за счет преобразования.

`````js
class T {
    private _value = 0;

    /**
     * Предполагается, что геттер value возвращает тип number.
     */
    get value() {
        return this._value;
    }

    /**
     * Предполагается, что сеттер может обрабатывать
     * сценарии работы с любым типом.
     * 
     * [0] преобразовываем value к типу number. Это необходимо,
     * посколькуможет оно может принадлежать к любому типу.
     * 
     * [1] Если значение convertedValue не способно быть преобразовано,
     * то прекращаем выполнение кода сеттора...
     * 
     * [2] ...иначе, присваиваем его приватному полю _value.
     */
    set value(value){
        let convertedValue = Number(value); // [0]

        if(!Number.isFinite(convertedValue)){ // [1]
            return; // [2]
        }

        this._value = convertedValue; // [3]
    }
}
`````

Но в _TypeScript_ невозможно реализовать подобный сценарий, поскольку значение устанавливаемое сеттору долно соответствовать типу значения возвращаемому геттером.

`````ts
// Ok

class T0 {
    private _value = 0;

    get value(): number {
        return this._value;
    }

    /**
     * [*] Ok
     */
    set value(value: number){ // [*]
    }
}

// Error

class T1 {
    private _value = 0;

    get value(): number {
        return this._value;
    }

    /**
     * [*] Error -> 'get' and 'set' accessor must have the same type.ts(2380)
     */
    set value(value: number | string | boolean){ // *
    }
}
`````

Поэтому начиная с текущей версии, данное поведение было измененно. Теперь, тип значения устанавливоемое сеттору может отличаться от типа значения возвращаемого геттером, который и опреджеляет тип акссесоров. Другими словами, компилятор вычисляет совместимость типов на основе геттеров.

`````ts
// Начиная с текущей версии..

class T0 {
    private _value = 0;

    get value(): number {
        return this._value;
    }

    /**
     * [*] Ok
     */
    set value(value: number | string | boolean){ // *
    }
}
`````

Единственный неочивидный момент заключается в том, что определение типа значения сеттора обязанно включать тип к которому принадлежит значение возвращаемое геттером.

`````ts
class T {
    private _value = 0;

    /**
     * [*] Error -> The return type of a 'get' accessor must be assignable to its 'set' accessor typets(2380)
     */
    get value(): number { // [*]
        return this._value;
    }

    /**
     * Сеттер не включает тип возвращаемый геттером.
     */
    set value(value: string | boolean){
    }
}
`````