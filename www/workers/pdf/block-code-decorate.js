const { remarkDecorateBlockCode } = require(`../../plugins/gatsby-remark-decorate-block-code/remarkDecorateBlockCode`);

const blocCodeDecorate = options => remarkDecorateBlockCode;

module.exports = blocCodeDecorate;
