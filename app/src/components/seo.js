/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({title}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <Helmet
      titleTemplate={`%s | 色々な紙飛行機`}
      title={title}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
      ]}
    />
  )
}

export default SEO
