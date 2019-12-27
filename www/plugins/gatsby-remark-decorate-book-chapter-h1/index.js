const Validators = require( "../gatsby-node-validators" )

module.exports = ( ...params ) => {
  let [{ markdownAST: ast, markdownNode, getNodes }, { locale }] = params;

  if ( Validators.whatIsNew.isWhatIsNewMarkdownRemarkGatsbyNode( markdownNode ) ) {
    return ast;
  }

  const isCurrentBookTocGatsbyNode = node =>
    node.internal.type === "BookToc" &&
    node.fileAbsolutePath === markdownNode.fileAbsolutePath;

  const H1_TAG_DEPTH = 1;


  let sectionNode = ast.children[ 0 ];


  if ( sectionNode ) {
    let h1Node = sectionNode.children[ 0 ];


    if ( h1Node && h1Node.depth === H1_TAG_DEPTH ) {
      let currentChapterTocGatsbyNode = getNodes().find( isCurrentBookTocGatsbyNode );
      let { toc: currentChapterToc } = currentChapterTocGatsbyNode;

      let paragraphNode = sectionNode.children[ 1 ];
      let imageNode = paragraphNode.children[ 0 ];

      let bookChapterSectionNode = {
        type: `span`,
        children: [{
          type: `text`,
          value: currentChapterToc.chapterSection
        }],
        data: {
          hName: `span`,
          hProperties: {
            class: "main-heading-decor__chapter-section-informer"
          }
        }
      };
      let mainHeadingDecorNode = {
        type: `div`,
        children: [
          h1Node,
          bookChapterSectionNode,
          imageNode
        ],
        data: {
          hName: `div`,
          hProperties: {
            class: `chapter__main-heading-decor`
          }
        }
      };

      sectionNode.children.splice( 0, 2, mainHeadingDecorNode );
    }
  }


  return ast;
};