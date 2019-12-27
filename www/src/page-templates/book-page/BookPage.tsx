import "./book.page.scss";

import React, { useCallback, useEffect, useState } from "react"
import {FC} from "react"
import { useAppDriver } from "../../react__hooks/app-driver-control.hook";
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { Link } from "gatsby";


interface IBookPageProps {
}

const BookPage: FC<IBookPageProps> = ( {  } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;


    return (
      <>
          <SliderSecondSpaceLayout
            driver={ <div className="fill tomato"></div> }
            content={ <div className="fill pink h-x3 lines-x"></div> }/>
      </>
    );
};

export default BookPage;
