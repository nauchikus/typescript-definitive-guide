const fs = require( 'fs' );
const path = require( 'path' );

const shell = require( 'shelljs' );

const toIndex = ( index, length = 3 ) => '0'.repeat( length - index.toString().length ) + index;
const ecp = path => path.replace( /(\s+)/g, '\\$1' ).replace(/([()])/g,'\\$1');

const run = async () => {
    let json = await fs.promises.readFile( './book/ru/metadata/toc.json', 'utf-8' );
    let toc = JSON.parse( json );


    toc.map(async (info,index)=>{
        const CHAPTER_CONTENT_PATH = `./book/ru/chapters/${ toIndex( index ) }.(${ info.section }) ${ info.name }/content.md`;

        let oldContent = await fs.promises.readFile( CHAPTER_CONTENT_PATH, 'utf-8' );
        let newContent = `# ${ info.name }\n![Chapter Cover](./images/chapter-cover.png)\n${ oldContent }`;

        await fs.promises.writeFile( CHAPTER_CONTENT_PATH, newContent );
    })
};

run()

// console.log(/^\s*#(?!#)\s*.*$/gm.test(md))