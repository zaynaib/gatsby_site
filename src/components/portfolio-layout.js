import React from "react";
import "./mystyles.scss";


//create at table
// tr 
//three table data
//name button github and demo
//combo of super dev and black girl demo
export default function PortfolioLayout(props){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Description</th>
                    <th>Links</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                
                    <td>
                        {props.name} 
                    </td>

                    <td>
                        {props.description} 
                    </td>

                    <td>
                        <button className="button is-link mr-1">visit</button>
                        <button className="button is-primary">source</button>
                    </td>

                </tr>
            </tbody>
        </table>
    )
}


