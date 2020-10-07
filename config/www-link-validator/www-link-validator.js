const fsp = require('fs/promises');
const path = require("path");

const puppeteer = require("puppeteer");

const StringUtils = require("../../www/src/utils/string-utils");
const ConverterPathUtils = require("../../www/src/utils/converter-path-utils");


const SECTION_HEIGHT = 1000;
const BODY_PADDING_TOP = 500;

const indexToHash = index => [...index.toString()]
    .map(i => i.charCodeAt())
    .join(``);

function toPathInfo(originalName, chapterName, index, contentIndex){
    return {
        index,
        contentIndex,
        chapterName,
        originalName,
        name: ConverterPathUtils.toTitle(originalName),
        id: ConverterPathUtils.toId(originalName)  + indexToHash(index),
        selector: ConverterPathUtils.toIdSelector(originalName)  + indexToHash(index),
        url: `#` + ConverterPathUtils.toUrl(originalName) + indexToHash(index)
    };
}

function getBookToc(path){
    let bookToc = require(path);

    return bookToc;
}

function createPathInfo (bookToc) {
    let globalIndex = 0;
    const getIndex = () => globalIndex++;

    return bookToc.reduce((result, { title, subtitles }, index) => {
        return result.concat([
            toPathInfo(title, title, getIndex().toString(), index.toString()),
            ...subtitles.map((subtitle, subIndex) => toPathInfo(
                subtitle,
                title,
                getIndex().toString(),
                `${index}.${StringUtils.generateIndex(subIndex, 3)}`
                )
            )
        ]);
    }, []);
}

async function createSection(page, pathInfoAll){
    let sectionError = await page.evaluate(({ pathInfoAll, SECTION_HEIGHT }) => {
        let errors = pathInfoAll.reduce((result, { id, name, index }) => {
            try {
                let section = document.createElement(`section`);
                section.id = id;
                Object.assign(section.style, {
                    height: `${SECTION_HEIGHT}px`
                })

                document.body.appendChild(section);
            } catch (error) {
                result.add(`Create section error. Index "${index}".\n ${error.message}`);
            }

            return result;
        }, new Set());

        let result = Array.from(errors).join(`\n`);

        return result;
    }, { pathInfoAll, SECTION_HEIGHT });

    return sectionError;
}
async function createLink(page, pathInfoAll){
    let linkError = await page.evaluate((pathInfoAll) => {
        let errors = pathInfoAll.reduce((result, { url, name, contentIndex  }) => {
            try {
                let link = document.createElement(`a`);
                link.id = contentIndex;
                link.href = url;
                link.innerText = name;

                document.body.appendChild(link);
            } catch (error) {
                result.add(`Create link error. Content index "${contentIndex}".\n ${error.message}`);
            }

            return result;
        }, new Set());

        let result = Array.from(errors).join(`\n`);

        return result;
    }, pathInfoAll);

    return linkError;
}
async function matchSection(page, pathInfoAll){
    let matchSectionError = await page.evaluate((pathInfoAll) => {
        let errors = pathInfoAll.reduce((result, { selector, name, index }) => {
            try {
                let element = document.querySelector(selector);

                if (!element) {
                    throw new Error(`Element with index "${index}" not found`);
                }
            } catch (error) {
                result.add(`Match section. Index "${index}".\n ${error.message}`);
            }

            return result;
        }, new Set());

        let result = Array.from(errors).join(`\n`);

        return result;
    }, pathInfoAll);

    return matchSectionError;
}

class BypassLinkError {
    static LinkNotFound = "Links not found.";
    static SectionNotFound = "Section not found.";
    static NotEqualLength = "Links length to be equal sections length.";
}

/**
 *
 * @param page {Page}
 * @returns {Promise<void>}
 */
async function bypassLink(page){
    let bypassLinkError = await page.evaluate(async ({SECTION_HEIGHT, BODY_PADDING_TOP}) => {
        let linkAll = Array.from(document.querySelectorAll(`a`));
        let sectionAll = Array.from(document.querySelectorAll(`section`));

        if (!linkAll || !linkAll.length) {
            throw new Error(BypassLinkError.LinkNotFound);
        }

        if (!sectionAll || !sectionAll.length) {
            throw new Error(BypassLinkError.SectionNotFound);
        }

        if (linkAll.length !== sectionAll.length) {
            throw new Error(BypassLinkError.NotEqualLength);
        }


        async function bypass(linkAll, sectionAll){
            let errors = await linkAll.reduce(async (promise, link, index) => {
                return promise.then(async (errors) => {
                    link.click();
                    let section = sectionAll[index];
                    let rect = section.getBoundingClientRect();

                    if (!rect) {
                        return errors.add({
                            index,
                            message: `Rectangle for section with index ${section.id} not found`
                        });
                    }

                    if (rect.top !== 0) {
                        errors.add({
                            index,
                            message: `Link with index "${index}" and label ${link.innerText} not worked. Section position.y "${rect.top}"`
                        });
                    }

                    return errors;
                });
            }, Promise.resolve(new Set()));

            let bypassError = Array.from(errors)
                .sort((a, b) => a.index - b.index)
                .map(item => item.message)
                .join(`\n`);

            return bypassError;
        }



        let bypassLinkError = await bypass(linkAll, sectionAll);

        return bypassLinkError;
    }, {SECTION_HEIGHT, BODY_PADDING_TOP})



    return bypassLinkError;
}

async function linkLabelValidate(page, pathInfoAll){
    let linkTextError = await page.evaluate(({ pathInfoAll }) => {
        let linkAll = Array.from(document.querySelectorAll(`a`));

        let errors = linkAll.reduce((errors, link, index) => {
            let label = link.innerText;
            let pathInfo = pathInfoAll[index];

            if (label !== pathInfo.name) {
                errors.add({
                    index,
                    message: `Label for link with index "${index}" invalid. Current label "${label}", expect labal "${pathInfo.name}"`
                });
            }

            return errors;
        }, new Set());

        let linkLabelError = Array.from(errors)
            .sort((a, b) => a.index - b.index)
            .map(i => i.message)
            .join(`\n`);

        return linkLabelError;
    }, { pathInfoAll });

    return linkTextError;
}

async function execute () {
    const BOOK_TOC_DIR = path.join(process.cwd(), `book`, `ru`, `metadata`, `toc.json`);

    let bookToc = getBookToc(BOOK_TOC_DIR);


    if (!bookToc) {
        throw new Error(`Book toc not exists.`);
    }

    let pathInfoAll = createPathInfo(bookToc);

    if (!pathInfoAll) {
        throw new Error(`pathInfoAll not define.`);
    }

    let browser = await puppeteer.launch({
        headless: true
    });
    let page = await browser.newPage();

    await page.addStyleTag({content: `
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        
        body {
            padding-top: ${BODY_PADDING_TOP}px;
        }
    `})

    let sectionError = await createSection(page, pathInfoAll);

    if (sectionError) {
        throw sectionError;
    }else{
        console.info(`[WwwLinkValidator] > Sections create.`);
    }

    let matchSectionError = await matchSection(page, pathInfoAll);

    if (matchSectionError) {
        throw matchSectionError;
    } else {
        console.info(`[WwwLinkValidator] > Match section complete.`);
    }


    let linkError = await createLink(page, pathInfoAll);

    if (linkError) {
        throw linkError;
    }else{
        console.info(`[WwwLinkValidator] > Links create.`);
    }

    let bypassLinkError = await bypassLink(page);


    if (bypassLinkError) {
        throw bypassLinkError;
    }else{
        console.info(`[WwwLinkValidator] > Links worked.`);
    }

    let linkLabelError = await linkLabelValidate(page, pathInfoAll);


    if (linkLabelError) {
        throw linkLabelError;
    }else{
        console.info(`[WwwLinkValidator] > Links label is valid.`);
    }


    await browser.close();

}

execute()
    .then(() => console.info(`[WwwLinkValidator] > 😃 Www link validate complete.`))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
