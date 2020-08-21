import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import IndexPage from "./IndexPage";
import SEO from "../../components/seo";
import { Localization } from "../../react__hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { RouterStoreContext } from "../../stores/RouterStore";
import { IndexPageMobxEntry } from "../../stores/IndexPageMobxEntry";


interface IIndexPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
    };
    location: Location;
}

const IndexPageProvider: FC<IIndexPageProviderProps> = ( { pageContext,location } ) => {
    let { localization } = pageContext;

    let { pages,...appSharedLocalization } = localization;

    let mobxEntry = IndexPageMobxEntry.getInstance({ location });


    return (


        <Localization.Provider value={localization}>
            <RouterStoreContext.Provider value={mobxEntry.router}>
                <BaseLayout>
                    <SEO {...appSharedLocalization}/>
                    <IndexPage/>
                </BaseLayout>
            </RouterStoreContext.Provider>
        </Localization.Provider>
    )
};

export default IndexPageProvider
