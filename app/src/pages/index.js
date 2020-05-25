import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Top"/>
    <IndexWrapper>
      <Title>色々な紙飛行機</Title>
      <div className="imgBox">
        <img src='/kv.jpg' alt="紙飛行機の画像" />
      </div>
      <p>記事一覧 {data.allMarkdownRemark.totalCount}件</p>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title} - {node.frontmatter.date}</Link>
        </div>
      ))}
      <Link
        to="/app/login"
        className="loginBtn"
      >ログインページへ</Link>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </IndexWrapper>
  </Layout>
)

export default IndexPage

const IndexWrapper = styled.div`
  text-align: center;
  & .imgBox {
    width: 100%;
  }
  & .loginBtn {
    display: block;
    width: 200px;
    margin: 5px auto 0;
    border: 1px solid #ccc;
    background: grey;
    text-decoration: none;
    color: white;
    padding: 5px;
  }
`
const Title = styled.h1`
  color: blue;
`

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order:DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
            imgPass
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
