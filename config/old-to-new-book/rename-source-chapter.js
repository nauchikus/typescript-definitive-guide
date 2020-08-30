const fs = require(`fs/promises`);
const path = require(`path`);

const simpleGit = require(`simple-git`);
const git = simpleGit();

const CHAPTERS_DIR = path.relative(`./`, `../../book/ru/chapters`);

const getOldChapterInfoAll = async ({ CHAPTERS_DIR }) => {
    let chapterDirName = await fs.readdir(CHAPTERS_DIR);

    let oldChapterInfoAll = await Promise.all(chapterDirName.map(async dirName => {
        let CHAPTER_CONCRETE_DIR = path.join(CHAPTERS_DIR, dirName);
        let [chapterName] = await fs.readdir(CHAPTER_CONCRETE_DIR);

        if (!chapterName) {
            throw new Error(`File by path "${CHAPTER_CONCRETE_DIR}" not exists.`);
        }

        return {
            chapterDir: CHAPTER_CONCRETE_DIR,
            chapterPath: path.join(CHAPTER_CONCRETE_DIR, chapterName),
        };
    }));

    return oldChapterInfoAll;
};

const renameSourceChapters = async (oldChapterInfoAll) => {
    return await Promise.all(oldChapterInfoAll.map(async (oldChapterInfo) => {
        return git.mv(
            oldChapterInfo.chapterPath,
            path.join(oldChapterInfo.chapterDir, `content.md`)
        );
    }));
}

getOldChapterInfoAll({ CHAPTERS_DIR })
    .then(renameSourceChapters)
    .then(console.log)
    .catch(console.error);
