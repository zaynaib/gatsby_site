import React from "react"
import talkStyles from "../styles/talks.module.css"
import * as cardStyles from "../styles/dataviz.module.css"

export default function Vizlayout(props){
    return(
        
              
        <div className = "card">
          <div className = "card-image">
            <figure class="image is-4by3">
              <img src={props.img} alt="Placeholder image">
              </img>  
            </figure>
          </div>

          <div className = "card-content">
          <div class="content">
          {props.desc}<br></br>
          <a className ="button" href={props.link}>Check it out</a>
        </div>
          
          </div>

        </div>
        
       

    )
}