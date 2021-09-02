import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import * as styles from "../styles/project-details.module.css"

export default function projectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, detailedImg } = data.markdownRemark.frontmatter
  console.log(data.markdownRemark.frontmatter)

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={detailedImg.childImageSharp.fluid} />
        </div>
        {
          <div
            className={styles.html}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        detailedImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
