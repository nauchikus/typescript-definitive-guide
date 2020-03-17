import { IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { createWhatIsNewTocTree,TreeNode } from "./WhatIsNewTocTreeStore";
import { createRouterStore } from "./RouterStore";
import { createBehaviorNotification } from "./behavior-notificaion-store";


interface ICreateWhatIsNewTocPageGuiStoresParams {
  winTocTree: TreeNode<IWhatIsNewToc>[];
  location: Location;
}

export const createWhatIsNewTocMobxEntry = ({winTocTree}:ICreateWhatIsNewTocPageGuiStoresParams) => ( {
  winTocTreeStore:createWhatIsNewTocTree(winTocTree,false),
  behaviorNotificationStore:createBehaviorNotification(),
  router: createRouterStore( { location } ),
} );

export type UseWhatIsNewTocStores=ReturnType<typeof createWhatIsNewTocMobxEntry>;