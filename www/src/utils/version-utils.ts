import { IWhatIsNewData, IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { Version } from "./Version";


export const toLastReleaseInfo = ( metadata: IWhatIsNewToc ) => metadata.releaseHistory[ 0 ];
export const toLastVersion = ( metadata: IWhatIsNewData ) => toLastReleaseInfo( metadata ).version;
export const toVersionInfo = ( version: string ) => new Version( version );