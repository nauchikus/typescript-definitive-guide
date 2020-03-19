import { IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { createWhatIsNewTocTree,TreeNode } from "./WhatIsNewTocTreeStore";
import { RouterStore } from "./RouterStore";
import { createBehaviorNotification } from "./behavior-notificaion-store";



interface ICreateWhatIsNewTocPageGuiStoresParams {
  winTocTree: TreeNode<IWhatIsNewToc>[];
  location: Location;
}

export const createWhatIsNewTocMobxEntry = ({winTocTree}:ICreateWhatIsNewTocPageGuiStoresParams) => ( {
  winTocTreeStore:createWhatIsNewTocTree(winTocTree,false),
  behaviorNotificationStore:createBehaviorNotification(),
  router: RouterStore.create( { location } ),
} );

export type UseWhatIsNewTocStores=ReturnType<typeof createWhatIsNewTocMobxEntry>;