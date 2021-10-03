import client from "../apollo-client";
import {
    getWinVersionList, GetWinVersionListResponse
} from "../graphql-querys";
import {gql} from "@apollo/client";

export class WinVersionListProvider {
    static async getData(){
        const response = await client.query<GetWinVersionListResponse>({
            query: gql(getWinVersionList()),
            variables: {
                owner: "nauchikus",
                repo: "typescript-definitive-guide",
                path: `master:what-is-new/`
            }
        });


        const versionDataAll = response.data.repository.object.directories;
        const versionAll = versionDataAll.map(({version}) => version);


        return versionAll;
    }
}

