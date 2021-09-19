/* This component shows how to display navigation links
    in the nav bar
*/

import React from "react"
import { Link } from "gatsby"


  const ListLink = props => (
    <li clasName="navLink" style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  export default ListLink;