import {Tag} from "../components/tags/tags";


const createTagTemplate = ( label: string, color: string) => ( {
    type: `span`,
    children: [{
        type: `text`,
        value: label
    }],
    data: {
        hName: `span`,
        hProperties: {
            class: `content__tag-bar__tag`,
            style: `background-color:${color};`

        }
    }
} );
const createTagBarTemplate = ( tags: string[] ) => ( {
    type: `div`,
    children: tags.reduce((children, tag) =>
        children.concat(createTagTemplate(tag, Tag.getColor(tag))
        ), []),
    data: {
        hName: `div`,
        hProperties: {
            class: `content__tag-bar`
        }
    }
} );



export const addTagBar = ({tags} ) => (ast) => {
    try {
        let title = ast.children[ 0 ];

        if ( title.type !== `heading` ) {
            throw new Error( `Invalid h2Node.` );
        }


        let tagBarNode = createTagBarTemplate( tags );
        ast.children.splice( 1, 0, tagBarNode );


    }catch ( error ) {
        console.error(error);
    }finally {
        return ast;
    }



    return ast;
};
