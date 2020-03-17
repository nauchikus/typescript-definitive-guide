
// type CreatePageNavNodeParams<TNodeData,TLeafData>{
//   nodes:{
//     prevPageNavData:IPageNavTreeNodeData<TNodeData>|null;
//     currentPageNavData:IPageNavTreeNodeData<TNodeData>;
//     nextPageNavData:IPageNavTreeNodeData<TNodeData>|null;
//   };
// }

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

  // static getSequencePageData = <TData>( currentPageName: string, pageNavDataAll: IPageNavTreeNode<TData>[] ) => {
  //   let currentPageNavData = PageNavTreeCreator.getCurrentPageNavTreeNode( currentPageName, pageNavDataAll );
  //   let currentPageNavDataIndex = pageNavDataAll.indexOf( currentPageNavData );
  //
  //   let prevPageNavData = pageNavDataAll[ currentPageNavDataIndex - 1 ];
  //   let nextPageNavData = pageNavDataAll[ currentPageNavDataIndex + 1 ];
  //
  //   return {
  //     prevPageNavData,
  //     currentPageNavData,
  //     nextPageNavData
  //   };
  // };

  // static createPageItem = <TData>( {prevPageNavData,currentPageNavData,nextPageNavData}:ReturnType<typeof PageNavTreeCreator.getSequencePageData> ) => {
  //   const hasPrevPage = () => prevPageNavData != null;
  //   const hasNextPage = () => nextPageNavData != null;
  //
  //   const getPrevPageData = () => !hasPrevPage() ? null : ( {
  //     name: prevPageNavData.name,
  //     path: prevPageNavData.name,
  //     data: prevPageNavData.data
  //   } );
  //   const getNextPageData = () => !hasNextPage() ? null : ( {
  //     name: nextPageNavData.name,
  //     path: nextPageNavData.name,
  //     data: nextPageNavData.data
  //   } );
  //
  //   let result = {
  //     name: currentPageNavData.name,
  //     path: currentPageNavData.name,
  //
  //     hasPrevPage: hasPrevPage(),
  //     hasNextPage: hasNextPage(),
  //
  //     prevPage: getPrevPageData(),
  //     nextPage: getNextPageData(),
  //
  //
  //     sections: currentPageNavData.sections
  //   };
  //
  //
  //   return result;
  // };


  static createPageNavPage = <TNodeData,TLeafData>({prevNode,currentNode,nextNode}:CreatePageNavNodeParams<TNodeData,TLeafData>):IPageNavPage<TNodeData,TLeafData> => {
    const hasPrevPage = () => prevNode != null;
    const hasNextPage = () => nextNode != null;

    const getPrevPageData = () => prevNode == null ? null : ( {
      name: prevNode.name,
      path: prevNode.name,
      data: prevNode.data
    } );
    const getNextPageData = () => nextNode == null ? null : ( {
      name: nextNode.name,
      path: nextNode.name,
      data: nextNode.data,
    } );

    let result = {
      name: currentNode.name,
      path: currentNode.name,

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

  // static createSectionItem = <TData>( anchorPath: string, sectionAll: IPageNavTreeLeaf<TData>[] ) => {
  //   if ( anchorPath.startsWith( `#` ) ) {
  //     anchorPath = anchorPath.substring( 1 );
  //   }
  //
  //
  //   let currentAnchorData = sectionAll.find( item => item.path === anchorPath );
  //   if ( !currentAnchorData && anchorPath !== `` ) {
  //     throw new Error( `Anchor "${ anchorPath }" not found.` );
  //   }
  //   let currentAnchorIndex = currentAnchorData ? sectionAll.indexOf( currentAnchorData ) : -1;
  //
  //
  //   let prevAnchorData = sectionAll[ currentAnchorIndex - 1 ];
  //   let nextAnchorData = sectionAll[ currentAnchorIndex + 1 ];
  //
  //   let result = {
  //     prevAnchor: prevAnchorData,
  //     nextAnchor: nextAnchorData
  //   };
  //
  //
  //   return result;
  // };

  static createPageNavTree = <TNodeData = null,TLeafData=null> ( pageNavDataAll: IPageNavNode<IPageNavLeaf<TLeafData>,TNodeData>[] ):IPageNavPage<TNodeData,TLeafData>[] =>
    pageNavDataAll.map( ( data, index, array ) =>
      PageNavTreeCreator.createPageNavPage( {
        prevNode: array[ index - 1 ],
        currentNode: array[ index ],
        nextNode: array[ index + 1 ]
      } )
    );
}
