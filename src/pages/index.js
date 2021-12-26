import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

export default function Home({ data }) {
  const works = data.works.nodes
  return (
    <Layout>
      <Seo title="Kanami Hidaka - Front-End Web Developer" />
      <section className={styles.header}>
        <div>
          <h2>Develop & Design</h2>
          <p>Web Developer & UX Designer based in Toronto.</p>
          <span></span>
        </div>
        <div className={styles.headerImg}>
          <StaticImage src="../images/flamingo.jpg" alt="flamingo" />
        </div>
      </section>

      {/* Works */}
      <section className={styles.worksWrapper}>
        <div>
          <h2 className={styles.title}>Works</h2>
        </div>
        <div className={styles.works}>
          {works.map(work => {
            const item = work.frontmatter
            const image = getImage(item.thumb)
            return (
              <div key={work.id}>
                <Link to={"/projects/" + work.frontmatter.slug}>
                  <div className={styles.card}>
                    <GatsbyImage image={image} alt={item.title} />
                    <div className={styles.cardDesc}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p>{item.category}</p>
                      <p>{item.year}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* About */}
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
  query WorksQuery {
    works: allMarkdownRemark(
      sort: { fields: frontmatter___year, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          title
          category
          year
          thumb {
            childImageSharp {
              gatsbyImageData(width: 320, height: 195, formats: WEBP)
            }
          }
        }
        id
      }
    }
  }
`
