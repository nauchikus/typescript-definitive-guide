import {BookChapterContentNav} from "../models/BookChapterContentNav";
import {generateIndex} from "../utils/string-utils";

export type UrlResolver = {
    image: string;
}

export class ContentNavToUrlResolverTransformer {
    static transform = (contentNav: BookChapterContentNav): UrlResolver => {
    //    https://raw.githubusercontent.com/nauchikus/typescript-definitive-guide/master/book/ru/chapters//images/type-conversion-ref-type.png
        let {index, section, title} = contentNav;
        let dirname = `${generateIndex(index, 3)}.(${section}) ${title}`;

        let resolver = {
            image: `https://raw.githubusercontent.com/nauchikus/typescript-definitive-guide/master/book/ru/chapters/${dirname}/images/`
        }


        return resolver;
    }
}