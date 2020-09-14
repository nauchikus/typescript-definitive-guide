import React from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import BookTocPage from "./BookTocPage";
import SEO from "../../components/seo";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { BookTocNode, TreeNode } from "../../stores/BookTocTreeStore";
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";
import { IBookChapterPageContentData } from "../../../plugins/gatsby-pages/create-book-page";
import { RouterStoreContext } from "../../stores/RouterStore";
import {Localization} from "../../react__hooks/translator.hook";
import { BookTocPageMobxEntry, MobxBookTocPageContext } from "../../mobx__entry/BookTocPageMobxEntry";
import { useNativeLinkDisableDefaultBehavior } from "../../react__hooks/useNativeLinkDisableDefaultBehavior";


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
    let mobxEntry = BookTocPageMobxEntry.getInstance({ bookTocTree, location });


    // useNativeLinkDisableDefaultBehavior(mobxEntry.router);


    return (
        <MobxBookTocPageContext.Provider value={mobxEntry}>
            <BehaviorNotificationContext.Provider value={mobxEntry.behaviorNotificationStore}>
                <Localization.Provider value={localization}>
                    <RouterStoreContext.Provider value={mobxEntry.router}>
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
