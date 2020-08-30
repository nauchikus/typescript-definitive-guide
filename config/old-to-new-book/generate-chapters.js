const fs = require(`fs/promises`);
const path = require(`path`);

const toc = require('../../book/ru/metadata/toc.json');

const CHAPTERS_DIR = path.relative(`./`, `../../book/ru/chapters`);

const toIndex = (index, length = 3, symbol = `0`) =>
    symbol.repeat(length - index.toString().length).concat(index.toString());

const generateChapters = async ({CHAPTERS_DIR}) => {
    return await Promise.all(Array.from(toc).map(async (tocItem, index) => {
        await fs.mkdir(path.join(CHAPTERS_DIR, `${toIndex(index)}.(${tocItem.section}) ${tocItem.title}`));
    }));
}

generateChapters({ CHAPTERS_DIR })
    .then(() => console.log(`CHAPTERS GENERATED COMPLETE`))
    .catch(console.error);
