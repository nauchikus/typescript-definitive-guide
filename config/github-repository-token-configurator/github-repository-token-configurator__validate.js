const fsp = require(`fs/promises`);
const path = require(`path`);

const CONFIGURATOR_NAME = `GithubRepositoryInfoConfigurator`;
const ENV_FILE_PATH = path.join(process.cwd(), `.env.github.development`);

const isGithubFieldEnvSet = () => {
    let { GITHUB_TOKEN, REPOSITORY_OWNER, REPOSITORY_BRANCH } = process.env;

    if (GITHUB_TOKEN && REPOSITORY_OWNER && REPOSITORY_BRANCH) {
        return true;
    }

    return false;
}
const fileValidate = async () => {
    try {
        let envFileData = await fsp.readFile(ENV_FILE_PATH, { encoding: `utf-8`})

        envFileData
            .split(`\n`)
            .map(param => param.split(`=`))
            .forEach(([key, value]) => {
                if (value === ``) {
                    throw new Error(`[${CONFIGURATOR_NAME}] Field ${key} must be set.`);
                }
            });
    }catch (error){
        console.error(error.message);
        process.exit(9);
    }
}

const validate = async () => {
    if (!isGithubFieldEnvSet()) {
        await fileValidate();
    }
}


validate();


