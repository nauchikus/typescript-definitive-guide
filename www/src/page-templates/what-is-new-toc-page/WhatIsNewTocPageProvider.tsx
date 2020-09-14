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
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";
import { RouterStoreContext } from "../../stores/RouterStore";
import { WinTocPageMobxEntry, MobxWhatIsNewTocPageContext } from "../../mobx__entry/WinTocPageMobxEntry";
import { useNativeLinkDisableDefaultBehavior } from "../../react__hooks/useNativeLinkDisableDefaultBehavior";


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

  let mobxEntry = WinTocPageMobxEntry.getInstance({ location, winTocTree });

  // useNativeLinkDisableDefaultBehavior(mobxEntry.router);

  return (
    <MobxWhatIsNewTocPageContext.Provider value={ mobxEntry }>
      <BehaviorNotificationContext.Provider value={ mobxEntry.behaviorNotificationStore }>
        <RouterStoreContext.Provider value={mobxEntry.router}>
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
