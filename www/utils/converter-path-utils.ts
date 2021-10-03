import { compose } from "./utils";
import { escapeUrl ,translitRusToEng, toLowerCase, normalizePath, replaceSpace } from "./string-utils";


export const toUrl: (path: string) => string = compose(
    translitRusToEng,
    // toLowerCase,
    normalizePath,
    replaceSpace,
    // encodeURIComponent
);
export const toSelector = compose(
    toUrl,
    // path => path.replace(/[(){}@\[\]<>|^$.*+!?="'`:;/~#%]/g, `\\$&`)
);
export const toIdSelector = path => `#${toSelector(path)}`;

export const toId: (s: string) => string = path => toUrl(path);
export const toPath = path => toUrl(path);
export function toTitle(path){
    return path;
}

export const urlToPath = path => escapeUrl(path);
export const pathToUrl = path => escapeUrl(path);
export const urlToSelector = path => escapeUrl(path);

