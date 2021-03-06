import {
  getWhatIsNewContentHtmlRequest, IGetContentHtmlRequest, IGetContentHtmlResponse,
} from "../graphql-querys";
import { GraphQl, GraphQlResponse } from "../../types/gatsby-create-pages";



export abstract class BaseFileOnGithubHtmlContentDataProvider<TInitializeParams> {
  constructor ( private graphql: GraphQl ) {

  }

  protected isResponseValid ( response: GraphQlResponse<IGetContentHtmlResponse> ): boolean {
    if ( !response.data?.markdownRemark ) {
      return false;
    }

    return true;
  }

  protected async load ( query: string, request: IGetContentHtmlRequest ): Promise<GraphQlResponse<IGetContentHtmlResponse>> {
    return await this.graphql<IGetContentHtmlResponse, IGetContentHtmlRequest>( query, request );
  }
  protected responseToData(response:Required<GraphQlResponse<IGetContentHtmlResponse>>){
    return {
      html: response.data.markdownRemark.html
    };
  }

  public async getData (params:TInitializeParams): Promise<ResultData> {
    throw new Error( `Method must be override in subclasses.` );
  }

}

export type ResultData=ReturnType<typeof BaseFileOnGithubHtmlContentDataProvider.prototype["responseToData"]>;
