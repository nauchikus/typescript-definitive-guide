import React from "react"
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import { AppLocalization } from "../../types/app-localizations";
import BookPage from "./BookPage";
import SEO from "../../components/seo";
import { Localization } from "../../react-hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";


interface IBookPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
    }
}

const BookPageProvider: FC<IBookPageProviderProps> = ( { pageContext } ) => {
    let { localization } = pageContext;


    return (
        <Localization.Provider value={localization}>
            <BaseLayout>
                <SEO/>
                <BookPage/>
            </BaseLayout>
        </Localization.Provider>
    )
};

export default BookPageProvider