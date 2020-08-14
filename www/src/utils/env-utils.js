const {
    GITHUB_TOKEN,
    REPOSITORY_OWNER,
    REPOSITORY_BRANCH
} = process.env;



/**
 *
 * @returns {boolean}
 */
const isRepoInfo = () =>
    GITHUB_TOKEN != `` &&
    REPOSITORY_OWNER != null &&
    REPOSITORY_BRANCH != null;

module.exports = {
    isRepoInfo
};
