import {FileProvider} from "./FileProvider";

export class BookTocFileProvider {
    static async getData(name: string){
        return FileProvider.getData(`master:book/ru/chapters/${name}/content.md`);
    }
}

