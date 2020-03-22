import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import WhatIsNewTocPage from "./WhatIsNewTocPage";
import SEO from "../../components/seo";
import { Localization } from "../../react__hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { MobxWhatIsNewTocContext } from "../../mobx__react-content-provider/MobxWhatIsNewTocProvider";
import { IWhatIsNewToc } from "../../types/IWhatIsNewToc";
import { TreeNode } from "../../stores/WhatIsNewTocTreeStore";
import { createBookTocMobxEntry, UseBookTocStores } from "../../stores/mobx-entry__book_toc";
import { useLocalStore } from "mobx-react-lite";
import { createWhatIsNewTocMobxEntry, UseWhatIsNewTocStores } from "../../stores/mobx-entry__what-is-new_toc";
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
  let winTocStoresRef = useRef<UseWhatIsNewTocStores>( createWhatIsNewTocMobxEntry( {
    winTocTree,
    location
  } ) );

  return (
    <MobxWhatIsNewTocContext.Provider value={ winTocStoresRef.current }>
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
    </MobxWhatIsNewTocContext.Provider>
  );
};

export default WhatIsNewTocPageProvider