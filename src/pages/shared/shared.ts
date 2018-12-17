import Vue from 'vue';

import ProgressBarLayout from '../../components/progress-bar-layout/ProgressBarLayout.vue';
import DialogMenuItem from '../../components/dialog-menu-item/DialogMenuItem.vue';

export default {
    progressBarLayout: Vue.component('progress-bar-layout', ProgressBarLayout),
    dialogMenuItem: Vue.component('dialog-menu-item', DialogMenuItem)
};
