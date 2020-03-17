import { GraphQl, GraphQlResponse } from "../../types/gatsby-create-pages";
import { getSiteMetadataRequest, IGetSiteMetadataRequest } from "../graphql-querys";


export type GithubRepositoryData=IGetSiteMetadataRequest["site"]["siteMetadata"]["repository"];


export class GithubRepositoryInfoDataProvider {
  constructor (private graphql:GraphQl) {
  }

  private responseAsserts(response:GraphQlResponse<IGetSiteMetadataRequest>): asserts response is Required<GraphQlResponse<IGetSiteMetadataRequest>> {
    let repository = response.data?.site.siteMetadata.repository;


    if ( !repository || ( repository && ( !repository.owner || !repository.branch ) ) ) {
      throw new Error( `Information about GitHub repository is invalid. \n [owner: "${repository?.owner}", branch: "${repository?.branch}"]` );
    }
  }

  private async load(){
    return await this.graphql<IGetSiteMetadataRequest>(getSiteMetadataRequest());
  }
  private responseToData(response:Required<GraphQlResponse<IGetSiteMetadataRequest>>){
    return {
      repository: response.data.site.siteMetadata.repository
    };
  }

  public async getData(){
    let response = await this.load();

    this.responseAsserts( response );

    return this.responseToData( response );
  }
}