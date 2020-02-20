import { createToggleState, ToggleUiState } from "./AppStateService";
import { createWhatIsNewTocTree, TreeNode } from "./WhatIsNewTocTreeStore";
import { IWhatIsNewData, IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { createBehaviorNotification } from "./PageNavStore";
import { useWhatIsNewStores } from "../mobx/MobxWhatIsNewProvider";
import { VersionFilterStore } from "./VersionFilterStore";
import { createRouterStore, LocationPartial } from "./RouterStore";
import { createIntersectionObserverStore } from "./IntersectionObserverStore";
import { createContentNavStore } from "./ContentNavStore";
import { IPageNavData } from "../types/IPageNavData";
import { ContentSectionStore } from "./ContentSectionStore";
import { VisibleSectionValidator } from "../validators/VisibleSectionValidator";
import { VersionInfoMeta } from "../transformers/innovationDataToVersionInfoTransformer";


interface ICreateWhatIsNewPageGuiStoresParams {
  winTocTree:TreeNode<IWhatIsNewToc>[];
  innovationData:IWhatIsNewData;
  pageNavDataAll:IPageNavData[];
  location:LocationPartial;
  initialCheckedVersion:string[];
  versionInfoAll:VersionInfoMeta[];
}

export const createWhatIsNewMobxEntry = ({innovationData,versionInfoAll,initialCheckedVersion,winTocTree,pageNavDataAll,location}:ICreateWhatIsNewPageGuiStoresParams) => {
  let router = createRouterStore({location});
  let contentIntersectionObserver = createIntersectionObserverStore( {
    containerSelector:`main`,
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

  let contentSection = ContentSectionStore.create( {
    router,
    contentIntersectionObserver,
    versionFilter,
    visibleSectionValidator,
  } );



  let contentNav = createContentNavStore( {
    pageNavDataAll,
    router,
    contentIntersectionObserver,
    versionFilter,
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

export type UseWhatIsNewMobxEntry=ReturnType<typeof createWhatIsNewMobxEntry>;
export type UseWhatIsNewStores=ReturnType<typeof createWhatIsNewMobxEntry>["stores"];
export type UseWhatIsNewValidators=ReturnType<typeof createWhatIsNewMobxEntry>["validators"];


// export const useBehaviorNotification = () => {
//   let { behaviorNotificationStore } = useWhatIsNewStores();
//
//   return behaviorNotificationStore;
// };
export const useVersionFilter = ():UseWhatIsNewStores["versionFilter"] => {
  let { versionFilter } = useWhatIsNewStores();

  return versionFilter;
};