import { createToggleState, ToggleUiState } from "./AppStateService";
import { createWhatIsNewTocTree, TreeNode } from "./WhatIsNewTocTreeStore";
import { IWinPageContentData, IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { VersionFilterStore } from "./VersionFilterStore";
import { createIntersectionObserverStore } from "./IntersectionObserverStore";
import { ContentSectionStore } from "./ContentSectionStore";
import { VisibleSectionValidator } from "../validators/VisibleSectionValidator";
import { VersionInfoMeta } from "../transformers/innovationDataToVersionInfoTransformer";
import { PageNavWithFilterStore } from "./PageNavWithFilterStore";
import { createBehaviorNotification } from "./behavior-notificaion-store";
import { IWinPageNavData } from "../page-templates/what-is-new-page/WhatIsNewPageProvider";
import { ContentNavStore } from "./ContentNavStore";
import { ContentSectionWithFilterStore } from "./ContentSectionWithFilterStore";
import { LocationPartial, RouterStore } from "./RouterStore";
import { createContext, useContext } from "react";


interface ICreateWhatIsNewPageGuiStoresParams {
  winTocTree:TreeNode<IWhatIsNewToc>[];
  innovationData:IWinPageContentData;
  pageNavDataAll:IWinPageNavData[];
  location:LocationPartial;
  initialCheckedVersion:string[];
  versionInfoAll:VersionInfoMeta[];
}

export const createWhatIsNewPageMobxEntry = ({innovationData,versionInfoAll,initialCheckedVersion,winTocTree,pageNavDataAll,location}:ICreateWhatIsNewPageGuiStoresParams) => {
  let router = new RouterStore( location );
  let contentIntersectionObserver = createIntersectionObserverStore( {
    containerSelector:`main.content`,
    sectionSelector:`section.content__section`,
  } );
  let versionFilter = new VersionFilterStore({});
  versionFilter.addVersionInfo( ...versionInfoAll );
  initialCheckedVersion.length ?
    versionFilter.checkedByVersion( ...initialCheckedVersion ) :
    versionFilter.checkedAllVersion();

  let visibleSectionValidator = VisibleSectionValidator.create( {
    contentData: innovationData,
    versionFilter
  } );

  let contentSectionDefault = ContentSectionStore.create( {
    router,
    contentIntersectionObserver,
  } );
  let contentSection = ContentSectionWithFilterStore.create( {
    contentSection:contentSectionDefault,
    router,
    contentIntersectionObserver,
    versionFilter,
    visibleSectionValidator,
  } );


  let pageNav = PageNavWithFilterStore.create( {
    pageNavDataAll,
    router,
    versionFilter,
    contentSection
  } );
  pageNavDataAll.forEach( data => console.log( data ) );
  let contentNav = ContentNavStore.create( {
    pageNav,
    router,
    contentSection,
  } );


  return{
    stores:{
      winTocTreeStore:createWhatIsNewTocTree(winTocTree,false),
      contentDownPanelStore:createToggleState(ToggleUiState.Close),
      behaviorNotificationStore:createBehaviorNotification(),
      versionFilter,
      router,
      contentIntersectionObserver,
      contentNav,
      contentSection,
    },
    validators:{
      visibleSectionValidator
    }
  }
} ;

export type UseWhatIsNewPageMobxEntry=ReturnType<typeof createWhatIsNewPageMobxEntry>;
export type UseWhatIsNewPageStores=ReturnType<typeof createWhatIsNewPageMobxEntry>["stores"];


export const MobxWhatIsNewPageContext = createContext<UseWhatIsNewPageStores | null>( null );
export const useWhatIsNewPageStores = () => useContext( MobxWhatIsNewPageContext )  as UseWhatIsNewPageStores;

export const useVersionFilter = ():UseWhatIsNewPageStores["versionFilter"] => {
  let { versionFilter } = useWhatIsNewPageStores();

  return versionFilter;
};