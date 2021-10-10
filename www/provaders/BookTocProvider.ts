import {FileProvider} from "./FileProvider";
import {IBookToc} from "../graphql-request-types";

export class BookTocProvider {
    static async getData(){
        const text = await FileProvider.getData(`master:book/ru/metadata/toc.json`)
        const toc: IBookToc = JSON.parse(text);


        return toc;
    }
}

