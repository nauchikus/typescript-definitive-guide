/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fs = require(`fs/promises`)
const path = require(`path`)

const remark = require(`remark`)
const html = require(`remark-html`)

const { toChapterName } = require(`../config/old-to-new-book/utils`)


exports.onPostBootstrap = async ({ actions: {createJobV2}, getNodesByType }) => {
    let [bookTocGatsbyNode] = getNodesByType(`BookTocSource`);
    let { toc } = bookTocGatsbyNode;


    const ROOT = path.resolve(process.cwd(), `../`);


    let inputPaths = toc.map((tocItem, index) => path.join(
        ROOT,
        `/book/ru/chapters`,
        toChapterName(index, tocItem.section, tocItem.title),
        `content.md`
    ));

    // console.log(ROOT);
    // console.log(inputPaths);

    createJobV2({
      name: `PDF`,
      inputPaths,
      outputDir: path.join(ROOT, `pdf`, `typescript-definitive-guide.pdf`),
      args: {
        toc
      }
    })

}
