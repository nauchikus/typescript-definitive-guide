import { IWinPageContentData } from "../types/IWhatIsNewToc";
import { VersionFilterStore } from "../stores/VersionFilterStore";
import { Version } from "../utils/Version";
import * as StringUtils from "../utils/string-utils";


interface IVisibleSectionValidatorParams {
  contentData:IWinPageContentData;
  versionFilter: VersionFilterStore;
}

export class VisibleSectionValidator {
  static readonly create = ( { contentData, versionFilter }: IVisibleSectionValidatorParams ) =>
    new VisibleSectionValidator( contentData, versionFilter );

  private static DEFAULT_SECTION_ID = ``;

  constructor ( private contentData: IWinPageContentData, private versionFilter: VersionFilterStore ) {

  }

  readonly validate = ( id: string ) => {
    if ( id === VisibleSectionValidator.DEFAULT_SECTION_ID ) {
      return false;
    }


    let currentInnovation = this.contentData.innovations
      .find( innovation => StringUtils.pathToNativeElementAttributeValue(innovation.path) === id );

    console.log(this.contentData.innovations,id);

    if ( !currentInnovation ) {
      throw new Error( `Innovation with id "${ id }" not found.` );
    }

    let isSectionVisibleValid = this.versionFilter.isCheckedByVersion(
      new Version( currentInnovation.version ).preReleaseName
    );


    return isSectionVisibleValid;
  };
}
