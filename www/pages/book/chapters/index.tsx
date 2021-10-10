import type { NextPage } from 'next'
import {Layer} from "../../../components/layers/slide-layer/SlideLayer";
import React from "react";
import {Divider, Tree} from "antd";
import {toUrl} from "../../../utils/converter-path-utils";
import Title from "antd/lib/typography/Title";
import {ContentNavTreeNode} from "../../../components/book-toc-custom-tree-node/BookTocCustomTreeNode";
import {BookTocProvider} from "../../../provaders/BookTocProvider";
import {BookTocToContentNavTransformer} from "../../../transformers/BookTocToContentNavTransformer";

interface IChaptersProps {
    tocTreeDataAll: []
}
const Index: NextPage<IChaptersProps> = ({tocTreeDataAll, children}) => {
  /// TODO:[refactoring] resolve type any
  return (
      <Layer>
          <Divider>
              <Title type="secondary">Оглавление</Title>
          </Divider>
          <Tree treeData={tocTreeDataAll}
                showLine={true}
                defaultExpandAll={true}
                titleRender={ContentNavTreeNode as any} />
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
