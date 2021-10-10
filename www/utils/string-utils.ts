import {compose} from "./utils";

export function translitRusToEng ( str: string ): string {
  // https://gist.github.com/diolavr/d2d50686cb5a472f5696
  var ru: {[key: string]: string} = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d",
    "е": "e", "ё": "e", "ж": "j", "з": "z", "и": "i",
    "к": "k", "л": "l", "м": "m", "н": "n", "о": "o",
    "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
    "ф": "f", "х": "h", "ц": "c", "ч": "ch", "ш": "sh",
    "щ": "shch", "ы": "y", "э": "e", "ю": "u", "я": "ya"
  }, n_str = [] as string[];

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

    return n_str.join("") as string;
              // .replace( /[!\W|_]/g, " " )
              // .replace( / {2,}/g, " " )
              // .replace( /\s/g, "-" )
              // .replace( /^-|-$/g, "" );
}




export const normaliseString = (text: string): string => text.trim().toLowerCase();

export const chapterHeadingToPath = ( chapterHeading: string ): string => {
  return toPath( chapterHeading );
  // return fixedEncodeURIComponent( toPath( chapterHeading ) );
};
/**
 *
 * @param {string} text
 * @returns {string}
 */
export const escapeString = ( text:string ): string => text
    .replace( /[(){}@\[\]<>|^$.*+!?=]/g, `\\$&` );// eslint-disable-line no-useless-escape
// export const escapeStringForSelector = compose<string, string>(
//     (text: string): string => text
//         .replace(/\\/g, "\\\\")
//         .replace(/[,]/g, "\\$&"),
//     escapeString,
// );// eslint-disable-line no-useless-escape




// const SPEC_CHARS = `| ^`;
// let map = new Map<string, string>([
//   ...Array.from(SPEC_CHARS).map(item => [item, encodeURIComponent(item)]) as string[]
// ]);
// let regexp = new RegExp(`[${Array.from(map.keys()).join(``)}]`, `g`);
//
// export const escapeUrl = (path: string): string => decodeURIComponent(path)
//     .replace(regexp, (char: string): string => {
//       if (!map.has(char)) {
//         console.error(char);
//       }
//
//       return map.get(char) as string;
//     });


//
//
export const normalizeCommaSurroundedSpaces = (text: string): string => text
    .replace(/(\s+(?=(?:,)))/g, '')
    .replace(/,\s+/g, `,`)
    .replace(/,(?=,+)/g, ``);
export const normalizeHyphenSurroundedSpaces = (text: string): string => text
    .replace(/(.*?)\s{2,}(-)/g, `$1 $2`)
    .replace(/(-)\s{2,}(.*?)/g, `$1 $2`)
export const normalizeMultiSpace = (text: string): string => text
    .replace(/\s{2,}/g, " ");
export const normalizeBracketSpace = (text: string): string => text
    .replace(/([\[\(<])\s*(.*?)\s([\]\)>])/g, `$1$2$3`);

export const normalizePath = compose<string>(
    normalizeCommaSurroundedSpaces,
    normalizeHyphenSurroundedSpaces,
    normalizeMultiSpace,
    normalizeBracketSpace,
);

export const replaceSpace = (text: string, symbol = `_`): string => text
    .replace(/\s/g, symbol);
// export const toLowerCase = (text: string): string => text.toLowerCase();


/**
 *
 * @param {string} text
 * @returns {string}
 */
// export const normalizeSpaceForSelector = (text: string): string => text
//     .replace(/\s/g, `_`);

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
// export const pathToSelector = compose<string, string>(
//     normalizeSpaceForSelector,
//     // normalizeSpace,
//     normaliseString,
//     escapeString,
// );
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
// export const spaceToSymbol = ( text: string, symbol = `-` ): string => text.replace( /\s/g, "-" );
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
// export const toFirstCharUpperCase = ( text: string ): string => text[ 0 ].toLocaleUpperCase() + text.substring( 1 );
export const generateIndex = ( index: number, length = 1, symbol = "0" ): string => symbol
  .repeat( length - String( index ).length )
  .concat( index.toString() );


/**
 *
 * @param name {string}
 * @returns {string}
 */
export const toPath = compose<string>(
    translitRusToEng,
    // normalizeSpace,
    normaliseString,
    // noWordToSpace,
    // spaceToSymbol,
    // encodeURIComponent
);
export const generateStringId = ( ( length = 6, count = -1 ) => () =>
    "0".repeat( length - ( count++ ).toString().length ).concat( count.toString() )
)();

export const toCharCodeId = (name: string): string => [...name].map(char => char.charCodeAt(0)).join(``);

export function createBox(length: number | number[]){
    if (Array.isArray(length)) {
        return length;
    }

    return new Array(length).fill(0);
}
export function generateContentSectionIncrementalId(level: number, box: number[]): string {
    box[level]++;

    return box.join(`.`);
}

export class ContentSectionIncrementalIdGenerator {
    static create = (length: number = 5) => new ContentSectionIncrementalIdGenerator(
        new Array(length).fill(0)
    );
    static createWithMatrix = (matrix: number[]) =>
        new ContentSectionIncrementalIdGenerator(matrix);

    constructor(private matrix: number[]) {
    }

    generate = (level: number) => {
        this.matrix[level]++;

        return this.matrix.join(`.`);
    }

    toMatrix = () => [...this.matrix];
}

export class Counter {
    get value(){
        return this.n;
    }

    constructor(private n = 0) {
    }

    get = () => this.n++;
}

