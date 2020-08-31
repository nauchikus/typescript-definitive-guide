import { ICommitInfo } from "../../plugins/gatsby-pages/graphql-querys";
import { ReleaseInfo } from "../transformers/innovationDataToVersionInfoTransformer";

export interface IBookTocSource {
  section:string;
  title:string;
  subtitles:string[];
}

export interface IBookTocItem {
  name:string;
  path:string;
}
export interface IBookToc extends IBookTocItem{
  title:string;
  subtitleAll:IBookTocItem[]
  releaseHistory: ReleaseInfo[];
}

export interface IWhatIsNewTocVersionStatus {
  version:string;
  date:string;
}


export interface IBookTocWithContent{
  html:string;
  commitInfoAll:ICommitInfo[];
  fileOnGithubLink:string;
}