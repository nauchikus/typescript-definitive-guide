import fsp from "fs/promises";
import path from "path"

import puppeteer, { JSONObject, Page, SerializableOrJSHandle } from "puppeteer";

import * as React from "react";
import * as ReactDom from "react-dom/server";
import { HtmlDocument } from "./HtmlDocument";
import { CoverGeneratorOptions } from "./cover-generator-options";




const INDEX_HTML_PATH = path.join(process.cwd(), `index.html`);


async function getIndexHtml(path = INDEX_HTML_PATH){
    return fsp.readFile(path, `utf-8`);
}
async function getBookCoverAsString(path: string){
    return fsp.readFile(path, `utf-8`);
}

function mergeIndexHtmlWithBookCover (index: string, cover: string) {
    return index.replace(/(.*|\n)(?=<\/body>)/, cover)
}



async function generateCover(page: Page, options: CoverGeneratorOptions){
    await page.evaluate( (options: CoverGeneratorOptions) => {
        let version = document.querySelector(`text[id$=version]`) as HTMLElement;
        version.textContent = options.version;

        let versionStage = document.querySelector(`text[id$=version_stage]`)  as HTMLElement;
        versionStage.textContent = options.versionStage;

        let svg = document.querySelector(`svg`) as HTMLOrSVGElement as HTMLElement;


        Object
            .entries(options.colors)
            .forEach(([key, value]) => svg.style.setProperty(key, value));

    }, options as any as JSONObject);


    const OUTPUT_PATH = path.resolve( `./public/${options.imageName}.png` );

    await page.waitForTimeout(1000);
    await page.screenshot({ path: OUTPUT_PATH });
}

function getHtml(): string {
    const html = ReactDom.renderToStaticMarkup( <HtmlDocument /> );


    return html;
}




export async function generateBookCover ( options: CoverGeneratorOptions[] ) {
    let html = getHtml();

    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();


    await page.setContent(html);
    await page.setViewport({
        width: 595,
        height: 841
    });
    await page.addStyleTag({ path: path.join(process.cwd(), `cover/main.css`) });

    await fsp.mkdir( path.resolve( `./public` ), { recursive: true } );



    for ( let item of options ) {
        await generateCover(page, item);
    }


    await browser.close();

    return Promise.resolve();
}

