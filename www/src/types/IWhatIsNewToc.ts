import { ICommitInfo } from "../../plugins/gatsby-pages/graphql-querys";

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
  versionMMP:string;
  lastVersionStatus:IWhatIsNewTocVersionStatus;
  innovations: IWhatIsNewTocInnovation[];
}

interface IWhatIsNewTocInnovationWithContent extends IWhatIsNewTocInnovation{
  html:string;
  commitInfoAll:ICommitInfo[];
  fileOnGithubLink:string;
}
export interface IWhatIsNewData extends IWhatIsNewToc{
  versionMMP:string;
  lastVersionStatus:IWhatIsNewTocVersionStatus;
  innovations: IWhatIsNewTocInnovationWithContent[];
}