import { createContext } from "react";
import { IBookChapterPageNavData } from "../page-templates/book-page/BookPageProvider";

export const BookChapterPageNavDataContext = createContext<IBookChapterPageNavData[] | null>( null );