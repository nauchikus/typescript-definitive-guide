import React, { useEffect, useLayoutEffect, useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import WhatIsNewPage from "./WhatIsNewPage";
import SEO from "../../components/seo";
import { Localization } from "../../react__hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { IWhatIsNewData, IWhatIsNewToc } from "../../types/IWhatIsNewToc";
import { WinDataContext } from "../../react__hooks/win-data-hook";
import { useLocalStore } from "mobx-react-lite";
import { createWhatIsNewMobxEntry, UseWhatIsNewMobxEntry, UseWhatIsNewStores } from "../../stores/mobx-entry__what-is-new";
import { MobxWhatIsNewContext } from "../../mobx/MobxWhatIsNewProvider";
import { TreeNode } from "../../stores/WhatIsNewTocTreeStore";
import { useRouter } from "../../react__hooks/router-hook";
import { IPageNavData } from "../../types/IPageNavData";
import { PageNavDataContext } from "../../react__context/PageNavDataContext";
import { innovationDataToVersionInfoTransformer } from "../../transformers/innovationDataToVersionInfoTransformer";
import { urlSearchFilterParamToVersionFilterItemTransformer } from "../../transformers/url-search-filter-param-to-version-filter-item-transformer";
import { string } from "prop-types";
import {
    createWhatIsNewValidators,
    UseWhatIsNewValidators,
    WhatIsNewValidatorsContext
} from "../../validators/create-what-is-new-validators";
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";
import { BehaviorNotification as CustomNotification } from "../../components/notification__behavior-notification/BehaviorNotification";


interface IWhatIsNewPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
        innovationData:IWhatIsNewData;
        winTocTree:TreeNode<IWhatIsNewToc>[];
        pageNavDataAll: IPageNavData[];
    },
    location:Location
}

type DisposerRefs={
    versionFilterChangeDisposer: ( () => void ) | null;
}
const WhatIsNewPageProvider: FC<IWhatIsNewPageProviderProps> = ( { pageContext,location } ) => {
    let { localization,innovationData,winTocTree,pageNavDataAll } = pageContext;
    let routerStore = useRouter();

    let winMobxRef = useRef<UseWhatIsNewMobxEntry>( createWhatIsNewMobxEntry( {
        winTocTree,
        innovationData,
        pageNavDataAll,
        location,
        initialCheckedVersion: urlSearchFilterParamToVersionFilterItemTransformer(
          new URLSearchParams( location.search ).get( `filter` )
        ),
        versionInfoAll: innovationDataToVersionInfoTransformer( innovationData )
    } ) );

    let { stores, validators } = winMobxRef.current;
    let { router } = stores;

  console.log(`[[[PROVADER]]]`);

    useEffect( () => {
        router.setLocation( location );
    }, [location.hash] );
    useLayoutEffect( () => {
        let { versionFilter } = stores;

        versionFilter.clean();
        versionFilter.addVersionInfo(
          ...innovationDataToVersionInfoTransformer( innovationData )
        );


        let versionFilterCheckedIdAll = urlSearchFilterParamToVersionFilterItemTransformer(
          routerStore.search.get( `filter` )
        );

        versionFilterCheckedIdAll.length > 0 ?
          versionFilter.checkedByVersion( ...versionFilterCheckedIdAll ) :
          versionFilter.checkedAllVersion();

    }, [router.pageName] );



    return (
      <MobxWhatIsNewContext.Provider value={ stores }>
          <WhatIsNewValidatorsContext.Provider value={validators}>
              <BehaviorNotificationContext.Provider value={stores.behaviorNotificationStore}>
                  <PageNavDataContext.Provider value={ pageNavDataAll }>
                      <Localization.Provider value={ localization }>
                          <BaseLayout>
                              <SEO/>
                              <WinDataContext.Provider value={ innovationData }>
                                  <WhatIsNewPage/>
                                  <CustomNotification/>
                              </WinDataContext.Provider>
                          </BaseLayout>
                      </Localization.Provider>
                  </PageNavDataContext.Provider>
              </BehaviorNotificationContext.Provider>
          </WhatIsNewValidatorsContext.Provider>
      </MobxWhatIsNewContext.Provider>
    );
};

export default WhatIsNewPageProvider