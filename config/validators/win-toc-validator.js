const fs = require(`fs/promises`);
const path = require(`path`);

const WIN_DIR = path.join( process.cwd(), `what-is-new` );



async function winTocValidate ( { WIN_DIR } ) {
  let winVersionNameAll = await fs.readdir( WIN_DIR );

  return winVersionNameAll.map( async ( version ) => {
    const CURRENT_WIN_VERSION_DIR = path.join( WIN_DIR, version );
    const WIN_METADATA_PATH = path.join( CURRENT_WIN_VERSION_DIR, `metadata`, `metadata.json` );



    let metadata = await fs.readFile( WIN_METADATA_PATH, `utf-8` )
                           .then( content => JSON.parse( content ) );
    let innovationReleaseHistoryAll = metadata.releaseHistory;
    let innovationDirAll = await fs.readdir( CURRENT_WIN_VERSION_DIR )
                                   .then( nameAll => nameAll.filter( name => name !== `metadata` ) );



    innovationLengthValidate( {
      dirInnovationVersion: innovationDirAll.length,
      metadataInnovationLength: metadata.innovations.length,
      version,
    } );



    return await Promise.all( metadata.innovations.map( async innovation => {
      innovationNameMappingValidate( {
        metadataInnovationName: innovation.innovationName,
        dirInnovationNameAll: innovationDirAll,
        version,
      } );
      innovationVersionValidate( {
        innovation,
        innovationReleaseHistoryAll: innovationReleaseHistoryAll,
        version,
      } );


      const CURRENT_WIN_INNOVATION_DIR = path.join( CURRENT_WIN_VERSION_DIR, innovation.innovationName );
      const CURRENT_WIN_INNOVATION_CONTENT_PATH = path.join( CURRENT_WIN_INNOVATION_DIR, `content.md` );

      let innovationContent = await fs.readFile( CURRENT_WIN_INNOVATION_CONTENT_PATH, `utf-8` );

      innovationTitleValidate( {
        content: innovationContent,
        contentPath: CURRENT_WIN_INNOVATION_CONTENT_PATH,
        innovationTitle: innovation.innovationName,
      } );
    } ) );
  } );
}

function innovationLengthValidate({metadataInnovationLength, dirInnovationVersion, version}) {
  if ( metadataInnovationLength !== dirInnovationVersion ) {
    throw new Error( `[Version ${version}] innovation dir length (${ dirInnovationVersion }) must be equal to metadata innovation length (${ metadataInnovationLength }).` );
  }
}
function innovationNameMappingValidate({metadataInnovationName, dirInnovationNameAll, version}) {
  if ( !dirInnovationNameAll.includes( metadataInnovationName ) ) {
    throw new Error( `[Version "${ version }"] metadata innovation name must be equal dir innovation name.\nMetadata innovation name: "${ metadataInnovationName }".` );
  }
}
function innovationVersionValidate({innovation, innovationReleaseHistoryAll, version}) {
  let releaseInfo = innovationReleaseHistoryAll.find( item => item.version === innovation.version );

  if ( !releaseInfo ) {
    throw new Error( `[Version ${version}] Innovation with name: "${ innovation.innovationName }" - metadata invalid version` );
  }
  if ( releaseInfo.dateRelease.toLowerCase() !== innovation.dateRelease.toLowerCase() ) {
    throw new Error( `[Version ${version}] Innovation with name: "${ innovation.innovationName }" - metadata invalid dateRelease` );
  }
  if ( releaseInfo.datePublication.toLowerCase() !== innovation.datePublication.toLowerCase() ) {
    throw new Error( `[Version ${version}] Innovation with name: "${ innovation.innovationName }" - metadata invalid datePublication` );
  }
}
function innovationTitleValidate({content, contentPath, innovationTitle}) {
  try {
    if ( !innovationExistTitleValidate( content ) ) {
      throw new Error( `Innovation content must by contain title.` );
    }

    try {
      if ( getTitle( content ) !== innovationTitle) {
        throw ``;
      }
    }catch ( error ){
      throw new Error( `Innovation title must be equal to title from content.` );
    }
  }catch ( error ){
    throw `${ error }\nInnovation file path: ${ contentPath }.`;
  }
}

function innovationExistTitleValidate ( content ) {
  return /^##(.*)$/m.test( content );
}
function getTitle(content){
  let [, title] = content.match( /^##(.*)$/m );
  return title.replace( /\\{1,1}/g, `` ).trim();
}



let content = `
## \[КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ\] Обновление lib.d.ts

Библ
`.trim();

// console.log(getTitle(content));


winTocValidate({
  WIN_DIR: path.join(path.relative(process.cwd(), `../../`), `what-is-new`),
})
  .then(()=>console.log(`WIN TOC VALIDATION COMPLETE`))
  .catch(console.error);
