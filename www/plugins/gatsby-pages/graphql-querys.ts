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