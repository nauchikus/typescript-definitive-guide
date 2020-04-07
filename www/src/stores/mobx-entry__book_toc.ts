import { BookTocNode, createBookTocTree, TreeNode } from "./BookTocTreeStore";
import { createToggleState, ToggleUiState } from "./AppStateService";
import { createBehaviorNotification } from "./behavior-notificaion-store";
import { RouterStore } from "./RouterStore";
import { createContext, useContext } from "react";


interface ICreateBookTocPageMobxEntryParams {
  location: Location;
  bookTocTree: TreeNode<BookTocNode>[];
}

export const createBookTocPageMobxEntry = ({bookTocTree,location}:ICreateBookTocPageMobxEntryParams) => ( {
  router: RouterStore.create( { location } ),
  tocFilterStore:createToggleState(ToggleUiState.Close),
  bookTocTreeStore:createBookTocTree(bookTocTree,false),
  behaviorNotificationStore:createBehaviorNotification(),
} );

export type UseBookTocPageStores=ReturnType<typeof createBookTocPageMobxEntry>;

export const MobxBookTocPageContext = createContext<UseBookTocPageStores | null>( null );
export const useBookTocPageStores = () => useContext( MobxBookTocPageContext )  as UseBookTocPageStores;