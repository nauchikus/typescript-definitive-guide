const fs = require(`fs/promises`);
const path = require(`path`);

const CHAPTERS_DIR = path.relative(`./`, `../../book/ru/chapters`);


const generateImageDir = async ({CHAPTERS_DIR}) => {
    let chapterDirAll = await Promise.all(Array.from(fs.readdir(CHAPTERS_DIR)));

    return await Promise.all(chapterDirAll.map(async chapterDir => {
        return fs.mkdir(path.join(CHAPTERS_DIR, `images`));
    }));
}

generateImageDir({ CHAPTERS_DIR })
    .then(() => console.log(`IMAGES DIR GENERATED COMPLETE`))
    .catch(console.error);
