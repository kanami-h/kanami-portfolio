import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
