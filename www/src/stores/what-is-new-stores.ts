import { createToggleState, ToggleUiState } from "./AppStateService";
import { createWhatIsNewTocTree, TreeNode } from "./WhatIsNewTocTreeStore";
import { IWhatIsNewToc } from "../types/IWhatIsNewToc";


interface ICreateWhatIsNewPageGuiStoresParams {
  winTocTree:TreeNode<IWhatIsNewToc>[];
}

export const createWhatIsNewPageGuiStores = ({winTocTree}:ICreateWhatIsNewPageGuiStoresParams) => ( {
  winTocTreeStore:createWhatIsNewTocTree(winTocTree,false),
  contentDownPanelStore:createToggleState(ToggleUiState.Close),
} );

export type UseWhatIsNewStores=ReturnType<typeof createWhatIsNewPageGuiStores>;