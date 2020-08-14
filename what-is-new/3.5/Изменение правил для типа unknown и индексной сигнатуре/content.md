##Изменение правил для типа unknown и индексной сигнатуре

В _TypeScript_ тип представленный индексной сигнатурой ассоциированной с типом `any`, совместим с любым объектным типом.

```typescript
type Dictionary = { [key: string]: any };

let dictionary: Dictionary;

class SomeClass {}
const literalObjectType = { f0: 0, f1: '' };
const anyType: any = 5;

dictionary = {}; // Ok
dictionary = literalObjectType; // Ok
dictionary = anyType;
dictionary = new SomeClass(); // Ok
dictionary = () => {}; // Ok
dictionary = Boolean; // Ok
```

До версии `v3.5` тип `unknown` в индексной сигнатуре вел себя аналогичным образом.

```typescript
// <v3.5

type Dictionary = { [key: string]: unknown };

let dictionary: Dictionary;

class SomeClass {}
const literalObjectType = { f0: 0, f1: '' };
const anyType: any = 5;

dictionary = {}; // Ok
dictionary = literalObjectType; // Ok
dictionary = anyType;
dictionary = new SomeClass(); // Ok
dictionary = () => {}; // Ok
dictionary = Boolean; // Ok
```

Начиная с версии `v3.5` поведение для типа `unknown` в индексной сигнатуре было изменено. Теперь он совместим лишь с типами представляемыми литералами объектов и типом `any`.

```typescript
// >= 3.5

type Dictionary = { [key: string]: unknown };

let dictionary: Dictionary;

class SomeClass {}
const literalObjectType = { f0: 0, f1: '' };
const anyType: any = 5;

dictionary = {}; // Ok
dictionary = literalObjectType; // Ok
dictionary = anyType;
dictionary = new SomeClass(); // Error
dictionary = () => {}; // Error
dictionary = Boolean; // Error
```
