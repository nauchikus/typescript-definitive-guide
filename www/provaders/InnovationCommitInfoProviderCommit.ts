import {FileCommitInfoDataProvider} from "./FileCommitInfoDataProvider";

export class InnovationCommitInfoProviderCommit {
    static async getData(version: string, filename: string){
        const commitAll = await FileCommitInfoDataProvider.getData(
            `nauchikus`,
            `typescript-definitive-guide`,
            `master`,
            `what-is-new/${version}/${filename}/content.md`,
        );

        return commitAll;
    }
}

