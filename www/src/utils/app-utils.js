const isServer = () => {
    return globalThis.hasOwnProperty(`module`);
}
const isBrowser = () => {
    return globalThis.hasOwnProperty(`window`);
}

module.exports = {
    isServer,
    isBrowser,
}
