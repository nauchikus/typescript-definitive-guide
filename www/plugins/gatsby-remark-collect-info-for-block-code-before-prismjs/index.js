const { remarkCollectInfoForBlockCodeBeforePrismjs } = require(`./remarkCollectInfoForBlockCodeBeforePrismjs`);


module.exports = ( ...params ) => {
    let [{ markdownAST: ast }] = params;

    return remarkCollectInfoForBlockCodeBeforePrismjs(ast);
};
