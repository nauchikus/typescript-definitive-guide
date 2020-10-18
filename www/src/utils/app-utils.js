const isServer = () => {
    return process && process.env.NODE_ENV === "production"
    // return `module` in globalThis;
}
const isBrowser = () => {
    return `window` in globalThis;
}

module.exports = {
    isServer,
    isBrowser,
}
