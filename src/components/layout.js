import React from "react"

import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"
import { rhythm } from "../utils/typography"
// import "./mystyles.scss";



const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
    <nav>
      <ul class="navbar-menu" style={{ listStyle: `none`, float: `right` }}>
     
      <ListLink  to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/posts/">Blog</ListLink>
        <ListLink to="/portfolio/">Portfolio</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      </nav>

    <header style={{ marginBottom: `1.5rem` }}>
     <h1 className="title">Hi I'm Ola</h1>
     <h2 className="title">Full-Stack Developer / Data Enthusiast</h2>
    </header>
      {children}
    </div>
  )
}