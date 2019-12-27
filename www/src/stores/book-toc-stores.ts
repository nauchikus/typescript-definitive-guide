import { BookTocNode, createBookTocTree, TreeNode } from "./BookTocTreeStore";
import { createToggleState, ToggleUiState } from "./AppStateService";


interface ICreateBookTocPageStoresParams {
  bookTocTree: TreeNode<BookTocNode>[];
}

export const createBookTocPageStores = ({bookTocTree}:ICreateBookTocPageStoresParams) => ( {
  tocFilterStore:createToggleState(ToggleUiState.Close),
  bookTocTreeStore:createBookTocTree(bookTocTree,false),
} );

export type UseBookTocStores=ReturnType<typeof createBookTocPageStores>;