import {FileProvider} from "./FileProvider";

export class WinInnovationMdProvider {
    static async getData(version: string, name: string){
        const text = await FileProvider.getData(`master:what-is-new/${version}/${name}/content.md`);



        return text;
    }
}

