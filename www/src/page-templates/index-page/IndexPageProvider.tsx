import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import IndexPage from "./IndexPage";
import SEO from "../../components/seo";
import { Localization } from "../../react__hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { RouterStoreContext } from "../../stores/RouterStore";
import { IndexPageMobxEntry } from "../../mobx__entry/IndexPageMobxEntry";
import { VersionInfo, VersionInfoContext } from "../../react__hooks/useVersionInfo";


interface IIndexPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
        versionInfo: VersionInfo;
    };
    location: Location;

}

const IndexPageProvider: FC<IIndexPageProviderProps> = ( { pageContext,location } ) => {
    let { localization, versionInfo } = pageContext;

    let { pages,...appSharedLocalization } = localization;

    let mobxEntry = IndexPageMobxEntry.getInstance({ location });
    let meta = [
        { name: `yandex-verification`, content: `d7555ce264b8a099` }
    ];

    return (


        <Localization.Provider value={localization}>
            <VersionInfoContext.Provider value={versionInfo}>
                <RouterStoreContext.Provider value={mobxEntry.router}>
                    <BaseLayout>
                        <SEO {...{...appSharedLocalization, meta}}/>
                        <IndexPage/>
                    </BaseLayout>
                </RouterStoreContext.Provider>
            </VersionInfoContext.Provider>
        </Localization.Provider>
    )
};

export default IndexPageProvider
