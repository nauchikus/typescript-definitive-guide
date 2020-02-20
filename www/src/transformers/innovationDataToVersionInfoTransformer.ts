import * as DateUtils from "../utils/date-utils";
import { IWhatIsNewData } from "../types/IWhatIsNewToc";
import { toVersionInfo } from "../utils/version-utils";

export type ReleaseInfo={
  version:string;
  dateRelease:string;
}
export type VersionInfoMeta = ReleaseInfo & { count: number; };

export const innovationDataToVersionInfoTransformer = ( dataAll: IWhatIsNewData ):VersionInfoMeta[] => {
  let counts = dataAll.innovations.reduce( ( hash, innovation ) => {
    if ( !hash.hasOwnProperty( innovation.version ) ) {
      hash[ innovation.version ] = 0;
    }

    hash[ innovation.version ]++;

    return hash;
  }, {} as Record<string, number> );
  let versionInfoAll = dataAll.releaseHistory.map( versionInfo => ( {
    version: toVersionInfo( versionInfo.version ).preReleaseName,
    dateRelease: DateUtils.toAppShortDateFormat( versionInfo.dateRelease ),
    count: counts[ versionInfo.version ] ?? 0
  } ) );


  return versionInfoAll;
};