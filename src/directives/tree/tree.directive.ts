import { DirectiveOptions } from 'vue';

const directive: DirectiveOptions = {
    bind(element: HTMLElement) {
        Object.assign(element.style, {
            // whiteSpace: 'pre',
            wordWrap: 'normal',

            display: 'inline-blocl'
            // margin: '8px 0',
            // position: 'absolute'
        });
        console.log(
            element.clientWidth,
            element.parentElement && element.parentElement.clientWidth
        );
    },
    inserted(element: HTMLElement) {
        console.log(
            element.clientWidth,
            element.parentElement && element.parentElement.clientWidth
        );
    },
    unbind(element: HTMLElement) {}
};

export default directive;
