import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404:見つかりませんでした" />
    <h1>404</h1>
    <p>そんなページはありませんでした。</p>
  </Layout>
)

export default NotFoundPage
