import React from "react";


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
                        <a href={props.webpage}className="p-link">visit</a>
                        <a href={props.github}className="p-link">source</a>
                    </td>

                </tr>
            </tbody>
        </table>
    )
}


