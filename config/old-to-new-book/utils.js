const toIndex = (index, length = 3, symbol = `0`) =>
    symbol.repeat(length - index.toString().length).concat(index.toString());
const toChapterName = (index, section, title) =>
    `${toIndex(index)}.(${section}) ${title}`;


module.exports = {
    toIndex,
    toChapterName,
};
