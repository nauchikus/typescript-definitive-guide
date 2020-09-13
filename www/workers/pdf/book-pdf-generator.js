const fs = require(`fs`)
const fsp = require(`fs/promises`)
const path = require(`path`)

const remark = require(`remark`)
const remarkHtml = require(`remark-html`);
const remarkPrism = require(`remark-prism`);
const toStream = require(`unified-stream`);


const weasyprint = require(`weasyprint-wrapper`);


const headingDownlevel = require(`./remark/heading-downlevel`)
const transformLink = require(`./remark/transform-link`)
const blockCodeDecorate = require(`./remark/block-code-decorator`)
const headingAddId = require(`./remark/heading-add-id`)
const h1AddDecor = require(`./remark/h1-add-decor`)
const h2AddDecor = require(`./remark/h2-add-decor`)
const imagePathResolve = require(`./remark/image-path-resolve`)
const HtmlTemplates = require(`./templates`)


async function generateBookPdf({outputPath, bookCoverPath, bookChapterPathAll, toc}){
    let imagePathResolveOptions = {
        processRoot: process.cwd(),
        bookRoot: path.join(process.cwd(), `../book/ru/chapters`),
        toc,
    }


    let processor = remark()
        .use(headingDownlevel)
        .use(imagePathResolve, imagePathResolveOptions)
        .use(headingAddId, {toc})
        .use(h2AddDecor, {toc})
        .use(h1AddDecor, {toc})
        .use(remarkPrism)
        .use(blockCodeDecorate)
        .use(transformLink)
        .use(remarkHtml);


    const TEMPORARY_HTML_DIR = path.join(__dirname, `temporary_html`);

    await fsp.rmdir(TEMPORARY_HTML_DIR, { recursive: true });
    await fsp.mkdir(TEMPORARY_HTML_DIR);

    console.log(TEMPORARY_HTML_DIR);
    let html = HtmlTemplates.Html({
        root: __dirname,
        content: ``
    });
    let [openHtmlPart, closeHtmlPart] = HtmlTemplates.cutHtml(html);

    let bookCoverHtml = HtmlTemplates.Page(HtmlTemplates.BookCover(bookCoverPath));
    let bookTitlePageHtml = HtmlTemplates.Page(HtmlTemplates.BookTitlePage(), `page_title`);


    const TEMPORARY_HTML_PATH = path.join(TEMPORARY_HTML_DIR, `index.html`);

    let writeStream = fs.createWriteStream(TEMPORARY_HTML_PATH);

    console.time(`[Book cache create]`);
    writeStream.write(openHtmlPart + bookCoverHtml + bookTitlePageHtml);


    await bookChapterPathAll.reduce((result, filepath, index) => {
        return result.then(() => new Promise((resolve, reject) => {
            console.time(`generation cache for chapter with index "${index}".`);

            let readStream = fs
                .createReadStream(filepath)
                .pipe(toStream(processor));


            readStream.once(`data`, chunk =>{
                writeStream.write(chunk);
            });
            readStream.once(`end`, ()=>{
                console.timeEnd(`generation cache for chapter with index "${index}".`);
                resolve();
            });
            readStream.once(`error`, reject);
        }));
    }, Promise.resolve());

    writeStream.write(closeHtmlPart);
    writeStream.end();
    console.timeEnd(`[Book cache create]`);

    // let temporaryHtmlPathAll = await Promise.all(
    //     bookChapterPathAll.map(async (chapterPath, index) => {
    //         console.time(`Convert md to html for chapter "${index}"`);
    //
    //         let markdown = await fsp.readFile(chapterPath, { encoding: `utf-8` });
    //         let html = await processor.process(markdown);
    //
    //
    //         const TEMPORARY_HTML_PATH = path.join(TEMPORARY_HTML_DIR, `${index}.html`);
    //
    //         console.log(TEMPORARY_HTML_PATH);
    //
    //         await fsp.writeFile(TEMPORARY_HTML_PATH, HtmlTemplates.Page(html));
    //
    //         console.log(`write ${index}`);
    //
    //         // console.log(`[PDF GENERATION] Generate html for chapter with index "${index.toString()}"`);
    //
    //         console.timeEnd(`Convert md to html for chapter "${index}"`);
    //
    //         return TEMPORARY_HTML_PATH;
    //     })
    // );

    // let chapterHtmlAll = await Promise.all(temporaryHtmlPathAll.map(path => {
    //     return fsp.readFile(path, `utf-8`);
    // }))


    // let bookCoverHtml = HtmlTemplates.Page(HtmlTemplates.BookCover(bookCoverPath));
    // let bookTitlePageHtml = HtmlTemplates.Page(HtmlTemplates.BookTitlePage(), `page_title`);
    // let html = HtmlTemplates.Html({
    //     root: __dirname,
    //     content: [bookCoverHtml, bookTitlePageHtml, ...chapterHtmlAll].join(``)
    // });

    const createPdf = (content, outputPath) => new Promise((resolve, reject) => {
        let stream = weasyprint(content)
            .pipe(fs.createWriteStream(outputPath));
        stream.on(`finish`, resolve);
        stream.on(`error`, reject);
    });


    // await createPdf(html, outputPath);

    return Promise.resolve();
}

module.exports = { generateBookPdf };
