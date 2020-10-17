/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fs = require(`fs/promises`)
const path = require(`path`)


const { toChapterName } = require(`../config/old-to-new-book/utils`)
const { CustomGatsbyNodeType } = require(`./plugins/gatsby-node-types`);

const { Version } = require(`./src/utils/Version`);


class FileNames {
    static BOOK_COVER = `book-cover.png`;
    static BOOK_COVER_FOR_SOCIAL_MEDIA = `book-cover-for-social-media.png`;
}
class Paths {
    static BOOK_COVER_SOURCE = path.join(process.cwd(), `workers`, `book-cover`, `tdg.svg`);
    static BOOK_PDF_OUTPUT_DIR = path.join(process.cwd(), `public`, `pdf`);
    static BOOK_COVERS_OUTPUT_DIR = path.join(process.cwd(), `workers`, `pdf`);
    static BOOK_COVER = path.join(Paths.BOOK_COVERS_OUTPUT_DIR, FileNames.BOOK_COVER);
}



const getLastVersionInfo = winToc => {
    let lastWinTocItem = winToc[winToc.length - 1];
    let lastVersion = lastWinTocItem.releaseHistory[lastWinTocItem.releaseHistory.length - 1];
    let version = new Version(lastVersion.version);
    let versionInfo = version.toInfo();

    return versionInfo;
}

// exports.onPostBootstrap = async ({ actions: {createJobV2}, getNodesByType }) => {
//     let [bookTocGatsbyNode] = getNodesByType(CustomGatsbyNodeType.BookTocSource);
//     let { toc: bookToc } = bookTocGatsbyNode;
//
//     let [winTocGatsbyNode] = getNodesByType(CustomGatsbyNodeType.WhatIsNewToc);
//     let { toc: winToc } = winTocGatsbyNode;
//
//     let versionInfo = getLastVersionInfo(winToc);
//
//     if (process.env.NODE_ENV !== `production`) {
//         console.info(`Running jobs is missed `);
//
//         return Promise.resolve();
//     }
//
//
//     console.time(`[GENERATED BOOK COVERS]`);
//     await createJobV2({
//         name: `BOOK_COVER_WORKER`,
//         inputPaths: [Paths.BOOK_COVER_SOURCE],
//         outputDir: Paths.BOOK_COVERS_OUTPUT_DIR,
//         args: {
//             filenames: {
//                 bookCover: FileNames.BOOK_COVER,
//                 bookCoverForSocialMedia: FileNames.BOOK_COVER_FOR_SOCIAL_MEDIA,
//             },
//             versionInfo
//         }
//     });
//     console.timeEnd(`[GENERATED BOOK COVERS]`);
//
//
//     let inputPaths = bookToc.map((tocItem, index) => path.join(
//         process.cwd(),
//         `..//book/ru/chapters`,
//         toChapterName(index, tocItem.section, tocItem.title),
//         `content.md`
//     ));
//
//
//     console.time(`[GENERATED PDF]`);
//     await createJobV2({
//         name: `BOOK_PDF_WORKER`,
//         inputPaths,
//         outputDir: Paths.BOOK_PDF_OUTPUT_DIR,
//         args: {
//             bookName: `TypeScript Подробное Руководство`,
//             bookCoverPath: Paths.BOOK_COVER,
//             bookPdfOutputPath: path.join(Paths.BOOK_PDF_OUTPUT_DIR, `TypeScript Подробное Руководство.pdf`),
//             bookToc,
//             versionInfo
//         }
//     });
//     console.timeEnd(`[GENERATED PDF]`);
//
// }
