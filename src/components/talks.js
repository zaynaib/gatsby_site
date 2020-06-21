import React from "react"
import talkStyles from "./talks.module.css"

export default function Talk(props){
    return(
        <div className="mb-2">
            <div>
             <a href = {props.link}>{props.name} </a>
             <span>{props.month} {props.year}</span>

             <p>{props.description}</p>
            
            </div>
            
        </div>
    )
}


