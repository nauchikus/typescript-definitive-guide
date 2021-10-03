const fsp = require(`fs/promises`);
const path = require(`path`);

const BookUpdateVersionCoverGenerator = require(`../../www/workers/book-cover/book-update-current-version-cover-generator`);
const { Version } = require('../../www/src/utils/VersionInfo');

const WIN_DIR = path.join(process.cwd(), './what-is-new');
const BOOK_COVER_PATH = path.join(process.cwd(), 'bool-cover-for-social-media.png');
const BOOK_UPDATE_VERSION_TEMPLATE_PATH = path.join(process.cwd(), `./www/workers/book-cover/tdg_update.svg`);


const getLastWinMetadata = async () => {
    let versionNameAll = await fsp.readdir(WIN_DIR);

    let versionNameSortedAll = versionNameAll.sort((a, b) => parseFloat(a) - parseFloat(b));
    let lastVersionName = versionNameSortedAll.pop();

    let lastMetadataContent = await fsp.readFile(path.join(WIN_DIR, lastVersionName, `metadata/metadata.json`), `utf-8`);
    let lastMetadata = JSON.parse(lastMetadataContent);

    return lastMetadata;
}

const generateBookCover = async () => {
    let lastMetadata = await getLastWinMetadata();


    let lastVersion = lastMetadata.releaseHistory[lastMetadata.releaseHistory.length - 1];
    let version = new Version(lastVersion.version);
    let versionInfo = version.toInfo();


    await BookUpdateVersionCoverGenerator.generateCover(
        path.join(process.cwd(), `./www/workers/book-cover/tdg_update.svg`), {
            outputPath: path.join(process.cwd(), 'book-update-current-version-cover-for-social-media.png'),
            coverOptions: {
                bookCoverPath: path.join(process.cwd(), 'book-cover-for-social-media.png'),
                updateVersion: versionInfo.updateVersion,
                colors: lastMetadata.colors.bookUpdateCurrentVersionCoverColors
            }
        }
    )
}

generateBookCover()
