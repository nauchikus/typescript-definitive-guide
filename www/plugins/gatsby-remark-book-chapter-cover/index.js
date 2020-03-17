const Validators = require( "../gatsby-node-validators" );
const Utils = require( "../utils" );

module.exports = ( ...params ) => {
  let [{ markdownAST: ast, markdownNode, getNodes }, { locale }] = params;

  if ( !Validators.bookChapter.isBookChapterMarkdownRemarkGatsbyNode( markdownNode ) ) {
    return ast;
  }


  const getBookChapterOnGithubNameByAbsolutePath = absolutePath => {
    let [, , name] = absolutePath.match( /.*\/book\/(ru|en)\/chapters\/(.*?)\/content\.md/ );

    if ( !name ) {
      throw new Error( `Extract github chapter name from absolute path "${ absolutePath }" fail.` );
    }

    return name;
  };
  const getBookChapterInfoByBookChapterGithubName = githubName => {
    let [, index, sectionName, chapterName] = githubName.match( /(\d{3})(?:\.\()(.*)(?:\))(?:\s)(.*)/ );


    if ( !index || !sectionName || !chapterName ) {
      throw new Error( `Failed parse github file name "${ githubName }".` );
    }


    return { index, sectionName, chapterName };
  };

  const H1_TAG_DEPTH = 1;

  try{
    let sectionNode = ast.children[ 0 ];


    if ( sectionNode ) {
      let bookChapterInfo = getBookChapterInfoByBookChapterGithubName(
        getBookChapterOnGithubNameByAbsolutePath( markdownNode.fileAbsolutePath )
      );

      let h1Node = sectionNode.children[ 0 ];

      Utils.addClassRemarkNode( h1Node, `bc-cover__title` );


      const createDiv = ( children, classes ) => ( {
        type: `div`,
        children,
        data: {
          hName: `div`,
          hProperties: {
            class: classes
          }
        }
      } );
      const createSpan = ( value, classes ) => ( {
        type: `span`,
        children: [{
          type: `text`,
          value
        }],
        data: {
          hName: `span`,
          hProperties: {
            class: classes
          }
        }
      } );

      if ( h1Node && h1Node.depth === H1_TAG_DEPTH ) {
        let paragraphNode = sectionNode.children[ 1 ];
        let coverNodes = {
          title:h1Node,
          cover: paragraphNode.children[ 0 ],
          index: createSpan( bookChapterInfo.index, `bc-cover__index` ),
          section: createSpan( bookChapterInfo.sectionName, `bc-cover__section` )
        };

        let gridItems = {
          title: createDiv( [coverNodes.title], `bc-cover-grid-item__title` ),
          cover: createDiv( [coverNodes.cover], `bc-cover-grid-item__cover` ),
          index: createDiv( [coverNodes.index], `bc-cover-grid-item__index` ),
          section: createDiv( [coverNodes.section], `bc-cover-grid-item__section` )
        };

        let coverGrid = createDiv(
          Object.values( gridItems ),
          `bc-cover-grid`
        );


        sectionNode.children.splice( 0, 2, coverGrid );
      }
    }
  }catch(error){
    console.error( error );
  }finally {

  }{
    return ast;
  }


  return ast;
};