import React from "react"
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import { AppLocalization } from "../../types/app-localizations";
import WhatIsNewTocPage from "./WhatIsNewTocPage";
import SEO from "../../components/seo";
import { Localization } from "../../react-hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";


interface IWhatIsNewTocPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
    }
}

const WhatIsNewTocPageProvider: FC<IWhatIsNewTocPageProviderProps> = ( { pageContext } ) => {
    let { localization } = pageContext;


    return (
        <Localization.Provider value={localization}>
            <BaseLayout>
                <SEO/>
                <WhatIsNewTocPage/>
            </BaseLayout>
        </Localization.Provider>
    )
};

export default WhatIsNewTocPageProvider