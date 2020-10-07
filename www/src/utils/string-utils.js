const { compose } = require('./utils');

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




const normaliseString = text => text.trim().toLowerCase();

const chapterHeadingToPath = ( chapterHeading ) => {
  return toPath( chapterHeading );
  // return fixedEncodeURIComponent( toPath( chapterHeading ) );
};
/**
 *
 * @param {string} text
 * @returns {string}
 */
const escapeString = ( text ) => text
    .replace( /[(){}@\[\]<>|^$.*+!?=]/g, `\\$&` );// eslint-disable-line no-useless-escape
const escapeStringForSelector = compose(
    text => text
        .replace(/\\/g, `\\\\`)
        .replace(/[,]/g, `\\$&`),// eslint-disable-line no-useless-escape
    escapeString,
);// eslint-disable-line no-useless-escape




const SPEC_CHARS = `| ^`;
let map = new Map([
  ...Array.from(SPEC_CHARS).map(item => [item, encodeURIComponent(item)])
]);
let regexp = new RegExp(`[${Array.from(map.keys()).join(``)}]`, `g`);

const escapeUrl = path => decodeURIComponent(path)
    .replace(regexp, char => {
      if (!map.has(char)) {
        console.error(char);
      }

      return map.get(char);
    });




const normalizeCommaSurroundedSpaces = (text) => text
    .replace(/(\s+(?=(?:,)))/g, '')
    .replace(/,\s+/g, `,`)
    .replace(/,(?=,+)/g, ``);
const normalizeHyphenSurroundedSpaces = (text) => text
    .replace(/(.*?)\s{2,}(-)/g, `$1 $2`)
    .replace(/(-)\s{2,}(.*?)/g, `$1 $2`)
const normalizeMultiSpace = (text) => text
    .replace(/\s{2,}/g, " ");
const normalizeBracketSpace = (text) => text
    .replace(/([\[\(<])\s*(.*?)\s([\]\)>])/g, `$1$2$3`);


const normalizePath = compose(
    normalizeCommaSurroundedSpaces,
    normalizeHyphenSurroundedSpaces,
    normalizeMultiSpace,
    normalizeBracketSpace,
);

const replaceSpace = (text, symbol = `_`) => text
    .replace(/\s/g, symbol);
const toLowerCase = text => text.toLowerCase();


/**
 *
 * @param {string} text
 * @returns {string}
 */
const normalizeSpaceForSelector = text => text
    .replace(/\s/g, `_`);

/**
 *
 * @param value {(text: string) => string}
 * @returns {*|(function(...[*]): *)}
 */
// const toSelector = compose(
//     normalizeSpaceForSelector,
//     // normalizeSpace,
//     normaliseString,
//     escapeStringForSelector,
// );
const pathToSelector = compose(
    normalizeSpaceForSelector,
    // normalizeSpace,
    normaliseString,
    escapeString,
);
/**
 *
 * @param value {(text: string) => string}
 * @returns {*|(function(...[*]): *)}
 */

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


/**
 *
 * @param name {string}
 * @returns {string}
 */
const toPath = compose(
    translitRusToEng,
    // normalizeSpace,
    normaliseString,
    // noWordToSpace,
    // spaceToSymbol,
    // encodeURIComponent
);
// const toNativeElementAttributeValue = compose(
//     toPath,
//     normalizeSpaceForSelector,
// );
// const urlToNativeElementAttributeValue = compose(
//     decodeURIComponent,
//     toNativeElementAttributeValue,
// );
// const urlToPath = url => decodeURIComponent(url);
// const hadingToNativeElementAttributeValue = compose(
//     toPath,
//     normalizeSpaceForSelector,
//     text => text
//         .replace(`/\[\]<>\(\)=/g`, `//$&`)
// );
// const pathToNativeElementAttributeValue = hadingToNativeElementAttributeValue;
// const
// const urlToSelector = compose(
//     decodeURIComponent,
//     toSelector,
// );
// const toPath = name => pathTransformerAll
//     .reduce((result, current) => current(result), name);
const generateStringId = ( ( length = 6, count = -1 ) => () =>
    "0".repeat( length - ( count++ ).toString().length ).concat( count.toString() )
)();

const toCharCodeId = name => [...name].map(char => char.charCodeAt()).join(``);

module.exports = {
  translitRusToEng,
  chapterHeadingToPath,
  escapeString,
  toPath,
  toFirstCharUpperCase,
  generateIndex,
  generateStringId,
  normalizePath,
  toLowerCase,
  replaceSpace,
  escapeUrl,
  // toSelector,
  // hadingToNativeElementAttributeValue,
  // urlToSelector,
  // toNativeElementAttributeValue,
  // urlToNativeElementAttributeValue,
  // pathToNativeElementAttributeValue,
  // urlToPath,
  toCharCodeId,
};

