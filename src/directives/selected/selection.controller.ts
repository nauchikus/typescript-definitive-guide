import Signal from './signal/Signal';
import ListenerInfoCollection from '@/directives/selected/ListenerInfoCollection';

export interface ISelection {
    text: string;
    position: { x: number; y: number };
}

export interface ISelection {
    text: string;
    position: { x: number; y: number };
}

enum SelectionStrategys {
    Include = 'include',
    Exclude = 'exclude',
    Empty = 'empty'
}

enum SelectionStates {
    Selection = 'selection',
    Unselection = 'unselection'
}

export default class Selection {
    public static getSelection() {
        return window.getSelection();
    }

    public static clearSelection() {
        let selection = Selection.getSelection();
        selection.collapseToStart();
    }

    public static isSelection() {
        return Selection.getSelection().toString().length > 0;
    }

    private static instances = new WeakMap<object, Selection>();

    private static setInstence(id: any, instance: Selection) {
        Selection.instances.set(id, instance);
    }

    private static deleteInstence(id: any) {
        Selection.instances.delete(id);
    }

    private static getInstance(id: any) {
        return Selection.instances.get(id);
    }

    private static getData() {
        let selection = Selection.getSelection();

        let text = selection.toString();
        let range = selection.getRangeAt(0).cloneRange();
        range.collapse(true);

        let [clientRect] = Array.from(range.getClientRects());

        let { left: x, top: y } = clientRect;
        let position = { x, y };

        let data = { text, position };

        return data;
    }

    public readonly selection: Signal<ISelection> = new Signal<ISelection>();
    public readonly unselection: Signal<void> = new Signal<void>();

    public get isSelection() {
        return this.state === SelectionStates.Selection;
    }

    private listenerInfoCollection: ListenerInfoCollection = new ListenerInfoCollection();
    private state = SelectionStates.Unselection;

    constructor(element: Node, layer: Node = document, readonly id?: string) {
        const addElementListener = (element: Node) => {
            element.addEventListener('mouseup', element_clickHandler);

            this.listenerInfoCollection.add({
                type: 'mouseup',
                target: element,
                handler: element_clickHandler
            });
        };
        const removeElementListener = (element: Node) => {
            element.removeEventListener('mouseup', element_clickHandler);

            this.listenerInfoCollection.remove({
                type: 'mouseup',
                target: element,
                handler: element_clickHandler
            });
        };

        const addLayerListener = (element: Node) => {
            element.addEventListener('mousedown', layer_mousedownHandler);

            this.listenerInfoCollection.add({
                type: 'mousedown',
                target: element,
                handler: element_clickHandler
            });
        };
        const removeLayerListener = (element: Node) => {
            element.removeEventListener('mousedown', layer_mousedownHandler);

            this.listenerInfoCollection.remove({
                type: 'mousedown',
                target: element,
                handler: element_clickHandler
            });
        };

        const element_clickHandler = () => {
            if (Selection.isSelection()) {
                removeElementListener(element);
                addLayerListener(layer);

                this.state = SelectionStates.Selection;

                this.selection.dispatch(Selection.getData());
            }
        };
        const layer_mousedownHandler = (event: Event) => {
            let target = event.target as Element;
            let strategy = getStrategy(target);
            let isIncludeOrEmptyStrategyValid =
                strategy === SelectionStrategys.Include ||
                strategy === SelectionStrategys.Empty;

            if (this.isSelection && isIncludeOrEmptyStrategyValid) {
                removeLayerListener(layer);
                addElementListener(element);

                this.state = SelectionStates.Unselection;

                if (Selection.isSelection()) {
                    Selection.clearSelection();
                }

                this.unselection.dispatch();
            }
        };

        const getStrategy = (element: Element): SelectionStrategys => {
            if (id) {
                let ancestor = element.closest(`[selection-id="${id}"]`);

                if (ancestor) {
                    let strategy = ancestor.getAttribute('selection-strategy');

                    if (
                        strategy === SelectionStrategys.Include ||
                        strategy === SelectionStrategys.Exclude
                    ) {
                        return strategy;
                    } else {
                        throw new Error(
                            `Selection strategy cannot be undefined.`
                        );
                    }
                }
            }

            return SelectionStrategys.Empty;
        };

        addElementListener(element);
    }

    public readonly destroy = () => this.listenerInfoCollection.destroy();
}
