import * as fs from "fs";
import * as fsp from "fs/promises";
import * as path from "path";

import * as React from "react";
import * as ReactDom from "react-dom/server";
import weasyprint from "weasyprint-wrapper";
import {HtmlDocument} from "./components/HtmlDocument";
import {BookData, createBookData} from "./create-book-data";
import { MarkdownCompiler } from "./remark/MarkdownCompiler";


console.info( `[generate book] > Create Book Data...` );
console.time( `[generate book] > Book data create.` );
const bookData: BookData = await createBookData()
console.timeEnd( `[generate book] > Book data create.` );


/*-----------------*/
console.info( `[generate book] > Compile markdown to html...` );
console.time( `[generate book] > Markdown compiled.` );
const chapterAll = await Promise.all( bookData.chapterAll.map( async ( { markdown, chapterInfo }) => {
  let file = await MarkdownCompiler.compile( markdown, chapterInfo );

  return file;
} ) );

const content = chapterAll.join(``)
console.timeEnd( `[generate book] > Markdown compiled.` );
/*-----------------*/


const render = ( data: BookData, content: string ) => (
  <HtmlDocument data={ data } content={content}/>
);


console.info( `[generate book] > Render React Template...` );
console.time( `[generate book] > React render complete.` );
let html = ReactDom.renderToStaticMarkup( render( bookData, content ) );
console.timeEnd( `[generate book] > React render complete.` );

/*-----------------*/

const createPdf = ( content: string, outputPath: string ) => new Promise( async ( resolve, reject ) => {
  try {
    let stream = weasyprint( html )
      .pipe( fs.createWriteStream( outputPath ) );


    stream.on( `finish`, resolve );
    stream.on( `error`, reject );
  } catch ( error ) {
    reject( error );
  }
} );

const BOOK_OUTPUT_DIR = path.join( process.cwd(), `./public` );
const BOOK_FILE_PATH = path.join( BOOK_OUTPUT_DIR, `tdg.pdf` );

await fsp.mkdir( BOOK_OUTPUT_DIR, { recursive: true } );

console.info(`[generate book] > Build Pdf...`)
console.time( `[generate book] > Pdf create.` );
await createPdf( html, BOOK_FILE_PATH );
console.timeEnd( `[generate book] > Pdf create.` );


/*-----------------*/



