const fsp = require(`fs/promises`);
const path = require(`path`);


const CONFIGURATOR_NAME = `GithubRepositoryInfoConfigurator`;
const ENV_FILE_PATH = path.join(process.cwd(), `.env.github.development`);

const getEnvFileData = () => (`
GITHUB_TOKEN=
REPOSITORY_OWNER=
REPOSITORY_BRANCH=
`).trim();

const init = async () => {
    try {
        await fsp.stat(ENV_FILE_PATH);


    }catch (error) {
        console.info(`[${CONFIGURATOR_NAME}] Generate file .env.github.development`);

        await fsp.writeFile(ENV_FILE_PATH, getEnvFileData());

        console.info(`[${CONFIGURATOR_NAME}] File .env.github.development is generated.`);
        console.info(`[${CONFIGURATOR_NAME}] Fill in required fields in .env.github.development file.`);

        process.exit(0);
    }
}



init()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
