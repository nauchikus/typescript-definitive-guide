const fs = require(`fs`)
const fsp = require(`fs/promises`)
const path = require(`path`)

const remark = require(`remark`)
const remarkHtml = require(`remark-html`);
const remarkPrism = require(`remark-prism`);


const weasyprint = require(`weasyprint-wrapper`);


const headingDownlevel = require(`./remark/heading-downlevel`)
const transformLink = require(`./remark/transform-link`)
const blockCodeDecorator  = require(`./remark/block-code-decorator`)
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
        .use(blockCodeDecorator)
        .use(transformLink)
        .use(remarkHtml);



    console.time(`[Convert book chapters md to html]`);
    let chapterHtmlAll = await Promise.all(
        bookChapterPathAll.map(async (chapterPath, index) => {
            let markdown = await fsp.readFile(chapterPath, { encoding: `utf-8` });
            let html = await processor.process(markdown);


            return html;
        })
    );
    console.timeEnd(`[Convert book chapters md to html]`);

    console.log(__dirname);
    let coverPageHtml = HtmlTemplates.BookCover(bookCoverPath);
    let titlePageHtml = HtmlTemplates.BookTitlePage();
    let tocPageHtml = HtmlTemplates.BookToc(toc);
    let endPageHtml = HtmlTemplates.BookEndPage();
    let html = HtmlTemplates.Html({
        root: path.join(__dirname, `styles`),
        content: [
            coverPageHtml,
            titlePageHtml,
            tocPageHtml,
            ...chapterHtmlAll,
            endPageHtml
        ].join(``)
    });


    const createPdf = (content, outputPath) => new Promise((resolve, reject) => {
        let stream = weasyprint(content)
            .pipe(fs.createWriteStream(outputPath));
        stream.on(`finish`, resolve);
        stream.on(`error`, reject);
    });

    console.time(`Generation book pdf`);
    await createPdf(html, outputPath);
    console.timeEnd(`Generation book pdf`);

    return Promise.resolve();
}

module.exports = { generateBookPdf };
