import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { default as Img } from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */








interface IGatsbyImageProps {
  path:string;
  alt?:string;
  className?:string;
}

export const GatsbyImage: FC<IGatsbyImageProps> = ( { className,path,alt } ) => {
  const data = useStaticQuery( graphql`
      query {
          images:allImageSharp {
              nodes {
                  parent {
                      ... on File {
                          name
                          relativePath
                      }
                  }
                  fluid {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                  }
              }
          }
      }
  ` );
  type ImageNode = {
    parent: { relativePath: string };
    fluid: { originalName: string }
  };


  let node = data.images.nodes.find( ( node: ImageNode ) => node.parent.relativePath === path );

  // return <Img className={ className } fluid={ node.fluid } alt={ alt }/>;
  return <Img className={ className } fluid={ node.fluid } alt={ alt }/>;
};
