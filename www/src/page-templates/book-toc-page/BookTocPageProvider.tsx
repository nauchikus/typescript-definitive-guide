import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import BookTocPage from "./BookTocPage";
import SEO from "../../components/seo";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { MobxBookTocContext } from "../../mobx/MobxBookTocProvider";
import { createBookTocPageStores, UseBookTocStores } from "../../stores/book-toc-stores";
import { useLocalStore } from "mobx-react-lite";
import { BookTocNode, TreeNode } from "../../stores/BookTocTreeStore";


interface IBookTocPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
        bookTocTree:TreeNode<BookTocNode>[];
    }
}

const BookTocPageProvider: FC<IBookTocPageProviderProps> = ( { pageContext } ) => {
    let { bookTocTree } = pageContext;
    let bookTocStoresRef = useRef<UseBookTocStores>( createBookTocPageStores( {
        bookTocTree
    } ) );
    let bookTocStores = useLocalStore( () => bookTocStoresRef.current );



    return (
        <MobxBookTocContext.Provider value={bookTocStores}>
            <BaseLayout>
                <SEO/>
                <BookTocPage/>
            </BaseLayout>
        </MobxBookTocContext.Provider>
    )
};

export default BookTocPageProvider