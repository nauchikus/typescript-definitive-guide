import json from "../../book/ru/metadata/localization.json";

export type AppLocalization = typeof json;

export type AppNavigationLocalization = AppLocalization["appNavigation"];
export type SharedLayoutLocalization = AppLocalization["layouts"]["shared"];
export type BookTocLocalization = AppLocalization["pages"]["book__chapters"];
export type WhatIsNewTocLocalization = AppLocalization["pages"]["what-is-new__toc"];
export type BookTocGuiLocalization = BookTocLocalization["gui"];
export type WhatIsNewTocGuiLocalization = WhatIsNewTocLocalization["gui"];

export const LocalizationPaths={
  AppNavigation:'appNavigation',
  SharedLayout:'layouts.shared',
  IndexPage:'pages.index',
  BookChaptersPage:'pages.book__chapters',
  BookChaptersPageGui:'pages.book__chapters.gui',
  BookChapterPage:'pages.book__chapter',
  WhatIsNewTocPageGui:'pages.what-is-new__toc.gui',
}

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
