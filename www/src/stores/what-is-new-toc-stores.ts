import { IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { createWhatIsNewTocTree,TreeNode } from "./WhatIsNewTocTreeStore";


interface ICreateWhatIsNewTocPageGuiStoresParams {
  winTocTree: TreeNode<IWhatIsNewToc>[];
}

export const createWhatIsNewTocPageGuiStores = ({winTocTree}:ICreateWhatIsNewTocPageGuiStoresParams) => ( {
  winTocTreeStore:createWhatIsNewTocTree(winTocTree,false),
} );

export type UseWhatIsNewTocStores=ReturnType<typeof createWhatIsNewTocPageGuiStores>;