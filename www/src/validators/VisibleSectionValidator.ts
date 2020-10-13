import { IWinPageContentData } from "../types/IWhatIsNewToc";
import { VersionFilterStore } from "../stores/VersionFilterStore";
import { Version } from "../utils/Version";
import * as StringUtils from "../utils/string-utils";
import { ContentDataWinPageStore } from "../stores/ContentDataWinPageStore";


interface IVisibleSectionValidatorParams {
  contentDataWinPageStore:ContentDataWinPageStore;
  versionFilter: VersionFilterStore;
}

export class VisibleSectionValidator {
  static readonly create = ( { contentDataWinPageStore, versionFilter }: IVisibleSectionValidatorParams ) =>
    new VisibleSectionValidator( contentDataWinPageStore, versionFilter );

  private static DEFAULT_SECTION_ID = ``;

  constructor (private contentDataWinPageStore: ContentDataWinPageStore, private versionFilter: VersionFilterStore ) {

  }

  readonly validate = ( id: string ) => {
    if ( id === VisibleSectionValidator.DEFAULT_SECTION_ID ) {
      return false;
    }


    let currentInnovation = this.contentDataWinPageStore.pageContent.innovations
      .find( innovation => innovation.path === id );


    if ( !currentInnovation ) {
      throw new Error( `Innovation with id "${ id }" not found.` );
    }

    let isSectionVisibleValid = this.versionFilter.isCheckedByVersion(
      new Version( currentInnovation.version ).preReleaseName
    );


    return isSectionVisibleValid;
  };
}
