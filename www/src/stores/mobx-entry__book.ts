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

export const createBookChapterMobxEntry = ( { location,pageNavDataAll }: ICreateBookPageMobxEntryParams ) => {
  let router = new RouterStore(location);
  let contentIntersectionObserver = createIntersectionObserverStore( {
    containerSelector:`div.content`,
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

export type UseBookStores=ReturnType<typeof createBookChapterMobxEntry>;



export const MobxBookChapterContext = createContext<UseBookStores | null>( null );
export const useBookChapterStores = () => useContext( MobxBookChapterContext ) as UseBookStores;