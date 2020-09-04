const fs = require(`fs/promises`);
const path = require(`path`);

const Utils = require(`../old-to-new-book/utils`);

const BOOK_DIR = path.join(process.cwd(), `book`, `ru`);
const BOOK_CHAPTERS_DIR = path.join(BOOK_DIR, `chapters`);
const BOOK_TOC_PATH = path.join(BOOK_DIR, `metadata`, `toc.json`);

const isChapterNameValid = (chapterName, toc) => {
    let isMatch = toc.some(item => item.title === chapterName);

    if (!isMatch) {
        throw new Error(`Chapter with name "${chapterName}" not found in toc.`);
    }
}

const isChapterHeadingValid = (chapterDir, chapterHeadingAll, tocHeadingAll) => {
    if(chapterHeadingAll.length !== tocHeadingAll.length){
        throw new Error(`Num heading (${chapterHeadingAll.length}) for chapter with name "${chapterDir}" must be equal toc (${tocHeadingAll.length}).`);
    }

    let nameEqualInfos = chapterHeadingAll.reduce((result, chapterName, index) => {
        let tocName = tocHeadingAll[index];

        return result.add({
            chapterName,
            tocName,
            isEqual: chapterName === tocName
        });
    }, new Set());

    let isAllHeadingExistsValid = Array.from(nameEqualInfos).every(info => info.isEqual);

    if (!isAllHeadingExistsValid) {
        let errorMessage = Array.from(nameEqualInfos).reduce((result, { chapterName, tocName, isEqual }) => {
            return result.concat(`[${isEqual ? `Ok` : `Error`}] chapter "${chapterName}" to be equal toc "${tocName}"\n`);
        }, `Names must be equal for chapter "${chapterDir}". Stat -\n`);

        throw new Error(errorMessage);
    }
}

const validate = async ({BOOK_CHAPTERS_DIR, BOOK_TOC_PATH}) => {
    let tocJson = await fs.readFile(BOOK_TOC_PATH, `utf-8`);
    let toc = JSON.parse(tocJson);
    let chapterDirNameAll = await fs.readdir(BOOK_CHAPTERS_DIR);

    return await Promise.all(chapterDirNameAll.map(async chapterDir => {
        let content = await fs.readFile(path.join(BOOK_CHAPTERS_DIR, chapterDir, `content.md`), `utf-8`);
        let headingAll = Utils.getHeading(content);

        let chapterName = Utils.bookChapterDirToChapterName(chapterDir);

        isChapterNameValid(chapterName, toc);


        let currentTocItem = toc.find(item => item.title === chapterName);
        let chapterHeadingAll = headingAll;
        let tocHeadingAll = [currentTocItem.title, ...currentTocItem.subtitles]

        isChapterHeadingValid(
            chapterDir,
            chapterHeadingAll,
            tocHeadingAll,
        );
    }));
}

validate({
    BOOK_CHAPTERS_DIR,
    BOOK_TOC_PATH
})
    .then(() => console.log(`BOOK HEADING VALIDATE COMPLETE`))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
