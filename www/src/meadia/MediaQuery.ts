import { useCssPropertyAsNumber } from "../react__hooks/media-hook";
import { CssPropertyName } from "../CssPropertyName";

export class MediaQuery {
  static get XsUp() {
    let size = useCssPropertyAsNumber( CssPropertyName.ContentNavXsMedia );
    let mediaQuery = !isNaN( size ) ? `(min-width:${ size }px)` : ``;

    return mediaQuery;
  }
  static get XsDown() {
    let size = useCssPropertyAsNumber( CssPropertyName.ContentNavXsMedia );
    let mediaQuery = !isNaN( size ) ? `(max-width:${ size }px)` : ``;


    return mediaQuery;
  }
}
