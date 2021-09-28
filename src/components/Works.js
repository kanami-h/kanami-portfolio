import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/works.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Woks() {
  return (
    <div>
      <div className={styles.works}>
        <section>
          <h2>Web Development</h2>
          <Link to="/projects/vanilla-js">
            <div className={styles.card}>
              <StaticImage
                src="../images/thumbs/calc.png"
                alt="JS calculator"
              />
              <div className={styles.cardDesc}>
                <h3 className={styles.title}>Vanilla JavaScript Projects</h3>
                <p className={styles.year}>2021</p>
                <p className={styles.desc}>Calculator, Carousel</p>
              </div>
            </div>
          </Link>
        </section>
        <div className={styles.webDesign}>
          <h2>Web Design</h2>
          <Link to="/projects/japanese-restautant-toribo">
            <div className={styles.card}>
              <StaticImage
                src="../images/thumbs/japanese-restaurant.jpg"
                alt="mobile, tablet, laptop screen"
              />
              <div className={styles.cardDesc}>
                <h3 className={styles.title}>Japanese Restaurant Toribo</h3>
                <p className={styles.year}>2019</p>
                <p className={styles.desc}>The website created by Gatsby</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.uxDesign}>
          <h2>UX Design</h2>
          <Link to="/projects/ecycle-case-study">
            <div className={styles.card}>
              <StaticImage
                src="../images/home/ecycle.png"
                alt="ecycle mobile screens"
              />
              <div className={styles.cardDesc}>
                <h3 className={styles.title}>
                  Solving UX problems on an electric bike rental app
                </h3>
                <p className={styles.year}>2021</p>
                <p className={styles.desc}>
                  Case study of designing a launcher for a rental bike company.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.graphicDesign}>
          <h2>Graphic Design</h2>
          <Link to="/projects/azumi-brand-book">
            <div className={styles.card}>
              <StaticImage
                src="../images/thumbs/azumi.png"
                alt="azumi brand book"
              />
              <div className={styles.cardDesc}>
                <h3 className={styles.title}>AZUMI</h3>
                <p className={styles.year}>2020</p>
                <p className={styles.desc}>
                  Created a brand book for a Japanese style caffee shop called
                  AZUMI.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.moreBtnWrapper}>
        <Link to="/projects/">
          <button className={styles.moreBtn}>MORE</button>
        </Link>
      </div>
    </div>
  )
}
