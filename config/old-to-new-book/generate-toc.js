const fs = require(`fs/promises`);
const path = require(`path`);
const querystring = require(`querystring`);

const CHAPTER_DIR = path.relative(`./`, `../../chapters`);
const TOC_PATH = path.relative(`./`, `../../book/ru/metadata/toc.json`);
const CONTENTS_PATH = path.relative(`./`, `./contents.md`);

const getTitle = content => {
    let [, heading] = content.match(/^(?:#)\s(.+)\s*$/m);

    return heading.trim();
}
const getSubtitleAll = content => {
    return Array.from(content.matchAll(/^(?:##)\s(.+)\s*$/gm))
        .map(([, heading]) => heading.trim());
}

const generateTocInfoAll = async ({CHAPTER_DIR}) => {
    let fileNameAll = await fs.readdir(CHAPTER_DIR);
    let tocInfoPromiseAll = await fileNameAll.map(async filename => {
        let content = await fs.readFile(
            path.join(CHAPTER_DIR, `${filename}`),
            { encoding: `utf-8` }
        );

        let title = null;
        let subtitles = null;

        try {
            title = getTitle(content);
        } catch (error) {
            console.error(`Not found title for file ${filename}`);
        }

        try {
            subtitles = getSubtitleAll(content);
        } catch (error) {
            console.error(`Not found subtitles for file ${filename}`);
        }

        let tocItem = {
            section: ``,
            title,
            subtitles
        };


        let tocInfo = {
            filename: path.basename(filename, `.md`),
            tocItem
        };

        return tocInfo;
    });

    let tocInfoAll = await Promise.all(tocInfoPromiseAll);


    return tocInfoAll;
}
const sortToc = async newTocInfoAll => {
    let contents = await fs.readFile(CONTENTS_PATH, { encoding: `utf-8`});
    let oldToc = contents.split(`\n`);

    let newTocSorted = oldToc
        .filter(Boolean)
        .map(chapterName => {
            let tocInfo = newTocInfoAll.find(tocInfo => tocInfo.filename === chapterName);

            if (!tocInfo) {
                throw new Error(`Toc info with key "${chapterName}" not found.`);
            }


            return tocInfo.tocItem;
        });

    return newTocSorted;
}
const writeToc = async toc => {
    return await fs.writeFile(TOC_PATH, JSON.stringify(toc));
}

generateTocInfoAll({ CHAPTER_DIR })
    .then(sortToc)
    .then(writeToc)
    .then(() => console.log(`[GENERATION BOOK TOC] complete`))
    .catch(console.error);

