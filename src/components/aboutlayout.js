import React from "react"
import "./about.css"
import PowerPuff from "../images/powerpuff.png"
//http://www.jasminewilson.com/about - inspo

export default function AboutLayout(props) {
  return (<div className="container">
    
            <div className="photo">
                <img src={PowerPuff}/>
            </div>

            <div className="about-story">
               {props.children}
            </div>
        </div>
    )
}