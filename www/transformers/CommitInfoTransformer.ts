import {Commit} from "../graphql-querys";
import {GithubFileInfo} from "../models/GithubFileInfo";


export class CommitInfoTransformer {
    static readonly transform = (commitInfoAll: Commit[], filename?: string): GithubFileInfo => {
        try {
          const uniqueContributors = commitInfoAll
            .filter( commit => commit.author.user !== null )
            .reduce( ( map, commit ) =>
              map.set( commit.author.user.login, commit ), new Map<string, Commit>() );
          const uniqueContributorAll = Array.from( uniqueContributors.values() );

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
        }catch ( error ){
          throw new Error( `[filename ${ filename }] > ${ error.message }` );
        }

        throw new Error(``)
    }
}