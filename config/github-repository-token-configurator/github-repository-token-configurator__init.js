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


// GITHUB_TOKEN=18c89550242d8b549a6ce01a693e4b4b3deea1ce;REPOSITORY_OWNER=nauchikus;REPOSITORY_BRANCH=new-www-change-book-chapters-dir-name

init()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
// const validate = async () => {
//     try {
//         let envFileData = await fsp.readFile(ENV_FILE_PATH).toString();
//
//         envFileData
//             .split(`\n`)
//             .map(param => param.split(`=`))
//             .forEach(([key, value]) => {
//                 if (value === ``) {
//                     throw new Error(`[CONFIGURATOR_NAME] Field ${key} must be set.`);
//                 }
//             });
//     }catch (error){
//         console.error(error.message);
//         process.exit(9);
//     }
// }
// const execute = async () => {
//     await init();
//     await validate();
// }
//
//
// execute()



// try {
//     fs.statSync(ENV_FILE_PATH);
//
//
// }catch (error) {
//     console.info(`[${CONFIGURATOR_NAME}] Generate file .env.github.development`);
//
//     fs.writeFileSync(ENV_FILE_PATH, getEnvFileData());
//
//     console.info(`[${CONFIGURATOR_NAME}] File .env.github.development is generated.`);
//     console.info(`[${CONFIGURATOR_NAME}] Fill in required fields in .env.github.development file.`);
//
//     process.exit(0);
// }
//
// try {
//     let envFileData = fs.readFileSync(ENV_FILE_PATH).toString();
//
//     envFileData
//         .split(`\n`)
//         .map(param => param.split(`=`))
//         .forEach(([key, value]) => {
//             if (value === ``) {
//                 throw new Error(`[CONFIGURATOR_NAME] Field ${key} must be set.`);
//             }
//         });
// }catch (error){
//     console.error(error.message);
//     process.exit(1);
// }
