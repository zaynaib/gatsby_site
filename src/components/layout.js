import React from "react"
import { Helmet } from "react-helmet"
import layoutStyles from "../styles/layout.module.css"
import favicon from '../images/favicon.ico'
import ListLink from "./listLink"


export default function Layout({children }) {
  return (
    <div className={layoutStyles.layout} >
    <Helmet>
      <meta charSet="utf-8" />
      <title>Code with Ola</title>
      <link rel="icon" href={favicon}/>
    </Helmet>
    <nav>
      <ul class="navbar-menu" style={{ listStyle: `none`, float: `right` }}>
     
      <ListLink  to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/posts/">Blog</ListLink>
        <ListLink to="/portfolio/">Portfolio</ListLink>
        <ListLink to="/dataviz/">Data Viz</ListLink>

      </ul>
      </nav>
    
    <header style={{ marginBottom: `1.5rem` }}>
     <h1 className="title">Hi I'm Ola</h1>
     <h2 className="title"> Data Analyst/ Full-Stack Enthusiast</h2>
    </header>


    <div className="content">

      {children}
      </div>

      <footer>
        <a href="https://github.com/zaynaib">Github</a>
        <a href="https://twitter.com/AmazingSpeciali">Twitter</a>
        <a href="https://www.linkedin.com/in/zaynaib-ola-giwa/">LinkedIn</a>
        <a href="https://www.youtube.com/channel/UCCKgha-Y5wmJ2abaG9EusMA">Youtube</a>
      </footer>
    </div>
  )
}