import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import WhatIsNewTocPage from "./WhatIsNewTocPage";
import SEO from "../../components/seo";
import { Localization } from "../../react__hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { IWhatIsNewToc } from "../../types/IWhatIsNewToc";
import { TreeNode } from "../../stores/WhatIsNewTocTreeStore";
import {
  createWhatIsNewTocPageMobxEntry,
  MobxWhatIsNewTocPageContext,
  UseWhatIsNewTocPageStores
} from "../../stores/mobx-entry__what-is-new_toc";
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";
import { RouterStoreContext } from "../../stores/RouterStore";


interface IWhatIsNewTocPageProviderProps {
  pageContext: {
    locale: Locales;
    localization: AppLocalization;
    winTocTree: TreeNode<IWhatIsNewToc>[]
  },
  location: Location;
}

const WhatIsNewTocPageProvider: FC<IWhatIsNewTocPageProviderProps> = ( { pageContext,location } ) => {
  let {localization,winTocTree} = pageContext;
  let winTocStoresRef = useRef<UseWhatIsNewTocPageStores>( createWhatIsNewTocPageMobxEntry( {
    winTocTree,
    location
  } ) );

  return (
    <MobxWhatIsNewTocPageContext.Provider value={ winTocStoresRef.current }>
      <BehaviorNotificationContext.Provider value={ winTocStoresRef.current.behaviorNotificationStore }>
        <RouterStoreContext.Provider value={winTocStoresRef.current.router}>
          <Localization.Provider value={ localization }>
            <BaseLayout>
              <SEO/>
              <WhatIsNewTocPage/>
            </BaseLayout>
          </Localization.Provider>
        </RouterStoreContext.Provider>
      </BehaviorNotificationContext.Provider>
    </MobxWhatIsNewTocPageContext.Provider>
  );
};

export default WhatIsNewTocPageProvider