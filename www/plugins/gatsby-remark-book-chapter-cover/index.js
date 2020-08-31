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

      Utils.addClassRemarkNode( h1Node, `main-title` );


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

        if (! paragraphNode || paragraphNode.type !== `image`) {
          return ast;
        }

        let mainMeta = createDiv(
            [
              createSpan(bookChapterInfo.index, `main-meta-informer__index`),
              createSpan(bookChapterInfo.sectionName, `main-meta-informer__section`)
            ],
            `main-meta`
        );

        let mainPresentation = createDiv(
            [
              mainMeta,
              h1Node,
              createDiv([paragraphNode.children[0]], `main-cover`)
            ],
            `main-presentation`
        )


        sectionNode.children.splice( 0, 2, mainPresentation );
        // sectionNode.children.splice( 0, 2, coverGrid );
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
