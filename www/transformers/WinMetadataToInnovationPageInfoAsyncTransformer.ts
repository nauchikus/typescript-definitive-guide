import {WinMetadata} from "../pages/what-is-new";
import {WinInnovationMdProvider} from "../provaders/WinInnovationMdProvider";
import {InnovationCommitInfoProviderCommit} from "../provaders/InnovationCommitInfoProviderCommit";
import {CommitInfoTransformer} from "./CommitInfoTransformer";
import {Remark} from "../remark/Remark";
import {toLastVersion} from "../utils/version-utils";
import {GithubFileInfo} from "../models/GithubFileInfo";
import {Counter} from "../utils/string-utils";
import {VersionInfo} from "../utils/VersionInfo";
import {toId, toUrl} from "../utils/converter-path-utils";

export type Version = {
    version: string;
    dateRelease: string;
    datePublication: string;
}
export type InnovationSection = {
    key: string;
    markdown: string,
    version: Version;
    path: string;
    elementId: string;
    tags: string[];
    githubFileInfo: GithubFileInfo;
}
export type InnovationPage = {
    key: string;
    title: string;
    version: Version;
    coverUrl: string;
    path: string;
    sections: InnovationSection[]
}

export class WinMetadataToInnovationPageInfoAsyncTransformer {
    static readonly transform = async (metadata: WinMetadata) => {
        const version = toLastVersion(metadata);



        const lastVersion = metadata.releaseHistory[0];


        const counter = new Counter();
        const createKey = (version: string) => `${version}_${counter.get()}`;


        const sections = await Promise.all(metadata.innovations.map(async (innovation) => {
            const markdown = await WinInnovationMdProvider.getData(
                version.mmp,
                innovation.innovationName
            );
            // const {value: html} = await Remark.compile(md, {
            //     divisionIntoSections: {isActive: false},
            //     addSectionId: {isActive: false},
            //     addTagBar: {isActive: true, settings: {tags: innovation.tags}},
            // });

            const commitAll = await InnovationCommitInfoProviderCommit.getData(
                version.mmp,
                innovation.innovationName
            );
            const githubFileInfo = CommitInfoTransformer.transform(commitAll, innovation.innovationName);


            return {
                key: createKey(version.version),
                title: innovation.innovationName,
                tags: innovation.tags,
                markdown,
                githubFileInfo,
                path: toUrl(innovation.innovationName),
                elementId: toId(innovation.innovationName),
                version: {
                    version: innovation.version,
                    dateRelease: innovation.dateRelease,
                    datePublication: innovation.datePublication,
                }
            }
        }))

        const innovationPage: InnovationPage = {
            key: createKey(version.version),
            title: version.version,
            path: version.version,
            coverUrl: `https://github.com/nauchikus/typescript-definitive-guide/raw/master/what-is-new/${version.version}/metadata/cover.png`,
            version: lastVersion,
            sections
        };


        return innovationPage;
    }
}