import json from "../../book/ru/metadata/localization.json";

export type AppLocalization = typeof json;

export type LocaleLocalization = AppLocalization["lang"];
export type AppNavigationLocalization = AppLocalization["appNavigation"];
export type SharedLayoutLocalization = AppLocalization["layouts"]["shared"];
export type InformersLocalization = AppLocalization["layouts"]["shared"]["informers"];
export type AppContentLocalization = AppLocalization["layouts"]["shared"]["appContent"];
export type LinksLocalization = AppLocalization["layouts"]["shared"]["links"];
export type IndexPageGuiLocalization = AppLocalization["pages"]["index"]["gui"];
export type BookTocLocalization = AppLocalization["pages"]["book__chapters"];
export type BookChapterLocalization = AppLocalization["pages"]["book__chapter"];
export type BookChapterGuiLocalization = AppLocalization["pages"]["book__chapter"]["gui"];
export type WhatIsNewTocLocalization = AppLocalization["pages"]["what-is-new__toc"];
export type BookTocGuiLocalization = BookTocLocalization["gui"];
export type WhatIsNewTocGuiLocalization = WhatIsNewTocLocalization["gui"];
export type NotFoundPageGuiLocalization = AppLocalization["pages"]["not-found"]["gui"];
export type BehaviorNotificationLocalization = AppLocalization["notification"]["behaviorNotification"];


export const LocalizationPaths = {
  LocaleLocalization: "locale",
  AppNavigation: "appNavigation",
  AppContent: "layouts.shared.appContent",
  SharedLayout: "layouts.shared",
  Informers: "layouts.shared.informers",
  Links: "layouts.shared.links",
  IndexPage: "pages.index",
  IndexPageGui: "pages.index.gui",
  BookChaptersPage: "pages.book__chapters",
  BookChaptersPageGui: "pages.book__chapters.gui",
  BookChapterPage: "pages.book__chapter",
  BookChapterPageGui: "pages.book__chapter.gui",
  WhatIsNewTocPageGui: "pages.what-is-new__toc.gui",
  NotFoundPageGui: "pages.not-found.gui",
  BehaviorNotification: "notification.behaviorNotification"
};

interface Page<TMetadata,TGUI> {
  pageMetadata:TMetadata;
  gui:TGUI;
}
export interface BookChapterPageGuiTranslation {
  greeting:string;
}
export interface BookChapterPageMetadataTranslation {

}
export interface BookChapterPage extends Page<BookChapterPageMetadataTranslation,BookChapterPageGuiTranslation>{

}

type Pages={
  'book__chapters':BookChapterPage
}

// export interface AppLocalization {
//   lang: string;
//   title: string;
//   description: string;
//   pages: Pages;
//
// }



// export const DefaultLocalization: AppLocalization = {
//   lang: 'ru',
//   title: 'Title',
//   description: 'description',
//   pages: {
//     [ 'book__chapters' ]: {
//       pageMetadata: {},
//       gui: { greeting: 'DefaultText' },
//     }
//   }
// };
