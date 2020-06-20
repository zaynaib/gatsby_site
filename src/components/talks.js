import React from "react"

export default function Talk(props){
    return(
        <div className="mb-2">
            <span>
              <p>{props.month} {props.year}</p>
              <a href = {props.link}>{props.name} </a>
            
            </span>
            <br/>
            <p>{props.description}</p>
        </div>
    )
}


