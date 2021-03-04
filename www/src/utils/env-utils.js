



/**
 *
 * @returns {boolean}
 */
const isRepoInfo = () => {
    const {
        GITHUB_TOKEN,
        GATSBY_REPOSITORY_NAME = 'typescript-definitive-guide',
        GATSBY_REPOSITORY_OWNER,
        GATSBY_REPOSITORY_BRANCH
    } = process.env;


    return GITHUB_TOKEN != `` &&
        GATSBY_REPOSITORY_NAME != null &&
        GATSBY_REPOSITORY_OWNER != null &&
        GATSBY_REPOSITORY_BRANCH != null;
}

const getRepositoryName = () => process.env.GATSBY_REPOSITORY_NAME;
const getRepositoryOwner = () => process.env.GATSBY_REPOSITORY_OWNER;


const isBuildWIthGhPagesDomain = () => true;
const getGhPagesDomain = () => getRepositoryName();

module.exports = {
    isRepoInfo,
    getRepositoryName,
    getRepositoryOwner,
    isBuildWIthGhPagesDomain,
    getGhPagesDomain,
};
