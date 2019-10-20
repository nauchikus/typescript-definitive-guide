##  React - расширение .tsx
________________

*React* - это библиотека для создания пользовательских интерфейсов, от компании *Facebook*. В основе библиотеки продвинутого рендера React лежит компонентный подход, для улучшения которого, стандартный синтаксис *JavaScript* был расширен *XML*-подобным синтаксисом. В связи с этим было создано новое расширение *.jsx*.


Из-за высокой популярности *React*, создателями *TypeScript* было принято решение создать расширение *.tsx*. Но одного расширения недостаточно чтобы благополучно компилировать *.tsx*. Так как реакт можно использовать для создания как вэб, так и мобильных приложений, компилятору с помощью флага `--jsx` нужно указать конкретную принадлежность к `“react”`, либо `“react-native”`. По умолчанию выставлено значение `“preserve”`.

~~~~~typescript
// tsconfig.json  
{
  "compilerOptions": {
      "jsx": "react"
  }
}
~~~~~

За исключением типизации, написание шаблонов *.tsx* ничем не отличается от *.jsx*. Но так как при переходе с *.jsx* на *.tsx* возникает лишь один вопрос, как правильно писать те или иные виды компонентов в типизированном стиле, то данная глава будет отличаться от остальных и будет построена таким образом, чтобы общую информацию изучить по ходу детального рассмотрения каждого вида компонентов в отдельности. Кроме того, если раньше примеры кода были придуманы таким образом, чтобы помимо информативности, быть ещё и компактными, то в случае с компонентами React, ничего поделать нельзя. Чтобы хоть как-то сгладить это, компоненты будут показываться небольшими частями, а уже после будет описываться важные-неочевидные моменты. Помимо этого, компоненты не будут иметь какой-то осмысленный характер. Если попытаться смоделировать, что-то, что можно продемонстрировать, то кода было бы в разы больше и сделало его менее понятным.

Также, возможности *TypeScript*, позволяют аннотировать языковые конструкции, как в классическом, так и в минималистическом стиле. В первом случае аннотацию типа содержит каждая конструкция. Во втором часть работы перекладывают на вывод типов. Так как предполагается, что читатели, если ещё не разрабатывают большие приложения, то всеми силами к этому стремятся. Поэтому все примеры в этой главе будут выполнены в классическом-максимальном стиле. Кроме того, стоит уточнить, что на момент написание этой главы используется React *v16.4.1* и *TypeScript* *3.1* и если вы заметили несоответствие, которое может произойти из-за изменение в версиях выше указанных, то можете об этом сообщить всеми доступными способами, указанными в соответствующем разделе.

## React - производные от Component
________________

~~~~~typescript
import * as React from "react";
import { Component, ReactElement, ReactEventHandler, RefObject, SyntheticEvent } from "react";
import { ErrorInfo } from "react";

interface GreeterDefaultProps {} // для декларации свойств по умолчанию
export interface GreeterProps extends GreeterDefaultProps {} // для декларации свойств + экспорт интерфейса
interface GreeterState {} // для декларации состояния
interface GreeterSnapshot {} // для декларации снимка

type DefaultProps = Readonly<GreeterDefaultProps>; // помечаем как неизменяемые члены объекта defaultProps
type Props = Readonly<GreeterProps>; // помечаем как неизменяемые члены объекта props
type State = Readonly<GreeterState>; // помечаем как неизменяемые члены объекта state
type Snapshot = Readonly<GreeterSnapshot>; // помечаем как неизменяемые члены объекта Snapshot

type TextRefCallback = ( element: HTMLSpanElement ) => void; // декларация псевдонима типа для типа описывающего функцию обратного вызова устанавливающего ссылку на dom  элемент

export default class Greeter extends Component<Props, State, Snapshot> {
  public static readonly defaultProps: DefaultProps = {}; // помечаем как неизменяемый сам объект defaultProps, модификатор доступа которого должен быть public

  public static getDerivedStateToProps ? ( nextProps: Readonly<Props>, prevState: State ): Partial<State> | null {
      return null;
  }
 
  public readonly state: State = {}; // помечаем как неизменяемый сам объект state, модификатор доступа которого должен быть public

  private readonly containerRef: RefObject<HTMLDivElement> = React.createRef(); // создание объекта RefObject с помощью которого будет получена ссылка на dom элемент
  private textRef: HTMLSpanElement; // поле в которое будет сохранена ссылка на dom элемент
  private readonly textRefCallback: TextRefCallback = element => this.textRef = element; // объявление функции обратного вызова для установления ссылки на dom элемент

  constructor ( props: Props ) {
      super( props );
  }

  public componentDidMount ? ():void {}
  public componentWillUnmount ? (): void {}
  public shouldComponentUpdate  ? ( nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any ):
      boolean { return true; }
  public componentDidUpdate ? ( prevProps: Readonly<Props>, prevState: Readonly<State>, Snapshot?: Snapshot ):
      void { }
  public componentDidCatch ? ( error: Error, errorInfo: ErrorInfo ): void {}
  public getSnapshotBeforeUpdate ? ( prevProps: Readonly<Props>, prevState: Readonly<State> ): Snapshot | null {
      return null
  }

  private readonly closeButton_clickHandler: ReactEventHandler<HTMLButtonElement> = ( event: SyntheticEvent<HTMLButtonElement> ) => {
      this.setState( ( prevState: State, prevProps: Props ) => {
          return {  };
      } )
  };

  public render (): ReactElement<Props> {
      return null;
  }
}
~~~~~

Первым делом стоит обратить внимание, на объявление, после четырех интерфейсов, идентификаторы которых начинаются с идентификатора создаваемого компонента `*DefaultProps`, `*Props`, `*State`, `*Snapshot`.

~~~~~typescript
interface GreeterDefaultProps {}
export interface GreeterProps extends IGreeterDefaultProps {}
interface GreeterState {}
interface GreeterSnapShot {}
~~~~~

По названиям не сложно догадаться, что в первом интерфейсе, предполагается описывать свойства имеющие значение по умолчанию, а во втором обязательные свойства создаваемого компонента. Второй интерфейс предназначен для описания состояния компонента. Ну а третий интерфейс описывает снимок, который возвращает метод `getSnapshotBeforeUpdate()`.


Также  интерфейс `*Props`, расширяет и интерфейс `*DefaultProps`. Сделано так по одной простой причине, обязательные свойства хранятся в объекте props,  а необязательные в объекте `defaultProps`. И если создать общую декларацию, то указав её в аннотации объекта `defaultProps`, в нем потребуется объявлять ещё и обязательные, что попросту не логично. Кроме того, в реальных проектах, интерфейс `*Props`, помимо `*DefaultProps`, очень часто расширяет множество других интерфейсов. В их число входят типы предоставляемые библиотеками *ui*, *hoc обертками*, обычными библиотеками, как например *react-router* и его тип `RouteComponentProps<T>`. Но самым часто расширяемым типом, помимо `*DefaultProps`, является тип `HTMLAttributes<T>`, речь о котором пойдет далее в этой главе.

К тому же модуль, к которому принадлежит рассматриваемый код, экспортирует интерфейс `*Props`. У этого есть веская причина, которая будет рассматриваться далее в теме посвященной созданию *HOC*.

Следующее, на что стоит обратить внимание, это создание псевдонимов типа для всех объявленных ранее интерфейсов.

~~~~~typescript
type DefaultProps = Readonly<GreeterDefaultProps>;
type Props = Readonly<GreeterProps>;
type State = Readonly<GreeterState>;
type Snapshot = Readonly<GreeterSnapShot>;
~~~~~

Сделано это по причине того, что идентификаторы типов, для которых создаются псевдонимы, настолько сложные и большие, что использование их в многочисленных аннотациях, в теле компонента, сделает его трудно читаемым. Кроме того, тип `Readonly`, которые защищают объектные типы от случайных изменений, часто дополняется типом `Partial`.


Далее, в теле класса компонента, происходит объявление `defaultProps` и `state`. Нужно обратить внимание, что эти поля объявлены лишь в демонстрационных целях, так из-за отсутствия у них членов, в них нет потребности. Кроме того,при их объявлении также используется модификатор `readonly`, чтобы защитить сами поля от случайного изменения.

~~~~~typescript
public static readonly defaultProps: DefaultProps = {};

public readonly state: State = {};
~~~~~

Затем, в теле класса компонента, происходит объявление полей, которые нужны для получение ссылок на нативные dom элементы (`ref`).

~~~~~typescript
private readonly containerRef: RefObject<HTMLDivElement> = React.createRef();

private textRef: HTMLSpanElement;
private readonly textRefCallback: TextRefCallback = element => this.textRef = element;
~~~~~

В первом случае, ссылку на dom элемент предполагается получить с помощь вызова статического метода `React.createRef()`, который возвращает объект, принадлежащий к обобщенному типу `RefObject<T>`. В качестве обязательного параметра типа, `RefObject<T>` ожидает тип нативного элемента, в конкретном случае тип *html* элемента *div* `HTMLDivElement`.

Два остальных поля предназначены для получения ссылки на нативный dom элемент с помощью функции обратного вызова (*callback*). Для этого сначала объявляется поле, которому в дальнейшем будет присвоено значение, принадлежащие к типу *html* элемента, в данном случае это элемент *span* `HTMLSpanElement`. На следующем шаге объявляется поле, в качестве значения которого выступает стрелочная функция, в теле которой происходит присваивание dom элемента, ожидаемого в качестве единственного параметра, полю, объявленному на предыдущем шаге. Стоит обратить внимание, что описание типа функции обратного вызова, происходит до объявления компонента и в целях повышения семантики кода, для него создается псевдоним типа `TextRefCallback`, который и используется в аннотации поля. Для предотвращения случайного изменения, поле, в качестве значения которому присвоена ссылка на функцию обратного вызова, объявлен с модификатором `readonly`.

~~~~~typescript
// ...

type TextRefCallback = ( element: HTMLSpanElement ) => void;

// ...

private textRef: HTMLSpanElement;
private readonly textRefCallback: TextRefCallback = element => this.textRef = element;

// ...
~~~~~	

Следующим по очереди идет конструктор, в объявлении которого нет ничего необычно. Вслед за ним, объявляется поле `closeButton_clickHandler`, которому в качестве значения присваивается стрелочная функция, выступающая в роли слушателя события (*event handler*).

~~~~~typescript
private readonly closeButton_clickHandler: ReactEventHandler<HTMLButtonElement> = ( event: SyntheticEvent<HTMLButtonElement> ) => {
  this.setState( ( prevState: State, prevProps: Props ) => {
      return {  };
  } )
};
~~~~~

И прежде, чем перейти к рассмотрению кода в её теле, обязательно стоит пролить свет на один очень важный момент, связанный с аннотированием типов. Как было сказано в начале этой главы, все примеры являются классическими, с точки зрения типизации, но несмотря на это, всем, кто придерживается подобного подхода в повседневной разработке, рекомендуется делать отступления от правил, особенно в случаях с функциями передаваемых в качестве значения. В данном случае, подобное аннотирование, является явным перебором.

В случаях, когда параметры слушателя событий не требуются, лучше вообще опускать аннотацию типа и переложить эту заботу на вывод типов. К тому же, отсутствие аннотации даже подчеркнет тот факт, что важен лишь вызов этого слушателя.

~~~~~typescript
private readonly closeButton_clickHandler = ( ) => {
   // произвести какие-то операции, которые не требуют объекта event
};
~~~~~

Если же, для операций в теле слушателя, требуется объект `event`, то обойтись без аннотации уже не получится. Вывод типов не сможет вывести тип, а значит параметр event будет принадлежать к типу `Any` и следовательно автодополнение будет отсутствовать. Но в случае нативных слушателей событий, существует аж два способа явной аннотации.

Первая из них заключается в аннотировании параметра event, без аннотирования поля, которому присваивается слушатель событий. Из-за того, что этот код нельзя трактовать двусмысленно, не страдает его читаемость. Но кроме того, вывод типов сможет вывести тип для поля, если информацию о нем потребуется получить с помощью подсказок предоставляемых всеми современными ide.

~~~~~typescript
private readonly closeButton_clickHandler = ( event: SyntheticEvent<HTMLButtonElement> ) => {
  // какие-то операции с объектом event
};

// вывод типа видит этот код как private readonly closeButton_clickHandler: ( event: SyntheticEvent<HTMLButtonElement> ) => void = ( event: SyntheticEvent<HTMLButtonElement> ) => {};
~~~~~	

Второй способ диаметрально противоположен первому и предполагает явно аннотировать поле, а не значение, в роли которого выступает слушатель событий.

~~~~~typescript
private readonly closeButton_clickHandler: ReactEventHandler<HTMLButtonElement> = event => {
        // какие-то операции с параметром event  
};
~~~~~

Какой способ выбрать зависит лишь от конвенций по стилю кода установленного в команде и от специфики некоторых ситуации.

Далее стоит обратить внимание на код в теле слушателя событий, а именно операции асинхронного изменения состояния при помощи функции, также называемой *“функциональным состоянием”*. Именно этот способ был выбран по той причине, что он отлично дополняет сказанное относительно отступления от правил касающихся классического подхода при аннотировании языковых конструкций. 

~~~~~typescript
this.setState( ( prevState: State, prevProps: Props ) => {
    return {  };
}
~~~~~

В том случае, если бы передаваемая в метод `setState` функция, по каким-либо причинам, нуждалась в явной аннотации возвращаемого типа, и при этом из нее возвращалось лишь часть состояния, то пришлось бы описывать создавать описания типа с нуля. Другими словами, указать тип `State` не получилось бы, так как тип `State`   не совместим с типом обладающими лишь некоторыми его признаками (глава [“Типизация - Совместимость объектов”]()). Либо пришлось описывать члены типа `State`, из-за которых возникает несоответствие, необязательными (необязательные свойства рассматриваются в главе [“Операторы - Optional, Not-Null, Not-Undefined, Definite Assignment Assertion”]()). Ситуация не очень распространенная, но о ней нужно знать.

Осталось рассмотреть лишь метод `render`, у которого все внимание будет приковано к возвращаемому типу.

~~~~~typescript
public render (): ReactElement<Props> {
  return (  );
}
~~~~~

На самом деле с методом `render` связан один нюанс, который обязательно нужно знать, а кроме того надеяться, что создатели деклараций для `React`, исправят положение. И дело вот в чем. Предположим, что разработчику потребовалось создать компонент лист.

~~~~~
interface ListItemProps {}
interface ListItemState {}

class ListItem extends Component<ListItemProps, ListItemState> {
render(){
  return <li>{this.props.children}</li>;
}
}
	

interface ListProps {}
interface ListState {}

class List extends Component<ListProps, ListState> {
render(){
  return <ul>{this.props.children}</ul>;
}
}
~~~~~

И в какой-то момент, разработчик решает воспользоваться силой типизации и поставить точку в давнем вопросе, а именно запретить добавлять в `ul`, элементы отличные от `li`. Казалось бы, что может быть проще? Всего-то навсего, нужно для компонента `List` ограничить тип `children`  типом компонента `ListItem`.

~~~~~typescript
interface ListItemProps {}
interface ListItemState {}

class ListItem extends Component<ListItemProps, ListItemState> {
render(): ReactElement<ListItemProps> { // уточняем возвращаемый тип
  return <li>{this.props.children}</li>;
}
}


interface ListProps {
children: ReactElement<ListItemProps>; // ограничиваем children
}
interface ListState {}

class List extends Component<ListProps, ListState> {
render(){
  return <ul>{this.props.children}</ul>;
}
}
	

// почему нет ошибки сообщающей что div это не ReactElement<ListItemProps>?
let list = (
<List>
  <div></div>
</List>
);
~~~~~	 

Но на деле всё не так, как ожидалось. И все дело в том, что метод класса `Component`, должен возвращать один из нескольких типов - `string`, `number`, `boolean`, `null`, `undefined`, `ReactPortal`, `ReactFragment`, `ReactChild`, который является типом `Union` для типов `string`, `number` и `ReactElement<T>`. Кроме того, в качестве возвращаемого типа можно указывать `ReactNode`, который принадлежит ко всем перечисленным типам. 

В случае кастомизации, эти ограничения вынуждают разработчика указывать тип, возвращаемый из переопределяемого метода render, как `ReactElement<T>`, который, к несчастью, является базовым типом для типа `Element`, который в свою очередь является базовым для всех реакт-элементов. Это делает все реакт-элементы совместимые со всеми реакт-компонентами. Кроме того, метод `React.createElement`, во всех его перегруженных вариантах, возвращает тип, совместимый с `ReactElement<T>`, что, делает совместимыми абсолютно все компоненты.

Эти два факта сводят на нет саму идею аннотирования возвращаемого типа из метода `render`. Но возможно именно вам и предстоит поменять положение дел и тем самым снискать нескончаемую благодарность реакт сообщества.

И напоследок осталось рассмотреть методы жизненного цикла компонента. Но так как в них нет ничего такого, на что читатели, к этому моменту, не смогли дать ответ самостоятельно, комментариев не будет.

~~~~~typescript
public componentDidMount ? ():void {}
public componentWillUnmount ? (): void {}
public shouldComponentUpdate  ? ( nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any ):
  boolean { return true; }
public componentDidUpdate ? ( prevProps: Readonly<Props>, prevState: Readonly<State>, Snapshot?: Snapshot ):
  void { }
public componentDidCatch ? ( error: Error, errorInfo: ErrorInfo ): void {}
public getSnapshotBeforeUpdate ? ( prevProps: Readonly<Props>, prevState: Readonly<State> ): Snapshot | null {
  return null
} 
~~~~~

## React - производные от PureComponent
________________

Кроме того, что в `React` пользовательские компоненты могут расширять обобщенный класс `Component<Props, State, Snapshot>`, они также могут использовать в качестве базового класса обобщенный класс `PureComponent<Props, State, Snapshot>`. С точки зрения описания компонента, `PureComponent` ничем не отличается от `Component`, поэтому обойдемся только кодом, который на все сто идентичен предыдущему.

~~~~~typescript
import * as React from "react";
import { PureComponent, ReactElement, ReactEventHandler, RefObject, SyntheticEvent } from "react";
import { ErrorInfo } from "react";

// здесь точно такой же код, как был разобран на предыдущем шаге

export default class Greeter extends PureComponent<Props, State, Snapshot> {
  // здесь точно такой же код, как был разобран на предыдущем шаге
}
~~~~~

## React - Functional Component
________________

Поскольку в *React* функциональные компоненты, которые чаще называют *Stateless Components*, являются обычной функцией, то объявлять их можно двумя способами, в виде обычной функции (*Function Declaration*) и в виде функционального выражения (*Function Expression*), декларация которого также разделяется на два варианта, аннотирование самой функции и декларирования ссылки на неё. Так как *stateless* компоненты очень компактные и в них нет ничего, что не было рассмотрено на предыдущих шагах, здесь будет приведен код всех трех вариантов, но особое внимание будет уделено последнему варианту.

Как уже было сказано, первый способ, аннотирование *Function Declaration* ничем не отличается от аннотирования обычных функций.

~~~~~typescript
import * as React from "react";
import { ReactElement } from "react";

export interface GreeterProps {
  requiredProperty: string;
  optionalProperty: string;
}

type Props = GreeterProps;


function Greeter ( { requiredProperty, optionalProperty = 'value' }: Props ): ReactElement<Props> {
  return null;
}

export default Greeter;
~~~~~

Второй способ, аннотирование  функции, выступающей в качестве значения, также не отличается от аннотирования обычной функции.

~~~~~typescript
import * as React from "react";
import { ReactElement } from "react";

export interface GreeterProps {
  requiredProperty: string;
  optionalProperty: string;
}

type Props = GreeterProps;


const Greeter = ( { requiredProperty, optionalProperty = 'value' }: Props ): ReactElement<Props> => {
  return null;
};

export default Greeter;
~~~~~

Третий способ, на который стоит обратить внимание, заключается в аннотировании ссылки на компонент с помощью встроенного в систему типов React обобщенного типа `StatelessComponent<P>`. В нем нет ничего неординарного, поэтому о нём можно добавить, что в качестве аргумента типа, он ожидает тип, описывающий свойства (`props`) компонента.

~~~~~typescript
import * as React from "react";
import { StatelessComponent } from "react";

export interface GreeterProps {
  requiredProperty: string;
  optionalProperty: string;
}

type Props = GreeterProps;

const Greeter: StatelessComponent<Props> = ( { requiredProperty, optionalProperty = 'value' } ) => {
  return null;
};

export default Greeter;
~~~~~

Все варианты одинаковые и выбор зависит от личных предпочтений. Хотя я склоняюсь к третьему варианту.

## React - Обобщенные компоненты (Generics Component)
________________

В *TypeScript* существует возможность объявлять пользовательские компоненты обобщенными. Это делает работу с ними более удобной, а кроме того, повышает их переиспользование. Чтобы избавить читателя от пересказа того, что подробно было рассказано в главе [“Типы - Обобщения (Generics)”](), опустим теорию, которая относится к обобщенным типам и сосредоточимся на закреплении их использования. Для этого  сначала будет  смоделирована проблема, а затем предоставлено её решение при помощью обобщенных типов. Но прежде, рассмотрим сам синтаксис обобщенных компонентов.

В случае компонентов расширяющих классы Component или `PureComponent`, нет ничего особенного, на что стоит обратить внимание.

~~~~~typescript
interface Props<T> {}
class CustomComponent<T> extends Component<Props<T>, State, Snapshot> {}
class CustomComponent<T> extends PureComponent<Props<T>, State, Snapshot> {}
~~~~~

Нет ничего особенного и в объявлении функциональной декларации (*Function Declaration*).

~~~~~typescript
interface Props<T> {}

function CustomComponent <T>(props: Props<T>): ReactElement<Props<T>> {
  return <div></div>;
}
~~~~~

Но относительно функциональных компонентов, в роли которых выступают стрелочные функции (*arrow function*), без курьезов не обошлось. Дело в том, что на данный момент, *TypeScript* не поддерживает обобщенные стрелочные функции, в файлах, с расширением *.tsx*. 

~~~~~typescript
// Erorr, в файлах с расширением .tsx нельзя объявлять обобщенные стрелочные функции
const CustomComponent: StatelessComponent<Props> = <T>(props: Props): ReactElement<Props> => (
  <div></div>
);
~~~~~

Кроме того, объявление обобщенного функционального компонента в виде функционального выражения тоже накладывает некоторые ограничения. В большинстве случаев, использование параметров типа предполагается использовать в обобщенном интерфейсе описывающим свойства (`props`) компонент. А это в свою очередь делает бессмысленным аннотацию идентификатора ссылающегося на функцию.

~~~~~typescript
interface Props<T> {}

const CustomComponent: StatelessComponent<Props< /** как получить тут, то... */ >> = function < /** ...что объявляется здесь */ > (props) {
  return <div></div>;
}
~~~~~

Можно было бы указать в качестве аргумента типа тип `any`, `StatelessComponent<Props<any>>`, но это бы сделало бессмысленным саму типизацию. Поэтому, единственный вариант объявления обобщенного функционального компонента, в виде функционального выражение, возможен путем аннотирования самой функции и переложением ответственности за аннотирование ссылки на вывод типов.

~~~~~typescript
interface Props<T> {}

// переложить аннотирование ссылки на вывод типов
const CustomComponent =  function <T>(props: Props<T>): ReactElement<Props<T>> {
  return <div></div>;
};
~~~~~

После того, как обобщенный тип был объявлен, его можно начать использовать в *.jsx* шаблонах.

~~~~~typescript
// ...где-то в коде

interface IData {  }

<CustomComponent<IData> />
~~~~~

На этом, беглое рассмотрение объявления и создания обобщенных компонентов закончено, можно переходить к более практическим примерам.

Сложно представить приложение, в котором при построении отображения, обошлось бы без идентичного кода, который повторяется в нескольких частях программы. Поэтому разработчики, на основе готовых, низкоуровневых компонентов, создают свои, более высокоуровневые компоненты. При этом, чтобы их можно было переиспользовать, они должны быть максимально универсальными. Поэтому давайте, на простых примерах, выясним, почему к этому стоит стремится и как этого добиться.

В качестве простого примера, представим, что существует используемый во множестве частей программы, такой компонент, как `Select`. Каждый раз,когда пользователь выбирает тот или иной Option, компонент `Select` посылает вместе с событием `id` выбранного `Option`. При этом, чтобы воспользоваться этим компонентом, необходимо, по данным, построить дерево состоящее из компонентов `Select` и `Option`. То есть появляется потребность в использовании циклов. Кроме того, очень часто, после получения id выбранного `Option`, требуются операции над данными, с которыми он ассоциирован. Это означает, что каждый раз, когда вызывается слушатель событий, нужно перебирать массив с данными, для поиска в нем элемента с нужным `id`. 

Представьте сколько действий нужно проделать. А если в приложении, будет создаваться множество компонентов `Select`, то эти действия придется повторить для каждого отдельного случая. Налицо нарушения принципа *DRY* (*“Don't repeat yourself”* или по русски *“Не повторяйся”*).

Кроме того, бывают случаи, когда массив с данными, по которому строятся компоненты, собирается на основе других данных и сразу же передается в тот компонент, в котором с ним происходит дальнейшая работа. В случае, когда с этими данными нужно работать после того, как по ним отрендерятся визуальные компоненты, их требуется сохранить в локальное состояние. При повторении данного сценария, это снова приведет к повторению кода и кроме того код программы будет усложнен операциями по сохранению и поддержке данных в актуальном состоянии. Это приводит к нарушению ещё одного принципа известного как принцип *KISS* (*“Keep it simple, stupid”*).

Чтобы устранить эти проблемы, разработчику придется создать новый слой абстракции (новый компонент), который инкапсулирует всю работу над компонентом `Select`.

~~~~~typescript
interface IContactInfo { // описание каких-то данных
  id: string;
 
  phone: string;
  person: string;
}

interface Props { // описание свойств компонента высокого уровня
  data: IContactInfo[]; // данные
  onSelect: (data: IContactInfo) => void; // слушатель событий с помощью которого компонент высокого уровня будет сообщать об изменении внутреннего состояния
}

// компонент более высокого уровня абстракции, который инкапсулировал хранение данных, логику построения компонентов по данным
function SelectWithData({data, onSelect}:Props):ReactElement<Props>{
  // функция для динамического построения элементов Option по данным
  const getOptionAll = ( data: IContactInfo[] ) => data.map<ReactElement<OptionProps>>( ( { id, person } ) => (
      <Option key={ id }>{ person }</Option>
  ) );

  // внутренний слушатель событий, который отслеживает изменение более низкоуровневого компонента Select
  const onInternalSelect = ( id: string ) => {
      let currentData = data.find( item => item.id === id ); // ищем данные

      if ( currentData ) {
          onSelect( currentData ); // посылаем данные во внешний мир
      }
  };

  let optionAll = getOptionAll( data );

  return (
      <Select onSelect={ onInternalSelect }>{ optionAll }</Select>
  );
}
	

// ...

const data: IContactInfo[]  = [
  { id: '0', person: 'Ivan', phone: '00000000' },
  { id: '1', person: 'Vasya', phone: '0000000' }
];

const onSelect = ( data: IContactInfo ) => {
  // данные принадлежат к типу IContactInfo
};

// где-то в коде

<SelectWithData data={data} onSelect={ onSelect } />

// ещё где-то в коде

<SelectWithData data={data} onSelect={ onSelect } />
~~~~~

Как видно из примера, у разработчика получилось решить проблему с хранением данных и повторение кода, но тем не менее появилась другая. Данный компонент нельзя назвать универсальным, так как жестко зависит от типа `IContactInfo`, что причисляет код к “неправильному”. Этот “неправильный” код, специально был включен в примеры, чтобы ещё раз показать начинающим разработчикам, как делать нельзя. Нельзя завязывать код на специфических типах. Если потребуется отобразить данные не принадлежащие к типу `IContactInfo`, придется создать новый компонент и тем самым снова нарушить принцип *DRY*.

Как минимум тип данных, которые ожидает универсальный компонент, должен иметь собственную декларацию и описывать только минимально требующиеся  для успешного выполнения характеристики.

~~~~~typescript
interface ISelectData { // декларируем минимально требующиеся для работы компонента характеристики
  id: string;
  value: string;
}

interface Props { // описание свойств компонента высокого уровня
  data: ISelectData[]; // ожидаем данные...
  onSelect: (data: ISelectData) => void; // ...и выдаем данные принадлежащие к специфическому, для конкретного компонента, типу данных
}

// для успешного выполнения работы компонента достаточно данных принадлежащих к типу ISelectData
function SelectWithData({data, onSelect}:Props):ReactElement<Props>{
  const getOptionAll = ( data: ISelectData[] ) => data.map<ReactElement<OptionProps>>( ( { id, value } ) => (
      <Option key={ id }>{ value }</Option>
  ) );

  const onInternalSelect = ( id: string ) => {
      let currentData = data.find( item => item.id === id );

      if ( currentData ) {
          onSelect( currentData );
      }
  };

  let optionAll = getOptionAll( data );

  return (
      <Select onSelect={ onInternalSelect }>{ optionAll }</Select>
  );
}
	

// ...

interface IContactInfo {
  id: string;

  phone: string;
  person: string;
}

interface IContactForSelectWithDataInfo extends ISelectData { // декларируем тип который будет предназначен только для данных IContact и только для работы с компонентом SelectWithData
  data: IContactInfo;
}

const data: IContactInfo[]  = [
  { id: '0', person: 'Ivan', phone: '00000000' },
  { id: '1', person: 'Vasya', phone: '0000000' }
];

// преобразовываем данные с типом IContactInfo к данным с типом IContactForSelectWithDataInfo
const transformedВata: IContactForSelectWithDataInfo[] = data.map( ( { id, person, phone } ) => ( {
  id,
  value: person,

  data: { id, person, phone }
} ) );

const onSelect = ( data: ISelectData ) => {
  // данные принадлежат к типу ISelectData, чтобы работать с ними, как с типом IContactForSelectWithDataInfo, потребуется явное приведение типа
};

// где-то в коде

<SelectWithData data={transformedВata} onSelect={ onSelect } />

// ещё где-то в коде

<SelectWithData data={transformedВata} onSelect={ onSelect } />
~~~~~	

В этот раз получилось избавится от всех описанных проблем (повторения кода, усложнения программы, отсутствие универсальности), но появилась новая. Теперь данные, которые компонент передает в качестве аргументов при вызове слушателя событий, ограничены типом данных `ISelectData`, в то время, как ожидается `IContactForSelectWithDataInfo`,  который не получится получить без явного приведения типов (механизм приведения типов рассматривается в главе [“Типизация - Утверждение типов”]()). Простыми словами, отсутствие возможности работать с компонентом не прибегая к механизмам преобразования типов, делает его не полностью универсальным. Решить это, можно было бы с помощью более общего типа, коим является тип `any`. Но в таком случае снизится типобезопасность программы, к тому же разработчик лишится такого замечательного механизма, как автодополнение.

В типизированных языках, проблемы с универсальностью, решается с помощью механизма создания обобщенных типов. К тому же *TypeScript*, поддерживает синтаксис параметризированных компонентов, что будет продемонстрировано в последнем примере. 

Оставшейся код ничем не отличается от предыдущего, за исключением введения обобщений, поэтому комментариев по нему не будет. Но стоит обратить внимание, на параметры типов, как у типа `Props`, так и функционального компонента. Для того, чтобы не возникло ситуации, при которой данные не будут соответствовать минимально требующемуся, для успешной работы компонента, типу данных, параметр типа, объявленный в типе `Props` расширяет тип данных `ISelectData`.И так как тип Props, имеет параметр типа ограниченный типом данных `ISelectData`, тип, выступающий в качестве аргумента типа `Props`, должен также быть совместимым с типом `ISelectData`. Другими словами, параметр типа функционального компонента также должен расширять тип данных `ISelectData` или же совместимый с ним.

~~~~~typescript
interface ISelectData {
  id: string;
  value: string;
}


interface Props<Data extends ISelectData> { // обобщенные свойства. будет лучше, если параметр типа Data будет расширять минимально требующийся для успешной работы тип данных
  data: Data[]; // указываем параметр типа в аннотации
  onSelect: (data: Data) => void; // указываем параметр типа в аннотации параметра
}


// параметр типа компонента также, как и Params, должен расширять ISelectData
function SelectWithData <Data extends ISelectData> ({data, onSelect}:Props<Data>):ReactElement<Props<Data>>{
  const getOptionAll = ( data: ISelectData[] ) => data.map<ReactElement<OptionProps>>( ( { id, value } ) => (
      <Option key={ id } id={id}>{ value }</Option>
  ) );

  const onInternalSelect = ( id: string ) => {
      let currentData = data.find( item => item.id === id );

      if ( currentData ) {
          onSelect( currentData );
      }
  };

  let optionAll = getOptionAll( data );

  return (
      <Select onSelect={ onInternalSelect }>{ optionAll }</Select>
  );
}
	

// ...

interface IContactInfo {
  id: string;

  phone: string;
  person: string;
}

interface IContactForSelectWithDataInfo extends ISelectData {
  data: IContactInfo;
}

const data: IContactInfo[]  = [
  { id: '0', person: 'Ivan', phone: '00000000' },
  { id: '1', person: 'Vasya', phone: '0000000' }
];

const transformedВata: IContactForSelectWithDataInfo[] = data.map( ( { id, person, phone } ) => ( {
  id,
  value: person,

  data: { id, person, phone }
} ) );

const onSelect = ( data: IContactForSelectWithDataInfo ) => {
  // данные принадлежат к требуемому по сценарию типу
};
	

// где-то в коде

// передаем аргументы типа SelectWithData<IContactForSelectWithDataInfo>
<SelectWithData<IContactForSelectWithDataInfo> data={transformedВata} onSelect={onSelect}/>

// ещё где-то в коде

// передаем аргументы типа SelectWithData<IContactForSelectWithDataInfo>
<SelectWithData<IContactForSelectWithDataInfo> data={transformedВata} onSelect={onSelect}/>
~~~~~

## React  - HOC (Higher-Order Components)
________________

Очень часто, при разработке React приложений, разработчикам приходится создавать конструкцию, известную в *react* сообществе, как *HOC* (*Higher-Order Components*). 

*HOC*, это функция, которая принимает компонент и возвращает новый компонент. Другими словами, *hoc*, это функция, ожидающая в качестве параметров компонент (назовем его входным), который оборачивается в другой, объявленный в теле функции, компонент, который выступает в роли возвращаемого из функции значения (назовем его выходным). Слово “оборачивание” применимое относительно компонентов, означает, что один компонент, отрисовывает (рендерит) другой компонент, со всеми вытекающими из этого процесса (проксирование). За счет того, что входной компонент оборачивается в выходной, достигается расширение его и\или общего функционала. Кроме того, это позволяет устанавливать входному компоненту, как зависимости, так и данные, полученные из внешних сервисов. 

Если объяснения, что такое hoc и в каких случаях в нем появляется необходимость, выходит за рамки данной книги, то с примерами, иллюстрирующими самые распространенные случаи, для общей картины, ознакомится все же стоит.

Но прежде чем приступить к краткому рассмотрению примеров, будет полезно более подробно ознакомиться с сигнатурой hoc-функции  


Как уже было сказано, входной компонент, оборачивается, в объявленный в теле функции, выходной компонент, который может быть как классовым так и функциональным компонентом. И прежде чем кратко ознакомится с каждым из случаев, будет полезно, отдельно рассмотреть сигнатуру hoc-функции на распространенном в практике примере, когда свойства (`props`) выходного компонента,  лишь дополняются свойствами входного компонента.

~~~~~typescript
interface OutputProps {}

function withHOC<InputProps extends OutputProps>(WrappedComponent:
      StatelessComponent<OutputProps> |
      ComponentClass<OutputProps>): ComponentClass<InputProps>
	
~~~~~

Первым делом, при необходимости, декларируются тип-интерфейс, описывающий специфические для выходного компонента свойства (`props`). Далее, объявляется параметр типа `InputProps`, который представляет специфические для входного компонента свойства и который расширяет тип данных `OutputProps`. В данном простом примере, в теле *hoc*, оперировать требуется таким типом, которому полностью соответствует композиция типов входных и входных свойств. Поэтому для удобства и сокращения кода, тип входных параметров расширяет тип выходных параметров. Но стоит заметить, что бывают случаи, один из которых будет рассмотрен далее, при котором подобное недопустимо.

Так как входной компонент может быть, как классовым, так и функциональным компонентом, в аннотации параметра указывается объединенный тип `Union`, который состоит из обобщенных типов `StatelessComponent<OutputProps>` и `ComponentClass<OutputProps>`. Указывая в качестве аргументов типа тип данных `OutputProps`, аннотация, как бы говорит разработчику, что для успешного выполнения *hoc*, требуется компонент обладающий признаками лишь одного типа `OutputProps`.

И наконец указывается аннотация возвращаемого из функции типа. В данном случае предполагается, что выходной компонент является классовым компонентом, поэтому тип указан как `ComponentClass<OutputProps>`. В случае, если выходной компонент являлся функциональным компонентом, то тип был бы указан как  `StatelessComponent<OutputProps>`.

Теперь перейдем к рассмотрению кода, описывающего hoc целиком. Но так как его сигнатура уже была подробно изучена, а в его теле не происходит ничего, что не было бы рассмотрено в этой главе, нет необходимости в каких-либо комментариях.

И начать стоит с *hoc*, выходной компонент которого является классовым компонентом, использование которого требуется тогда, когда логика зависит от жизненного цикла компонента.

~~~~~typescript
import * as React from "react";
import { StatelessComponent, ComponentClass } from "react";


interface OutputProps {
  outputProp: string;
}
interface State {}
interface Snapshot {}

function withHOC<InputProps extends OutputProps>(WrappedComponent:
  StatelessComponent<OutputProps> |
  ComponentClass<OutputProps>): StatelessComponent<InputProps> {
 
 
  const WrapperComponent: StatelessComponent<InputProps> = props => (
      <WrappedComponent {...props} />
  );

  return WrapperComponent;
}

// файл CustomComponent.tsx

interface CustomComponentProps extends OutputProps {
  inputProp: string;
}

const CustomComponent: StatelessComponent<CustomComponentProps> = ({inputProp, outputProp}) => {
  return null;
}

export default withHOC<CustomComponentProps>(CustomComponent);


// где-то в другом модуле

import CustomComponent from "./CustomComponent";

<CustomComponent /> // Error, отсутствуют обязательные свойства inputProp и outputProp
<CustomComponent inputProp={ '' } /> // Error, отсутствует обязательное свойство outputProp
<CustomComponent inputProp={ '' } outputProp={ '' } /> // Ok
~~~~~

Если же потребности в жизненом цикле нет, то предпочтительней использовать *hoc*, у которого выходной компонент является функциональным.

~~~~~typescript
import * as React from "react";
import { StatelessComponent, ComponentClass } from "react"


interface OutputProps {
  outputProp: string;
}

function withHOC<InputProps extends OutputProps>(WrappedComponent:
  StatelessComponent<OutputProps> |
  ComponentClass<OutputProps>): StatelessComponent<InputProps> {
 
  const WrapperComponent:StatelessComponent<InputProps> = props => <WrappedComponent {...props} />

  return WrapperComponent;
}

// файл CustomComponent.tsx

interface CustomProps extends OutputProps {
  inputProp: string;
}

const CustomComponent: StatelessComponent<CustomProps> = ({inputProp, outputProp}) => {
  return null;
}

export default withHOC<CustomProps>(CustomComponent);


// // // где-то в другом модуле

import CustomComponent from "./CustomComponent";

<CustomComponent /> // Error, отсутствуют обязательные свойства inputProp и outputProp
<CustomComponent inputProp={ '' } /> // Error, отсутствует обязательное свойство outputProp
<CustomComponent inputProp={ '' } outputProp={ '' } /> // Ok
~~~~~

И в заключение предлагаю рассмотреть случай, когда параметры устанавливаемые компоненту обертке отличаются от тех, которые он устанавливает оборачиваемому компоненту. И несмотря на то, что код показанный ниже, отличается от предыдущего, подробного разбора не будет, так как в нем нет ничего, что к этому моменту не было бы известно читателю.

~~~~~typescript
// hoc требует декларирования двух типов описывающих свойства

// входные свойства hoc
interface InputProps {
  inputProps: string;
}
// выходные свойства hoc
interface OutputProps {
  outputProp: number;
}
interface State {}
interface Snapshot {}


// параметру типа SharedProps не требуется расширять другие типы
// обобщенный тип указанный в аннотации параметра функции, принимает в качестве аргумента типа тип пересечение Intersection
function withHOC<SharedProps>(WrappedComponent:
  StatelessComponent<SharedProps & OutputProps> |
  ComponentClass<SharedProps & OutputProps>): ComponentClass<SharedProps & InputProps> {
 

 

  type InternalInputProps = SharedProps & InputProps; // делаем код читабельным (повышаем его семантику)

  // тип свойства выходного компонента указан как псевдоним типа
  class WrapperComponent extends Component<InternalInputProps, State, Snapshot> {
      constructor(props: InternalInputProps){
          super(props);
      }

      private getOutputProps():OutputProps {
          // здесь создаем часть выходных свойств определяемую типом OutputProps
          let outputProps: OutputProps = {outputProp: 0};

          return outputProps;
      }

      private inputToOutputProps(inputProps: Readonly<InternalInputProps>, outputProps: OutputProps): SharedProps & OutputProps {
          // здесь создаем выходные свойства определяемые типами OutputProps и SharedProps
         
          let {propInputInHOC, ...sharedProps} = inputProps as any; // фильтруем свойства
          let resultProps: SharedProps & OutputProps = {...outputProps, ...sharedProps}; // комбинируем свойства

          return resultProps;
      }


      render(): ReactElement<SharedProps & OutputProps> {
          let outputProps = this.inputToOutputProps(this.props, this.getOutputProps()); // трансформируем свойства

          return <WrappedComponent {...outputProps} />
      };
  }

  return WrapperComponent;
}

// файл CustomComponent.tsx

// расширение другого типа не требуется
interface CustomProps {
  sharedProp: string;
}

// параметры выражены типом пересечения
const CustomComponent: StatelessComponent<CustomProps & OutputProps> = ({sharedProp, outputProp}) => {
  return null;
}

// export default withHOC<InputProps>(CustomComponent);


// // // // где-то в другом модуле

import CustomComponent from "./CustomComponent";

<CustomComponent /> // Error, отсутствуют обязательные свойства sharedProp и outputProps
<CustomComponent sharedProp={ '' } /> // Error, отсутствует обязательное свойство outputProps
<CustomComponent sharedProp={ '' } outputProps={ '' } /> // Ok
~~~~~
