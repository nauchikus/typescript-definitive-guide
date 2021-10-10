import { visit } from "unist-util-visit";
import { ChapterInfo } from "../create-book-data";
import { headingIndex, initDataAttr, toValue } from "./utils";






function h2Decorate(node: any, chapterInfo: ChapterInfo) {
  initDataAttr( node );
  Object.assign( node.data.hProperties, {
    title: chapterInfo.title,
    section: chapterInfo.section,
  } );

  node.children = [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `Глава ${chapterInfo.contentFullIndex}`,
        }
      ],
      data: {
        hProperties: {
          className: [`h1__chapter-index`]
        }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `. `,
        }
      ],
      data: {
        hProperties: {
          className: [`h1__dot`]
        }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: chapterInfo.title
        }
      ],
      data: {
        hProperties: {
          className: [`h1__title`]
        }
      }
    }
  ]
}
function h3Decorate(node: any, chapterInfo: ChapterInfo) {
  const title = toValue( node );
  const currentInfo = chapterInfo.children?.find( item => item.title === title );

  if ( !currentInfo ) {
    throw new Error( `ChapterInfo for item with title "${ title }" not found.` );
  }


  node.children = [
    {
      type: 'span',
      children: [
        {
          type: 'text',
          value: currentInfo.contentFullIndex,
        }
      ],
      data: {
        hProperties: {
          className: [`h2__chapter-index`]
        }
      }
    },
    {
      type: 'span',
      children: [
        {
          type: 'text',
          value: `. `,
        }
      ],
      data: {
        hProperties: {
          className: [`h2__dot`]
        }
      }
    },
    {
      type: 'span',
      children: [
        {
          type: 'text',
          value: currentInfo.title
        }
      ],
      data: {
        hProperties: {
          className: [`h2__chapter-title`]
        }
      }
    }
  ];
}


const decorateMap = new Map([
  [2, h2Decorate],
  [3, h3Decorate],
])
export const headingDecorate = (chapterInfo: ChapterInfo): any => (ast: any): any => {
  visit(ast, `heading`, (node: any, index: any, parent: any) => {
    const decorate = decorateMap.get( node.depth );

    if ( !decorate ) {
      throw new Error( `Decorator function for depth "${ node.depth }" not found.` );
    }


    decorate( node, chapterInfo );
  })

  return ast;
}