import React from "react"


import { Link } from "gatsby"
import Header from "./header.js"

export default function Main({ children }) {
  return (
    <div >
    <Header></Header>

    
    <div className="wrapper">


      {children}
      </div>

   
    </div>
  )
}