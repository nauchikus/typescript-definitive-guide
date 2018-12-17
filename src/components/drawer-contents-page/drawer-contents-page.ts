export default {
    name: 'CustomDialog',
    // components: {},
    props: {
        toggle: Boolean
    },
    // data(this: any) {
    //     return {
    //         isToggle: true,
    //     };
    // },
    computed: {
        isToggle(this: any) {
            return this.toggle === true ? 'open' : 'close';
        }
    }
    // mounted () {
    //
    // },
    // methods: {},
};
