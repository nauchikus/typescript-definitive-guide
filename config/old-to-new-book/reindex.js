const fs = require(`fs/promises`);
const path = require(`path`);

const simpleGit = require(`simple-git`);
const git = simpleGit();

const { bookChapterNameRemoveIndex, toChapterName } = require(`./utils`);


const toc = require(`../../book/ru/metadata/toc.json`);

const CHAPTERS_DIR = path.join(process.cwd(), `/book/ru/chapters`);
// const CHAPTERS_DIR = path.join(process.cwd(), `../../book/ru/chapters`);

const removeIndex = async ({CHAPTERS_DIR, chapterDirNameAll}) => {
    return await Promise.all(chapterDirNameAll.map(chapterName => {
        console.log(`[# rename]`, path.join(CHAPTERS_DIR, chapterName),
          path.join(CHAPTERS_DIR, bookChapterNameRemoveIndex(chapterName)));
        return fs.rename(
            path.join(CHAPTERS_DIR, chapterName),
            path.join(CHAPTERS_DIR, bookChapterNameRemoveIndex(chapterName))
        );
    }))
}
const addNewIndex = async ({CHAPTERS_DIR, toc}) => {
    return await Promise.all(toc.map((tocItem, index) => {
        let currentBookChapterName = toChapterName(index, tocItem.section, tocItem.title);
        let currentBookChapterNameWithoutIndex = bookChapterNameRemoveIndex(currentBookChapterName);


        return fs.rename(
            path.join(CHAPTERS_DIR, currentBookChapterNameWithoutIndex),
            path.join(CHAPTERS_DIR, currentBookChapterName)
        );
    }));
}

const reindex = async ({ CHAPTERS_DIR }) => {
    let chapterDirNameAll = await fs.readdir(CHAPTERS_DIR);

    await removeIndex({
        CHAPTERS_DIR,
        chapterDirNameAll
    });
    await addNewIndex({
        CHAPTERS_DIR,
        toc
    });
};


reindex({ CHAPTERS_DIR })
    .then(()=>console.log(`BOOK TOC REINDEX COMPLETE`))
    .catch(error=> {
        console.error(error);
        process.exit(1);
    });
