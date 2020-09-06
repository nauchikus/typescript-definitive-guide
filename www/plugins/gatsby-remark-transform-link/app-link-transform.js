const StringUtils = require(`../../src/utils/string-utils`);
const RouterUtils = require(`../../src/utils/routerjs-utils`);
const BookChapterPathUtils = require(`../../src/utils/book-chapter-path-utils`);

let fromBookToBookLink = `../028.(Классы)%20Definite%20Assignment%20Assertion%20Modifier`;
let fromBookToWebLink = `http://github.com/npm/node-semver#ranges'`;
let fromBookToAppLink = `https://nauchikus.github.io/typescript-definitive-guide`;

let fromWinToWinLink = `/home/ivan/Projects/typescript-definitive-guide/what-is-new/3.7/Улучшена поддержка для типа never возвращаемого из функций/content.md`
// let fromWinToWinLink = `/home/ivan/Projects/typescript-definitive-guide/what-is-new/3.7/Улучшена поддержка для типа never возвращаемого из функций/content.md`

// fileAbsolutePath: '/home/ivan/Projects/typescript-definitive-guide/what-is-new/3.7/Улучшена поддержка для типа never возвращаемого из функций/content.md',
// fileAbsolutePath: '/home/ivan/Projects/typescript-definitive-guide/what-is-new/3.7/Улучшена поддержка для типа never возвращаемого из функций/content.md',
const WWW_LINK = `http`

// const WEB_APP_ORIGIN = `https://nauchikus.github.io/typescript-definitive-guide`;
//
// const isBookContentGatsbyNode = node =>
//     /\/book\/(ru|en)\/chapters\/.*\/content\.md$/.test(node.fileAbsolutePath);
// const isWinContentGatsbyNode = node =>
//     /\/what-is-new\/\d\.\d\/.*\/content\.md$/.test(node.fileAbsolutePath);
//
// const isBookPath = link =>
//     /\/book\/(ru|en)\/chapters\/.*$/.test(link);
// const isWinPath = link =>
//     /\/what-is-new\/\d\.\d\/.*\/.*$/.test(link);
// const isLocalPath = link => !link.startsWith(`../../`);
//
// const isWwwLink = link => /^(http|https):\/\//.test(link)
// const isAppWebLink = link => link.startsWith(WEB_APP_ORIGIN);
//
// const parseName = link => {
//     let matches = link.match(/.*\/(.*)$/)
//
//     if (!matches) {
//         throw new Error(`Invalid link "${link}".`);
//     }
//
//     let [, path] = matches;
//     let paths = path.split(`#`);
//
//
//     return paths;
// }
//
// class LinkType {
//     static BookLinkType = `bookLinkType`;
//     static WinLinkType = `winLinkType`;
// }
//
// let parseBookLink = link => {
//     link = decodeURIComponent(link);
//
//
//     if (!isLocalPath(link)) {
//         throw new Error(`Links from book content should only link to book content. Current link "${link}" invalid.`);
//     }
//
//     let names = parseName(link).map(path => BookChapterPathUtils.bookChapterDirToChapterName(path));
//     let paths = names.map(path => StringUtils.toPath(path))
//
//     let linkInfo = {
//         type: LinkType.BookLinkType,
//         names,
//         paths,
//         name: names.join(`#`),
//         path: RouterUtils.bookRoutes.getBookRoute({
//             locale: ``,
//             chapterName: paths[0],
//             subchapterName: paths[1]
//         })
//     };
//
//     return linkInfo;
// }
//
// const parseWinLink = link => {
//     if (!isLocalPath(link) || !isBookPath(link)) {
//         throw new Error(`Links in what-is-new section should only refer to themselves or content of book. Current link "${link}" is invalid.`);
//     }
//
//
//     let names = parseName(link);
//     let name = names.join(`#`);
//     let paths = names.map(path => StringUtils.toPath(path));
//     let type = isLocalPath(link) ? LinkType.WinLinkType ? LinkType.BookLinkType;
//
//     let linkInfo = {
//         type,
//         names,
//         paths,
//         name
//     };
//
//
//     return linkInfo;
// }
//
// const parseLink = link => {
//     let linkInfo = {};
//
//     if (isWwwLink(link)) {
//
//     }
//
//     if (isAppWebLink(link)) {
//
//     } else {
//
//     }
//
//
//
//
//     return linkInfo;
// }

const getWinVersionFromFileAbsolutePath = path => {
    let matches = path.match(/.*\/(\d\.\d)\/.*/);

    if (!matches) {
        throw new Error(`What-is-new link ${path} is invalid.`);
    }

    let [, version] = matches;


    return version;
}

// console.log(parseBookLink(`../../book/ru/chapters/028.(Классы)%20Definite%20Assignment%20Assertion%20Modifier`));
// console.log(parseBookLink(`../book/ru/chapters/028.(Классы)%20Definite%20Assignment%20Assertion%20Modifier`));
// console.log(parseBookLink(`../028.(Классы)%20Definite%20Assignment%20Assertion%20Modifier#Assertion%20Modifier`));
// console.log(parseName(`../028.(Классы)%20Definite%20Assignment%20Assertion%20Modifier#Definite%20Assignment`));

// console.log(isBookContentGatsbyNode({
//     fileAbsolutePath: '/home/ivan/Projects/typescript-definitive-guide/book/ru/chapters/001.(Экскурс в типизацию) Вступление/content.md',
// }));
console.log(getWinVersionFromFileAbsolutePath('/home/ivan/Projects/typescript-definitive-guide/what-is-new/3.7/Улучшена поддержка для типа never возвращаемого из функций/content.md'));
// console.log(isAppWebLink(fromBookToWebLink));
// console.log(isAppWebLink(fromBookToAppLink));
// console.log(parseLink(fromBookToBookLink));
