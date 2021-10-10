import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import prism from "remark-prism";
import { blockCodeDecorator } from "./block-code-decorate";
import { headingDownLevel } from "./heading-downlevel";
import { ChapterInfo } from "../create-book-data";
import { headingAddId } from "./heading-add-id";
import { headingDecorate } from "./heading-decorate";
import { imageLinkTransform } from "./image-link-transform";
import { linkTransform } from "./link-transform";




export class MarkdownCompiler {
  static compile = ( markdown: string, chapterInfo: ChapterInfo ) => unified()

    .use(imageLinkTransform, chapterInfo)
    .use(linkTransform, chapterInfo)

    .use(headingAddId, chapterInfo)
    .use(headingDownLevel)
    .use(headingDecorate, chapterInfo)

    .use(blockCodeDecorator)

    .use( prism as any )

    .use( remarkParse )
    .use( remarkRehype, { allowDangerousHtml: true } )
    .use( rehypeStringify, { allowDangerousHtml: true } )


    .process( markdown );

}