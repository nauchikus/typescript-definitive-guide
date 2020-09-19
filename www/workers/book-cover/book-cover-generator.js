const fsp = require(`fs/promises`);
const path = require(`path`);

const puppeteer = require(`puppeteer`);




const INDEX_HTML_PATH = path.join(__dirname, `index.html`);


async function getIndexHtml(path = INDEX_HTML_PATH){
    return fsp.readFile(path, `utf-8`);
}
async function getBookCoverAsString(path){
    return fsp.readFile(path, `utf-8`);
}

function mergeIndexHtmlWithBookCover (index, cover) {
    return index.replace(/(.*|\n)(?=<\/body>)/, cover)
}



async function getHtml({bookCoverSourcePath}){
    let indexHtml = await getIndexHtml();
    let bookCover = await getBookCoverAsString(bookCoverSourcePath);

    let html = mergeIndexHtmlWithBookCover(indexHtml, bookCover);

    return html;
}

async function generateBookCover(page, outputPath, options){
    await page.evaluate( options => {
        let version = document.querySelector(`#version`);
        version.textContent = options.version;

        let versionStage = document.querySelector(`#version_stage`);
        versionStage.textContent = options.versionStage;

        let svg = document.querySelector(`svg`);

        Object
            .entries(options.colors)
            .forEach(([key, value]) => svg.style.setProperty(key, value));

    }, options);

    await page.waitFor(1000);
    await page.screenshot({ path: outputPath });
}

/**
 *
 * @param bookCoverSourcePath {string}
 * @param options {...{version: string; versionState: string; colors: string[]}[]}
 * @returns {Promise<void>}
 */
async function generateBookCovers (bookCoverSourcePath, ...options ) {
    let html = await getHtml({ bookCoverSourcePath });

    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();


    await page.setContent(html);
    await page.setViewport({
        width: 595,
        height: 841
    });

    await Promise.all(options.map(options => generateBookCover(
        page,
        options.outputPath,
        options.coverOptions
        ))
    );


    await browser.close();

    return Promise.resolve();
}

module.exports = { generateBookCovers };
