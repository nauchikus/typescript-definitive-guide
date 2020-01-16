import { GraphQlQuery, GraphQlResponse } from "../types/gatsby-create-pages";

interface IGetWhatIsNewContentHtmlRequest {
  regexp:string;
}
export interface IGetWinContentHtmlResponse{
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
query GetWhatIsNewFileList {
  github {
    repository(owner: "nauchikus", name: "typescript-definitive-guide") {
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
query GetGithubCommitHistory($path: String!) {
  github {
    repository(owner: "nauchikus", name: "typescript-definitive-guide") {
      ref(qualifiedName: "new-www") {
        target {
          ... on GitHub_Commit {
            history(path: $path) {
              commits: nodes {
                committedDate
                committer {
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
query GetWhatIsNewFileHistory($path: String!) {
  github {
    repository(owner: "nauchikus", name: "typescript-definitive-guide") {
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