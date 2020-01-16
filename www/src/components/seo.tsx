/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"
import PropTypes from "prop-types"
import Helmet, { HelmetProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"


// type MetaProps = JSX.IntrinsicElements["meta"];
type MetaProps = HelmetProps["meta"];

interface SeoProps {
  description?:string;
  lang?:string;
  meta?:MetaProps;
  title?:string;
}

const SEO: FunctionComponent<SeoProps> = ( { description = "", lang = "", meta = [], title = "" } ) => {
  const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `
  );

  const metaDescription = description || site.siteMetadata.description || "";

  return (
    <Helmet
      htmlAttributes={ {
        lang
      } }
      title={ title }
      titleTemplate={ `%s | ${ site.siteMetadata.title }` }
      meta={ [
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        ...meta
      ] }
    >
      <script async src="https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
      <script async src="https://yastatic.net/share2/share.js"></script>
    </Helmet>
  );
};


// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }
//
// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

export default SEO
