import * as fsp from "fs/promises";
import * as path from "path";
import { toLastVersion } from "../../www/utils/version-utils";
import type { WinMetadata } from "../../www/models/WinMetadata";



const WHAT_IS_NEW_DIR = path.join( process.cwd(), `../what-is-new` );

async function getLastVersionDirName(){
  const dirAll = await fsp.readdir( WHAT_IS_NEW_DIR );
  const lastVersion = dirAll
    .sort( ( a, b ) => parseFloat( a ) - parseFloat( b ) )
    .pop();

  return lastVersion as string;
}
async function getLastVersionMetadata(version: string): Promise<WinMetadata>{
  const metadata = await fsp.readFile( path.join( WHAT_IS_NEW_DIR, version, `metadata/metadata.json` ) )
    .then(text => JSON.parse(text.toString()));

  return metadata as WinMetadata;
}
export async function getLastCoverGeneratorOptions(){
  const lastVersionDirName = await getLastVersionDirName();
  const metadata = await getLastVersionMetadata( lastVersionDirName );

  const version = toLastVersion( metadata );

  const data: CoverGeneratorOptions = {
    imageName: version.mmp.replace(`.`, `_`),
    version: version.mmp,
    versionStage: version.preReleaseName,
    colors: { ...metadata.colors.bookCoverColors }
  };


  return data;
}

export const BOOK_COVER_DEFAULT_COLORS = {
  [`--color_light`]: `#fff`,
  [`--color_middle-lite`]: `#93ABCF`,
  [`--color_accent`]: `#F9B233`,
  [`--color_ambient`]: `#2D5AA1`
};

export function getDefaultCoverGeneratorOptions(): CoverGeneratorOptions  {
  return {
    imageName: `default-cover`,
    version: ``,
    versionStage: ``,
    colors: {
      [ `--color_light` ]: `#fff`,
      [ `--color_middle-lite` ]: `#93ABCF`,
      [ `--color_accent` ]: `#F9B233`,
      [ `--color_ambient` ]: `#2D5AA1`
    }
  };
}


export interface CoverGeneratorOptions {
  imageName: string;
  version: string;
  versionStage: string;
  colors: {
    [`--color_light`]: string,
    [`--color_middle-lite`]: string,
    [`--color_accent`]: string,
    [`--color_ambient`]: string
  }
}