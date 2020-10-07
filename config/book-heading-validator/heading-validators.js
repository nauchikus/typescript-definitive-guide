const isChapterNameValid = (chapterName, toc) => {
    let isMatch = toc.some(item => {
        return item.title === chapterName;
    });

    if (!isMatch) {
        throw new Error(`Chapter with name "${chapterName}" not found in toc.`);
    }
}


const replaceMap = new Map([
    [`\\[`, `[`],
    [`\\]`, `]`],
])
const normalize = name => name.replace(/(\\\[|\\\])/g, match => {
    return replaceMap.get(match);
})

const isChapterHeadingValid = (chapterDir, chapterHeadingAll, tocHeadingAll) => {
    if(chapterHeadingAll.length !== tocHeadingAll.length){
        throw new Error(`Num heading (${chapterHeadingAll.length}) for chapter with name "${chapterDir}" must be equal toc (${tocHeadingAll.length}).`);
    }

    let nameEqualInfos = chapterHeadingAll.reduce((errors, chapterName, index) => {
        let tocName = tocHeadingAll[index];


        return errors.add({
            chapterName,
            tocName,
            isEqual: normalize(chapterName) === tocName
        });
    }, new Set());

    let isAllHeadingExistsValid = Array.from(nameEqualInfos).every(info => info.isEqual);

    if (!isAllHeadingExistsValid) {
        let errorMessage = Array.from(nameEqualInfos).reduce((result, { chapterName, tocName, isEqual }) => {
            return result.concat(`[${isEqual ? `Ok` : `Error`}] chapter "${chapterName}" to be equal toc "${tocName}"\n`);
        }, `Names must be equal for chapter "${chapterDir}". Stat -\n`);

        throw new Error(errorMessage);
    }
}



module.exports = {
    isChapterNameValid,
    isChapterHeadingValid,
}
