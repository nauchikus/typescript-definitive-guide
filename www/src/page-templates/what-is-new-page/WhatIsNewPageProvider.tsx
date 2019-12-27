import React, { useRef } from "react";
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
import { createWhatIsNewPageGuiStores, UseWhatIsNewStores } from "../../stores/what-is-new-stores";
import { MobxWhatIsNewContext } from "../../mobx/MobxWhatIsNewProvider";
import { TreeNode } from "../../stores/WhatIsNewTocTreeStore";
import { useRouter } from "../../react__hooks/router-hook";
import { IPageNavData } from "../../types/IPageNavData";
import { PageNavDataContext } from "../../react__context/PageNavDataContext";


interface IWhatIsNewPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
        innovationData:IWhatIsNewData;
        winTocTree:TreeNode<IWhatIsNewToc>[];
        pageNavDataAll: IPageNavData[];
    }
}

const WhatIsNewPageProvider: FC<IWhatIsNewPageProviderProps> = ( { pageContext } ) => {
    let { localization,innovationData,winTocTree,pageNavDataAll } = pageContext;
    let routerStore = useRouter();
    let winStoresRef = useRef<UseWhatIsNewStores>( createWhatIsNewPageGuiStores( {
        winTocTree
    } ) );
    let winStores = useLocalStore( () => winStoresRef.current );


    return (
        <MobxWhatIsNewContext.Provider value={winStores}>
            <PageNavDataContext.Provider value={pageNavDataAll}>
                <Localization.Provider value={localization}>
                    <BaseLayout>
                        <SEO/>
                        <WinDataContext.Provider value={innovationData}>
                            <WhatIsNewPage/>
                        </WinDataContext.Provider>
                    </BaseLayout>
                </Localization.Provider>
            </PageNavDataContext.Provider>
        </MobxWhatIsNewContext.Provider>
    )
};

export default WhatIsNewPageProvider