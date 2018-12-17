export default {
    name: 'CustomDialog',
    // components: {},
    props: ['active'],
    // data(this: any) {
    //     return {
    //         isToggle: this.active,
    //     };
    // },
    computed: {
        isDialogToggle: {
            get(this: any) {
                return this.active;
            },
            set(this: any, value: boolean) {
                this.$emit('update:active', false);
            }
        }
    },
    // mounted () {
    //
    // },
    methods: {
        log() {
            console.log('DOWN');
        },
        hideDialog(this: any) {
            this.isDialogToggle = false;
        }
    }
};
