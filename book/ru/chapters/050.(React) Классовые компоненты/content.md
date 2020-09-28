# Классовые компоненты

Помимо компонентов на основе функций, _React_ позволяет определять компоненты на основе классов, которые, как в случае реализации _ловушки для ошибок_ просто не заменимы. Кроме этого, с ними необходимо познакомиться, так как они являются частью _React_. Именно поэтому текущая глава полностью посвящена старым добрым классовым компонентам. 

## Производные от Component<P, S, SS>

Пользовательские компоненты построенные на основе классов обязаны расширять базовый обобщенный класс `Component<Props, State, Snapshot>` имеющего три необязательных параметра типа.

`````ts
import React, {Component} from "react";


class Timer extends Component {
    render(){
        return null;
    }
}

export default Timer;
`````

Первым делом стоит обратить внимание на первую строку, а именно импорт пространства имен _React_. Не зависимо используете вы его напрямую или нет, оно обязательно должно быть импортировано, в противном случаи компилятор напомнит об этом с помощью ошибки.

`````ts
/**
 * [0] Забыт импорт пространства
 * имен React в следствии чего в
 * точке [1] возникнет ошибка - 
 * 
 * 'React' refers to a UMD global,
 * but the current file is a module.
 * Consider adding an import instead.ts(2686)
 */

import {Component} from "react"; // [0]


class Timer extends Component {
    render(){
        return null; // [1]
    }
}

export default Timer;
`````

Кроме того в нашем примере у метода `render` отсутствует аннотация возвращаемого типа, что на практике даже приветствуется. Но с образовательной точки зрения её указание не принесет никакого вреда.

`````ts
import React, {Component, ReactNode} from "react";


class Timer extends Component {
    render(): ReactNode {
        return null;
    }
}

export default Timer;
`````

При переопределении производным классом метода `render` в качестве типа возвращаемого значения необходимо указывать тип совместимый с указанным в базовом классе, то есть с типом `ReactNode` поведение и нюансы которого были подробно рассмотрены в главе посвященной функциональным компонентам.

Как говорилось ранее, тип от которого должны наследоваться пользовательские классовые компоненты является обобщенным и имеет три необязательных параметра типа, что и иллюстрирует наш минималистический пример.

`````ts
/**
 * [0] отсутствует передача аргументов типа
 * определенных как Component<Props, State, Snapshot>
 * что указывает на их необязательность.
 */
class Timer extends Component /** [0] */ {
    
}
`````

В реальных проектах подобное встречается редко, поэтому следующим шагом разберем логику определения типов описывающих пользовательский компонент. 

Начнем по порядку, а именно с `Props`. Несмотря на то что _пропсы_ делятся на обязательные и необязательные, все они по мере необходимости передаются в качестве аргументов конструктора при создании его экземпляра и доступны по ссылке `this.props` (обозначим их как _общие пропсы_). Тем не менее за инициализацию необязательных пропсов ответственен сам классовый компонент для чего и предусмотренно статическое поле `defaultProps`.

`````ts
/**
 * Аннотации в ожиждании указания
 * типа.
 */
class Timer extends Component {
    public static readonly defaultProps /** [0] */ = {};

    constructor(props /** [1] */){
        super(props);
    }
}
`````

Тот факт что аннотация `defaultProps` предполагает тип представляющий лишь ассоциированное с этим полем значение вынуждает разделить декларацию общих пропсов на два типа `DefaultProps` и `Props`. Ввиду того что тип `Props` представляет не только обязательные пропсы, но и необязательные, он должен расширять (`extends`) тип `DefaultProps`. 
 
`````ts
interface DefaultProps {}
interface Props extends DefaultProps {}


class Timer extends Component {
    public static readonly defaultProps = {};

    constructor(props: Props){
        super(props);
    }
}
`````

Не будет лишним упомянуть что в реальных проектах интерфейс `Props`, помимо `DefaultProps`, очень часто расширяет множество других интерфейсов. В их число входят типы, предоставляемые библиотеками _ui_, _hoc обертками_ и обычными библиотеками, как например _react-router_ и его тип `RouteComponentProps<T>`.

Поскольку в описании базового класса поле (`this.props`) принадлежит к типу определенного в качестве первого параметра типа, то есть `Component<Props>`, то `Props` необходимо указать в аннотации не только первого параметра конструктора, но и в качестве первого аргумента базового типа. Иначе `this.props` так и останется принадлежать к простому объектному типу `{}` заданному по умолчанию.

`````ts
interface DefaultProps {
    message: string;
}
interface Props extends DefaultProps {
    duration: number;
}

/**
 * Если не передавать Props в качестве
 * аргумента типа в точке [0] то в точке
 * [1] возникнет ошибка ->
 * Property 'message' does not exist on type
 * 'Readonly<{}> & Readonly<{ children?: ReactNode; }>'
 */
class Timer extends Component<Props /**[0] */> {
    public static readonly defaultProps = {
        message: `Done!`
    };

    constructor(props: Props){
        super(props);

        props.message; // Ok
        this.props.message; // Ok [1]
    }
}
`````

Как было сказано в теме посвященной функциональным компонентам, что если взять за правило именовать типы пропсов как `DefaultProps` и `Props`, то при необходимости в их импорте непременно возникнет коллизия из-за одинаковых имен. Поэтому принято добавлять к названиям названия самих компонентов `*DefaultProps` и `*Props`. Но поскольку эти типы повсеместно указываются в аннотациях расположенных в теле классового компонента, то подобные имена попросту усложняют понимание кода. Поэтому для исчерпывающих имен необходимо создавать более компактные псевдонимы типа `type`.

Также стоит сразу сказать, что все три типа выступающих в качестве аргументов базового типа нуждаются в более компактных идентификаторах определяемых с помощью псевдонимов. Но кроме того, все они описывают объекты, мутация которых не предполагается. Простыми словами типы `Props`, `State` и `Snapshot` используются исключительно в аннотациях `readonly` полей класса, параметрах его методов и возвращаемых ими значениях. Поскольку секрет здорового приложения кроется в типобезопасности, всю упомянутую троицу необходимо сделать неизменяемой. Для этого существует специальный тип `Readonly<T>`. Но так как преобразование типов в каждой отдельной аннотации приведет к чрезмерному увеличению кода, необходимо проделать это единожды в определении их псевдонимов.

Посмотрим как новая информация преобразит наш основной пример.

`````ts
import React, {Component, ReactNode} from "react";

/**
 * Имена интерфейсов получили префикс
 * в виде названия компонента.
 */
interface TimerDefaultProps {
    message: string;
}
interface TimerProps extends TimerDefaultProps {
    duration: number;
}

/**
 * Для конкретных типов преобразованных
 * в типы только для чтения
 * определен псевдоним.
 */
type DefaultProps = Readonly<TimerDefaultProps>;
type Props = Readonly<TimerProps>;

class Timer extends Component<Props> {
    public static readonly defaultProps: DefaultProps = {
        message: `Done!`
    };

    constructor(props: Props){
        super(props);
    }
}

/**
 * Добавлен экспорт не только самого
 * компонента, но и типа представляющего
 * его основные пропсы.
 */
export default Timer;
export {TimerProps}; // экспортируем типа *Props
`````

Также стоит упомянуть что пропсы всех компонентов по умолчанию имеют определение необязательного (объявленного с модификатором `?:`) поля `children` принадлежащего к оговоренному ранее типу `ReactNode`. Простыми словами можно вообще не передавать аргументы базовому типу и компилятор не выдаст ошибку при обращении к полю `this.props.children`;

`````ts
class Label extends Component {
    render(){
        return (
                    /**[0] */
            <h1>{this.props.children}</h1>
        );
    }
}

/**
 * [0] несмотря на то что базовому
 * типу не были установлены аргумента типа
 * обращение к свойству children не вызывает
 * ошибки поскольку данное свойство определенно
 * в базовом типе.
 */

<Label>{"label"}</Label>; // string as children -> Ok [1]
<Label>{1000}</Label>; // number as children -> Ok [2]
<Label></Label>; // undefined as chiildren -> Ok [3]

 /**
  * При создании экземпляров компонента Label
  * допустимо указывать в качестве children
  * как строку [1], так и числа [2] и кроме
  * того не указывать значения вовсе [3]
  */
`````

В остальном `children` имеют то же поведение и недостатки подробно описанные в главе посвященной функциональным компонентам. Поэтому оставим их и приступим к рассмотрению второго параметра базового типа `Component`, а именно к типу представляющего состояние компонента `Component<Props, State>`.

Несмотря на то что состояние является закрытым от внешнего мира, тип представляющий его также принято называть с префиксом в роли которого выступает название самого компонента. Причина кроется не только в соблюдении общего стиля кода относительно именования типов пропсов. На практике могут возникнуть коллизии имен при создании вложенных классовых компонентов что является обычным делом при создании _hoc_. Поэтому для типа описывающего состояние компонента так же необходимо определить ещё и псевдоним и не забыть передать его в качестве второго аргумента базового типа и указать в аннотации поля `state`.


`````ts
import React, {Component, ReactNode} from "react";

interface TimerDefaultProps {
    message: string;
}
interface TimerProps extends TimerDefaultProps {
    duration: number;
}

// определение State
interface TimerState {
    time: number;
}

type DefaultProps = Readonly<TimerDefaultProps>;
type Props = Readonly<TimerProps>;
type State = Readonly<TimerState>; // создание псевдонима для типа 

/**
 * [0] передача псевдонима State
 * в качестве второго аргумента
 * базового типа.
 */
class Timer extends Component<Props, State /** [0] */> { 
    public static readonly defaultProps: DefaultProps = {
        message: `DOne!`
    };

    // определение поля state
    public readonly state: State = {
        time: 0
    };

    constructor(props: Props){
        super(props);
    }
}

export default Timer;
export {TimerProps};
`````

Пора обратить внимание на момент связанный с объявлением `defaultProps` и `state`, которым необходимо указывать (или не указывать вовсе) модификатор доступа `public`, так как к ним должен быть доступ извне. Кроме того не будет лишним добавить этим полям модификатор `readonly`, который поможет избежать случайных изменений.

Говоря о состоянии нельзя обойти стороной такой метод как `setState` необходимый для его изменения, о котором известно что в качестве аргумента он может принимать как непосредственно объект представляющий новое состояние, так и функцию возвращающую его. Но поскольку первый случай ничего, что нас могло бы заинтересовать, из себя не представляет, рассмотрен будет лишь второй вариант с функцией. Поэтому продолжим наш основной пример и внесем в него изменения касающиеся изменения состояния. Создадим скрытый метод `reset` который будет сбрасывать значение пройденного времени.

`````ts
interface TimerState {
    time: number;
}

type State = Readonly<TimerState>;


class Timer extends Component<Props, State> { 
    public static readonly defaultProps: DefaultProps = {
        message: `DOne!`
    };

    public readonly state: State = {
        time: 0
    };

    constructor(props: Props){
        super(props);
    }

    // определение скрытого метода reset
    private reset(){
        /**
         * Вызываем метод setState с функцией
         * ассинхронного изменения состояния
         * в качестве первого аргумента.
         */
        this.setState( (prevState: Readonly<State>, props: Readonly<Props>) => {
            return {time: 0}; // возвращаем новое состояние
        } )
    }
}
`````

Из того кода что был добавлен в наш пример стоит обратить внимание на несколько моментов. Прежде всего это использование псевдонимов `Props` и `State` в аннотациях параметров функции переданной в метод `setState`. Обозначим её как `updater`. Как было сказано ранее, типы описывающие состояние и пропсы используются повсеместно в коде компонента. Кроме того стоит сказать что описание сигнатуры функции `updater` подобным образом излишне и имеет место быт лишь в образовательных целях. Достаточно просто определить необходимые параметры и вывод типов самостоятельно определит их принадлежность.

`````ts
class Timer extends Component<Props, State> { 
    private reset(){
        /**
         * Вывод типов в состоянии определить
         * принадлежность параметров, поэтому
         * самостоятельнаое аннотирование излишне.
         * 
         * (parameter) prevState: Readonly<TimerState>
         * (parameter) props: Readonly<TimerProps>
         */
        this.setState( (prevState, props) => {
            return {time: 0};
        } )
    }
}
`````

В добавок к этому стоит возложить определение возвращаемого значения из функции `updater` на вывод типов, поскольку это не просто излишне, но и в большинстве случаев может являться причиной избыточного кода. Все дело в том что когда состояние содержит множество полей, обновление которых не производится одновременно, при указании возвращаемого типа как `State` будет невозможно частичное обновление, поскольку лишь часть типа `State` не совместимо с целым `State`.

`````ts
interface Props{}
interface State{ /**[0] */
  yesCount: number;
  noCount: number;
}
class Counter extends Component<Props,State>{
  state = {
    yesCount:0,
    noCount:0
  }

  buttonA_clickHandler = () => {
      // инкрементируем yesCount
    this.setState((prevState): State => {
      return {yesCount: prevState.yesCount + 1}; /**1 */
    });
  };
  buttonB_clickHandler = () => {
      // инкрементируем noCount
    this.setState((prevState): State => {
        return {noCount: prevState.noCount + 1}; /**[2] */
    });
  };


  render(){
    return (
      <div>
          <p>Yes: {this.state.yesCount}</p>
          <p>No: {this.state.noCount}</p>
          <button onClick={this.buttonA_clickHandler}>yes++</button>
          <button onClick={this.buttonB_clickHandler}>no++</button>
      </div>
    );
  }
}

/**
 * [0] описание состояния с двумя полями.
 * [1] Error -> поскольку {yesCount: number} не совместим
 * с {yesCount: Number; noCount: number}
 * [2] Error -> поскольку {noCount: number} не совместим
 * с {yesCount: Number; noCount: number}
 */
`````
В случае когда функция `updater` выполняет частичное обновление состояния и при этом тип возвращаемого значения указан явно, необходимо воспользоваться механизмом распространения (`spread`) дополнив отсутствующую часть в новом состоянии старым.

`````ts
class Counter extends Component<Props,State>{
  buttonA_clickHandler = () => {
    this.setState((prevState): State => {
                /**[0] */
      return {...prevState, yesCount: prevState.yesCount + 1};
    });
  };
  buttonB_clickHandler = () => {
    this.setState((prevState): State => {
                    /**[1] */
        return {...prevState, noCount: prevState.noCount + 1};
    });
  };
}

/**
 * [0] В обоих случаях ошибки не воникает
 * поскольку недостающая часть состояния
 * дополняется из предыдущего состояния,
 * что делает тип возвращаемого объекта
 * совместимым с типом State.
 */
 `````
Несмотря на то что механизм распространения помогает обойти трудности связанные с совместимостью типов, лучшим вариантом будет вообще не указывать возвращаемый функцией `updater` тип, а возложить эту обязанность на вывод типов. 

И последнее о чем ещё не упомянули, что метод `setState`, в качестве второго параметра принимает функцию обратного вызова, декларация которой очень проста и будет рассмотрена в самом конце данной главы, когда весь код будет собран в одном месте.

И на этом рассмотрение состояния завершено, поэтому можно приступить к рассмотрению третьего и последнего параметра базового типа `Component<Props, State, Snapshot>`.

Принципы применяемые для описания типа представляющего `Snapshot` ничем не отличаются от описания `Props` и `State`, поэтому пояснения будут опущены.

`````ts
import React, {Component, ReactNode} from "react";

interface TimerDefaultProps {
    message: string;
}
interface TimerProps extends TimerDefaultProps {
    duration: number;
}

interface TimerState {
    time: number;
}

// определение Snapshot
interface TimerSnapshot {}


type DefaultProps = Readonly<TimerDefaultProps>;
type Props = Readonly<TimerProps>;
type State = Readonly<TimerState>;
type Snapshot = Readonly<TimerSnapshot>; // создание псевдонима для типа 

/**
 * [0] передача псевдонима Snapshot
 * в качестве третьего аргумента
 * базового типа.
 */
class Timer extends Component<Props, State, Snapshot /** [0] */> { 
    /**
     * Поскольку Snapshot используется
     * в тех конструкциях очерьдь до которых
     * ещё не дошла, тело класса будет опущенно.
     */
}

export default Timer;
export {TimerProps};
`````

Ничего особенного на что стоило бы обратить внимание нет. Поэтому без лишних комментариев продолжим знакомство с внутренним устройством компонента - его жизненного цикла.

Погружение в типизированный жизненный цикл классовых компонентов необходимо начать с его разделения на две части - _актуальный жизненный цикл_ и _устаревший жизненный цикл_, который будет исключён из рассмотрения. Поскольку в аннотации методов жизненного цикла не содержится ничего, что было бы не понятно к этому моменту, пояснение каждого отдельного случая будет опущено. Обратить внимание стоит лишь на импорт впервые встречающегося типа `ErrorInfo` необходимость в котором появляется при определении необязательно метода `componentDidCatch`. Кроме того не будет лишнем напомнить, что в строгом, рекомендуемом режиме, при котором все элементы без аннотации неявно принадлежат к типу `any`, аннотация сигнатур методов является обязательной. И по этому случаю ещё раз стоит упомянуть о пользе коротких псевдонимов заменяющих огромные идентификаторы типов `*Props`, `*State` и `*Snapshot`. 

`````ts
import React, {Component, ReactNode, ErrorInfo} from "react"; // необходимость в импорте типа ErrorInfo

class Timer extends Component<Props, State, Snapshot> {
    getDerivedStateFromProps?:(nextProps: Readonly<Props>, prevState: State) => Partial<State> | null;
    getDerivedStateFromError?: (error: any) => Partial<State> | null;
    
    componentDidMount?(): void
    shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>): Snapshot | null;
    componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: Snapshot): void;

}
`````

Вдобавок необходимо заметить, что код иллюстрирующий жизненный цикл компонента взять из декларации устанавливаемой из репозитория `@types/react` и именно поэтому она изобилует излишними преобразованиями в `Readonly<T>` тип. Но как было отмечено ранее, в этом нет нужны поскольку все типы составляющие троицу аргументов базового типа уже прошли преобразование при определении представляющих их псевдонимов. Учитывая этот факт предыдущий код будет выглядеть следующим образом. 

`````ts
/**
 * Более компактная запись
 * без изменения поведения.
 */
class Timer extends Component<Props, State, Snapshot> {
    getDerivedStateFromProps?:(nextProps: Props, prevState: State) => Partial<State> | null;
    getDerivedStateFromError?: (error: any) => Partial<State> | null;
    
    componentDidMount?(): void
    shouldComponentUpdate?(nextProps: Props, nextState: State, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Props, prevState: State): Snapshot | null;
    componentDidUpdate?(prevProps: Props, prevState: State, snapshot?: Snapshot): void;

}
`````

Следующий в очереди на рассмотрение механизм, получение ссылок на нативные _dom элементы_ и _React компоненты_, обозначаемый как _рефы_ (_refs_). 

Предположим что существует форма которую по событию `submit` необходимо очистить при помощи нативного метода `reset`, доступного лишь через нативный _dom элемент_, ссылку на который можно получить с помощью механизма рефов, применение которого возможно осуществить двумя способами. Первый способ заключается в создании объекта реф с помощью статического метода `React.createRef()`, а второй в самостоятельном сохранении ссылки на нативный _dom элемент_ с помощью функции обратного вызова.

`````ts
/**
 * задача заключается в
 * получении ссылки на
 * нативный dom елемент формы [0]. 
 */
class Сhecklist extends Component {
    render(){
        return (
            /**[0] */
            <form></form>
        );
    }
}
`````

Начнем по порядку. Первым делом необходимо определить поле (в нашем случае это `formRef`) необходимое для сохранения объекта реф и желательно чтобы оно было закрытое (`private`) и только для чтения (`readonly`). В примере поле `formRef` определен вместе с аннотацией в которой указан импортированный тип `RefObject<T>`, где параметр типа принимает тип нативного _dom элемента_, в нашем случае `HTMLFormElement`. Но в конкретном примере аннотация излишня поскольку мы указали выводу типов принадлежность нативного _dom элемента_ передав его в качестве аргумента типа функции `React.createRef<T>()`.

`````ts
import React, {Component, RefObject} from "react";

class Сhecklist extends Component {
                                    /**[1] */                                   /**[2] */
    private readonly formRef: RefObject<HTMLFormElement> = React.createRef<HTMLFormElement>();

}

/**
 * [0] импорт типа RefObject<T>
 * который в аннотации [1] поля
 * formRef является излишним,
 * так как тип нативного dom элемента
 * был уточнен с помощь передачи его
 * в качестве аргумента типа функции [2]
 */
`````

На следующим шаге устанавливаем объект реф _react элементу_ `<form>` и определяем закрытый метод `reset` в котором происходит вызов метода `reset` нативной формы. Не будет лишним обратить внимание, что вызов непосредственно метода `reset` осуществляется при помощи _оператора опциональной последовательности_ (`?.`). Сделано это по причине возможного отсутствия ссылки на нативный элемент.

`````ts
import React, {Component, RefObject} from "react";


class Сhecklist extends Component {
    private readonly formRef: RefObject<HTMLFormElement> = React.createRef<HTMLFormElement>();

    /**[4] */
    private resetForm(){
                        /**[5] */
        this.formRef.current?.reset();
    }

    render(){
        return (
                        /**[3] */
            <form ref={this.formRef}></form>
        );
    }
}

/**
 * [3] установка рефа react элементу.
 * [4] определение закрытого метода.
 * [5] необходимость применения опрератора
 * опциональной последовательности по причине
 * возможного отстутствия ссылки на нативный элемент.
 */
`````

Второй способ получения ссылки на нативный элемент заключается в определении функции принимающей в качестве единственного параметра нативный _dom элемент_, сохранение ссылки на который перекладывается на разработчика.

Для иллюстрации сказанного повторим предыдущий пример. Первым делом импортируем обобщенный тип `RefCallback<T>` описывающий функцию и принимающий в качестве аргумента типа тип нативного _dom элемента_ который будет передан в функцию в качестве единственного аргумента. Затем определим поле `formNativeElement` с типом `union`, множество которого включат не только тип нативного элемента, но и `null`. Это необходимо поскольку при инициализации требуется установить значение принадлежащие к типу `null`. Это необходимо при активном флаге `--strictPropertyInitialization` входящим в группировку определяющую рекомендуемый строгий режим компилятора.

Следующим шагом происходит определение закрытого только для чтения поля `formRefCallback` которому в качестве значения присвоена стрелочная функция. Единственный параметр данной функции лишен аннотации тпа, поскольку вывод типов определит его как принадлежащего к переданному в качестве аргумента типа `RefCallback<T>`. В теле данной функции происходит присваивание её параметра полю  `formNativeElement` определенному на предыдущем шаге.

`````ts
                            /**[0] */
import React, {Component, RefCallback} from "react";


class Сhecklist extends Component {
                /**[1] */               /**[2] */     /**[3] */
    private formNativeElement: HTMLFormElement | null = null;
                        /**[4] */                    /**[5] */      /**[6] */                       /**[7] */
    private readonly formRefCallback: RefCallback<HTMLFormElement> = element => this.formNativeElement = element;

}

/**
 * [0] импорт типа RefCallback<T> который в качестве аргумента
 * типа ожидает тип нативного элемента.
 * [1] определение поля formNativeElement
 * и присвоение ему значения null [3], что приводит
 * к необходимости объединенного типа включающего
 * тип null [2]. [4] определение поля formRefCallback
 * значением которого служит стрелочная функция принимающая в
 * качестве единственного параметра нативный элемент [6] который затем
 * присваивается полю formNativeElement [7]. Тип этого параметра
 * будет принадлежать к типу переданному в качестве аргумента типа RefCallback<T> [5]
 * 
 */
`````

Стоит заметить что то же самое можно реализовать и без помощи типа импортированного `RefCallback<T>`. Для этого лишь потребуется самостоятельно добавить аннотацию типа для параметра функции обратного вызова. 

`````ts
import React, {Component} from "react";


class Сhecklist extends Component {
    private formNativeElement: HTMLFormElement | null = null;
    private readonly formRefCallback = (element: HTMLFormElement) => this.formNativeElement = element;

}

/**
 * [0] определение поля formNativeElement
 * и присвоение ему значения null [2], что приводит
 * к необходимости объединенного типа включающего
 * тип null [1]. [3] определение поля formRefCallback
 * значением которого служит стрелочная функция в качестве
 * аргумента котороя ожидает нативный элемент [4] который
 * затем присваивается полю formNativeElement [5]
 * 
 */
`````

Выбор того или иного способа зависит лишь от предпочтений самого разработчика.

Продолжим доведение примера до финального состояния и установим созданную в первом случае функцию обратного вызова _react элементу_ `<form>` в качестве реф. Также определим уже известный метод `reset` в теле которого будет происходить вызов метода `reset` у нативного _dom элемента_ ссылка на который будет сохранена в поле класса `formNativeElement`.

`````ts
import React, {Component, RefCallback} from "react";


class Сhecklist extends Component {
    private formNativeElement: HTMLFormElement | null = null;
    private readonly formRefCallback: RefCallback<HTMLFormElement> = element => this.formNativeElement = element;


    /**[1] */
    private reset(){
                /**[2] */
        this.formNativeElement?.reset();
    }


    render(){
        return (
                            /**[0] */
            <form ref={this.formRefCallback}></form>
        );
    }
}

/**
 * [0] устанавливаем каллбэк в качестве занчения реф
 * после чего определяем метод reset [1] в теле которого
 * при помощи оператора опциональной последовательности
 * вызываем метод reset у нативного dom элемента сохранненого
 * в поле formNativeElement [2]
 * 
 */
`````

И раз уж тема дошла до рассмотрения рефов, то необходимо рассмотреть механизм получения с их помощью ссылки на классовый компонент. 

Первым делом определим классовый компонент `Slider` реализующий два открытых метода предназначенных для перелистывания контента `prev` и `next`. Далее определим компонент `App` в теле которого определим рефу при помощи функции `createRef` которой в качестве аргумента типа передадим тип классового компонента `Slider`. Таким образом вывод типа определит рефу `sliderRef` как принадлежащую к типу `RefObject<Slider>`. После этого в методе рендер создадим экземпляр компонента `Slider` и  два _react элемента_ `<button>`, в обработчиках событий `click` которых происходит взаимодействие с компонентом `Slider` при помощи ссылки на него доступной через ассоциированную непосредственно с ним рефу.


`````ts
import React, {Component, createRef} from "react";


class Slider extends Component{
    public prev = () => {}; /**[0] */
    public next = () => {}; /**[1] */
    
}

class App extends Component {
                     /**[2]                 [3]*/
    private readonly sliderRef = createRef<Slider>();


    render(){
        return (
            <>
                <button onClick={() => this.sliderRef.current?.prev()}>prev</button> { /**[4] */}
                <Slider ref={this.sliderRef} /> { /**[5] */}
                <button onClick={() => this.sliderRef.current?.next()}>next</button> { /**[6] */}
            </>
        )
    }
}

/**
 * [0] псевдо компонент Slider реализует
 * два доступных метода перелистывания контента
 * назад [0] и вперед [1]. Псевдо компонент App
 * определяет рефу с помощью универсальной функции
 * createRef в качестве аргумента типа которой был
 * установдлен тип компонента Slider. В методе render
 * происходит определение двух пользовательских кнопок
 * выполняющих перелистывание по событию click, в обработчиках
 * событий которых происходит вызов доступных методов prev [4]
 * и next [6] через рефу ассоциированную непосредственно с компонентом [5]
 */
`````


На этом рассмотрение работы с механизмом рефов в типизированном стиле завершено. Но до завершения знакомства с работой классового компонента в основе которого лежит `Component<Props, State, Snapshot>` осталась ещё одна тема, а именно работа с _React событиями_. Кроме того её освещение будет являться альтернативным решением задачи получения доступа к нативному элементу. Простыми словами реализуем вызов метода `reset` у нативного _dom элемента_ ссылку на который будет получена из объекта события `submit`. Но поскольку данная тема была подробна рассмотрена в главе посвященной функциональным компонентам, здесь подробно будут освещены только моменты присущие исключительно классовым компонентам.

Первым делом возвратим предыдущий пример в первоначальное состояние и добавим кнопку для отправки формы.

`````ts
import React, {Component} from "react";

class Form extends Component {
    render(){
        return (
            <form>
                <button type="submit"></button>
            </form>
        );
    }
}
`````
Далее нам потребуется определить закрытое поле только для чтения в качестве значения которого будет присвоена стрелочная функция способная сохранить контекст текущего экземпляра. В качестве типа данного поля укажем импортированный из пространства имен _React_ ранее рассмотренный обобщенный тип `ReactEventHandler<T>`. 

`````ts

                              /**[0] */
import React, {Component, ReactEventHandler} from "react";

class Form extends Component {
                            /**[1] */                         /**[2] */     /**[3] */
    private readonly form_submitHandler: ReactEventHandler<HTMLFormElement> = event => {

    }

    render(){
        return (
                                    /**[4] */
            <form onSubmit={this.form_submitHandler}>
                <button type="submit"></button>
            </form>
        );
    }
}

/**
 * [0] импорт типа ReactEventHandler<T>
 * представляющего слушателя события.
 * [1]  Определение закрытого неизменяемого
 * поля принадлежащего к функциональному 
 * типу ReactEventHandler<T>. [2] тип нативного
 * dom элемента определенного стандаротной
 * библиотекой. [3] единственный параметр
 * функции не нуждается в аннотации поскольку
 * вывод типа операется на ReactEventHandler<T>.
 * [4] установка слушателя.
 */
`````

Для завершения примера осталось всего-навсего написать логику слушателя события `submit`, которая также повторяет пример из главы посвященной функциональным компонентам и поэтому подробных комментариев не будет.

`````ts
class Form extends Component {
    private readonly form_submitHandler: ReactEventHandler<FormEvent<HTMLFormElement>> = event => {
        event.preventDefault(); // [0]
        let form = event.target as HTMLFormElement; // [1]
        form.reset(); // [2]
    }
}

/**
 * [0] для предотвращения отправки формы
 * и перезагрузки страницы прерываем стандартное
 * поведение. [1] поскольку доступ к форме можно
 * получить через ссылку свойства target принадлежащего
 * к типу EventTarget, появляется необходимость в
 * приведении к типу HTMLFormElement с при помощи оператора as.
 * [2] вызываем метод reset.
 */
`````

Данный способ типизирования слушателей событий является предпочтительным поскольку при таком подходе аннотация включает только два типа и кроме того, стрелочная функция уберегает от неминуемой потери контекста. Случаи требующие определения слушателя как метода класса требуют другого подхода. Отличие заключается в том что в аннотировании типа нуждается непосредственно параметр слушателя. Но поскольку _React_ делегирует все нативные события, необходимо импортировать тип соответствующего события из его пространства имен. Для событий связанных с формами в _React_ определен обобщенный тип `FormEvent<T>` ожидающий в качестве аргумента типа тип нативного элемента. И поскольку слушатель ничего не возвращает, то тип возвращаемого значения, явное указание которого излишне, определяется как `void`.


`````ts
                            /**[0] */
import React, {Component, FormEvent} from "react";

class Form extends Component {
    /**[1] */                          /**[2] */        /**[3] */
    form_submitHandler(event: FormEvent<HTMLFormElement>): void {
    }
}

/**
 * [0] импортируем тип FormEvent<T> после 
 * чего определяем метод form_submitHandler
 * тип единственного параметра которого определен
 * как FormEvent<HTMLFormElement>, а возвращаемое
 * значение [3] которое указанно лишь для того, чтобы
 * напомнить об отсутствии необходимости в его явном указании.
 */
`````

Поскольку установка слушателя представляемого методом класса приведет к неминуемой потери контекста, прибегать к подобному объявлению стоит только при условии что их тело лишено логики предполагающей обращение к членам через ссылку экземпляра `this`.

`````ts
class Form extends Component {
    form_submitHandler(event: FormEvent<HTMLFormElement>): void {
        /**
         * Здесь нельзя обращаться к this
         * поскольку контекст на текущий экземпляр
         * был утерян.
         */
    }

    render(){
        return (
            <form onSubmit={this.form_submitHandler}></form>
        );
    }

}
`````

Контекст можно было бы сохранить прибегнув к методу `bind` или делегированию события непосредственно с помощью стрелочной функции определенной в месте установки слушателя, но зачем? Для `bind` потребуется определения дополнительного поля.

`````ts
class Form extends Component {
    // дополнительное поле
    private form_submitHandlerBinded: (event: FormEvent<HTMLFormElement>) => void;

    constructor(props:Props){
        super(props);
        
        // лишняя инициализация
        this.form_submitHandlerBinded = this.form_submitHandler.bind(this);
    }


    form_submitHandler(event: FormEvent<HTMLFormElement>): void {
        /**
         * Теперь здесь можно обращатся к this
         */
    }

    render(){
        return (
            // в качестве слушателя установлена функция связанная с помощью bind
            <form onSubmit={this.form_submitHandlerBinded}></form>
        );
    }

}
`````

Стрелочная функция будет пересоздаваться каждую отрисовку.

`````ts
class Form extends Component {
    form_submitHandler(event: FormEvent<HTMLFormElement>): void {
        /**
         * Теперь здесь можно обращатся к this
         */
    }

    render(){
        return (
            // пересоздание функции каждую отрисовку
            <form onSubmit={event => this.form_submitHandler(event)}></form>
        );
    }

}
`````

Кроме того оба случая затрудняют понимание кода. Поэтому необходимо повторить что использовать метод класса в качестве слушателя события стоит только при отсутствии необходимости в обращении через ссылку `this`. При возникновении именно такого случая не будет лишним уточнения способа выбора типа события. В приведенном примере это был `FormEvent<T>`, поскольку работа производилась с формой. Для других событий появится необходимость в других соответствующих типа, узнать которые можно с помощью подсказок вашей _ide_. Для чего всего-лишь необходимо навести курсор на определение слушателя события.

`````ts
class Clicker extends Component {
    render(){
        return (
                /**[0] */
            <div onClick={}></div>
        )
    }

}

/**
 * [0] при наведении курсором
 * на определение слушателя onClick
 * ide подсказывает тип как MouseEvent<HTMLDivElement>
 */
`````

Также не забываем об упомянутом ранее базовом для всех событийных  _React_ типов обобщенном типе `SyntheticEvent<T>`, который в качестве аргумента ожидает тип представляющий нативный элемент.

На этом тему посвященную созданию классового компонента расширяющего `Component<Props, State, Snapshot>` можно заканчивать и переходить к следующей теме. Единственное что точно не будет лишним, так это собрать весь пройденный материал в одном месте.

`````ts
import React, {Component, ReactNode, ReactEventHandler, RefObject, SyntheticEvent, ErrorInfo} from "react";

interface GreeterDefaultProps {} // для декларации свойств по умолчанию
export interface GreeterProps extends GreeterDefaultProps {
    children: ReactNode | ReactNode[]; // указываем что children могут принадледжать к единичному типу или множеству составляющего тип ReactNode
} // для декларации обязательных свойств + экспорт интерфейса
interface GreeterState {} // для декларации состояния
interface GreeterSnapshot {} // для декларации снимка

// создаем псевдонимы для readonly типов представляющих...
type DefaultProps = Readonly<GreeterDefaultProps>; // ... статическое поле defaultProps
type Props = Readonly<GreeterProps>; // ... поле props
type State = Readonly<GreeterState>; // ... поле state
type Snapshot = Readonly<GreeterSnapshot>; // ... параметр snapshot определенный в нескольких методах жизненного цикла


export default class Greeter extends Component<Props, State, Snapshot> {
    public static readonly defaultProps: DefaultProps = {}; // модификатор readonly от случайного изменения статического поля defaultProps которое должно иметь модификатор доступа public


    // необязательные методы класса (статические методы)
    public static getDerivedStateFromProps?:(nextProps: Props, prevState: State) => Partial<State> | null;
    public static getDerivedStateFromError?: (error: any) => Partial<State> | null;


    public readonly state: State = {}; // модификатор readonly от случайного изменения поля state которое должно иметь модификатор доступа public


    /** два различных способа получения ссылки на нативный dom элемент */
    // [0] при помощи контейнера
    private readonly formRef: RefObject<HTMLFormElement> = React.createRef(); // создание объекта RefObject, с помощью которого будет получена ссылка на dom элемент
    
    // [1] при помощи каллбэка
    private textRef: HTMLSpanElement | null = null; // поле, в которое будет сохранена ссылка на DOM-элемент
    private readonly textRefCallback = (element: HTMLSpanElement) => this.textRef = element; // определение функции обратного вызова для установления ссылки на DOM-элемент



    constructor (props: Props) {
        super(props);
    }

    
    // методы жизненного цикла
    public componentDidMount?(): void
    public shouldComponentUpdate?(nextProps: Props, nextState: State, nextContext: any): boolean;
    public componentWillUnmount?(): void;
    public componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    public getSnapshotBeforeUpdate?(prevProps: Props, prevState: State): Snapshot | null;
    public componentDidUpdate?(prevProps: Props, prevState: State, snapshot?: Snapshot): void;


    /** два варианта определения слушателя событий */
    // слушатель событий определенный как поле
    private readonly form_submitHandler: ReactEventHandler<HTMLFormElement> = event => {
        // изменение состояния
        this.setState((prevState: State, prevProps: Props) => {
            return {};
        });
    };
    // слушаетль событий определенный как метод
    private submiteButton_clickHandler(event: SyntheticEvent<HTMLButtonElement>): void {

    }

    public render(): ReactNode {
        return (
            <form ref={this.formRef} onSubmit={this.form_submitHandler}>
                <span ref={this.textRefCallback}>Send form?</span>
                <button type="submit" onClick={this.submiteButton_clickHandler}>yes</button>
            </form>
        );
    }
}
`````

## Производные от PureComponent<Props, State, Snapshot>

Помимо того, что пользовательские компоненты могут быть производными от универсального класс `Component<Props, State, Snapshot>`, они также могут использовать в качестве базового класса универсальный класс `PureComponent<Props, State, Snapshot>`. Но поскольку все что было сказано относительно `Component` в ста процентах случаев верно и для `PureComponent`, который также ничего нового не привносит, то данная глава будет ограничена лишь кодом иллюстрирующим определение пользовательского компонента.

`````ts
import React, { PureComponent } from "react";

/**[*] */

export default class Greeter extends PureComponent<Props, State, Snapshot> {
    /**[*] */
}

/**
 * [*] здесь предполагается логика
 * рассмотренная рассотренная в главе
 * посвященной производным от Component<P, S, SS>
 */
`````

Тем кто только начал своё знакомство с классовыми компонентами с данной главы необходимо вернутся на шаг назад или даже более разумно в самое начало, поскольку именно там объясняется что для полного понимания необходимо ознакомиться со всем материалом относящимся к _React_.

