import React from "react"

export default function Talk(props){
    return(
        <p>
            <span>
              {props.month} {props.year}
              <a href = {props.link}>{props.name} </a>
            
            </span>
            <br/>
            {props.description}
        </p>
    )
}


