import React from "react"
import Row from "./tablerow.js"
export default function Table(props) {
  return (
      <table className="table">
      <thead>
        <tr>
            <th>Project Name</th>
            <th>Description</th>
            <th>Links</th>
        </tr>
     </thead>

     <tbody>
  

         <Row ></Row>

 </tbody>


        
      
      </table>
      )
}