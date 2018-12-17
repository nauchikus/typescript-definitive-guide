import Vue from 'vue';
import App from './components/app/App.vue';
import * as RouterCreator from './router';
import store from './store';
import './registerServiceWorker';

import './material.module';

Vue.config.productionTip = false;

let router = RouterCreator.create(store);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
