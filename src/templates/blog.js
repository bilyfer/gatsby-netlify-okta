import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/index"
import BreadCrumbs from "../components/BreadCrumbs/index"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <article className="entry-content">
        <BreadCrumbs title={frontmatter.title} />
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <div className="entry-meta">
        <span className="entry-date dashicons-before dashicons-calendar">
          Date:	<span>{frontmatter.date}</span>
        </span>
      </div>   
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
