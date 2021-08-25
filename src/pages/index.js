import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design & Develop</h2>
          <p>Web Developer & UX Designer based in Toronto.</p>
          <Link to="/projects" className={styles.btn}>
            View my projects
          </Link>
        </div>
        <div>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
