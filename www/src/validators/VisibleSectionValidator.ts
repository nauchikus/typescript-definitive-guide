import { IWhatIsNewData } from "../types/IWhatIsNewToc";
import { VersionFilterStore } from "../stores/VersionFilterStore";
import { Version } from "../utils/Version";


interface IVisibleSectionValidatorParams {
  contentData:IWhatIsNewData;
  versionFilter: VersionFilterStore;
}

export class VisibleSectionValidator {
  static readonly create = ( { contentData, versionFilter }: IVisibleSectionValidatorParams ) =>
    new VisibleSectionValidator( contentData, versionFilter );

  private static DEFAULT_SECTION_ID = ``;

  constructor ( private contentData: IWhatIsNewData, private versionFilter: VersionFilterStore ) {

  }

  readonly validate = ( id: string ) => {
    if ( id === VisibleSectionValidator.DEFAULT_SECTION_ID ) {
      return false;
    }


    let currentInnovation = this.contentData.innovations
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
