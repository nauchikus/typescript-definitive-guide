import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import BookTocPage from "./BookTocPage";
import SEO from "../../components/seo";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import {
    createBookTocPageMobxEntry, MobxBookTocPageContext,
    UseBookTocPageStores,
    useBookTocPageStores
} from "../../stores/mobx-entry__book_toc";
import { BookTocNode, TreeNode } from "../../stores/BookTocTreeStore";
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";
import { IBookChapterPageContentData } from "../../../plugins/gatsby-pages/create-book-page";
import { RouterStoreContext } from "../../stores/RouterStore";
import {Localization} from "../../react__hooks/translator.hook";


interface IBookTocPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
        pageContentData:IBookChapterPageContentData;
        bookTocTree:TreeNode<BookTocNode>[];
    };
    location: Location;
}

const BookTocPageProvider: FC<IBookTocPageProviderProps> = ( { pageContext },location ) => {
    let { bookTocTree, localization } = pageContext;
    let bookTocStoresRef = useRef<UseBookTocPageStores>( createBookTocPageMobxEntry( {
        bookTocTree,
        location,
    } ) );


    return (
        <MobxBookTocPageContext.Provider value={bookTocStoresRef.current}>
            <BehaviorNotificationContext.Provider value={bookTocStoresRef.current.behaviorNotificationStore}>
                <Localization.Provider value={localization}>
                    <RouterStoreContext.Provider value={bookTocStoresRef.current.router}>
                        <BaseLayout>
                            <SEO/>
                            <BookTocPage/>
                        </BaseLayout>
                    </RouterStoreContext.Provider>
                </Localization.Provider>
            </BehaviorNotificationContext.Provider>
        </MobxBookTocPageContext.Provider>
    )
};

export default BookTocPageProvider