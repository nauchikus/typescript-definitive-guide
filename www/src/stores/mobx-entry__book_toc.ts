import { BookTocNode, createBookTocTree, TreeNode } from "./BookTocTreeStore";
import { createToggleState, ToggleUiState } from "./AppStateService";
import { createBehaviorNotification } from "./behavior-notificaion-store";
import { RouterStore } from "./RouterStore";


interface ICreateBookTocPageMobxEntryParams {
  location: Location;
  bookTocTree: TreeNode<BookTocNode>[];
}

export const createBookTocMobxEntry = ({bookTocTree,location}:ICreateBookTocPageMobxEntryParams) => ( {
  router: RouterStore.create( { location } ),
  tocFilterStore:createToggleState(ToggleUiState.Close),
  bookTocTreeStore:createBookTocTree(bookTocTree,false),
  behaviorNotificationStore:createBehaviorNotification(),
} );

export type UseBookTocStores=ReturnType<typeof createBookTocMobxEntry>;