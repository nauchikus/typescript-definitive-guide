import { createToggleState, ToggleUiState } from "../stores/AppStateService";
import { TreeNode } from "../stores/WhatIsNewTocTreeStore";
import { IWinPageContentData, IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { VersionFilterStore } from "../stores/VersionFilterStore";
import { createIntersectionObserverStore } from "../stores/IntersectionObserverStore";
import { ContentSectionStore } from "../stores/ContentSectionStore";
import { VisibleSectionValidator } from "../validators/VisibleSectionValidator";
import { VersionInfoMeta } from "../transformers/innovationDataToVersionInfoTransformer";
import { PageNavWithFilterStore } from "../stores/PageNavWithFilterStore";
import { createBehaviorNotification } from "../stores/behavior-notificaion-store";
import { IWinPageNavData } from "../page-templates/what-is-new-page/WhatIsNewPageProvider";
import { ContentNavStore } from "../stores/ContentNavStore";
import { ContentSectionWithFilterStore } from "../stores/ContentSectionWithFilterStore";
import { LocationPartial, RouterStore } from "../stores/RouterStore";
import { createContext, useContext } from "react";
import { CollapseTreeMobxStore } from "../stores/CollapseTreeMobxStore";
import { InnovationDataStore } from "../stores/InnovationDataStore";
import { FormInnovationFilter } from "../filters/FormInnovationFilter";
import { InnovationFilterSearchParamsParser } from "../parsers/InnovationFilterSearchParamsParser";


interface IWhatIsNewPageStoresParams {
  winTocTree:TreeNode<IWhatIsNewToc>[];
  innovationData:IWinPageContentData;
  pageNavDataAll:IWinPageNavData[];
  location:LocationPartial;
  initialCheckedVersion:string[];
  versionInfoAll:VersionInfoMeta[];
}

export class WinPageMobxEntry {
  private static instance: ReturnType<typeof WinPageMobxEntry.create>;

  static create = ({ innovationData,versionInfoAll,initialCheckedVersion,winTocTree,pageNavDataAll,location}: IWhatIsNewPageStoresParams) => {
    let router = new RouterStore( location );
    let contentIntersectionObserver = createIntersectionObserverStore( {
      containerSelector:`main.content`,
      sectionSelector:`section.content__section`,
    } );

    let versionFilter = new VersionFilterStore({});
    versionFilter.addVersionInfo( ...versionInfoAll );

    let versionFilterSearchParamsAll = InnovationFilterSearchParamsParser.parse(
      router.urlSearchParams
    );

    versionFilterSearchParamsAll.length ?
      versionFilter.checkedByVersion( ...versionFilterSearchParamsAll ) :
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

    let innovations = new InnovationDataStore(
      innovationData.innovations
    );
    innovations.addFilter(new FormInnovationFilter(versionFilter));




    let pageNav = PageNavWithFilterStore.create( {
      pageNavDataAll,
      router,
      versionFilter,
      contentSection
    } );
    let contentNav = ContentNavStore.create( {
      pageNav,
      router,
      contentSection,
    } );


    return{
      stores:{
        winTocCollapseStore:new CollapseTreeMobxStore(winTocTree,false),
        contentDownPanelStore:createToggleState(ToggleUiState.Close),
        behaviorNotificationStore:createBehaviorNotification(),
        versionFilter,
        innovations,
        router,
        contentIntersectionObserver,
        contentNav,
        contentSection,
      },
      validators:{
        visibleSectionValidator,
      }
    }
  }
  static getInstance(params: IWhatIsNewPageStoresParams){
    if (!WinPageMobxEntry.instance) {
      WinPageMobxEntry.instance = WinPageMobxEntry.create(params);
    }

    return WinPageMobxEntry.instance;
  }
}


export type UseWhatIsNewPageMobxEntry=ReturnType<typeof WinPageMobxEntry.getInstance>;
export type UseWhatIsNewPageStores=ReturnType<typeof WinPageMobxEntry.getInstance>["stores"];


export const MobxWhatIsNewPageContext = createContext<UseWhatIsNewPageStores | null>( null );
export const useWhatIsNewPageStores = () => useContext( MobxWhatIsNewPageContext )  as UseWhatIsNewPageStores;

export const useVersionFilter = ():UseWhatIsNewPageStores["versionFilter"] => {
  let { versionFilter } = useWhatIsNewPageStores();

  return versionFilter;
};
export const useInnovations = ():UseWhatIsNewPageStores["innovations"] => {
  let { innovations } = useWhatIsNewPageStores();

  return innovations;
};
