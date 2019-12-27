import React from "react"
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import IndexPage from "./IndexPage";
import SEO from "../../components/seo";
import { Localization } from "../../react__hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";


interface IIndexPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
    }
}

const IndexPageProvider: FC<IIndexPageProviderProps> = ( { pageContext } ) => {
    let { localization } = pageContext;

    let { pages,...appSharedLocalization } = localization;


    return (
        <Localization.Provider value={localization}>
            <BaseLayout>
                <SEO {...appSharedLocalization}/>
                <IndexPage/>
            </BaseLayout>
        </Localization.Provider>
    )
};

export default IndexPageProvider