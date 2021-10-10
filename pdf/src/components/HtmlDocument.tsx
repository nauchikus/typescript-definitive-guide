import React, {FC} from "react";
import {Cover} from "./Cover";
import {TitlePage} from "./TitlePage";
import {Toc} from "./Toc";
import {BookData} from "../create-book-data";

import path from "path";
import { EndPage } from "./EndPage";

export interface HtmlDocumentProps {
    data: BookData;
    content: string;
}
export const HtmlDocument: FC<HtmlDocumentProps> = ({content,data}) => {
    // const chapters = [...data.chapterAll].splice(20, 30).map(({markdown, chapterInfo}, index) => {
    //     return (
    //       <Chapter key={ index } markdown={ markdown } chapterInfo={ chapterInfo }/>
    //     );
    // });

    const getStylePath = () => path.join( process.cwd(), `src/main.css` );

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="author" content="https://github.com/nauchikus/typescript-definitive-guide"/>
                <meta name="description" content="Книга и документация по языку TypeScript, которая шаг за шагом раскрывает весь его потенциал не оставляя без внимания ни одной мелочи."/>
                <meta name="keywords" content="TypeScript"/>
                <meta name="generator" content="https://weasyprint.org"/>
                <meta name="dcterms.created" content={new Date().toLocaleDateString()}/>
                <meta name="dcterms.modified" content={new Date().toLocaleDateString()}/>

                <link rel="stylesheet" href={getStylePath()}/>

                <title>TypeScript: Подробное Руководство</title>
            </head>
            <body>
                <Cover />
                <TitlePage />
                <Toc toc={data.toc} />
                <main dangerouslySetInnerHTML={{__html: content}}></main>
                <EndPage />
            </body>
        </html>
    );
}