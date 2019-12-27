import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import WhatIsNewTocPage from "./WhatIsNewTocPage";
import SEO from "../../components/seo";
import { Localization } from "../../react__hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { MobxWhatIsNewTocContext } from "../../mobx/MobxWhatIsNewTocProvider";
import { IWhatIsNewToc } from "../../types/IWhatIsNewToc";
import { TreeNode } from "../../stores/WhatIsNewTocTreeStore";
import { createBookTocPageStores, UseBookTocStores } from "../../stores/book-toc-stores";
import { useLocalStore } from "mobx-react-lite";
import { createWhatIsNewTocPageGuiStores, UseWhatIsNewTocStores } from "../../stores/what-is-new-toc-stores";


interface IWhatIsNewTocPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
        winTocTree:TreeNode<IWhatIsNewToc>[]
    }
}

const WhatIsNewTocPageProvider: FC<IWhatIsNewTocPageProviderProps> = ( { pageContext } ) => {
  let {winTocTree} = pageContext;
  let winTocStoresRef = useRef<UseWhatIsNewTocStores>( createWhatIsNewTocPageGuiStores( {
    winTocTree
  } ) );
  let winTocStores = useLocalStore( () => winTocStoresRef.current );

  return (
    <MobxWhatIsNewTocContext.Provider value={winTocStores }>
      <BaseLayout>
        <SEO/>
        <WhatIsNewTocPage/>
      </BaseLayout>
    </MobxWhatIsNewTocContext.Provider>
  );
};

export default WhatIsNewTocPageProvider