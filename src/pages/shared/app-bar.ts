import CustomDialog from '../../components/dialog/CustomDialog.vue';
import AuthorContactDialog from '../../components/author-contact-dialog/AuthorContactDialog.vue';
import BugReportHelperDialog from '../../components/bug-report-helper-dialog/BugReportHelperDialog.vue';
import FeedbackMenu from '../../components/feedback-menu/FeedbackMenu.vue';
import SpillingErrorFeedbackMenuItem from '../../components/spilling-error-feedback-menu-item/SpillingErrorFeedbackMenuItem.vue';
import SpillingErrorFeedbackMenuItemContent from '../../components/spilling-error-feedback-menu-item-content/SpillingErrorFeedbackMenuItemContent.vue';
import AppBugFeedbackMenuItemContent from '../../components/app-bug-feedback-menu-item-content/AppBugFeedbackMenuItemContent.vue';
import AppBugFeedbackMenuItem from '../../components/app-bug-feedback-menu-item/AppBugFeedbackMenuItem.vue';
import AnimationSendingPromotion from '../../components/animation-sending-promotion/AnimationSendingPromotion.vue';
import AppHeader from '../../components/app-header/AppHeader.vue';
import CustomDrawer from '../../components/custom-drawer/CustomDrawer.vue';
import AppGrid from '../../views/app-grid/AppGrid.vue';
import SvgIcon from '../../components/SvgIcon.vue';
import Vue from 'vue';

export default {
    // appBar: Vue.component('app-bar', AppBar),
    svgIcon: Vue.component('svg-icon', SvgIcon),
    appGrid: Vue.component('app-grid', AppGrid),
    authorContactDialog: Vue.component(
        'author-contact-dialog',
        AuthorContactDialog
    ),
    bugReportHelperDialog: Vue.component(
        'bug-report-helper-dialog',
        BugReportHelperDialog
    ),
    customDialog: Vue.component('custom-dialog', CustomDialog),
    feedbackMenu: Vue.component('feedback-menu', FeedbackMenu),
    spillingErrorFeedbackMenuItem: Vue.component(
        'spilling-error-feedback-menu-item',
        SpillingErrorFeedbackMenuItem
    ),
    spillingErrorFeedbackMenuItemContent: Vue.component(
        'spilling-error-feedback-menu-item-content',
        SpillingErrorFeedbackMenuItemContent
    ),
    appBugFeedbackMenuItemContent: Vue.component(
        'app-bug-feedback-menu-item-content',
        AppBugFeedbackMenuItemContent
    ),

    appBugFeedbackMenuItem: Vue.component(
        'app-bug-feedback-menu-item',
        AppBugFeedbackMenuItem
    ),
    animationSendingPromotion: Vue.component(
        'animation-sending-promotion',
        AnimationSendingPromotion
    ),
    appHeader: Vue.component('app-header', AppHeader),
    customDrawer: Vue.component('custom-drawer', CustomDrawer)
};
