const path = require(`path`);

const StringUtils = require(`../../src/utils/string-utils`);
const ConverterPathUtils = require(`../../src/utils/converter-path-utils`);
const Utils = require(`./remark/utils`);

const toPath = (...paths) => path.join(...paths);
const toStyle = style => Object.entries(style)
    .reduce((result, [key, value]) => result.concat(`${key}: ${value};`), ``);
const cutHtml = html => {
    let openBodyTag = `<body>`;
    let closeBodyTag = `</body>`;

    let firstIndex = html.indexOf(openBodyTag) + openBodyTag.length;
    let secondIndex = html.indexOf(closeBodyTag);

    return [
        html.substring(0, firstIndex),
        html.substring(secondIndex),
    ];
}


const styles = {
    header: toStyle({
        color: `blue`,

        [`font-size`]: `12px`,
        [`text-align`]: `right`,
        [`vertical-align`]: `middle`,
        [`-webkit-print-color-adjust`]: `exact`,

        width: `100%`,

        padding: `0 48px 24px 0`,
        margin: 0,

    })
}





// const BookCover = path => (`
// <div class="book-cover__container">
//     <img class="book-cover" src="${path}" alt="book-cover"/>
// </div>
// `).trim();
const BookCover = path => (`
<article id="cover"></article>
`).trim();

const Html = ({content, description, root}) => (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name=author content="https://github.com/nauchikus/typescript-definitive-guide">
    <meta name=description content="${description}">
    <meta name=keywords content="TypeScript">
    <meta name=generator content="https://weasyprint.org">
    <meta name=dcterms.created content="${new Date().toLocaleDateString()}">
    <meta name=dcterms.modified content="${new Date().toLocaleDateString()}">
    
    <link rel="stylesheet" href="${toPath(root, `./prism-vs.theme.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./prism-custom.theme.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./style.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./toc.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./pages.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./cover.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./title.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./end.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./headings.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./content.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./code-block.css`)}">
    
    <title>TypeScript: Подробное Руководство</title>
</head>
<body>
${content}
</body>
</html>
`).trim();


const BookTitlePage = path => (`
<div class="main-title_container">
    <p class="main-title">TypeScript</p>
    <p class="main-title">Подробное Руководство</p>
</div>
<p class="main-description">Книга и документация в одном</p>
<p class="main-date">Дата последнего обновления: <time>${new Date().toLocaleDateString()}</time></p>
`).trim();

const createTocItem = ({href, level}) => (`
<li class="toc-nav__tree-item tree-item_level-${level}">
    <a class="toc__link" href="${href}">
        <span href="${href}" class="toc__link_title"></span>
        <span class="toc__link_dots"></span>
        <span href="${href}" class="toc__link_index"></span>
    </a>
</li>
`).trim()
const BookTocFirstLevelItem = ({title, index}) => {
    let href = Utils.toBookPdfHref(title);


    return createTocItem({href, level: 0});
}
const BookTocSecondLevelItem = ({title, subtitle,  index}) => {
    let href = Utils.toBookPdfHref(`${title}#${subtitle}`);


    return createTocItem({href, level: 1});
}
const buildTocItems = toc => {
    return toc.reduce((result, tocItem, firstLevelIndex) => {
        let firstLevelTocItem = BookTocFirstLevelItem({
            title: tocItem.title,
            index: firstLevelIndex
        });
        let secondLevelTocItems = tocItem.subtitles
            .reduce((result, subtitle, secondLevelIndex) => result + BookTocSecondLevelItem({
                title: tocItem.title,
                subtitle,
                index: secondLevelIndex
            }), ``);

        return result + firstLevelTocItem + secondLevelTocItems;
    }, ``);
}
const BookToc = toc => (`
<aside id="toc">
    <h2 class="toc__title">Содержание</h2>
    <nav class="toc__nav">
      <ol class="toc-nav__tree">
        ${ buildTocItems(toc)  }
      </ol>
    </nav>
</aside>
`)

const BookEndPage = () => (`
<aside id="end">
    <p class="end__title">Конец!</p>
</aside>
`)

module.exports = {
    Html,

    BookCover,
    BookTitlePage,
    BookToc,

    styles,

    cutHtml,
    BookEndPage,
}
