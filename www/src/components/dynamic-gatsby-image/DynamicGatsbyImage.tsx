import Img, { FluidObject } from "gatsby-image";
import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

export interface IDynamicGatsbyImage {
  allFile:{
    edges:({
      node:{
        relativePath:string;
        childImageSharp:{
          fluid:FluidObject | FluidObject[];
        }
      }
    })[];
  }
}

export interface IDynamicGatsbyImageProps {
  relativePath:string;
  alt:string;
  className?:string;
}

export const DynamicGatsbyImage:FC<IDynamicGatsbyImageProps> = ( { className,relativePath,alt } ) => {
  let graphqlResponse = useStaticQuery<IDynamicGatsbyImage>( graphql`
      query {
          allFile {
              edges {
                  node {
                      relativePath
                      name
                      childImageSharp {
                          fluid(maxWidth: 608) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
          }
      }
  ` );

  
  let imageEdge = graphqlResponse?.allFile?.edges
    .find( edge => edge.node.relativePath === relativePath );

  console.log(relativePath);

  if ( !imageEdge ) {
    return null;
    // throw new Error( `Image with relative path "${ relativePath }" not found.` );
  }


  return <Img className={className} alt={alt} fluid={ imageEdge.node.childImageSharp.fluid }/>;
};
