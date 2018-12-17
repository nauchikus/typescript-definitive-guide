export default {
    name: 'app',
    // components: {},
    // props: {},
    data: () => ({
        isBackgroundActive: false
    }),
    computed: {},
    mounted(this: any) {
        this.isBackgroundActive = true;
    },
    destroyed(this: any) {
        this.isBackgroundActive = false;
    },
    methods: {
        animation_done(this: any) {
            this.$emit('done');
        }
    }
};
