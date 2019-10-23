import React from "react"
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import { AppLocalization } from "../../types/app-localizations";
import IndexPage from "./IndexPage";
import SEO from "../../components/seo";
import { Localization } from "../../react-hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";


interface IIndexPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
    }
}

const IndexPageProvider: FC<IIndexPageProviderProps> = ( { pageContext } ) => {
    let { localization } = pageContext;

    let {}=localization.pages


    return (
        <Localization.Provider value={localization}>
            <BaseLayout>
                <SEO/>
                <IndexPage/>
            </BaseLayout>
        </Localization.Provider>
    )
};

export default IndexPageProvider