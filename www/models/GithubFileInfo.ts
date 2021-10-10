export interface Contributor {
    name: string;
    avatar: string;
    bio: string;
    githubUrl: string;
}
export interface GithubFileInfo {
    lastUpdate: number,
    contributorAll: Contributor[];
}