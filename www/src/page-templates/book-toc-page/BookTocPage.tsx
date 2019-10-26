import "./book-toc.page.scss";

import React from "react"
import {FC} from "react"
import { useAppDriver } from "../../react-hooks/app-driver-control.hook";
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";


interface IBookTocProps {
}

const BookTocPage: FC<IBookTocProps> = ( {  } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;

    return (
        <SliderSecondSpaceLayout
            driver={ <div className="fill tomato"></div> }
            content={ <div className="fill pink h-x3 lines-x"></div> }/>
    );

};

export default BookTocPage;
