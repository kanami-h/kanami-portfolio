import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"
import Works from "../components/Works"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Develop & Design</h2>
          <p>Web Developer & UX Designer based in Toronto.</p>
          <span></span>
        </div>
      </section>
      <section className={styles.works}>
        <div>
          <h2 className={styles.title}>Works</h2>
        </div>
        <Works />
      </section>
      <section className={styles.about}>
        <div>
          <h2 className={styles.title}>About</h2>
        </div>
        <div className={styles.aboutWrapper}>
          <img src="" alt="kanami hidaka" />
          <div className={styles.description}>
            <h3 className="name">Kanami Hidaka</h3>
            <p>
              <span className={styles.bold}>2019</span> Self-taught HTML/CSS,
              WordPress
            </p>
            <p>
              <span className={styles.bold}>2020 - 2021 </span>
              Learned Interactive Media Design at Seneca College
            </p>
          </div>
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
