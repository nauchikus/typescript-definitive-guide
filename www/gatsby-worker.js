const fs = require(`fs`)
const fsp = require(`fs/promises`)
const path = require(`path`)

const remark = require(`remark`)
const remarkPrism = require(`remark-prism`)
const remarkHtml = require(`remark-html`)

const puppeteer = require(`puppeteer`)

const weasyprint = require(`weasyprint-wrapper`);


const headingDownlevel = require(`./workers/pdf/remark/heading-downlevel`)
const transformLink = require(`./workers/pdf/remark/transform-link`)
const blockCodeCollectInfoBeforeParsePrism = require(`./workers/pdf/remark/block-code-collect-info-before-parse-prism`)
const remarkPrismWrapper = require(`./workers/pdf/remark/remark-prism-wrapper`)
const blocCodeDecorate = require(`./workers/pdf/remark/block-code-decorate`)
const headingAddId = require(`./workers/pdf/remark/heading-add-id`)
const h1AddDecor = require(`./workers/pdf/remark/h1-add-decor`)
const h2AddDecor = require(`./workers/pdf/remark/h2-add-decor`)
const imagePathResolve = require(`./workers/pdf/remark/image-path-resolve`)
const HtmlTemplates = require(`./workers/pdf/templates`)


const getContent = ({first,second,third}) => HtmlTemplates.Html({
    root: `./workers/pdf`,
    content: `
<h2 id="${first}">First</h2>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>
<a href="#${second}">Second</a>
</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<h2 id="${second}">Second</h2>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>
<a href="#${third}">Third</a>
</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<h2 id="${third}">Third</h2>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>
<a href="#${first}">First</a>
</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
<p>content</p>
    `.trim()
})

async function generateCover(){
    // const browser = await puppeteer.launch({
    //     headless: true
    // });
    //
    // const page = await browser.newPage();
    // await page.setContent(HtmlTemplates.Html({ content }));
    //
    //
    //
    // await page.addStyleTag({ path: path.join(process.cwd(), `./workers/pdf/style.css`) });
    // await page.addStyleTag({ path: path.join(process.cwd(), `./workers/pdf/prism-vs.theme.css`) });
    // await page.addStyleTag({ path: path.join(process.cwd(), `./workers/pdf/prism-custom.theme.css`) });
    // await page.addStyleTag({ path: path.join(process.cwd(), `./workers/pdf/content.css`) });
    // // await page.setDefaultNavigationTimeout(0);
    // // await page.goto(`data:text/html,${content}`, { waitUntil: 'networkidle2', timeout: 0 });
    // const buffer = await page.pdf({
    //     path: `./book.pdf`,
    //     format: 'A4',
    //     printBackground: true,
    //     preferCSSPageSize: true,
    //     displayHeaderFooter: true,
    //     footerTemplate: HtmlTemplates.PageHeader({styles: HtmlTemplates.styles.header}),
    //     // footerTemplate: `<div class="header" hidden>Ok</div>`,
    //     margin: {
    //         left: '56px',
    //         top: '64px',
    //         right: '64px',
    //         bottom: '96px'
    //     }
    // });
    await browser.close();
}



async function Pdf ({ inputPaths, outputDir, args: { toc, bookInfo, bookCoverPath } }) {
    console.time(`Generation Book Pdf`);

    let imagePathResolveOptions = {
        processRoot: process.cwd(),
        bookRoot: path.relative(process.cwd(), `../book/ru/chapters`),
        toc,
    }


    let processor = remark()
        .use(headingDownlevel)
        .use(imagePathResolve, imagePathResolveOptions)
        .use(headingAddId, {toc})
        .use(h2AddDecor, {toc})
        .use(h1AddDecor, {toc})
        .use(blockCodeCollectInfoBeforeParsePrism)
        .use(remarkPrismWrapper)
        .use(blocCodeDecorate)
        .use(transformLink)

        .use(remarkHtml);

    let htmlAll = await Promise.all(
        bookInfo.map(async info => {
            let markdown = await fsp.readFile(info.path, { encoding: `utf-8` });
            let html = await processor.process(markdown);

            return HtmlTemplates.Page(html);
        })
    );

    let bookCover = HtmlTemplates.Page(HtmlTemplates.BookCover(bookCoverPath));
    let bookTitlePage = HtmlTemplates.Page(HtmlTemplates.BookTitlePage(), `page_title`);
    let content = HtmlTemplates.Html({
        root: `./workers/pdf`,
        content: [bookCover, bookTitlePage, ...htmlAll].join(``)
    });

    const createPdf = (content, outputPath) => new Promise((resolve, reject) => {
        let stream = weasyprint(content)
            .pipe(fs.createWriteStream(outputPath));
        stream.on(`finish`, resolve);
        stream.on(`error`, reject);
    });


    await createPdf(content, `./book.pdf`);
    // await createPdf(getContent(getId()), `./book.pdf`);

    await fsp.writeFile(`./book.html`, content)
    // await fsp.writeFile(`./book.html`, getContent(getId()))

    console.timeEnd(`Generation Book Pdf`);


    return Promise.resolve();
}

exports = { Pdf };

const toc = require(`../book/ru/metadata/toc.json`)

Pdf({
    inputPaths: [
        {path:`/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/011.(Синтаксические конструкции) Аннотация Типов/content.md`},
        {path: `/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/012.(Типы) Базовый Тип Any/content.md`}
    ],
    args: {
        toc,
        bookCoverPath: `/home/ivan/Projects/typescript-definitive-guide/book/ru/metadata/cover.jpg`,
        bookInfo: [
            // {
            //     path: `/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/010.(Экскурс в типизацию) Совместимость типов на основе вариантности/content.md`,
            //     index: 0,
            //     section: `Section A`,
            //     title: `TypeScript Definitive Guide`
            // },
            // {
            //     path: `/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/012.(Типы) Базовый Тип Any/content.md`,
            //     index: 1,
            //     section: `Section B`,
            //     title: `TypeScript Definitive Guide`
            // }
            //
            // ,
            {
                path: `/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/032.(Типы) Обобщения (Generics)/content.md`,
                index: 32,
                section: `Section C`,
                title: `TypeScript Definitive Guide`
            }
        ]
    }
})
