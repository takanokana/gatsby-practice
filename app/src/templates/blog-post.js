import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <PostBlock>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <img src={post.frontmatter.imgPass} alt="飛行機の画像"/>
    </PostBlock>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        imgPass
      }
    }
  }
`

const PostBlock = styled.div`
  padding: 100px 50px;
  text-align: center;
`
