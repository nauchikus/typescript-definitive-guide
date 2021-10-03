import {Commit} from "../graphql-querys";
import {GithubFileInfo} from "../models/GithubFileInfo";


export class CommitInfoTransformer {
    static readonly transform = (commitInfoAll: Commit[]): GithubFileInfo => {
        const uniqueContributorAll = Array.from(commitInfoAll.reduce((map, commit) =>
            map.set(commit.author.user.login, commit), new Map<string, Commit>())
            .values());

        const githubFileInfo = {
            lastUpdate: Math.max(
                ...commitInfoAll.map(commit => Date.parse(commit.author.date))
            ),
            contributorAll: uniqueContributorAll
                .map(commit => ({
                    name: commit.author.name,
                    avatar: commit.author.avatarUrl,
                    bio: commit.author.user.bio,
                    githubUrl: `https://github.com/${commit.author.user.login}`
                }))
        }

        return githubFileInfo;
    }
}