import React, { FC } from "react";
import { SectionInformerContent } from "../content__section-informer/SectionInformerContent";
import { useContentDataBookChapter } from "../../react__context/BookChapterPageContentDataContext";

interface IGithubInformerBookChapterProps {
}

export const GithubInformerBookChapter: FC<IGithubInformerBookChapterProps> = () => {
  let contentData = useContentDataBookChapter();


  return (
    <SectionInformerContent commitInfoAll={ contentData.commitInfoAll }
                            contentOnGithubLink={ contentData.fileOnGithubLink }/>
  );
};