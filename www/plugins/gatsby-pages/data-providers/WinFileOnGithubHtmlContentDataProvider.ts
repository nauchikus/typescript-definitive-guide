import { getWhatIsNewContentHtmlRequest, IGetContentHtmlResponse } from "../graphql-querys";
import { GraphQlResponse } from "../../types/gatsby-create-pages";
import { BaseFileOnGithubHtmlContentDataProvider, ResultData } from "./BaseFileOnGithubHtmlContentDataProvider";

export interface IWinFileOnGithubHtmlContentGetDataParams {
  innovationName:string;
  innovationEscapedName:string;
  versionMMP:string;
  innovationVersionMMP:string;
}
export class WinFileOnGithubHtmlContentDataProvider extends BaseFileOnGithubHtmlContentDataProvider<IWinFileOnGithubHtmlContentGetDataParams>{
  private createGraphQlRequest ( innovationVersionMMP: string, innovationEscapedName: string ) {
    return {
      regexp: `/.*/what-is-new/${ innovationVersionMMP }/${ innovationEscapedName }/content\\.md/`
    };
  }

  async getData (params:IWinFileOnGithubHtmlContentGetDataParams): Promise<ResultData> {
    let response = await super.load(
      getWhatIsNewContentHtmlRequest(),
      this.createGraphQlRequest(
        params.innovationVersionMMP,
        params.innovationEscapedName
      )
    );

    if ( !super.isResponseValid( response ) ) {
      throw new Error( `Innovation for version "${ params.versionMMP }" with name "${ params.innovationName }" not exists.` );
    }


    return Promise.resolve( super.responseToData( response as Required<GraphQlResponse<IGetContentHtmlResponse>> ) );
  }
}

