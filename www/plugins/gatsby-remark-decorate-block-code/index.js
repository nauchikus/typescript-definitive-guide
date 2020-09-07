const { remarkDecorateBlockCode } = require(`./remarkDecorateBlockCode`);

module.exports = ( ...params ) => {
    let [{ markdownAST: ast }] = params;

    return remarkDecorateBlockCode(ast);
};
