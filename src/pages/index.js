import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import Works from "../components/Works"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.header}>
        <div>
          <h2>Develop & Design</h2>
          <p>Web Developer & UX Designer based in Toronto.</p>
          <span></span>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
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
          <div className={styles.aboutImg}>
            <StaticImage src="../images/kanami.jpg" alt="kanami hidaka" />
          </div>
          <div className={styles.description}>
            <h3>Kanami Hidaka</h3>
            <p>
              <span className={styles.bold}>Hello!</span> I am a front-end
              developer and designer who have a passion to find better
              solutions, developing and simplifying procedues, and having a
              strong curiosity to learn new technologies. Skilled communicator
              with a sales background.
            </p>
          </div>
          <div className={styles.moreBtnWrapper}>
            <Link to="/about/">
              <button className={styles.moreBtn}>MORE</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "flamingo.png" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
