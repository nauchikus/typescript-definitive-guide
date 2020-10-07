const { compose } = require(`./utils`);
const { escapeUrl ,translitRusToEng, toLowerCase, normalizePath, replaceSpace } = require(`./string-utils`);


const toUrl = compose(
    translitRusToEng,
    // toLowerCase,
    normalizePath,
    replaceSpace,
    // encodeURIComponent
);
const toSelector = compose(
    toUrl,
    // path => path.replace(/[(){}@\[\]<>|^$.*+!?="'`:;/~#%]/g, `\\$&`)
);
const toIdSelector = path => `#${toSelector(path)}`;

const toId = path => toUrl(path);
const toPath = path => toUrl(path);
function toTitle(path){
    return path;
}

const urlToPath = path => escapeUrl(path);
const pathToUrl = path => escapeUrl(path);
const urlToSelector = path => escapeUrl(path);

module.exports = {
    toId,
    toSelector,
    toIdSelector,
    toUrl,
    toTitle,
    toPath,
    urlToPath,
    pathToUrl ,
    urlToSelector,
}
