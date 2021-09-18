import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Vizlayout from "../components/copyLayout"

import Basketball from "../images/basketball.png"
import Customers from "../images/customers.png"

import "../styles/test.scss"

export default function Viz() {
  return (
      <Layout>
          

      <div class="columns">
          <div class="column">
            <Vizlayout></Vizlayout>
          </div>
          <div class="column">
            <Vizlayout></Vizlayout>
          </div>

          
    </div>

    
    <div class="columns">
    <div class="column">
      <Vizlayout></Vizlayout>
    </div>
    <div class="column">
      <Vizlayout></Vizlayout>
    </div>
</div>


<div class="columns">
<div class="column">
  <Vizlayout></Vizlayout>
</div>
<div class="column">
  <Vizlayout></Vizlayout>
</div>
</div>
        
      </Layout>
  )
}