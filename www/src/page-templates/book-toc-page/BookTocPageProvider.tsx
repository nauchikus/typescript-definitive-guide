import React from "react"
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import { AppLocalization } from "../../types/app-localizations";
import BookTocPage from "./BookTocPage";
import SEO from "../../components/seo";
import { Localization } from "../../react-hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";


interface IBookTocPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
    }
}

const BookTocPageProvider: FC<IBookTocPageProviderProps> = ( { pageContext } ) => {
    let { localization } = pageContext;


    return (
        <Localization.Provider value={localization}>
            <BaseLayout>
                <SEO/>
                <BookTocPage/>
            </BaseLayout>
        </Localization.Provider>
    )
};

export default BookTocPageProvider