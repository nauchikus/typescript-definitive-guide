const visit = require('unist-util-visit');
const StringUtils = require('../../../src/utils/string-utils');
const Utils = require(`./utils`);


module.exports = ({ toc }) => ast => {
    const isChapterHeading = node => node.type === `heading` && node.depth === 3;


    visit(ast, isChapterHeading, h2Node => {
        let h1Node = Utils.getH1(ast);
        let h1Title = Utils.toValue(h1Node);

        let h2Title = Utils.toValue(h2Node);

        let tocItem = toc.find(item => item.title === h1Title);

        if (!tocItem) {
            throw new Error(`Book toc item with title "${h1Title}" not found in toc.`);
        }

        let chapterIndex = toc.indexOf(tocItem);
        let subchapterIndex = tocItem.subtitles.indexOf(h2Title);


        h2Node.children = [
            {
                type: 'span',
                children: [
                    {
                        type: 'text',
                        value: `${StringUtils.generateIndex(chapterIndex, 2)}.${subchapterIndex}`,
                    }
                ],
                data: {
                    hProperties: {
                        className: [`h2__chapter-index`]
                    }
                }
            },
            {
                type: 'span',
                children: [
                    {
                        type: 'text',
                        value: `. `,
                    }
                ],
                data: {
                    hProperties: {
                        className: [`h2__dot`]
                    }
                }
            },
            {
                type: 'span',
                children: [
                    {
                        type: 'text',
                        value: h2Title
                    }
                ],
                data: {
                    hProperties: {
                        className: [`h2__chapter-title`]
                    }
                }
            }
        ];
    });


    return ast
}
