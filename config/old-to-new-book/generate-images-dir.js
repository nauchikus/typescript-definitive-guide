const fs = require(`fs/promises`);
const path = require(`path`);

const CHAPTERS_DIR = path.relative(`./`, `../../book/ru/chapters`);


const generateImageDir = async ({CHAPTERS_DIR}) => {
    let chapterDirAll = await fs.readdir(CHAPTERS_DIR);

    return await Promise.all(chapterDirAll.map( chapterDir => {
        return fs.mkdir(path.join(CHAPTERS_DIR, chapterDir, `images`));
    }));
}

generateImageDir({ CHAPTERS_DIR })
    .then(() => console.log(`IMAGES DIR GENERATED COMPLETE`))
    .catch(console.error);
