import React, {useCallback, useEffect, useLayoutEffect, useRef} from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import WhatIsNewPage from "./WhatIsNewPage";
import SEO from "../../components/seo";
import { Localization } from "../../react__hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { IWinPageContentData, IWhatIsNewToc } from "../../types/IWhatIsNewToc";
import { WinPageContentDataContext } from "../../react__hooks/win__page-content-data-hook";
import { TreeNode } from "../../stores/WhatIsNewTocTreeStore";
import { IPageNavLeaf, IPageNavNode } from "../../types/IPageNavData";
import { WinPageNavDataContext } from "../../react__context/WinPageNavDataContext";
import { innovationDataToVersionInfoTransformer } from "../../transformers/innovationDataToVersionInfoTransformer";
import { urlSearchFilterParamToVersionFilterItemTransformer } from "../../transformers/url-search-filter-param-to-version-filter-item-transformer";
import { WhatIsNewValidatorsContext } from "../../validators/create-what-is-new-validators";
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";
import { BehaviorNotification as CustomNotification } from "../../components/notification__behavior-notification/BehaviorNotification";
import { ContentDownPanelStoreContext } from "../../mobx__mobx-shared-store__react-context/ContentDownPanelStoreMobxContext";
import { ContentNavStoreContext } from "../../mobx__mobx-shared-store__react-context/ContentNavStoreMobxContext";
import { ContentIntersectionObserverStoreContext } from "../../react__context/ContentIntersectionObserverStoreContext";
import { RouterStoreContext } from "../../stores/RouterStore";
import { WinPageMobxEntry, MobxWhatIsNewPageContext } from "../../stores/WinPageMobxEntry";
import { useNativeLinkDisableDefaultBehavior } from "../../react__hooks/useNativeLinkDisableDefaultBehavior";
import { useRouterUpdater } from "../../react__hooks/useRouterUpdater";


export interface IVersionable {
    version:string;
}
export interface IWinPageNavData extends IPageNavNode<Required<IPageNavLeaf<IVersionable>>>{

}


interface IWhatIsNewPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
        innovationData:IWinPageContentData;
        winTocTree:TreeNode<IWhatIsNewToc>[];
        pageNavDataAll: IWinPageNavData[];
    },
    location:Location
}

type DisposerRefs={
    versionFilterChangeDisposer: ( () => void ) | null;
}
const WhatIsNewPageProvider: FC<IWhatIsNewPageProviderProps> = ( { pageContext,location } ) => {
    let { localization,innovationData,winTocTree,pageNavDataAll } = pageContext;

    let mobxStores = WinPageMobxEntry.getInstance({
        winTocTree,
        innovationData,
        pageNavDataAll,
        location,
        initialCheckedVersion: urlSearchFilterParamToVersionFilterItemTransformer(
          new URLSearchParams( location.search ).get( `filter` )
        ),
        versionInfoAll: innovationDataToVersionInfoTransformer( innovationData )
    })

    let { stores, validators } = mobxStores;
    let { router } = stores;


    useRouterUpdater(location, router);


    useLayoutEffect( () => {
        let { versionFilter } = stores;

        versionFilter.clean();
        versionFilter.addVersionInfo(
          ...innovationDataToVersionInfoTransformer( innovationData )
        );


        let versionFilterCheckedIdAll = urlSearchFilterParamToVersionFilterItemTransformer(
          router.search.get( `filter` )
        );

        versionFilterCheckedIdAll.length > 0 ?
          versionFilter.checkedByVersion( ...versionFilterCheckedIdAll ) :
          versionFilter.checkedAllVersion();

    }, [router.pageName] );



    return (
      <MobxWhatIsNewPageContext.Provider value={ stores }>
          <WhatIsNewValidatorsContext.Provider value={validators}>
              <BehaviorNotificationContext.Provider value={stores.behaviorNotificationStore}>
                  <WinPageNavDataContext.Provider value={ pageNavDataAll }>
                      <Localization.Provider value={ localization }>
                          <RouterStoreContext.Provider value={router}>
                              <ContentIntersectionObserverStoreContext.Provider value={stores.contentIntersectionObserver}>
                                  <ContentNavStoreContext.Provider value={stores.contentNav}>
                                      <ContentDownPanelStoreContext.Provider value={stores.contentDownPanelStore}>
                                          <BaseLayout>
                                              <SEO/>
                                              <WinPageContentDataContext.Provider value={ innovationData }>
                                                  <WhatIsNewPage/>
                                                  <CustomNotification/>
                                              </WinPageContentDataContext.Provider>
                                          </BaseLayout>
                                      </ContentDownPanelStoreContext.Provider>
                                  </ContentNavStoreContext.Provider>
                              </ContentIntersectionObserverStoreContext.Provider>
                          </RouterStoreContext.Provider>
                      </Localization.Provider>
                  </WinPageNavDataContext.Provider>
              </BehaviorNotificationContext.Provider>
          </WhatIsNewValidatorsContext.Provider>
      </MobxWhatIsNewPageContext.Provider>
    );
};

export default WhatIsNewPageProvider
