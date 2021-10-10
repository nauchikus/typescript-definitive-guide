export const addClassRemarkNode = ( remarkNode, ...classes ) => {
    remarkNode.data || ( remarkNode.data = {} );
    remarkNode.data.hProperties || ( remarkNode.data.hProperties = {} );
    remarkNode.data.hProperties.className || ( remarkNode.data.hProperties.className = [] );

    classes.forEach( className => remarkNode.data.hProperties.className.push( className ) );
};
export const reduceChildrenValue = node =>
    node.children.reduce((result, current) =>
            result.concat(Array.isArray(current.children) ? reduceChildrenValue(current) : current.value),
        ``);

