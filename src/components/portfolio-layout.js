import React from "react";
import "./mystyles.scss"

//create at table
// tr 
//three table data
//name button github and demo
//combo of super dev and black girl demo
export default function PortfolioLayout(props){
    return(
        <table>
            <tr>
                <th>Project Name</th>
                <th>Description</th>
                <th>Links</th>
            </tr>

            <tr>
            
                <td>
                    {props.name} 
                </td>

                <td>
                    {props.description} 
                </td>

                <td>
                    <button>vist</button>
                    <button>source</button>
                </td>

            </tr>
        </table>
    )
}


