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
          <Vizlayout img ={Basketball} link="https://public.tableau.com/app/profile/zaynaib/viz/Basketball-injuries/Sheet1" title="Baketball Injuries" desc="Tableau Visualization of Injuries of Basketball Players in the NBA"> </Vizlayout>

          </div>
          <div class="column">
          <Vizlayout img ={Customers} link="https://public.tableau.com/app/profile/zaynaib/viz/lesson7/Story1" title="UK bank customers" desc="Tableau Dashboard of Bank Customers in the UK"> </Vizlayout>           

          </div>

          
    </div>

    
        
      </Layout>
  )
}