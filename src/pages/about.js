import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

export default function About() {
  return (
    <Layout>
      <Seo title="About" />
      <section className={styles.aboutWrapper}>
        <div className={styles.introduction}>
          <h2>Hi! I'm Kanami</h2>
          <p>
            I am a <span className={styles.bold}>front-end developer</span> and
            <span className={styles.bold}> UX designer</span> who loves finding
            solutions with the aid of technology. I have been working for a rapidly 
            growing startup vstudio since 2021. Before that I learned Interactive Media Design at{" "}
            <a href="https://www.senecacollege.ca/programs/fulltime/INM.html">
              Seneca College
            </a>{" "}
            and gained design principles and development knowledge to further hone my
            skills and expertise in the filed. I'm passionate about learning new
            web technologies and enjoy working on UX case studies, especially
            user research and prototyping.
          </p>
        </div>
        <div className={styles.aboutImg}>
          <StaticImage
            src="../images/flamingo_laptop.png"
            alt="A flamingo typing something on laptop"
          />
        </div>
        <div>
          <h2>Experiences</h2>
          <ul>
            <li>
              I've been working with a rapidly growing startup vstudio since 2021.
              Responsible for UX/UI design, front-end development by using Figma, HTML/CSS/Python Flask
            </li>
            <li>
              3 years of front-end development experience with HTML,
              CSS, Bootstrap, WordPress, JavaScript, React and Gatsby.
            </li>
            <li>
              Directly contacted clients, scooped up their needs, and proposed a
             s best solution to solve their problems.
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
        <div>
          <h2>Certificate</h2>
          <div>
            <p>
              edX Verified Certificate for Computer Science 101 Stanford
              University
            </p>
            <a href="https://courses.edx.org/certificates/59f3fa8e9cea40e2be9e05fd00bd474d">
              See credential
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
