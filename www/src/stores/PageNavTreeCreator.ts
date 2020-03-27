import { IPageNavLeaf, IPageNavNode, IPageNavPage, IPageNavSection } from "../types/IPageNavData";

type CreatePageNavNodeParams<TNodeData,TLeafData>={
  prevNode:IPageNavNode<IPageNavLeaf<TLeafData>,TNodeData>|null;
  currentNode:IPageNavNode<IPageNavLeaf<TLeafData>,TNodeData>;
  nextNode:IPageNavNode<IPageNavLeaf<TLeafData>,TNodeData>|null;
}


type CreatePageNavLeafParams<TData>={
  prevLeaf:IPageNavLeaf<TData>|null;
  currentLeaf:IPageNavLeaf<TData>;
  nextLeaf:IPageNavLeaf<TData>|null;
}

export class PageNavTreeCreator {
  static getCurrentPageNavTreeNode = <TData>( pageName: string, pageNavDataAll: IPageNavPage<TData>[] ) => {
    let currentPageNavData = pageNavDataAll.find( item => item.name === pageName );

    if ( !currentPageNavData ) {
      throw new Error( `Page nav data for page with name "${ pageName }" not found.` );
    }


    return currentPageNavData;
  };

  static createPageNavPage = <TNodeData,TLeafData>({prevNode,currentNode,nextNode}:CreatePageNavNodeParams<TNodeData,TLeafData>):IPageNavPage<TNodeData,TLeafData> => {
    const hasPrevPage = () => prevNode != null;
    const hasNextPage = () => nextNode != null;

    const getPrevPageData = () => prevNode == null ? null : ( {
      name: prevNode.name,
      path: prevNode.path,
      data: prevNode.data
    } );
    const getNextPageData = () => nextNode == null ? null : ( {
      name: nextNode.name,
      path: nextNode.path,
      data: nextNode.data,
    } );

    let result = {
      name: currentNode.name,
      path: currentNode.path,

      hasPrevPage: hasPrevPage(),
      hasNextPage: hasNextPage(),

      prevPage: getPrevPageData(),
      nextPage: getNextPageData(),


      sections: currentNode.sections
        .map( ( data, index, array ) => PageNavTreeCreator.createPageNavSection( {
          prevLeaf: array[ index - 1 ],
          currentLeaf: array[ index ],
          nextLeaf: array[ index + 1 ]
        } ) )
    };


    return result;
  };

  static createPageNavSection = <TData>({prevLeaf,currentLeaf,nextLeaf}:CreatePageNavLeafParams<TData>):IPageNavSection<TData> => {
    let result = {
      ...currentLeaf,

      prevAnchor: prevLeaf,
      nextAnchor: nextLeaf
    };


    return result;
  };

  static createPageNavTree = <TNodeData = null,TLeafData=null> ( pageNavDataAll: IPageNavNode<IPageNavLeaf<TLeafData>,TNodeData>[] ):IPageNavPage<TNodeData,TLeafData>[] =>
    pageNavDataAll.map( ( data, index, array ) =>
      PageNavTreeCreator.createPageNavPage( {
        prevNode: array[ index - 1 ],
        currentNode: array[ index ],
        nextNode: array[ index + 1 ]
      } )
    );
}
