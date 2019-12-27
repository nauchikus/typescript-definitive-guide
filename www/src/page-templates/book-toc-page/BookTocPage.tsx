import "./book-toc.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { BookTocDriverLayout } from "../../layouts/book-toc-driver-layout/BookTocDriverLayout";
import { BookTocContentLayout } from "../../layouts/book-toc-content-layout/BookTocContentLayout";


interface IBookTocProps {
}

const BookTocPage: FC<IBookTocProps> = ( {  } ) => {
    return (
        <SliderSecondSpaceLayout
            driver={ <BookTocDriverLayout/> }
            content={ <BookTocContentLayout/> }/>
    );

};

export default BookTocPage;
