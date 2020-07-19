import React from "react"
import "../styles/row.css"
export default function Row(props) {
    const isWebPage = props.isWebPage;
    if(isWebPage){

    return( 
        <tr>
            <td>
                {props.name} 
            </td>

            <td>
                {props.description} 
            </td>
            
            <td>
                    <a href={props.webpage}className="p-link">visit</a>
                    <a href={props.github}className="p-link">source</a>
            </td>
        </tr>
        
        )
    }
    else{

        return( 
            <tr>
            <td>
                {props.name} 
            </td>

            <td>
                {props.description} 
            </td>
            
            <td>
                    <a href={props.github}className="p-link">source</a>
            </td>

            </tr>
            
            )

    }
}