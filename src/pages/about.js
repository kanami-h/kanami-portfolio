import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import * as styles from "../styles/about.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function About() {
  return (
    <Layout>
      <section className={styles.aboutWrapper}>
        <div className={styles.introduction}>
          <h2>Hi! I'm Kanami</h2>
          <p>
            I'm a <span className={styles.bold}>web developer</span> &
            <span className={styles.bold}> designer</span> who loves finding
            solutions with technology. I have worked for small businesses as a
            freelance web developer in Japan. After that, I enrolled in
            Interactive Media Design at{" "}
            <Link to="https://www.senecacollege.ca/programs/fulltime/INM.html">
              Seneca College
            </Link>{" "}
            to earn better design and development knowledge. I'm passionate
            about learning new web technologies and enjoy working on UX case
            studies, especially user research and prototyping.
          </p>
        </div>
        <div className={styles.aboutImg}>
          <StaticImage
            src="../images/flamingo_laptop.png"
            alt="A flamingo typing something on laptop"
          />
        </div>
        <div className={styles.experience}>
          <h2 className={styles.title}>Experiences</h2>
          <ul>
            <li>
              3 years of freelance front-end development experience with HTML,
              CSS, Bootstrap, WordPress, JavaScript, React and Gatsby.
            </li>
            <li>
              Directly contacted clients, scooped up their needs, and proposed a
              best solution to solve their problems.
            </li>
          </ul>
        </div>
        <div>
          <h2>Other Skills</h2>
          <ul>
            <li>Native Japanese speaker</li>
            <li>Have experience in teaching HTML/CSS</li>
            <li>Have experience as a volunteer Japanese language tutor</li>
          </ul>
        </div>
        <div className={styles.achievement}>
          <h2>Certificate</h2>
          <div>
            <p>
              edX Verified Certificate for Computer Science 101 Stanford
              University
            </p>
            <Link to="https://courses.edx.org/certificates/59f3fa8e9cea40e2be9e05fd00bd474d">
              See credential
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
