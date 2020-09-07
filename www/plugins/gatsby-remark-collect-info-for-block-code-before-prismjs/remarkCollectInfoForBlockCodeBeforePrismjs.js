const qs = require('querystring');
const visit = require('unist-util-visit');



const NAME_VALID_LANG=[
    'ts',
    'typescript',
    'js',
    'javascript',
    'json',
];
const META_VALID_FIELDS = [
    'filepath',
];
const metaValidator = meta => Object.keys( meta ).forEach( key => {
    if ( !META_VALID_FIELDS.includes( key ) ) {
        throw new Error( `Detected invalid meta key "${ key }. Check metadata field name. Valid name - ${ META_VALID_FIELDS.join( "," ) }."` );
    }
} );
const langValidator = lang => {
    if ( !NAME_VALID_LANG.includes( lang ) ) {
        throw new Error( `Detected invalid lang name "${ lang }. Valid lang name - ${ NAME_VALID_LANG.join( "," ) }."` );
    }
};
const metaToObject = meta => meta
    .replace( /^\[|\]$/gi, `` )
    .split( ` ` )
    .filter( item => item !== `` )
    .map( item => item.split( `=` ) )
    .map( ( [key, value] ) => ( [key, value.replace( /^"|"$/gi, `` )] ) )
    .reduce( ( result, [key, value] ) => Object.assign( result, { [ key ]: value } ), {} );

const META_DEFAULT={
    filepath:'',
}

const remarkCollectInfoForBlockCodeBeforePrismjs = ast => {
    try{
        const isCodeTag = node => node.type === `code` ? true : false;


        visit( ast, isCodeTag, codeNode => {
            let metadata = {
                ...META_DEFAULT,
                ...metaToObject( codeNode.meta || ``)
            };

            metaValidator( metadata );

            // // langValidator( codeNode.lang );

            // console.log(codeNode);
            codeNode.metadata = metadata;

            codeNode.meta = { lang: 'ts' };
        } );
    }catch(error){
        console.error(error);
    }finally{
        return ast;
    }


    return ast;
}

module.exports = {
    remarkCollectInfoForBlockCodeBeforePrismjs
};
