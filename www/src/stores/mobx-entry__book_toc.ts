import { BookTocNode, createBookTocTree, TreeNode } from "./BookTocTreeStore";
import { createToggleState, ToggleUiState } from "./AppStateService";
import { createBehaviorNotification } from "./behavior-notificaion-store";


interface ICreateBookTocPageMobxEntryParams {
  bookTocTree: TreeNode<BookTocNode>[];
}

export const createBookTocMobxEntry = ({bookTocTree}:ICreateBookTocPageMobxEntryParams) => ( {
  tocFilterStore:createToggleState(ToggleUiState.Close),
  bookTocTreeStore:createBookTocTree(bookTocTree,false),
  behaviorNotificationStore:createBehaviorNotification(),
} );

export type UseBookTocStores=ReturnType<typeof createBookTocMobxEntry>;