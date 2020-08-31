import "./book-toc.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { BookTocContentLayout } from "../../layouts/book-toc-content-layout/BookTocContentLayout";
import { ContentLayout } from "../../layouts/content-layout/ContentLayout";
import { BookTocControlBarLayer } from "../../components/layer__book-toc__control-bar-layer/BookTocControlBarLayer";
import { WhatIsNewTocPageAppDriver } from "../../components/app-driver__what-is-new-toc-page/WhatIsNewTocPageAppDriver";


interface IBookTocProps {
}

const BookTocPage: FC<IBookTocProps> = ( {  } ) => {
  return (
    <SliderSecondSpaceLayout
      driver={ <WhatIsNewTocPageAppDriver/> }
      content={
        <ContentLayout
          controlBar={ <BookTocControlBarLayer/> }
          content={ <BookTocContentLayout/> }/>
      }
    />
  );

};

export default BookTocPage;
