import React from "react"
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import { AppLocalization } from "../../types/app-localizations";
import WhatIsNewPage from "./WhatIsNewPage";
import SEO from "../../components/seo";
import { Localization } from "../../react-hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";


interface IWhatIsNewPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
    }
}

const WhatIsNewPageProvider: FC<IWhatIsNewPageProviderProps> = ( { pageContext } ) => {
    let { localization } = pageContext;


    return (
        <Localization.Provider value={localization}>
            <BaseLayout>
                <SEO/>
                <WhatIsNewPage/>
            </BaseLayout>
        </Localization.Provider>
    )
};

export default WhatIsNewPageProvider