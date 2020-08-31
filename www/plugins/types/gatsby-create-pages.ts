interface PageInput {
  path: string
  component: string
  layout?: string
  context?: any
}

interface BoundActionCreators {
  createPage: (page: PageInput) => void
  deletePage: (page: PageInput) => void
  createRedirect: (
    opts: {
      fromPath: string
      isPermanent?: boolean
      redirectInBrowser?: boolean
      toPath: string
    }
  ) => void
}

interface Dynamic{
  [key:string]:unknown;
}
interface GatsbyBaseNode{
  id:string;

  parent?: string
  children?: string[]
  internal: {
    type: string
    mediaType?: string
    content?: string
    contentDigest: string
    description?: string
    owner:string;
  }
}

type Intersection<T,U>=T&U;
type GatsbyNode<T extends object = Dynamic>={
  [K in keyof Intersection<T,GatsbyBaseNode>]:Intersection<T,GatsbyBaseNode>[K];
}

export type GraphQlQuery<TParams = null>=TParams extends null ?  ()=>string : (params:TParams)=>string;
// type GraphQlResponse<TParams = null>=TParams extends null ?  ()=>string : (params:TParams)=>string;
// type GetNodesByType=<TReturn>(type:string)=>Promise<TReturn[]>
export type GraphQlResponse<TData>={errors:unknown;data?:TData}
export type GraphQl=
  <TData = unknown,TParams=null>
    (query:string,params?:TParams)=>
      Promise<GraphQlResponse<TData>>;

export type GatsbyCreatePages<TOptions=null> = (
  fns: {
    graphql: GraphQl;
    actions: BoundActionCreators;
    getNodesByType:<T extends object>(nodeType:string)=>GatsbyNode<T>[],
    loadNodeContent:(node:GatsbyNode)=>string
  },
  options:TOptions
) => void