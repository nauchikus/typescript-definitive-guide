import {
  IGetFileOnGithubHistoryInfoResponse,
  IGetGithubCommitHistoryRequest
} from "../graphql-querys";
import { GraphQl, GraphQlResponse } from "../../types/gatsby-create-pages";



export abstract class BaseFileOnGithubCommitHistoryDataProvider<TInitializeParams> {
  constructor ( private graphql: GraphQl ) {

  }

  protected isResponseValid ( response: GraphQlResponse<IGetFileOnGithubHistoryInfoResponse> ): boolean {
    if ( response.errors ) {
      return false;
    }
    if ( !response?.data?.github.repository.ref.target.history.commits ) {
      return false;
    }
    if ( !response?.data?.github.repository.ref.target.history.commits.length ) {
      return false;
    }

    return true;
  }

  protected async load ( query: string, request: IGetGithubCommitHistoryRequest ): Promise<GraphQlResponse<IGetFileOnGithubHistoryInfoResponse>> {
    return await this.graphql<IGetFileOnGithubHistoryInfoResponse, IGetGithubCommitHistoryRequest>( query, request );
  }
  protected responseToData(response:Required<GraphQlResponse<IGetFileOnGithubHistoryInfoResponse>>){
    return {
      commitHistoryAll: response?.data?.github.repository.ref.target.history.commits
    };
  }

  public abstract async getData (params:TInitializeParams): Promise<ResultData>;

}

export type ResultData=ReturnType<typeof BaseFileOnGithubCommitHistoryDataProvider.prototype["responseToData"]>;
