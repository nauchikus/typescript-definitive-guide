const toIndex = (index, length = 3, symbol = `0`) =>
    symbol.repeat(length - index.toString().length).concat(index.toString());
const toChapterName = (index, section, title) =>
    `${toIndex(index)}.(${section}) ${title}`;
const bookChapterNameRemoveIndex = chapterName => chapterName.replace(/^\d{3}\./, '');
const bookChapterNameAddOnlyIndex = (index, chapterName) => `${toIndex(index)}.${chapterName}`;

module.exports = {
    toIndex,
    toChapterName,
    bookChapterNameRemoveIndex,
    bookChapterNameAddOnlyIndex,
};

