import Vue, { ComponentOptions } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default class Page {
    public static create<T extends Vue>(component: ComponentOptions<T>) {
        let {
            computed,
            methods,
            beforeRouteLeave,
            mounted,
            ...rest
        } = component;

        let shared: ComponentOptions<T> = {
            computed: {
                ...computed,
                ...mapGetters(['isEnterRoute'])
            },
            methods: {
                ...methods,
                ...mapActions([
                    'deactivateEnterRouterFlag',
                    'hideGlobalProgressBar'
                ])
            },
            beforeRouteLeave(this: any, to, from, next) {
                if (this.isEnterRoute) {
                    this.deactivateEnterRouterFlag();
                }

                if ('beforeRouteLeave' in this) {
                    this.beforeRouteLeave(to, from, next);
                } else {
                    next();
                }
            },
            mounted(this: any) {
                this.hideGlobalProgressBar();

                if ('mounted' in this) {
                    this.mounted();
                }
            }
            // beforeRouteEnter(to,from,next){
            //     next( ( component: Vue ) => {
            //         if ( component.isEnter ) {
            //             component.deactivateEnterRouterFlag();
            //         }
            //     } );
            // },
        };

        return { ...shared, ...rest };
    }
}
