class FilesystemGatsbyNodeType{
    static WhatIsNewTocFilesystem = `what-is-new-toc`;
}
class FilesystemSourceName{
    static WhatIsNew = `what-is-new`;
    static BookChapters = `book-chapters`;

    static localized(name,locale){
        return `${ name }_${ locale }`;
    }
}

module.exports = {
    FilesystemGatsbyNodeType,
    FilesystemSourceName,
};
