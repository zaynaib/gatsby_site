import React from "react"
export default function Row(props) {
    const isWebPage = props.isWebPage;
    if(isWebPage){

    return( 
        
        <td>
                <a href={props.webpage}className="p-link">visit</a>
                <a href={props.github}className="p-link">source</a>
            </td>
        
        )
    }
    else{

        return( 
        
            <td>
                    <a href={props.webpage}className="p-link">visit</a>
                    <a href={props.github}className="p-link">source</a>
            </td>
            
            )

    }
}