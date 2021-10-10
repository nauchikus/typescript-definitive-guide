import { compose } from "./utils";
import {normalizePath, replaceSpace, translitRusToEng} from "./string-utils";
// import { escapeUrl ,translitRusToEng, toLowerCase, normalizePath, replaceSpace } from "./string-utils";


export const toUrl: (path: string) => string = compose<string>(
    translitRusToEng,
    // toLowerCase,
    normalizePath,
    replaceSpace,
    // encodeURIComponent
);
export const toSelector = compose<string>(
    toUrl,
    // path => path.replace(/[(){}@\[\]<>|^$.*+!?="'`:;/~#%]/g, `\\$&`)
);
export const toIdSelector = (path: string) => `#${toSelector(path)}`;

export const toId: (s: string) => string = path => toUrl(path);
export const toPath = (path: string) => toUrl(path);
export function toTitle(path: string){
    return path;
}

// export const urlToPath = path => escapeUrl(path);
// export const pathToUrl = path => escapeUrl(path);
// export const urlToSelector = path => escapeUrl(path);

