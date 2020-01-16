import { createToggleState, ToggleUiState } from "./AppStateService";
import { createWhatIsNewTocTree, TreeNode } from "./WhatIsNewTocTreeStore";
import { IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { createBehaviorNotification } from "./PageNavStore";
import { useWhatIsNewStores } from "../mobx/MobxWhatIsNewProvider";


interface ICreateWhatIsNewPageGuiStoresParams {
  winTocTree:TreeNode<IWhatIsNewToc>[];
}

export const createWhatIsNewPageGuiStores = ({winTocTree}:ICreateWhatIsNewPageGuiStoresParams) => ( {
  winTocTreeStore:createWhatIsNewTocTree(winTocTree,false),
  contentDownPanelStore:createToggleState(ToggleUiState.Close),
  behaviorNotificationStore:createBehaviorNotification()
} );

export type UseWhatIsNewStores=ReturnType<typeof createWhatIsNewPageGuiStores>;


export const useBehaviorNotification = () => {
  let { behaviorNotificationStore } = useWhatIsNewStores();

  return behaviorNotificationStore;
};