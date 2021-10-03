import {FileCommitInfoDataProvider} from "./FileCommitInfoDataProvider";

export class BookChapterCommitInfoProviderCommit {
    static async getData(filename: string){
        const commitAll = await FileCommitInfoDataProvider.getData(
            `nauchikus`,
            `typescript-definitive-guide`,
            `master`,
            `book/ru/chapters/${filename}/content.md`,
        );

        return commitAll;
    }
}

