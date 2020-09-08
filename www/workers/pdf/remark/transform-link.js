const visit=require('unist-util-visit');

const StringUtils = require(`../../../src/utils/string-utils`);
// const RouterUtils = require(`../../src/utils/routerjs-utils`);
const BookChapterPathUtils = require(`../../../src/utils/book-chapter-path-utils`);



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
const isAppWebLink = link => link.startsWith(`https://nauchikus.github.io/typescript-definitive-guide`);

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
  let paths = names.map(path => StringUtils.toPath(path))

  let linkInfo = {
    type: LinkType.BookLinkType,
    names,
    paths,
    name: names.join(`#`)
  };

  return linkInfo;
}


const getWinVersionFromFileAbsolutePath = path => {
  let matches = path.match(/.*\/(\d\.\d)\/.*/);

  if (!matches) {
    throw new Error(`What-is-new link ${path} is invalid.`);
  }

  let [, version] = matches;


  return version;
}

const wwwLinkToBookLink = link => {
  return StringUtils.urlToPath(link.substring(link.lastIndexOf(`/`) + 1));
}
const localLinkToBookLink = link => {
  let dirName = decodeURIComponent(link.substring(link.lastIndexOf(`/`) + 1));
  let chapterName = BookChapterPathUtils.bookChapterDirToChapterName(dirName);

  return chapterName;
}

let local = `../028.(Классы)%20Definite%20Assignment%20Assertion%20Modifier`;
let url = `https://nauchikus.github.io/typescript-definitive-guide/book/chapters/chto%20takoe%20i%20dlya%20chego%20nujen%20typescript`;

const toValue = node => node.children.reduce((result, current) => result + current.value, ``);


// console.log(wwwLinkToBookLink(url));
// console.log(localLinkToBookLink(local));
module.exports = options => ast => {
  const isLink = node => node.type === `link`;


  try {
    visit( ast, isLink, ( linkNode, index, tier ) => {
      let link = linkNode.url;


      if (isWwwLink(link) && !isAppWebLink(link)) {
        return ;
      }

      if (isAppWebLink(link)) {
        link = wwwLinkToBookLink(link)
      }

      let bookLink = StringUtils.hadingToNativeElementAttributeValue(
          localLinkToBookLink(link)
      );


      linkNode.url = `#` + StringUtils.toCharCodeId(bookLink);

      linkNode.data || ( linkNode.data = {} );
      linkNode.data.hProperties || ( linkNode.data.hProperties = {} );


      Object.assign( linkNode.data.hProperties, {
        title: toValue(linkNode),
        target: `_blank`
      } );

    } );
  }catch (error){
    console.error(error);
    throw error;
  }


  return ast;
};
