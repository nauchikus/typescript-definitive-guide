import { DirectiveOptions } from 'vue';
import Selection, {
    ISelection
} from '@/directives/selected/selection.controller';

interface IBindings {
    expression: string;
    modifiers: {
        include?: boolean;
        exclude?: boolean;
    };
    value: {
        id?: string;
        selected: (selection: ISelection) => void;
        unselected: () => void;
    };
}

const directive: DirectiveOptions = (() => {
    const state = new WeakMap();

    return {
        bind(element: HTMLElement, bindings: IBindings) {
            let { expression, modifiers, value } = bindings;

            if (!value) {
                let id = expression;
                let { include, exclude } = modifiers;

                if (include === undefined && exclude === undefined) {
                    throw new Error(
                        `Directive v-selection without prop "value" must have one active modifier "include" or "exclude".`
                    );
                }

                (element as any).selectionId = id;
                (element as any).selectionStrategy = include
                    ? 'include'
                    : 'exclude';
            } else {
                let { id, selected, unselected } = bindings.value;
                let selection = new Selection(element, document, id);
                selection.selection.add(selected);
                selection.unselection.add(unselected);

                state.set(element, selection);
            }
        },
        inserted(element: HTMLElement) {},
        unbind(element: HTMLElement, bindings: IBindings) {
            let selection = state.get(element);

            let { selected, unselected } = bindings.value;
            selection.selection.remove(selected);
            selection.unselection.remove(unselected);
            selection.destroy();

            state.delete(element);
        }
    };
})();

export default directive;
