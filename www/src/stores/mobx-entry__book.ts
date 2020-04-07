import { createToggleState, ToggleUiState } from "./AppStateService";
import { createBehaviorNotification } from "./behavior-notificaion-store";
import { createContext, useContext } from "react";
import { IBookChapterPageNavData } from "../page-templates/book-page/BookPageProvider";
import { ContentNavStore } from "./ContentNavStore";
import { ContentSectionStore } from "./ContentSectionStore";
import { createIntersectionObserverStore } from "./IntersectionObserverStore";
import { PageNavStore } from "./PageNavStore";
import { LocationPartial, RouterStore } from "./RouterStore";


interface ICreateBookPageMobxEntryParams {
  // bookTocTree: TreeNode<BookTocNode>[];
  location:LocationPartial;
  pageNavDataAll:IBookChapterPageNavData[];
}

export const createBookChapterPageMobxEntry = ( { location,pageNavDataAll }: ICreateBookPageMobxEntryParams ) => {
  let router = new RouterStore(location);
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
};

export type UseBookPageStores=ReturnType<typeof createBookChapterPageMobxEntry>;



export const MobxBookChapterPageContext = createContext<UseBookPageStores | null>( null );
export const useBookChapterStores = () => useContext( MobxBookChapterPageContext ) as UseBookPageStores;