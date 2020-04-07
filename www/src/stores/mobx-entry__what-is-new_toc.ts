import { IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { createWhatIsNewTocTree,TreeNode } from "./WhatIsNewTocTreeStore";
import { RouterStore } from "./RouterStore";
import { createBehaviorNotification } from "./behavior-notificaion-store";
import { createContext, useContext } from "react";



interface ICreateWhatIsNewTocPageGuiStoresParams {
  winTocTree: TreeNode<IWhatIsNewToc>[];
  location: Location;
}

export const createWhatIsNewTocPageMobxEntry = ({winTocTree}:ICreateWhatIsNewTocPageGuiStoresParams) => ( {
  winTocTreeStore:createWhatIsNewTocTree(winTocTree,false),
  behaviorNotificationStore:createBehaviorNotification(),
  router: RouterStore.create( { location } ),
} );

export type UseWhatIsNewTocPageStores=ReturnType<typeof createWhatIsNewTocPageMobxEntry>;

export const MobxWhatIsNewTocPageContext = createContext<UseWhatIsNewTocPageStores | null>( null );
export const useWhatIsNewTocPageStores = () => useContext( MobxWhatIsNewTocPageContext )  as UseWhatIsNewTocPageStores;
