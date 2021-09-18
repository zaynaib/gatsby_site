import React from "react"
import talkStyles from "../styles/talks.module.css"
import * as cardStyles from "../styles/dataviz.module.css"

export default function Vizlayout(props){
    return(
        
              
        <div className = "card">
          <div className = "card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </img>  
            </figure>
          </div>

          <div className = "card-content">
          <div class="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
        </div>
          
          </div>

        </div>
        
       

    )
}