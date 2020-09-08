const toValue = node => node.children.reduce((result, current) => result + current.value, ``);
const getH1 = ast => ast.children.find(node => node.type === `heading` && node.depth === 2);

module.exports={
    toValue,
    getH1,
}
