const path = require(`path`);

const toPath = (...paths) => path.join(...paths);
const toStyle = style => Object.entries(style)
    .reduce((result, [key, value]) => result.concat(`${key}: ${value};`), ``);

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





const BookCover = path => (`
<p class="book-cover__container">
    <img class="book-cover" src="${path}" alt="book-cover"/>
</p>
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
    <link rel="stylesheet" href="${toPath(root, `./pages.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./cover.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./title.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./headings.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./content.css`)}">
    <link rel="stylesheet" href="${toPath(root, `./code-block.css`)}">
    
    <title>TypeScript: Подробное Руководство</title>
    
    <style>
        @page :blank {
            @top-center { content: "This page is intentionally left blank." }
            @bottom-left {content: "Ol"}
        }
        @page:right{
          @bottom-right {
            content: counter(page);
          }
        }
        .remark-highlight {
        page-break-after: avoid;
        }
        
        
    </style>
    
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

const Page = (content, ...classes)  => (`
<div class="${[`page`, ...classes].join(` `)}">${content}</div>
`).trim();


// const Header = ({styles}) => (`<div class="header" style="padding: 0 !important; margin: 0; -webkit-print-color-adjust: exact; background-color: red; color: white; width: 100%; text-align: left; font-size: 12px;">header of Juan<br /> Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>`).trim();
const PageHeader = ({styles}) => (`
<div class="header" style="${styles}">
    <span class="pageNumber"></span>/<span class="totalPages"></span>
</div>`).trim();
const PageFooter = ({styles}) => (`
<div class="footer" style="${styles}">
    <span class="pageNumber"></span>/<span class="totalPages"></span>
</div>`).trim();
// const Footer = '<div class="footer" style="padding: 0 !important; margin: 0; -webkit-print-color-adjust: exact; background-color: blue; color: white; width: 100%; text-align: right; font-size: 12px;">footer of Juan<br /> Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>';

const header = `<div class="header" style="padding: 0 !important; margin: 0; -webkit-print-color-adjust: exact; background-color: red; color: white; width: 100%; text-align: left; font-size: 12px;">header of Juan<br /> Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>`;
const footer = '<div class="footer" style="padding: 0 !important; margin: 0; -webkit-print-color-adjust: exact; background-color: blue; color: white; width: 100%; text-align: right; font-size: 12px;">footer of Juan<br /> Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>';

console.log(styles.header);

module.exports = {
    Html,
    Page,
    PageHeader,
    PageFooter,

    BookCover,
    BookTitlePage,

    header,
    footer,

    styles,
}
