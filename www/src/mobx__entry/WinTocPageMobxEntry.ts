import { IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { TreeNode } from "../stores/WhatIsNewTocTreeStore";
import { RouterStore } from "../stores/RouterStore";
import { createBehaviorNotification } from "../stores/behavior-notificaion-store";
import { createContext, useContext } from "react";
import { CollapseTreeMobxStore } from "../stores/CollapseTreeMobxStore";



interface IWhatIsNewTocPageGuiStoresParams {
  winTocTree: TreeNode<IWhatIsNewToc>[];
  location: Location;
}

export class WinTocPageMobxEntry {
  private static instance: ReturnType<typeof WinTocPageMobxEntry.create>;

  static create = ({ winTocTree,location }: IWhatIsNewTocPageGuiStoresParams) => {
    // let winTocTreeStore = createWhatIsNewTocTree(winTocTree, false);
    let winTocCollapseStore = new CollapseTreeMobxStore(winTocTree, false);
    let behaviorNotificationStore = createBehaviorNotification();
    let router = RouterStore.create({ location });

    return {
      router,
      winTocCollapseStore,
      behaviorNotificationStore,
    };
  }
  static getInstance(params: IWhatIsNewTocPageGuiStoresParams){
    if (!WinTocPageMobxEntry.instance) {
      WinTocPageMobxEntry.instance = WinTocPageMobxEntry.create(params);
    }

    return WinTocPageMobxEntry.instance;
  }
}

export type UseWhatIsNewTocPageStores=ReturnType<typeof WinTocPageMobxEntry.getInstance>;

export const MobxWhatIsNewTocPageContext = createContext<UseWhatIsNewTocPageStores | null>( null );
export const useWhatIsNewTocPageStores = () => useContext( MobxWhatIsNewTocPageContext )  as UseWhatIsNewTocPageStores;
