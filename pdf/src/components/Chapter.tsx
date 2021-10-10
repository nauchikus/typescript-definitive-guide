import React, {FC} from "react";
import ReactMarkdown from "react-markdown";
import {components} from "./markdown-component-map";
import {ChapterInfo} from "../create-book-data";
import { headingDownLevel } from "../remark/heading-downlevel";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { headingAddId } from "../remark/heading-add-id";

type ChapterProps = {
    markdown: string;
    chapterInfo: ChapterInfo;
}
export const Chapter: FC<ChapterProps> = ({markdown, chapterInfo}) => {
    const imageUrlTransformer = (src: string) => {
        const path = chapterInfo.imageDirname
          .concat( `/` )
          .concat( src.substr( src.lastIndexOf( `/` ) + 1 ) );

        return path;
    }
    return (
      <ReactMarkdown children={markdown} />
      /*<ReactMarkdown transformImageUri={imageUrlTransformer}
                     remarkPlugins={[[headingAddId, chapterInfo]]}
                     components={components as Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents>}
                     children={markdown} />*/
    );
}