const fs = require(`fs`)
const fsp = require(`fs/promises`)
const path = require(`path`)


const BookCoverGenerator = require(`./workers/book-cover/book-cover-generator`);
const BookPdfGenerator = require(`./workers/pdf/book-pdf-generator`);


async function BOOK_COVER_WORKER({ inputPaths, outputDir, args: { filenames, versionInfo } }){
    const BOOK_COVER_DEFAULT_COLORS = {
        [`--color_light`]: `#fff`,
        [`--color_middle-lite`]: `#93ABCF`,
        [`--color_accent`]: `#F9B233`,
        [`--color_ambient`]: `#2D5AA1`
    };

    let bookCoverOptions = {
        version: versionInfo.mmp,
        versionStage: versionInfo.preReleaseName,
        colors: BOOK_COVER_DEFAULT_COLORS
    };
    let bookCoverForSocialMediaOptions = {
        version: versionInfo.mmp,
        versionStage: versionInfo.preReleaseName,
        colors: BOOK_COVER_DEFAULT_COLORS
    };

    let [{ path: bookCoverSourcePath }] = inputPaths;

    return await BookCoverGenerator.generateBookCovers({
        bookCoverOptions: {
            inputPath: bookCoverSourcePath,
            outputPath: path.join(outputDir, filenames.bookCover),
            coverOptions: bookCoverOptions
        },
        bookCoverForSocialMediaOptions: {
            inputPath: bookCoverSourcePath,
            outputPath: path.join(outputDir, filenames.bookCoverForSocialMedia),
            coverOptions: bookCoverForSocialMediaOptions
        },
    })
}

async function BOOK_PDF_WORKER ({ inputPaths, outputDir, args: { bookToc, bookCoverPath, versionInfo } }) {
    let bookChapterPathAll = inputPaths.map(info => info.path);

    await BookPdfGenerator.generateBookPdf({
        outputPath: path.join(outputDir, `TypeScript Подробное Руководство.pdf`),
        bookCoverPath,
        bookChapterPathAll,
        toc: bookToc
    });
}

module.exports = { BOOK_COVER_WORKER, BOOK_PDF_WORKER };

// BOOK_COVER_JOB({
//     inputPaths: [{path: `/home/ivan/Projects/typescript-definitive-guide/www/workers/book-cover/tdg.svg`}],
//     outputDir: ``,
//     args: {
//         filenames: {
//             bookCover: `book-cover.png`,
//             bookCoverForSocialMedia: `book-cover-for-social-media.png`,
//         },
//         versionInfo: {
//             mmp: `4.0`,
//             preReleaseName: `rc`
//         }
//     }
// })

const bookToc = require(`../book/ru/metadata/toc.json`);

async function run(){
    let filenameAll = await fsp.readdir(path.join(process.cwd(), `../book/ru/chapters`));
    let filepathAll = filenameAll.map(filename => path.join(process.cwd(), `../book/ru/chapters`, filename, `content.md`));
    // let inputPaths = filepathAll.map(filepath=>({ path: filepath}))

    let inputPaths = [
        // {path: `/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/043.(Работа с типами) Условные типы (Conditional Types)/content.md`},
        {path: `/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/044.(Расширенные типы) Readonly, Partial, Required, Pick, Record/content.md`},
    ]
    console.time(`[GENERATE PDF]`);
    await BOOK_PDF_WORKER({
        inputPaths,
        outputDir: `./`,
        args: {
            bookToc,
            bookCoverPath: path.join(process.cwd(), `./public/assets/book_covers/book_cover.png`)
        }
    })
    console.timeEnd(`[GENERATE PDF]`);
}

run();
// BOOK_PDF_WORKER({
//     inputPaths: [
//         {path:`/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/010.(Экскурс в типизацию) Совместимость типов на основе вариантности/content.md`},
//         {path: `/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/012.(Типы) Базовый Тип Any/content.md`}
//     ],
//     args: {
//         bookToc,
//         // bookCoverPath: `/home/ivan/Projects/typescript-definitive-guide/book/ru/metadata/cover.jpg`,
//         bookCoverPath: `/home/ivan/Projects/typescript-definitive-guide/www/workers/pdf/a4-placeholder.png`,
//         bookInfo: [
//             {
//                 path: `/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/010.(Экскурс в типизацию) Совместимость типов на основе вариантности/content.md`,
//                 // index: 0,
//                 // section: `Section A`,
//                 // title: `TypeScript Definitive Guide`
//             },
//             {
//                 path: `/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/012.(Типы) Базовый Тип Any/content.md`,
//                 index: 1,
//                 section: `Section B`,
//                 title: `TypeScript Definitive Guide`
//             }
//             //
//             // ,
//             // {
//             //     path: `/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/032.(Типы) Обобщения (Generics)/content.md`,
//             //     index: 32,
//             //     section: `Section C`,
//             //     title: `TypeScript Definitive Guide`
//             // }
//         ]
//     }
// })
