const fs = require(`fs/promises`);
const path = require(`path`);

const Utils = require(`../old-to-new-book/utils`);
const HeadingValidators = require(`./heading-validators`);

const BOOK_DIR = path.join(process.cwd(), `book`, `ru`);
const BOOK_CHAPTERS_DIR = path.join(BOOK_DIR, `chapters`);
const BOOK_TOC_PATH = path.join(BOOK_DIR, `metadata`, `toc.json`);



const validate = async ({BOOK_CHAPTERS_DIR, BOOK_TOC_PATH}) => {
    let tocJson = await fs.readFile(BOOK_TOC_PATH, `utf-8`);
    let toc = JSON.parse(tocJson);
    let chapterDirNameAll = await fs.readdir(BOOK_CHAPTERS_DIR);

    return await Promise.all(chapterDirNameAll.map(async chapterDir => {
        let content = await fs.readFile(path.join(BOOK_CHAPTERS_DIR, chapterDir, `content.md`), `utf-8`);
        let headingAll = Utils.getHeading(content);

        let chapterName = Utils.bookChapterDirToChapterName(chapterDir);

        HeadingValidators.isChapterNameValid(chapterName, toc);


        let currentTocItem = toc.find(item => item.title === chapterName);
        let chapterHeadingAll = headingAll;
        let tocHeadingAll = [currentTocItem.title, ...currentTocItem.subtitles]

        HeadingValidators.isChapterHeadingValid(
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
