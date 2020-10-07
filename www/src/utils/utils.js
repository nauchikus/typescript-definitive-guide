/**
 *
 * @param funcs {Function}
 * @returns {*|(function(...[*]): *)}
 */
const compose = (...funcs) => {
    if(funcs.length === 1){
        return funcs[0];
    }

    return funcs.reduce((result, f) => (...params) => f(result(...params)));
}

module.exports = {
    compose,
}
