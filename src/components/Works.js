import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/works.module.css"
import ecycle from "../images/thumbs/ecycle.jpg"
import azumi from "../images/thumbs/azumi.png"
import toribo from "../images/thumbs/japanese-restaurant.jpg"

export default function Woks({}) {
  return (
    <div>
      <div className={styles.works}>
        <div className={styles.webDesign}>
          <h2>Web Design</h2>
          <Link to="/projects/japanese-restautant-toribo">
            <div className={styles.card}>
              <img src={toribo} alt="mobile, tablet, laptop screen" />
              <h3 className={styles.title}>Japanese Restaurant Toribo</h3>
              <p className={styles.year}>2019</p>
            </div>
          </Link>
        </div>
        <div className={styles.uxDesign}>
          <h2>UX Design</h2>
          <Link to="/projects/ecycle-case-study">
            <div className={styles.card}>
              <img src={ecycle} alt="ecycle mobile screens" />
              <h3 className={styles.title}>eCycle | Case Study</h3>
              <p className={styles.year}>2021</p>
            </div>
          </Link>
        </div>
        <div className={styles.graphicDesign}>
          <h2>Graphic Design</h2>
          <Link to="/projects/azumi-brand-book">
            <div className={styles.card}>
              <img src={azumi} alt="azumi brand book" />
              <h3 className={styles.title}>AZUMI</h3>
              <p className={styles.year}>2020</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="btn">
        <button>more</button>
      </div>
    </div>
  )
}
