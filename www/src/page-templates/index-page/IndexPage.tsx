import "./index.page.scss";

import React from "react"
import {FC} from "react"
import { BookChapterPage, LocalizationPaths } from "../../localization";
import { useTranslator } from "../../react-hooks/translator.hook";


interface IIndexPageProps {
}

const IndexPage: FC<IIndexPageProps> = ( {  } ) => {
    // let [[translation]]=useTranslator<[BookChapterPage]>(LocalizationPaths.BookChaptersPage);
    // let {gui}=translation;

    return (
        <h1>IndexPage</h1>
    )

};

export default IndexPage;
