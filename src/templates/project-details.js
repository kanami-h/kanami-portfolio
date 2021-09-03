import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"
import * as styles from "../styles/project-details.module.css"

export default function projectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, featured } = data.markdownRemark.frontmatter
  console.log(data.markdownRemark.frontmatter)
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        {/*<div className={styles.featured}>
          <Img fluid={featured} />
  </div>:*/}
        {
          <div
            className={styles.html}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        }
        <div className={styles.backButton}>
          <Link to="/projects/">
            <FontAwesomeIcon icon={faAngleDoubleLeft} color="white" /> Back to
            projects
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        stack
        title
        date
      }
    }
  }
`
