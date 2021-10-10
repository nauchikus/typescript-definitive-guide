/**
 *
 * @param funcs {Function}
 * @returns {*|(function(...[*]): *)}
 */

type F = <P>(...p: P[]) => P ;
export const compose = <P>(...funcs: ((...p: P[]) => P)[]): (...p: P[]) => P => {
    if(funcs.length === 1){
        return funcs[0];
    }

    return funcs.reduce((result, f) => (...params) => f(result(...params)));
}
