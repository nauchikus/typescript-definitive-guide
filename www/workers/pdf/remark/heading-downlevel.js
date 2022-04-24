const visit = require('unist-util-visit');

module.exports = options => ast => {
    visit(ast, `heading`, headingNode => {
        headingNode.depth += 1;
    });


    return ast
}
