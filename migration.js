const fs = require( 'fs' );
const path = require( 'path' );

const shell = require( 'shelljs' );

const toIndex = ( index, length = 3 ) => '0'.repeat( length - index.toString().length ) + index;

const run = async () => {
    let json = await fs.promises.readFile( './book/ru/metadata/toc.json', 'utf-8' );
    let toc = JSON.parse( json );

    toc.map(async (info,index)=>{
        const OLD_PATH = `./book/ru/chapters/${ info.oldname }.md`;
        const NEW_PATH = `./book/ru/chapters/${ toIndex( index ) }.(${ info.section }) ${ info.name }/content.md`;
        const DIR_NAME = `./book/ru/chapters/${ toIndex( index ) }.(${ info.section }) ${ info.name }`;

        await fs.promises.mkdir( DIR_NAME );
        shell.exec( `git mv ${ OLD_PATH } ${ NEW_PATH }` );
    })
};

// run()