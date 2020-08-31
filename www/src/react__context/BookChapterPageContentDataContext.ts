import { createContext, useContext } from "react";
import { IBookChapterPageNavData } from "../page-templates/book-page/BookPageProvider";
import { IBookChapterPageContentData } from "../../plugins/gatsby-pages/create-book-page";

export const BookChapterPageContentDataContext = createContext<IBookChapterPageContentData | null>( null );
export const useContentDataBookChapter = () => useContext( BookChapterPageContentDataContext ) as IBookChapterPageContentData;