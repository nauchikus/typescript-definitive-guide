import { BookTocNode, createBookTocTree, TreeNode } from "../stores/BookTocTreeStore";
import { createToggleState, ToggleUiState } from "../stores/AppStateService";
import { createBehaviorNotification } from "../stores/behavior-notificaion-store";
import { RouterStore } from "../stores/RouterStore";
import { createContext, useContext } from "react";
import { CollapseTreeMobxStore } from "../stores/CollapseTreeMobxStore";
import { TocTreeWithSectionMobxStore } from "../stores/TocTreeWithSectionMobxStore";


interface IBookTocPageMobxEntryParams {
  location: Location;
  bookTocTree: TreeNode<BookTocNode>[];
}

export class BookTocPageMobxEntry {
  private static instance: ReturnType<typeof BookTocPageMobxEntry.create>;

  static create = ({bookTocTree,location}: IBookTocPageMobxEntryParams) => {
    let router = RouterStore.create( { location } )
    let tocFilterStore = createToggleState(ToggleUiState.Close);
    let bookTocCollapseStore = new CollapseTreeMobxStore(bookTocTree, false);
    let bookTocSectionStore = new TocTreeWithSectionMobxStore(bookTocCollapseStore.tree);
    // let bookTocTreeStore = createBookTocTree(bookTocTree, false);
    let behaviorNotificationStore = createBehaviorNotification();


    return {
      router,
      tocFilterStore,
      bookTocCollapseStore,
      bookTocSectionStore,
      behaviorNotificationStore,
    }
  }
  static getInstance(params: IBookTocPageMobxEntryParams){
    if (!BookTocPageMobxEntry.instance) {
      BookTocPageMobxEntry.instance = BookTocPageMobxEntry.create(params);
    }

    return BookTocPageMobxEntry.instance;
  }
}


export type UseBookTocPageStores=ReturnType<typeof BookTocPageMobxEntry.getInstance>;

export const MobxBookTocPageContext = createContext<UseBookTocPageStores | null>( null );
export const useBookTocPageStores = () => useContext( MobxBookTocPageContext )  as UseBookTocPageStores;
