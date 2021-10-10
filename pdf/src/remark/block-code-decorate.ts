import { visit } from "unist-util-visit";

function createCodeWrapper(node: any, lang: string){
  return {
    type: `div`,
    properties: {
      className: [`content__code`]
    },
    children: [
      {
        type: `div`,
        properties: {
          className: [
            `content__code-panel_top`,
            `content__code-panel_lang_${lang}`
          ]
        },
        children: [
          {
            type: `span`,
            properties: {
              className: [`content_code-label_lang`]
            },
            value: lang.toString()
          }
        ]
      },
      node,
      {
        type: `div`,
        properties: {
          className: [
            `content__code-panel_bottom`,
            `content__code-panel_lang_${lang}`,
          ]
        }
      },
    ]
  }
}

export const blockCodeDecorator =  (  ): any => (ast: any) => {
  const isPrism = (node: any) =>
    node.type === `code`

  visit(ast, isPrism, (node: any, index: any, parent: any) => {
    parent.children[ index ] = createCodeWrapper( node, node.lang );
  })


  return ast;
};