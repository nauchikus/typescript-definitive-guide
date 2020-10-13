import { ICommitInfo } from "../../plugins/gatsby-pages/graphql-querys";
import { ReleaseInfo } from "../transformers/innovationDataToVersionInfoTransformer";

export interface IWhatIsNewTocVersionStatus {
  version:string;
  date:string;
}
export interface IWhatIsNewTocTag {

}


export enum WhatIsNewTocInnovationFilterKey {
  Id = "id",
  DatePublication = "datePublication",
}

export interface IWhatIsNewTocInnovation {
  [WhatIsNewTocInnovationFilterKey.Id]: string;
  version: string;
  innovationName: string;
  path:string;
  dateRelease:string;
  [WhatIsNewTocInnovationFilterKey.DatePublication]: string;
  tags: IWhatIsNewTocTag[];
}

// export interface IReleaseInfo {
//
// }
export interface IWhatIsNewToc {
  releaseHistory:ReleaseInfo[];
  innovations: IWhatIsNewTocInnovation[];
}

export interface IWhatIsNewTocInnovationWithContent extends IWhatIsNewTocInnovation{
  html:string;
  commitInfoAll:ICommitInfo[];
  fileOnGithubLink:string;
}
export interface IWinPageContentData extends IWhatIsNewToc{
  mmp:string;
  // lastVersionStatus:IWhatIsNewTocVersionStatus;
  innovations: IWhatIsNewTocInnovationWithContent[];
}
