// const visit = require('unist-util-visit');
// const StringUtils = require('../../../src/utils/string-utils');
// const ConverterPathUtils = require('../../../src/utils/converter-path-utils');
//
//
// module.exports = options => ast => {
//     visit(ast, `heading`, headingNode => {
//         let title = headingNode.children.reduce( (result, {value}) => result.concat(value), `` )
//         let anchor = title;
//
//         headingNode.data || ( headingNode.data = {} );
//         headingNode.data.hProperties || ( headingNode.data.hProperties = {} );
//
//         Object.assign( headingNode.data.hProperties, {
//             id: anchor,
//             target: `__blank`
//         } );
//     });
//
//
//     return ast
// }
