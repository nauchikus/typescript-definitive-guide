import { GithubRepositoryData } from "./GithubRepositoryInfoDataProvider";
import { getGithubCommitHistoryQuery, IGetFileOnGithubHistoryInfoResponse } from "../graphql-querys";
import { GraphQlResponse } from "../../types/gatsby-create-pages";
import { BaseFileOnGithubCommitHistoryDataProvider, ResultData } from "./BaseFileOnGithubCommitHistoryDataProvider";
import { generateIndex } from "../../../src/utils/string-utils";

export interface IBookChapterFileOnGithubCommitHistoryGetDataParams {
  repository:GithubRepositoryData;
  lang:string;
  chapterName:string;
}
export interface IBookChapterCreateGraphQlRequestParams extends IBookChapterFileOnGithubCommitHistoryGetDataParams{

}
export class BookChapterFileOnGithubCommitHistoryDataProvider extends BaseFileOnGithubCommitHistoryDataProvider<IBookChapterFileOnGithubCommitHistoryGetDataParams>{
  private createBookChapterFileOnGithubPath = (locale:string,chapterName:string) => (
    `book/${locale}/chapters/${ chapterName }/content.md`
    // `${ generateIndex( index, 3 ) }.(${ sectionName }) ${ chapterName }`
  );
  private createGraphQlRequest ( {repository,lang, chapterName}:IBookChapterCreateGraphQlRequestParams ) {
    return {
      path: this.createBookChapterFileOnGithubPath( lang, chapterName ),
      owner:repository.owner,
      branch: repository.branch,
    };
  }

  async getData (params:IBookChapterFileOnGithubCommitHistoryGetDataParams): Promise<ResultData> {
    let response = await super.load(
      getGithubCommitHistoryQuery(),
      this.createGraphQlRequest( params )
    );


    if ( !super.isResponseValid( response ) ) {
      throw new Error( [
        `Invalid commit history data.`,
        `GraphQl request: ${ JSON.stringify( this.createGraphQlRequest( params ) ) }`,
        `GraphQl request errors stack: \n ${ ( response?.errors as string[] )?.join( `\n` ) }`
      ].join( `\n` ) );
    }


    return Promise.resolve(
      super.responseToData( response as Required<GraphQlResponse<IGetFileOnGithubHistoryInfoResponse>> )
    );
  }
}

