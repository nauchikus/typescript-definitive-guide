import type { NextPage } from 'next'
import {Layer} from "../../../components/layers/slide-layer/SlideLayer";
import React from "react";
import {Divider, Tree} from "antd";
import {toUrl} from "../../../utils/converter-path-utils";
import Title from "antd/lib/typography/Title";
import {ContentNavTreeNode} from "../../../components/book-toc-custom-tree-node/BookTocCustomTreeNode";
import {BookTocProvider} from "../../../provaders/BookTocProvider";
import {BookTocToContentNavTransformer} from "../../../transformers/BookTocToContentNavTransformer";
import { A4Layer } from "../../../components/layers/a4-layer/A4Layer";

interface IChaptersProps {
    tocTreeDataAll: []
}
const Index: NextPage<IChaptersProps> = ({tocTreeDataAll, children}) => {
  /// TODO:[refactoring] resolve type any
  return (
      <Layer>
          <A4Layer className="toc__layer">
            <div className="toc__header">
              <h1 className="toc__title">Оглавление</h1>
            </div>
            <Tree treeData={tocTreeDataAll}
                  showLine={true}
                  defaultExpandAll={true}
                  titleRender={ContentNavTreeNode as any} />
          </A4Layer>
      </Layer>
  );
}

export default Index;

export async function getStaticProps() {
    const bookToc = await BookTocProvider.getData();
    const contentNav = bookToc.map(currentTocItem => BookTocToContentNavTransformer.transform(
        currentTocItem,
        bookToc
    ));

    const tocTreeDataAll = contentNav.map(node => ({
        ...node,
        children: node.children?.map(leaf => ({
            ...leaf,
            path: `${node.path}#${toUrl(leaf.path)}`
        }))
    }));

    return {
        props: {
            tocTreeDataAll,
        }
    };
}
