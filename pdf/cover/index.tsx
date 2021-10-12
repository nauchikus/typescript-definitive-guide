import { generateBookCover } from "./cover-generator";
import {
  CoverGeneratorOptions,
  getDefaultCoverGeneratorOptions,
  getLastCoverGeneratorOptions
} from "./cover-generator-options";

const DEFAULT_COVER_MODE = "default";
const CURRENT_COVER_MODE = "current";
const ALL_COVER_MODE = "all";

const MODE = process.argv
  .find( item => item.startsWith( `MODE=` ) )
  ?.substr( 5 ) ?? ALL_COVER_MODE;


async function getDefaultCoverOptions(): Promise<CoverGeneratorOptions> {
  const { version, versionStage } = await getLastCoverGeneratorOptions();
  const { imageName, colors } = getDefaultCoverGeneratorOptions();

  const options = {
    imageName,
    version,
    versionStage,
    colors
  };


  return options;
}

async function getCurrentCoverOptions(): Promise<CoverGeneratorOptions>{
  const options = await getLastCoverGeneratorOptions();

  console.log(options)

  return options;
}

if ( MODE === DEFAULT_COVER_MODE ) {
  await generateBookCover( [await getDefaultCoverOptions()] );
}else if ( MODE === CURRENT_COVER_MODE ) {
  await generateBookCover( [await getCurrentCoverOptions()] );
}else{
  console.info( `[cover generator] > Start generation...` );
  console.time( `[cover generator] > Cover generation complete.` );
  await generateBookCover( [
    await getDefaultCoverOptions(),
    await getCurrentCoverOptions(),
  ] );
  console.timeEnd( `[cover generator] > Cover generation complete.` );
}








