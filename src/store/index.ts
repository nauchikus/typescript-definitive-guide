import Vue from 'vue';
import Vuex from 'vuex';

import * as AppUiModule from './modules/app-ui.module';
import * as AppConfigurationModule from './modules/app-configuration.module';
import * as FeedbackModule from './modules/feedback.module';
import * as AppUiContentsPageModule from './modules/app-ui-contents-page.module';
import * as AppDrawerModule from './modules/app-drawer.module';
import * as BookContentsModule from './modules/book-contents.module';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {}
});

store.registerModule('app-ui', AppUiModule.module);
store.registerModule('app-configuration', AppConfigurationModule.module);
store.registerModule('feedback', FeedbackModule.module);
store.registerModule('app-ui-contents-page', AppUiContentsPageModule.module);
store.registerModule('app-drawer', AppDrawerModule.module);
store.registerModule('book-contents', BookContentsModule.module);

export default store;
