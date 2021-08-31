import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <section>
        <h2>Hi! I'm Kanami</h2>
        <h3>A Well-Oriented Great Potential Front-End Developer</h3>
        <p>
          Highly motivated individual currently seeking a front-end engineering
          position. A passion to find better solutions, developing and
          simplifying procedures, and having a strong curiosity to learn new
          technologies. Skilled communicator with a sales background.
        </p>
        <div className={styles.experience}>
          <h2 className={styles.title}>Experiences</h2>
          <ul>
            <li>
              3 years of freelance front-end development experience with
              HTML/CSS, JavaScript, React, Bootstrap and WordPress.
            </li>
            <li>
              Directly contacted clients, scooped up their needs, and proposed a
              best solution to solve their problems.
            </li>
          </ul>
          <h3>Other Skills</h3>
          <ul>
            <li>Fluent in English</li>
            <li>Native Japanese speaker</li>
            <li>Have experience in teaching HTML/CSS</li>
            <li>Have experience as a volunteer Japanese language tutor</li>
          </ul>
        </div>
        <div className={styles.achievement}>
          <h2>Certificate</h2>
          <div>
            <h3>
              edX Verified Certificate for Computer Science 101 Stanford
              University
            </h3>
            <Link to="https://courses.edx.org/certificates/59f3fa8e9cea40e2be9e05fd00bd474d">
              See credential
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
