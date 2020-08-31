const addClassRemarkNode = ( remarkNode, ...classes ) => {
  remarkNode.data || ( remarkNode.data = {} );
  remarkNode.data.hProperties || ( remarkNode.data.hProperties = {} );
  remarkNode.data.hProperties.className || ( remarkNode.data.hProperties.className = [] );

  classes.forEach( className => remarkNode.data.hProperties.className.push( className ) );
};


module.exports = {
  addClassRemarkNode
};