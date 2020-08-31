const fs = require(`fs/promises`);
const path = require(`path`);

const { toChapterName } = require(`./utils`);

const toc = require(`../../book/ru/metadata/toc.json`);

const CHAPTERS_DIR = path.join(process.cwd(), `/book/ru/chapters`);


const isBookTocLengthValid = (bookToc, chapterDirNameAll) => {
    if (bookToc.length !== chapterDirNameAll.length) {
        throw new Error(`Toc length must be equal chapters dir length.`);
    }
}
const isBookTocItemValid = (toc, chapterDirNameAll) => {
    toc.forEach((tocItem, index) => {
        let chapterName = toChapterName(index, tocItem.section, tocItem.title);


        if (!chapterDirNameAll.includes(chapterName)) {
            throw new Error(`Chapter with name "${chapterName}" not found.`)
        }
    })
}
const bookTocValidate = async ({ CHAPTERS_DIR }) => {
    let chapterDirName = await fs.readdir(CHAPTERS_DIR);

    try {
        isBookTocLengthValid(toc, chapterDirName);
        isBookTocItemValid(toc, chapterDirName);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }


    return true;
};


bookTocValidate({ CHAPTERS_DIR })
    .then(()=>console.log(`BOOK TOC VALIDATION COMPLETE`))
    .catch(console.error);
