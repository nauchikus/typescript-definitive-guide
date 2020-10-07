const visit=require('unist-util-visit');

const Utils = require(`./utils`);
const StringUtils=require('../../../src/utils/string-utils');
const ConverterPathUtils=require('../../../src/utils/converter-path-utils');

module.exports = ({toc}) => ast => {



    try{
        visit( ast, `heading`, headingNode => {
            if (headingNode.depth === 1) {
                return;
            }

            let id = ``;

            if (headingNode.depth > 2) {
                let h1Node = Utils.getH1(ast)
                let value = Utils.toValue(h1Node);

                id += `${value}#`;
            }

            let value = Utils.toValue(headingNode);

            id += value;
            id = id;


            headingNode.data || ( headingNode.data = {} );
            headingNode.data.hProperties || ( headingNode.data.hProperties = {} );

            // console.log(id);
            // console.log(StringUtils.toCharCodeId(id));

            Object.assign( headingNode.data.hProperties, {
                id: StringUtils.toCharCodeId(id)
            } );
        } );
    }catch(error){
        console.error(error);
    }finally{
        return ast;
    }


    return ast;
};
