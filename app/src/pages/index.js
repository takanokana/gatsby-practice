import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Top"/>
    <IndexWrapper>
      <Title>色々な紙飛行機</Title>
      <div className="imgBox">
        <img src='/kv.jpg' alt="紙飛行機の画像" />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </IndexWrapper>
  </Layout>
)

export default IndexPage

const IndexWrapper = styled.div`
  text-align: center;
  & .imgBox {
    width: 100%;
  }
`
const Title = styled.h1`
  color: blue;
`
