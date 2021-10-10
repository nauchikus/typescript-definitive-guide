import client from "../apollo-client";
import {GetFileResponse, getFileQuery} from "../graphql-querys";
import {gql} from "@apollo/client";

export class FileProvider {
    static async getData(path: string){
        const response = await client.query<GetFileResponse>({
            query: gql(getFileQuery()),
            variables: {
                owner: "nauchikus",
                repo: "typescript-definitive-guide",
                path,
            }
        });

        let content: string;

        try {
            content = response.data.repository.file.text;
        }catch (error){
            throw new Error(`[path ${path}] ${error.message}`);
        }finally {
            return content;
        }
    }
}

