export default {
    props: {
        nodes: Array,
        level: {
            type: Number,
            default: 0
        },
        count: {
            type: String,
            default: ''
        }
    },
    data(this: any) {
        return {};
    },
    computed: {
        classes(this: any) {
            return {
                [`tree-node`]: true,
                [`tree-node-depth--${this.level}`]: true
            };
        }
    },
    // mounted () {
    //
    // },
    methods: {}
};
