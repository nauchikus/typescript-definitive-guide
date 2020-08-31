require('source-map-support').install()
require( 'ts-node' ).register( {
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017',
    },
    project: './tsconfig.json'
} );

const { createPages } = require( './create-pages' );
module.exports.createPages = createPages;