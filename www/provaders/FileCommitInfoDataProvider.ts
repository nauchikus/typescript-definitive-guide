import client from "../apollo-client";
import {
    FileCommitInfoResponse,
    GetFileResponse,
    getFileCommitInfoQuery
} from "../graphql-querys";
import {gql} from "@apollo/client";


export class FileCommitInfoDataProvider {
    static async getData(owner: string, repo: string, branch: string, filepath: string){
        const response = await client.query<FileCommitInfoResponse>({
            query: gql(getFileCommitInfoQuery()),
            variables: {
                owner,
                repo,
                branch,
                filepath,
            }
        });

        if (response.error) {
            throw new Error(`[filepath ${filepath}] ${response.error}`);
        }


        const commits = response.data.repository.ref.target.history.commits;


        return commits;
    }
}

