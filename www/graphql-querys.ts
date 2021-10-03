import { GraphQlQuery, GraphQlResponse } from "../types/gatsby-create-pages";

/* GET WHAT IS NEW VERSION LIST */
export interface WinVersionListItem {
  version: string;
}
export interface GetWinVersionListResponse {
  repository: {
    object: {
      directories: WinVersionListItem[]
    }
  }
}
export const getWinVersionList = () => (`
query GetWhatIsNewFileList($owner: String!, $repo: String!, $path: String!) {
  repository(owner: $owner, name: $repo) {
    object(expression: $path) {
        ... on Tree {
          directories: entries {
            version: name
          }
      }
    }
  }
}
`)
/* GET WHAT IS NEW VERSION LIST */




export interface IGetSiteMetadataRequest {
  site: {
    siteMetadata: {
      repository: {
        name: string;
        owner: string;
        branch: string;
      }
    }
  }
}

export const getSiteMetadataRequest: GraphQlQuery = () => ( `
query SiteMetadataQuery {
    site {
        siteMetadata {
            repository{
                name
                owner
                branch
            }
        }
    }
}
` );


export interface IGetContentHtmlRequest {
  regexp:string;
}
export interface IContentHtmlData {
  html:string;
}
export interface IGetContentHtmlResponse{
  markdownRemark:{
    html:string;
  }
}
export const getWhatIsNewContentHtmlRequest: GraphQlQuery = () => ( `
query ($regexp:String!){
  markdownRemark(fileAbsolutePath: {regex: $regexp}) {
    html
  }
}
` );


type FileListVersionNode={
  version:string
  object:{
    directories:FileListInnovationNode[]
  }
}
type FileListInnovationNode={
  innovationName:string
}
type WhatIsNewNewAppFileList = {
  github: {
    repository: {
      object: {
        directories: FileListVersionNode[]
      }
    }
  }
}
const getWhatIsNewNewAppFileListQuery:GraphQlQuery=()=>(`
query GetWhatIsNewFileList($owner: String!, $repositoryName: String!) {
  github {
    repository(owner: $owner, name: $repositoryName) {
      object(expression: "new-app:what-is-new/") {
        ... on GitHub_Tree {
          directories: entries {
            version:name
            object {
              ... on GitHub_Tree {
                directories: entries {
                  innovationName:name
                }
              }
            }
          }
        }
      }
    }
  }
}
`)

export type GetBookTocQuery = {
  repository: {
    toc: {
      text: string;
    }
  }}
export function getBookTocQuery(){
  return `
query GetBookToc {
  repository(owner: "nauchikus", name: "typescript-definitive-guide") {
    toc:object(expression: "master:book/ru/metadata/toc.json") {
      ... on Blob {
        text
      }
    }
  }
}
  `
}

/*-----------------------*/
export type GetFileResponse = {
  repository: {
    file: {
      text: string;
    }
  }}
export function getFileQuery(){
  return `
query GetBookToc($owner: String!, $repo: String!, $path: String!) {
  repository(owner: $owner, name: $repo) {
    file:object(expression: $path) {
      ... on Blob {
        text
      }
    }
  }
}
  `
}

/**-----------------------------------------*/
export type Commit = {
  "messageHeadline": string,
  "authoredByCommitter": boolean,
  "message": string,
  "author": {
    "date": string,
    "name": string,
    "avatarUrl": string,
    "user": {
      "bio": string;
      login: string;
    }
  }
};
export type FileCommitInfoResponse = {
  repository: {
    ref: {
      target: {
        history: {
          commits: Commit[];
        }
      }
    }
  }
}
export function getFileCommitInfoQuery() {
  return (`
query GetWhatIsNewFileHistory($owner: String!, $repo: String!, $branch: String!, $filepath: String!) {
  repository(owner: $owner, name: $repo){
    ref(qualifiedName: $branch){
      target {
        ... on Commit {
          history(path: $filepath) {
              commits: nodes {
                messageHeadline
                authoredByCommitter
                message
                author {
                  date
                  name
                  avatarUrl
                  user {
                    bio
                    login
                  }
                }
              }
            }
        }
      }
    }
  }
}
  `);
}




export interface ICommitHistory {
  authoredByCommitter:boolean;
  committedDate:string;
  pushedDate:string;
  message:string;
  messageHeadline:string;
  committer: {
    name: string
  };
}

export interface IGetGithubCommitHistoryRequest {
  path:string;
  owner:string;
  branch:string;
}
export interface IGetGithubCommitHistoryResponse {
  github:{
    repository:{
      ref:{
        target:{
          history:{
            commits:ICommitHistory[]
          }
        }
      }
    }
  }
}
export interface IGetFileOnGithubHistoryInfoResponse {
  github:{
    repository:{
      ref:{
        target:{
          history:{
            commits:ICommitInfo[]
          }
        }
      }
    }
  }
}
export const getGithubCommitHistoryQuery: GraphQlQuery = (  ) => ( `
query GetGithubCommitHistory($path: String!, $owner: String!, $repositoryName: String!, $branch: String!) {
  github {
    repository(owner: $owner, name: $repositoryName) {
      ref(qualifiedName: $branch) {
        target {
          ... on GitHub_Commit {
            history(path: $path) {
              commits: nodes {
                committedDate
                committer: author {
                  name
                }
                message
                messageHeadline
                pushedDate
                authoredByCommitter
              }
            }
          }
        }
      }
    }
  }
}
` );
export const getFileOnGithubHistoryInfoQuery: GraphQlQuery = (  ) => ( `
query GetWhatIsNewFileHistory($path: String!, $owner: String!, $repositoryName: String!) {
  github {
    repository(owner: $owner, name: $repositoryName) {
      ref(qualifiedName: "new-www") {
        target {
          ... on GitHub_Commit {
            history(path: $path) {
              commits: nodes {
                messageHeadline
                authoredByCommitter
                message
                author {
                  date
                  name
                  avatarUrl
                  user {
                    bio
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
` );


export interface IGithubUser {
  name:string;
  bio:string;
  location:string;
  avatarUrl:string;
}
export interface IGetGithubUserResponse {
  github:{
    search:{
      edges:Array<{
        node:IGithubUser
      }>
    }
  }
}

export const getGithubUserQuery: GraphQlQuery = (  ) => ( `
query GetGithubUser($userName: String!) {
  github {
    search(query:$userName, type:USER, first:1){
      edges{
        node{
        ...on GitHub_User{
            name: login
            bio
            location
            avatarUrl
          }
        }
      }
    }
  }
}
` );

export interface ICommitInfo extends ICommitHistory{
  committer: IGithubUser
}
