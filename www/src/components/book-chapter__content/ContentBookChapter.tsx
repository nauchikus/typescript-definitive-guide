import React, { FC, useLayoutEffect } from "react";
import { useContentDataBookChapter } from "../../react__context/BookChapterPageContentDataContext";
import { useAppContentIntersectionObserver } from "../../react__hooks/scroll-page-hook";
import { useRouter } from "../../stores/RouterStore";
import { useContentIntersectionObserver } from "../../react__hooks/content-intersection-observer-hook";
import { useCopyToBufferButtonFromNativeMarkup } from "../../react__hooks/copy-to-buffer-button-from-native-markup-hook";


interface IContentBookChapterProps {
}

export const ContentBookChapter:FC<IContentBookChapterProps>=()=>{
  useCopyToBufferButtonFromNativeMarkup();
  useContentIntersectionObserver();

  let bookChapterContent = useContentDataBookChapter();

  
  return (
    <span className="content__html-content-wrapper" dangerouslySetInnerHTML={{ __html: bookChapterContent.html}}></span>
  );
}