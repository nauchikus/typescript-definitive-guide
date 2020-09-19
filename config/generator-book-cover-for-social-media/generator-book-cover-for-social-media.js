const fsp = require(`fs/promises`);
const path = require(`path`);

const BookCoverGenerator = require(`../../www/workers/book-cover/book-cover-generator`);
const { Version } = require('../../www/src/utils/Version');

const WIN_DIR = path.join(process.cwd(), './what-is-new')

const getLastWinMetadata = async () => {
    let versionNameAll = await fsp.readdir(WIN_DIR);

    let versionNameSortedAll = versionNameAll.sort((a, b) => parseFloat(a) - parseFloat(b));
    let lastVersionName = versionNameSortedAll.pop();

    console.log(lastVersionName, path.join(WIN_DIR, lastVersionName, `metadata/metadata.json`));

    let lastMetadataContent = await fsp.readFile(path.join(WIN_DIR, lastVersionName, `metadata/metadata.json`), `utf-8`);
    let lastMetadata = JSON.parse(lastMetadataContent);

    return lastMetadata;
}

const generateBookCover = async () => {
    let lastMetadata = await getLastWinMetadata();

    let lastVersion = lastMetadata.releaseHistory[lastMetadata.releaseHistory.length - 1];
    let version = new Version(lastVersion.version);
    let versionInfo = version.toInfo();


    await BookCoverGenerator.generateBookCovers(
        path.join(process.cwd(), `./www/workers/book-cover/tdg.svg`), {
            outputPath: path.join(process.cwd(), 'bool-cover-for-social-media.png'),
            coverOptions: {
                version: versionInfo.mmp,
                versionStage: versionInfo.preReleaseName,
                colors: lastMetadata.colors
            }
        }
    )
}

generateBookCover()
