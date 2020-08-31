import "./book.page.scss";

import React, { useCallback, useEffect, useState } from "react"
import {FC} from "react"
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { ContentLayout } from "../../layouts/content-layout/ContentLayout";
import { BookControlBarLayer } from "../../components/layer__book__control-bar-layer/BookControlBarLayer";
import { BookChapterPageAppDriver } from "../../components/app-driver__book-chapter-page/BookChapterPageAppDriver";
import { ContentWithNavLayer } from "../../components/layer__content__content-with-nav/ContentWithNavLayer";
import { ContentBookChapter } from "../../components/book-chapter__content/ContentBookChapter";
import { GithubInformerBookChapter } from "../../components/book-chapter__content__github-informer/GithubInformerBookChapter";
import { ConclusionContent } from "../../components/content__conclusion/ConclusionContent";


interface IBookPageProps {
}

const BookPage: FC<IBookPageProps> = ( {  } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;


  return (
    <SliderSecondSpaceLayout
      driver={ <BookChapterPageAppDriver/> }
      content={
        <ContentLayout
          controlBar={ <BookControlBarLayer/> }
          content={
            <ContentWithNavLayer>
              <GithubInformerBookChapter/>
              <ContentBookChapter/>
              <ConclusionContent/>
            </ContentWithNavLayer>
          }/>
      }/>
  );
};

export default BookPage;
