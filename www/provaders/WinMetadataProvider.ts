import {FileProvider} from "./FileProvider";
import {WinMetadata} from "../pages/what-is-new";

export class WinMetadataProvider {
    static async getData(version: string){
        const text = await FileProvider.getData(`master:what-is-new/${version}/metadata/metadata.json`);


        const json: WinMetadata = JSON.parse(text);


        return json;
    }
}

