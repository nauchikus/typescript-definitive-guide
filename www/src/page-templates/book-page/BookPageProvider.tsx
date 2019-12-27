import React from "react"
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import BookPage from "./BookPage";
import SEO from "../../components/seo";
import BaseLayout from "../../layouts/base-layout/BaseLayout";


interface IBookPageProviderProps {
    pageContext:{
        locale: Locales;
    }
}

const BookPageProvider: FC<IBookPageProviderProps> = ( { pageContext } ) => {

    return (
      <BaseLayout>
          <SEO/>
          <BookPage/>
      </BaseLayout>
    )
};

export default BookPageProvider