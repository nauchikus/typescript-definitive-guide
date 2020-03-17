import { ICommitInfo } from "../../plugins/gatsby-pages/graphql-querys";
import { ReleaseInfo } from "../transformers/innovationDataToVersionInfoTransformer";

export interface IWhatIsNewTocVersionStatus {
  version:string;
  date:string;
}
export interface IWhatIsNewTocTag {

}

export interface IWhatIsNewTocInnovation {
  id: string;
  version: string;
  innovationName: string;
  path:string;
  dateRelease:string;
  datePublication: string;
  tags: IWhatIsNewTocTag[];
}

export interface IWhatIsNewToc {
  // version:string;
  lastVersionStatus:IWhatIsNewTocVersionStatus;
  releaseHistory:ReleaseInfo[];
  innovations: IWhatIsNewTocInnovation[];
}

export interface IWhatIsNewTocInnovationWithContent extends IWhatIsNewTocInnovation{
  html:string;
  commitInfoAll:ICommitInfo[];
  fileOnGithubLink:string;
}
export interface IWinPageContentData extends IWhatIsNewToc{
  // versionMMP:string;
  // lastVersionStatus:IWhatIsNewTocVersionStatus;
  innovations: IWhatIsNewTocInnovationWithContent[];
}