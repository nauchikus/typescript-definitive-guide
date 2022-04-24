const StringUtils = require(`../../../src/utils/string-utils`);

const toValue = node => node.children.reduce((result, current) => result + current.value, ``);
const getH1 = ast => ast.children.find(node => node.type === `heading` && node.depth === 2);

const headingIndex = index => `Глава ${StringUtils.generateIndex(index, 2)}`;
const h1BookPdf = (index, title) => `${headingIndex(index)}. ${title}`;
const h2BookPdf = (index, title) => `${StringUtils.generateIndex(index, 2)}. ${title}`;
const toBookPdfHref = link => `#` + StringUtils.toCharCodeId(link);


module.exports={
    toValue,
    getH1,

    headingIndex,
    h1BookPdf,
    h2BookPdf,

    toBookPdfHref,
}
