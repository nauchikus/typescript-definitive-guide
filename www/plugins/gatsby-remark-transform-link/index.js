const visit=require('unist-util-visit');

const StringUtils = require(`../../src/utils/string-utils`);
const ConverterPathUtils = require(`../../src/utils/converter-path-utils`);
const RouterUtils = require(`../../src/utils/routerjs-utils`);
const BookChapterPathUtils = require(`../../src/utils/book-chapter-path-utils`);



const isBookContentGatsbyNode = node =>
    /\/book\/(ru|en)\/chapters\/.*\/content\.md$/.test(node.fileAbsolutePath);
const isWinContentGatsbyNode = node =>
    /\/what-is-new\/\d\.\d\/.*\/content\.md$/.test(node.fileAbsolutePath);

const isBookPath = link =>
    /\/book\/(ru|en)\/chapters\/.*$/.test(link);
const isWinPath = link =>
    /\/what-is-new\/\d\.\d\/.*\/.*$/.test(link);
const isLocalPath = link => !link.startsWith(`../../`);

const isWwwLink = link => /^(http|https):\/\//.test(link)
const isAppWebLink = link => link.startsWith(WEB_APP_ORIGIN);

const parseName = link => {
  let matches = link.match(/.*\/(.*)$/)

  if (!matches) {
    throw new Error(`Invalid link "${link}".`);
  }

  let [, path] = matches;
  let paths = path.split(`#`);


  return paths;
}

class LinkType {
  static BookLinkType = `bookLinkType`;
  static WinLinkType = `winLinkType`;
}

let parseBookLink = link => {
  link = decodeURIComponent(link);


  if (!isLocalPath(link)) {
    throw new Error(`Links from book content should only link to book content. Current link "${link}" invalid.`);
  }

  let names = parseName(link).map(path => BookChapterPathUtils.bookChapterDirToChapterName(path));
  let paths = names.map(path => path)

  let linkInfo = {
    type: LinkType.BookLinkType,
    names,
    paths,
    name: names.join(`#`)
  };

  return linkInfo;
}
const parseWinLink = link => {
  if (!isLocalPath(link) || !isBookPath(link)) {
    throw new Error(`Links in what-is-new section should only refer to themselves or content of book. Current link "${link}" is invalid.`);
  }


  let names = parseName(link);
  let name = names.join(`#`);
  let paths = names.map(path => path);
  let type = isLocalPath(link) ? LinkType.WinLinkType : LinkType.BookLinkType;

  let linkInfo = {
    type,
    names,
    paths,
    name
  };


  return linkInfo;
}

const parseLink = (link, gatsbyNode) => {
  if (isBookContentGatsbyNode(gatsbyNode)) {
    return parseBookLink(link)
  }else if (isWinContentGatsbyNode(gatsbyNode)) {
    return parseWinLink(link);
  }

  return null;
}
const getWinVersionFromFileAbsolutePath = path => {
  let matches = path.match(/.*\/(\d\.\d)\/.*/);

  if (!matches) {
    throw new Error(`What-is-new link ${path} is invalid.`);
  }

  let [, version] = matches;


  return version;
}

module.exports = ( ...params ) => {
  let [{ markdownAST: ast, markdownNode:markdownGatsbyNode, getNodes }, { locale }] = params;

  const isLink = node => node.type === `link`;


  try {
    visit( ast, isLink, ( linkNode, index, tier ) => {
      let link = linkNode.url;
      let linkInfo = parseLink(link, markdownGatsbyNode);

      if(!linkNode){
        throw new Error(`LinkInfo for link ${link} can't be null.`)
      } else if (linkInfo.type === LinkType.BookLinkType) {
        linkNode.url = RouterUtils.bookRoutes.getBookRoute({
          locale,
          chapterName: linkInfo.paths[0],
          subchapterName: linkInfo.paths[1]
        });
      }else if (linkInfo.type === LinkType.WinLinkType) {
        linkNode.url = RouterUtils.whatIsNewRoutes.getWhatIsNewRoute({
          version: getWinVersionFromFileAbsolutePath(markdownGatsbyNode.fileAbsolutePath),
          innovation: linkInfo.paths[0]
        });
      }
    } );
  }catch (error){
    console.error(`Error fileAbsolutePath: ${markdownGatsbyNode.fileAbsolutePath}`);
    console.error(error);
    throw error;
  }


  return ast;
};
