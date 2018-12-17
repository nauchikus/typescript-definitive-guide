import { mapActions } from 'vuex';
import { Collapses } from '../../enums/Collapses';
import Vue, { ComponentOptions } from 'vue';

export interface IComponent extends Vue {}

const component: ComponentOptions<IComponent> = {
    // components: {}
    name: 'book-contents-chapter-info',
    props: ['index', 'title', 'url', 'isNode', 'isCollapsed'],
    data() {
        return {
            collapse: Collapses.Collapsed
        };
    },
    computed: {},
    // mounted () {
    //
    // },
    methods: {
        ...mapActions(['copyToBuffer']),
        toggleCollapseContents(this: any) {
            this.$emit('collapse');
        }
    },
    watch: {
        isCollapsed(this: any) {
            this.collapse = this.isCollapsed
                ? Collapses.Collapsed
                : Collapses.Uncollapsed;
        }
    }
};

export default component;
