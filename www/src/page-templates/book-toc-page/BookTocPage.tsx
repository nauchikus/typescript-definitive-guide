import "./book-toc.page.scss";

import React from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { BookTocDriverLayout } from "../../layouts/book-toc-driver-layout/BookTocDriverLayout";
import { BookTocContentLayout } from "../../layouts/book-toc-content-layout/BookTocContentLayout";
import { BehaviorNotification as CustomNotification } from "../../components/notification__behavior-notification/BehaviorNotification";
import { ContentLayout } from "../../layouts/content-layout/ContentLayout";
import { BookTocControlBarLayer } from "../../components/layer__book-toc__control-bar-layer/BookTocControlBarLayer";
import { BookTocAsideLayout } from "../../layouts/book-toc-aside-layout/BookTocAsideLayout";
import { WhatIsNewTocPageAppDriver } from "../../components/app-driver__what-is-new-toc-page/WhatIsNewTocPageAppDriver";


interface IBookTocProps {
}

const BookTocPage: FC<IBookTocProps> = ( {  } ) => {
  return (
    <>
      <SliderSecondSpaceLayout
        driver={ <WhatIsNewTocPageAppDriver/> }
        content={
          <ContentLayout
            controlBar={ <BookTocControlBarLayer/> }
            content={ <BookTocContentLayout/>}/>
        }
        aside={<BookTocAsideLayout/>}/>
      <CustomNotification/>
    </>
  );

};

export default BookTocPage;
