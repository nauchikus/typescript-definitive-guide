import {
  getGithubUserQuery,
  ICommitHistory,
  ICommitInfo,
  IGetGithubUserResponse
} from "../graphql-querys";
import { GraphQl } from "../../types/gatsby-create-pages";


export class CommitHistoryToCommitInfoTransformer {
  constructor (private graphql:GraphQl) {
  }
  public async transform(commitHistoryAll:ICommitInfo[]):Promise<ICommitInfo[]>{
    let uniqueCommitterMap = commitHistoryAll?.reduceRight( ( map, commitInfo ) => {
      return map.set( commitInfo.committer.name, commitInfo );
    }, new Map<string, ICommitHistory>() );
    let commitInfoAll = await Promise.all( Array.from( uniqueCommitterMap?.values() ?? [] ).map( async commitInfo => {
      let githubUserResponse = await this.graphql<IGetGithubUserResponse, { userName: string; }>(
        getGithubUserQuery(),
        { userName: commitInfo.committer.name }
      );

      let committerData = githubUserResponse?.data?.github.search.edges[ 0 ].node;

      if ( !committerData ) {
        throw new Error( `Data about committer with name: "${ commitInfo.committer.name }" not found.` );
      }

      let { committer, ...commitData } = commitInfo;
      let result = {
        ...commitData,
        committer: committerData
      };


      return result;
    } ) );


    return commitInfoAll;
  }
}

