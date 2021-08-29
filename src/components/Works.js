import { graphql, Link } from "gatsby"
import React from "react"
import * as styles from "../styles/projects.module.css"
import ecycle from "../images/thumbs/ecycle.jpg"

export default function Woks({}) {
  return (
    <div>
      <div className="webDesign">
        <h2>Web Design</h2>
        <div className="card">
          <img src={ecycle} />
          <h3 className="title">Toribo</h3>
          <p className="year">2019</p>
        </div>
      </div>
      <div className="uxDesign">
        <h2>UX Design</h2>
        <div className="card">
          <img src={ecycle} />
          <h3 className="title">eCycle | Case Study</h3>
          <p className="year">2021</p>
        </div>
      </div>
      <div className="graphicDesign">
        <h2>Graphic Design</h2>
        <div className="card">
          <img src={ecycle} />
          <h3 className="title">AZUMI</h3>
          <p className="year">2020</p>
        </div>
      </div>
      <div className="btn">
        <button>more</button>
      </div>
    </div>
  )
}
