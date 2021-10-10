import { visit } from "unist-util-visit";

export const headingDownLevel = (): any => (ast: any): any => {
    visit(ast, `heading`, headingNode => {
        headingNode.depth += 1;
    });


    return ast
}
