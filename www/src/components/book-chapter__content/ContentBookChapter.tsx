import React, { FC, useLayoutEffect } from "react";
import { useContentDataBookChapter } from "../../react__context/BookChapterPageContentDataContext";
import { useAppContentIntersectionObserver } from "../../react__hooks/scroll-page-hook";
import { useRouter } from "../../stores/RouterStore";
import { useContentIntersectionObserver } from "../../react__hooks/content-intersection-observer-hook";


interface IContentBookChapterProps {
}

export const ContentBookChapter:FC<IContentBookChapterProps>=()=>{
  useContentIntersectionObserver();

  let bookChapterContent = useContentDataBookChapter();

  
  return (
    <div className="content" dangerouslySetInnerHTML={{ __html: bookChapterContent.html}}></div>
  );
}