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
    static BOOK_COVER = `book_cover.png`;
    static BOOK_COVER_FOR_SOCIAL_MEDIA = `book_cover_for_social_media.png`;
}
class Paths {
    static BOOK_COVER_SOURCE = path.join(process.cwd(), `workers`, `book-cover`, `tdg.svg`);
    static BOOK_COVERS_OUTPUT_DIR = path.join(process.cwd(), `public`, `assets`, `book_covers`);
    static BOOK_COVER = path.join(Paths.BOOK_COVERS_OUTPUT_DIR, FileNames.BOOK_COVER);
}



const getLastVersionInfo = winToc => {
    let lastWinTocItem = winToc[winToc.length - 1];
    let lastVersion = lastWinTocItem.releaseHistory[lastWinTocItem.releaseHistory.length - 1];
    let version = new Version(lastVersion.version);
    let versionInfo = version.toInfo();

    return versionInfo;
}

exports.onPostBootstrap = async ({ actions: {createJobV2}, getNodesByType }) => {
    let [bookTocGatsbyNode] = getNodesByType(CustomGatsbyNodeType.BookTocSource);
    let { toc: bookToc } = bookTocGatsbyNode;

    let [winTocGatsbyNode] = getNodesByType(CustomGatsbyNodeType.WhatIsNewToc);
    let { toc: winToc } = winTocGatsbyNode;

    let versionInfo = getLastVersionInfo(winToc);




    console.time(`[GENERATED BOOK COVERS]`);
    await createJobV2({
        name: `BOOK_COVER_WORKER`,
        inputPaths: [Paths.BOOK_COVER_SOURCE],
        outputDir: Paths.BOOK_COVERS_OUTPUT_DIR,
        args: {
            filenames: {
                bookCover: FileNames.BOOK_COVER,
                bookCoverForSocialMedia: FileNames.BOOK_COVER_FOR_SOCIAL_MEDIA,
            },
            versionInfo
        }
    });
    console.timeEnd(`[GENERATED BOOK COVERS]`);


    let inputPaths = bookToc.map((tocItem, index) => path.join(
        process.cwd(),
        `..//book/ru/chapters`,
        toChapterName(index, tocItem.section, tocItem.title),
        `content.md`
    ));


    console.time(`[GENERATED PDF]`);
    await createJobV2({
        name: `BOOK_PDF_WORKER`,
        inputPaths,
        outputDir: path.join(process.cwd(), `public`, `assets`, `pdf`),
        args: {
            bookName: `TypeScript Подробное Руководство`,
            bookCoverPath: Paths.BOOK_COVER,
            bookToc,
            versionInfo
        }
    });
    console.timeEnd(`[GENERATED PDF]`);

}
