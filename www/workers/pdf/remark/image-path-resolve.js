const path=require('path');

const visit=require('unist-util-visit');

const StringUtils = require(`../../../src/utils/string-utils`);
const Utils = require(`./utils`);
const BookChapterPathUtils = require(`../../../src/utils/book-chapter-path-utils`);



module.exports = ({ bookRoot, processRoot, toc }) => ast => {
    try {
        let h1Node = ast.children.find(node => node.type === `heading` && node.depth === 2);

        if (!h1Node) {
            throw new Error(`Second level heading must be exists.`);
        }

        let chapterName = Utils.toValue(h1Node);
        let tocItem = toc.find(tocItem => tocItem.title === chapterName);

        if (!tocItem) {
            throw new Error(`Toc for chapter "${chapterName}" not found.`);
        }

        let chapterIndex = toc.indexOf(tocItem);
        let chapterSection = tocItem.section;

        let chapterDirName = BookChapterPathUtils.toChapterName(
            chapterIndex,
            chapterSection,
            chapterName
        );

        visit( ast, `image`, imageNode => {
            imageNode.url = path.join(bookRoot, chapterDirName, imageNode.url);

            imageNode.data || ( imageNode.data = {} );
            imageNode.data.hProperties || ( imageNode.data.hProperties = {} );


            Object.assign( imageNode.data.hProperties, {
            } );
        } );
    }catch (error){
        console.error(error);
        throw error;
    }


    return ast;
};
