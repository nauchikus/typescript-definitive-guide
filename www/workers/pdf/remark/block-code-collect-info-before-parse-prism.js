const { remarkCollectInfoForBlockCodeBeforePrismjs } = require(`../../../plugins/gatsby-remark-collect-info-for-block-code-before-prismjs/remarkCollectInfoForBlockCodeBeforePrismjs`);

const blockCodeCollectInfoBeforeParsePrism = options => remarkCollectInfoForBlockCodeBeforePrismjs;

module.exports = blockCodeCollectInfoBeforeParsePrism;
