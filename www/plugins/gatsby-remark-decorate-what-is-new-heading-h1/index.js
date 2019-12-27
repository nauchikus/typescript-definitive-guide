const Validators = require( "../gatsby-node-validators" )

module.exports = ( ...params ) => {
  let [{ markdownAST: ast, markdownNode, getNodes }, { locale }] = params;

  const isWhatIsNewTitleMarkdownRemarkGatsbyNode = node =>
    Validators.whatIsNew.isWhatIsNewMarkdownRemarkGatsbyNode( node ) &&
    Validators.whatIsNew.isWhatIsNewTitleMarkdownRemarkGatsbyNode( node );


  if ( !isWhatIsNewTitleMarkdownRemarkGatsbyNode( markdownNode ) ) {
    return ast;
  }


  const isCurrentWhatIsNewTocGatsbyNode = node =>
    Validators.gatsbyNode.isWhatIsNewTocGatsbyNode( node ) &&
    node.version === markdownNode.fields.version;

  const H1_TAG_DEPTH = 1;

  let [h1Node] = ast.children;


  /**
   * {
  relativePath: '/',
  absolutePath: 'http://localhost:3000/ru/what-is-new/3.3',
  fileOnGithubPath: 'https://github.com/nauchikus/typescript-definitive-guide/new-app/3.3/title/content.md',
  type: 'title',
  section: 'classes',
  name: '',
  dirname: 'title',
  dataPublication: '',
  statuses: [ { type: 'beta', data: '' } ]
}

   */

  if ( h1Node && h1Node.depth === H1_TAG_DEPTH ) {
    let currentWhatIsNewTocGatsbyNode = getNodes().find( isCurrentWhatIsNewTocGatsbyNode );
    let { innovationAll } = currentWhatIsNewTocGatsbyNode;
    let [titleMetadata] = innovationAll;
    let innovationCurrentStatus = titleMetadata.statuses[ titleMetadata.statuses.length - 1 ];


    let subtitleNode = {
      type: `span`,
      children: [{
        type: `text`,
        value: innovationCurrentStatus.type
      }],
      data: {
        hName: `span`,
        hProperties: {
          class: "main-heading-decor__subtitle"
        }
      }
    };


    let innovationStatusDate = new Date( innovationCurrentStatus.date );
    let innovationStatusFormatDate = innovationStatusDate.toLocaleDateString( "ru", {
      year: `numeric`,
      month: `long`,
      day: `numeric`
    } );

    let dateNode = {
      type: `time`,
      children: [{
        type: `time`,
        value: innovationStatusFormatDate
      }],
      data: {
        hName: `time`,
        hProperties: {
          class: "main-heading-decor__time",
          datetime: innovationStatusDate.toISOString()
        }
      }
    };

    ast.children.splice( 1, 0, subtitleNode, dateNode );

  }


  return ast;
};