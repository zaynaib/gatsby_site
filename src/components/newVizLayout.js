import React from "react"
import talkStyles from "../styles/talks.module.css"
import * as cardStyles from "../styles/dataviz.module.css"

export default function Vizlayout(props){
    return(
        
              
          <div className={cardStyles.container}>

            <div className={cardStyles.container}>
              <img src={props.img} class="img-fluid" />
            </div>


            <div className="card-body">

              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">
                {props.desc} <br></br>
                <a href="#!" class="btn btn-primary">Check it out</a>

              </p>

              
            </div>
          </div>
        
       

    )
}