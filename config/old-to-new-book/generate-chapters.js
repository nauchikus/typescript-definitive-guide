const fs = require(`fs/promises`);
const path = require(`path`);

const { toChapterName } = require(`./utils`);

const toc = require('../../book/ru/metadata/toc.json');

const CHAPTERS_DIR = path.relative(`./`, `../../book/ru/chapters`);



const generateChapters = async ({CHAPTERS_DIR}) => {
    return await Promise.all(Array.from(toc).map(async (tocItem, index) => {
        await fs.mkdir(path.join(CHAPTERS_DIR, toChapterName(index, tocItem.section, tocItem.title)));
    }));
}

generateChapters({ CHAPTERS_DIR })
    .then(() => console.log(`CHAPTERS GENERATED COMPLETE`))
    .catch(console.error);
