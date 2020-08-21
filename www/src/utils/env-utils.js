



/**
 *
 * @returns {boolean}
 */
const isRepoInfo = () => {
    const {
        GITHUB_TOKEN,
        REPOSITORY_NAME,
        REPOSITORY_OWNER,
        REPOSITORY_BRANCH
    } = process.env;


    return GITHUB_TOKEN != `` &&
        REPOSITORY_NAME != null &&
        REPOSITORY_OWNER != null &&
        REPOSITORY_BRANCH != null;
}

const getRepositoryName = () => process.env.REPOSITORY_NAME;
const getRepositoryOwner = () => process.env.REPOSITORY_OWNER;

module.exports = {
    isRepoInfo,
    getRepositoryName,
    getRepositoryOwner,
};
