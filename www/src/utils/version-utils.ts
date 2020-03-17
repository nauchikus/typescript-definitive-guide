import { IWinPageContentData, IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { Version } from "./Version";


export const toLastReleaseInfo = ( metadata: IWhatIsNewToc ) => metadata.releaseHistory[ 0 ];
export const toLastVersion = ( metadata: IWinPageContentData ) => toLastReleaseInfo( metadata ).version;
export const toVersionInfo = ( version: string ) => new Version( version );