# Типы - Type Queries (запросы типа), Alias (псевдонимы типа)
##  Запросы Типа (Type Queries)
________________

Запросы типа позволяют получить тип связанный с каким-либо идентификатором и использовать его при указании типа. Запрос типа определяется оператором `typeof` после которого идет идентификатор ссылающийся на тип. Запрос типа располагается в местах указания типа данных.

~~~~~typescript
let v1: T1;
let v2: typeof v1;
~~~~~

Простыми словами, при объявлении чего-либо, в качестве типа можно указать тип, полученный из переменной, параметра функции или метода, а также членов объекта и класса.

~~~~~typescript
class T {
    static staticProp: number;
    
    field: string;
    
    get prop(): boolean {
        return true;
    }
    
    method(): void {
    
    }
}

let t: T = new T();

let v0: typeof t; // let v0: T
let v1: typeof T.staticProp; // // let v1: number
let v2: typeof t.field; // let v2: string
let v3: typeof t.prop; // let v3: boolean
let v4: typeof t.method; // let v4: ()=>void

function f(param: number): void {
    let v: typeof param; // let v: number
}
~~~~~

Запрос типа может быть очень полезен сторонникам минимализма, который достигается при помощи вывода типов. Тем, кто придерживается консерватизма, возможно, придется по душе идея ускорять написание тестов за счет механизма вывода типов. Ведь в тех ситуациях, когда для тестирования требуются не использующиеся в приложении типы данных (как правило львиная доля которых приходится на данные), часто не хочется тратить время на их декларацию, но при этом хочется использовать автодополнение. В *TypeScript* такое становится возможным благодаря выводу типов в паре с оператором запроса типа. 

Представьте значение, присвоенное переменной, тип которой не указан явно. Теперь представьте что это значение нужно передать в функцию, параметр которой также не имеет явного указания типа. В этом случае в функции будет сложно работать с параметрами, так как вывод типов определит его принадлежность к типу `any`. 

~~~~~typescript
const STANDART_NORMAL = { x: 0, y: 0 }; // данные которые нужны только для контролирования точности самих тестов, а это в свою очередь означает, что декларация типов для них ещё не определена. Хотя вывод типов в состоянии вывести тип {x: number, y: number} для этой константы.

// здесь вывод типа не в состоянии вывести тип параметров функции
function valid(standart) {
    let element = document.querySelector('#some-id');
    let { clientLeft: x, clientTop: y } = element;
    let position = { x, y };

    // поэтому о параметрах невозможно получить какую-либо информацию 
    let isPositionXValid = position.x === standart. // автодополнение отсутствует
    let isPositionYValid = position.y === standart. // автодополнение отсутствует
    
    // ...
}
~~~~~

Не стоит рассуждать над тем, оставить так или указать типы, которые, возможно, предварительно нужно задекларировать. Вместо этого стоит попробовать такой замечательный механизм, как запрос типа. Запрос типа, в своем лице, позволяет решить, одновременно, две проблемы, одна из которых связана с проблемами, сопутствующими типу `any`, а другая — минимализму и расходу времени на декларирование типов.

~~~~~typescript
const STANDART_NORMAL = { x: 0, y: 0 };

// получение типа для аннотирования параметров прямо из константы.
function valid(standart: typeof STANDART_NORMAL) {
    let element = document.querySelector('#some-id');
    let { clientLeft: x, clientTop: y } = element;
    let position = { x, y };
    
    // расходовать время на декларацию типа так и не пришлось. Тем не менее автодополнение работает.
    let isPositionXValid = position.x === standart.x; // выводит .x
    let isPositionYValid = position.y === standart.y; // выводит .y
    
    // ...
}
~~~~~


## Псевдонимы Типов (Type Aliases)
________________

Создание *псевдонимов типа* (alias) — ещё одна из множества незаменимых возможностей *TypeScript*. Псевдоним типа объявляется с использованием ключевого слова `type`, после которого идет идентификатор-имя псевдонима типа, за которым идет оператор присваивания `=`, справа от которого находится тип для которого будет создан псевдоним.

~~~~~typescript
type Alias = T1;
~~~~~

Объявляться псевдоним типа может в контексте модулей, функций и методов.

~~~~~typescript
class Type {
    method(): void {
        type Alias = Type;
    }
}

type Alias = Type;

function func(): void {
    type Alias = Type;
}
~~~~~

Так как псевдонимы типов являются лишь псевдонимами для реальных типов, они не оставляют следа в коде после компиляции, к тому же их нельзя было расширять (`extends`) и реализовать (`implements`) в ранних версиях языка (до 2.7). Сейчас псевдоним типа можно реализовать или расширить, только если он представляет объектный тип (`object type`) или пересечение объектных типов со статически известными членами. Кроме того, псевдонимы типов нельзя использовать в операциях над типами с применением операторов `typeof` и `instanceof`. Помимо этого, если псевдоним типа будет создан для объекта, то при попытке создать его экземпляр возникнет ошибка.

~~~~~typescript
class Class {
    f1: number;
    f2: string;
}

type ClassAlias = Class;

let v1: ClassAlias = new Class(); // Ok
let v2: ClassAlias = new ClassAlias(); // Error
~~~~~

Псевдонимы типов можно создавать также как для объединений, так и для пересечений.

~~~~~typescript
type SomeType = number | string | boolean; // union type
type OtheType = number & string & boolean; // intersection type
~~~~~

Давно доказано, что идентификаторы типов, которые однозначно говорят о своем предназначении, облегчают понимание кода и его поддержку, тем самым сокращая затраты на его написание. По этой причине имена типов могут получаться очень длинными. Создание объединений или пересечений из нескольких типов с длинными именами может привести к ситуации, при которой код не поместится на одной строчке, а это приведет к трудностям чтения кода.

~~~~~typescript
class BirdSignDataProvider {}
class FishSignDataProvider {}
class InsectSignDataProvider {}

function animalSignValidate(
    signProvider: BirdSignDataProvider | FishSignDataProvider | InsectSignDataProvider
): boolean {
  return true;
}
~~~~~

При работе с типами объединения и пересечения псевдонимы типов позволяют повысить читаемость кода за счет сокрытия множества типов за одним идентификатором.

~~~~~typescript
class BirdSignDataProvider {};
class FishSignDataProvider {};
class InsectSignDataProvider {};

type AnimalSignProvider =
    BirdSignDataProvider |
    FishSignDataProvider |
    InsectSignDataProvider;

function animalSignValidate(signProvider: AnimalSignProvider): boolean {
    return true;
}
~~~~~

Помимо всего этого, псевдонимы типов можно выносить в отдельные модули, а затем импортировать их в места назначения. В случае, если модуль, содержащий псевдонимы типов, содержит только их, современные сборщики не будут включать такой модуль в сборку. Другими словами, модуль растворится точно также, как и другие, не имеющие место в *JavaScript*, конструкции *TypeScript*.

~~~~~typescript
// aliases.ts
import BirdSignDataProvider from './BirdSignDataProvider';
import FishSignDataProvider from './FishSignDataProvider';
import InsectSignDataProvider from './InsectSignDataProvider';

export type AnimalSignProvider =
    BirdSignDataProvider |
    FishSignDataProvider |
    InsectSignDataProvider;


// index.ts
import { AnimalSignProvider } from './aliases';

import BirdSignDataProvider from './BirdSignDataProvider';
import FishSignDataProvider from './FishSignDataProvider';
import InsectSignDataProvider from './InsectSignDataProvider';

function animalSignValidate(signProvider: AnimalSignProvider): boolean {
    return true;
}

animalSignValidate(new BirdSignDataProvider());
animalSignValidate(new FishSignDataProvider());
animalSignValidate(new InsectSignDataProvider());
~~~~~

Как было сказано ранее в главе “Псевдонимы Типов (Type Aliases)”, в тех редких случаях, когда декларированием типов, требующихся только для тестирования, можно пренебречь, механизм запроса типов помогает получить тип, который можно указать в аннотации типа, выведя его прямо из значения, на которое ссылается идентификатор. Это дает все возможности типизации, за исключением читаемости кода. Хотя в примере, иллюстрирующим работу механизма запроса типа, константа `STANDART_NORMAL` имеет вполне говорящий идентификатор, допускаются случаи, при которых будет сложно добиться подобного. При худшем сценарии идентификатор может иметь общий смысл.

~~~~~typescript
let data = { x: 0, y: 0 };

function valid(standart: data) { // data, что это?

} 
~~~~~

В таких случаях псевдоним типа может оказать неоценимую помощь. Ведь экономия времени, затраченное на декларирование типов данных, не лишит код его выразительности и семантики.

~~~~~typescript
const STANDART_NORMAL = { x: 0, y: 0 };

type StandartNormalPoint = typeof STANDART_NORMAL; // определение "говорящего типа" без затраты времени на его декларирование.


function valid(standart: StandartNormalPoint) {
    // ...
    
    // Расходовать время на декларацию типа не пришлось, при этом работает автодополнение и параметр функции обзавелся типом, в чьем названии заключено его предназначение.
    let isPositionXValid = position.x === standart.x; // выводит .x
    let isPositionYValid = position.y === standart.y; // выводит .y
    
    // ...
}
~~~~~

Есть ещё пара особенностей псевдонимов:

- Вынести объявления кортежа (`Tuple`), речь о которых пойдет далее в главе [“Типы - Object, Array, Tuple”](), можно только в описание псевдонима.
- Создать тип сопоставления, о них речь пойдет далее в главе [“Расширенные типы - Readonly, Partial, Required, Pick, Record”](), к которым можно отнести такие типы как `Readonly`, `Partial`, `Pick`, `Record` и им подобные можно исключительно на основе псевдонимов типов.


## Итоги

- Запросы типа позволяют указать в качестве типа тип, связанный с каким-либо идентификатором.
- Тип-псевдоним (`Type Aliases`) позволяет создавать псевдонимы типов для существующих типов, делая исходный код более читаемым.
- Тип-псевдоним нельзя использовать в качестве супертипа, а также использовать в операциях в которых используются операторы `typeof` и `instanceof`.
- Вынести описание типа `Tuple` возможно только в описание псевдонима типа. Кроме того, сопоставимые типы можно описать только на основе псевдонима типа (но об этом чуть позже).
