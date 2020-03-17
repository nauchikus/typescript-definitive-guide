import { GithubRepositoryData } from "./GithubRepositoryInfoDataProvider";
import { getGithubCommitHistoryQuery, IGetFileOnGithubHistoryInfoResponse } from "../graphql-querys";
import { GraphQlResponse } from "../../types/gatsby-create-pages";
import { BaseFileOnGithubCommitHistoryDataProvider, ResultData } from "./BaseFileOnGithubCommitHistoryDataProvider";

export interface IWinFileOnGithubCommitHistoryGetDataParams {
  repository:GithubRepositoryData;
  versionMMP:string;
  innovationName:string;
}
export interface IWinCreateGraphQlRequestParams extends IWinFileOnGithubCommitHistoryGetDataParams{

}
export class WinFileOnGithubCommitHistoryDataProvider extends BaseFileOnGithubCommitHistoryDataProvider<IWinFileOnGithubCommitHistoryGetDataParams>{
  private createWinFileOnGithubPath = ( versionMMP: string, innovationName: string ) => (
    `what-is-new/${ versionMMP }/${ innovationName }/content.md`
  );
  private createGraphQlRequest ( {repository,versionMMP, innovationName}:IWinCreateGraphQlRequestParams ) {
    return {
      path: this.createWinFileOnGithubPath( versionMMP, innovationName ),
      owner:repository.owner,
      branch: repository.branch,
    };
  }

  async getData (params:IWinFileOnGithubCommitHistoryGetDataParams): Promise<ResultData> {
    let response = await super.load(
      getGithubCommitHistoryQuery(),
      this.createGraphQlRequest( params )
    );


    if ( !super.isResponseValid( response ) ) {
      throw new Error( `Invalid commit history data. \n GraphQl request errors stack: \n ${ ( response?.errors as string[] ).join( `\n` ) }` );
    }


    return Promise.resolve( super.responseToData( response as Required<GraphQlResponse<IGetFileOnGithubHistoryInfoResponse>> ) );
  }
}

