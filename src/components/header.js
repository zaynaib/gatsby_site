import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>

    <nav>
       <ul class="navbar-menu" style={{ listStyle: `none`, float: `right` }}>
            <Link  to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/posts/">Blog</Link>
            <Link to="/portfolio/">Portfolio</Link>
      </ul>
      </nav>

    </header>
  )
}