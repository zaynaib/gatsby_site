import React from "react"

import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"
import { rhythm } from "../utils/typography"


const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
    <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/posts/">Blog</ListLink>
    <ListLink to="/portfolio/">Portfolio</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
  </ul>

    <header style={{ marginBottom: `1.5rem` }}>
     <h1>Hi I'm Ola</h1>
     <h2>Full-Stack Developer / Data Enthusiast</h2>
    </header>
      {children}
    </div>
  )
}