import React from "react"


export default function Vizlayout(props){
    return(
        
              
        <div className = "card">
        <p class="card-header-title is-centered">
            {props.title}
        </p>
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