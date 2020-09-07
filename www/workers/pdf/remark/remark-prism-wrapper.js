const visit = require('unist-util-visit');
const remark = require(`remark-prism`);

const remarkPrismWrapper = options => {
    let remarkParse = remark(options);

    const isCode = node => [`code`, `inlineCode`].includes(node.type);


    return ast => {
        visit(ast, isCode, (codeNode, index, parent) => {
            let prismCodeNode = remarkParse(codeNode);

            if (prismCodeNode.type === `html`) {
                Object.assign(prismCodeNode, {
                    lang: codeNode.lang,
                    metadata: codeNode.metadata
                })
            }


            parent.children[index] = prismCodeNode;

        });

        return ast
    }
}

module.exports = remarkPrismWrapper;
