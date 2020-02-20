import { IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { createWhatIsNewTocTree,TreeNode } from "./WhatIsNewTocTreeStore";
import { createBehaviorNotification } from "./PageNavStore";
import { createRouterStore } from "./RouterStore";


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