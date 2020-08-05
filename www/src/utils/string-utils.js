

function translitRusToEng ( str ) {
  // https://gist.github.com/diolavr/d2d50686cb5a472f5696
  var ru = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d",
    "е": "e", "ё": "e", "ж": "j", "з": "z", "и": "i",
    "к": "k", "л": "l", "м": "m", "н": "n", "о": "o",
    "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
    "ф": "f", "х": "h", "ц": "c", "ч": "ch", "ш": "sh",
    "щ": "shch", "ы": "y", "э": "e", "ю": "u", "я": "ya"
  }, n_str = [];

  str = str.replace( /[ъь]+/g, "" ).replace( /й/g, "i" );

  for ( var i = 0; i < str.length; ++i ) {
    /*eslint-disable*/
    n_str.push(
    ru[ str[ i ] ]
      || ru[ str[ i ].toLowerCase() ] == undefined && str[ i ]
      || ru[ str[ i ].toLowerCase() ].replace( /^(.)/, function( match ) {
        return match.toUpperCase();
      } )
    );
    /*eslint-enable*/
  }

  return n_str.join( "" )
              // .replace( /[!\W|_]/g, " " )
              // .replace( / {2,}/g, " " )
              // .replace( /\s/g, "-" )
              // .replace( /^-|-$/g, "" );
}

const chapterHeadingToPath = ( chapterHeading ) => {
  return toPath( chapterHeading );
  // return fixedEncodeURIComponent( toPath( chapterHeading ) );
};
/**
 *
 * @param {string} text
 * @returns {string}
 */
const escapeString = ( text ) => text.replace( /[(){}\[\]|^$.*+!?]/g, `\\$&` );// eslint-disable-line no-useless-escape
const normalizeSpace = ( text ) => text.replace( / {2,}/g, " " );
// /**
//  *
//  * @param {string} text
//  * @param {string} symbol @default -
//  * @returns {string}
//  */
const spaceToSymbol = ( text, symbol = `-` ) => text.replace( /\s/g, "-" );
// const noWordToSpace = ( text ) => text.replace( /[!\W|_]/g, " " );
// /**
//  *
//  * @param {string} path
//  * @returns {string}
//  */
// const normalizePath = ( path ) => [
//   spaceToSymbol
// ].reduce( ( result, current ) => current( result ), path );
// const removeCommas = text => text.replace( /,/, `` );
const toFirstCharUpperCase = ( text ) => text[ 0 ].toLocaleUpperCase() + text.substring( 1 );
const generateIndex = ( index, length = 1, symbol = "0" ) => symbol
  .repeat( length - String( index ).length )
  .concat( index );

const pathTransformerAll = [
  translitRusToEng,
  normalizeSpace,
  path => path.trim().toLowerCase(),
  // noWordToSpace,
  spaceToSymbol,
  encodeURI,
];
/**
 *
 * @param name {string}
 * @returns {string}
 */
const toPath = name => pathTransformerAll
  .reduce((result,current)=>current(result),name);
const generateStringId = ( ( length = 6, count = -1 ) => () =>
    "0".repeat( length - ( count++ ).toString().length ).concat( count.toString() )
)();
module.exports = {
  translitRusToEng,
  chapterHeadingToPath,
  escapeString,
  toPath,
  toFirstCharUpperCase,
  generateIndex,
  generateStringId,
};

