import { DirectiveOptions } from 'vue';

interface IBindings {
    value: {
        delay?: number;
    };
}

const directive: DirectiveOptions = (() => {
    return {
        bind(element: HTMLElement, { value }: IBindings) {
            value && value.delay
                ? setTimeout(() => element.focus(), value.delay)
                : element.focus();
        },
        inserted(element: HTMLElement) {},
        unbind(element: HTMLElement, bindings: IBindings) {}
    };
})();

export default directive;
