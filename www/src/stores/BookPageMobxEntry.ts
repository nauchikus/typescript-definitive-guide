import { createToggleState, ToggleUiState } from "./AppStateService";
import { createBehaviorNotification } from "./behavior-notificaion-store";
import { createContext, useContext } from "react";
import { IBookChapterPageNavData } from "../page-templates/book-page/BookPageProvider";
import { ContentNavStore } from "./ContentNavStore";
import { ContentSectionStore } from "./ContentSectionStore";
import { createIntersectionObserverStore } from "./IntersectionObserverStore";
import { PageNavStore } from "./PageNavStore";
import { LocationPartial, RouterStore } from "./RouterStore";


interface IBookPageMobxEntryParams {
  // bookTocTree: TreeNode<BookTocNode>[];
  locale: string;
  location:LocationPartial;
  pageNavDataAll:IBookChapterPageNavData[];
}


export class BookPageMobxEntry {
  private static instance: ReturnType<typeof BookPageMobxEntry.create>;

  static create = ({ locale,location,pageNavDataAll }: IBookPageMobxEntryParams) => {
    let router = new RouterStore(location, locale);
    let contentIntersectionObserver = createIntersectionObserverStore( {
      containerSelector:`span.content__html-content-wrapper`,
      sectionSelector:`section.content__section`,
    } );
    let contentSection = ContentSectionStore.create( {
      router,
      contentIntersectionObserver
    } );
    let pageNav = PageNavStore.create( {
      pageNavDataAll,
      router,
      contentSection
    } );
    let contentNav = ContentNavStore.create( {
      pageNav,
      router,
      contentSection
    } );

    return {
      router,
      contentIntersectionObserver,
      // tocFilterStore: createToggleState( ToggleUiState.Close ),
      // bookTocTreeStore: createBookTocTree( bookTocTree, false ),
      contentDownPanelStore:createToggleState(ToggleUiState.Close),
      behaviorNotificationStore: createBehaviorNotification(),
      contentSection,
      contentNav,
    };
  }
  static getInstance(params: IBookPageMobxEntryParams){
    if (!BookPageMobxEntry.instance) {
      BookPageMobxEntry.instance = BookPageMobxEntry.create(params);
    }

    return BookPageMobxEntry.instance;
  }
}


export type UseBookPageStores=ReturnType<typeof BookPageMobxEntry.getInstance>;


export const MobxBookChapterPageContext = createContext<UseBookPageStores | null>( null );
export const useBookChapterStores = () => useContext( MobxBookChapterPageContext ) as UseBookPageStores;
