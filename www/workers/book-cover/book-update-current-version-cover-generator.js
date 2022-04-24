const fsp = require(`fs/promises`);
const path = require(`path`);

const puppeteer = require(`puppeteer`);




const INDEX_HTML_PATH = path.join(__dirname, `index.html`);


async function getIndexHtml(path = INDEX_HTML_PATH){
    return fsp.readFile(path, `utf-8`);
}
async function getBookCoverAsString(path){
    let base64 = await fsp.readFile(path, `base64`);

    return `<img src="data:image/png;base64,${base64}" alt="произошла ошибка"/>`;
}
async function getBookUpdateVersionCoverAsString(path){
    return fsp.readFile(path, `utf-8`);
}
function imagesWrapper(...content){
    return `<div class="container">${content.join(`\n`)}</div>`
}

function addBodyContent (index, ...elements) {
    return index.replace(/(.*|\n)(?=<\/body>)/, elements.join(`\n`))
}



async function getHtml({bookCoverSourcePath, bookUpdateCurrentVersionCoverSourcePath}){
    let indexHtml = await getIndexHtml();
    let bookCover = await getBookCoverAsString(bookCoverSourcePath);
    let bookUpdateVersionCover = await getBookUpdateVersionCoverAsString(bookUpdateCurrentVersionCoverSourcePath);

    let html = addBodyContent(indexHtml, imagesWrapper(bookCover, bookUpdateVersionCover));

    return html;
}

async function generateBookCover(page, outputPath, options){
    await page.evaluate( async options => {
        let number = document.querySelector(`#number`);
        number.textContent = options.updateVersion;

        let svg = document.querySelector(`svg`);

        await Promise.all(Array.from(document.getElementsByTagName(`img`)).map(img=>{
            if (img.complete) {
                return Promise.resolve();
            }


            return new Promise((resolve,reject) => {
                img.addEventListener(`load`, resolve);
                img.addEventListener(`error`, reject);
            });
        }))
        Object
            .entries(options.colors)
            .forEach(([key, value]) => svg.style.setProperty(key, value));

    }, options);

    await page.waitFor(1000);
    await page.screenshot({ path: outputPath });
}

module.exports = { generateCover };

/**
 *
 * @param bookCoverSourcePath {string}
 * @param options {updateVersion: string; bookCoverPath: string; colors: string[]}}
 * @returns {Promise<void>}
 */
async function generateCover (bookUpdateCurrentVersionCoverSourcePath, options ) {
    let html = await getHtml({
        bookUpdateCurrentVersionCoverSourcePath,
        bookCoverSourcePath: options.coverOptions.bookCoverPath
    });


    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();


    await page.setContent(html);
    await page.setViewport({
        width: 595,
        height: 841
    });
    await page.addStyleTag({ path: path.join(__dirname, `book-update-current-version-cover.css`) });


    await generateBookCover(
        page,
        options.outputPath,
        options.coverOptions
    );


    await browser.close();

    return Promise.resolve();
}
