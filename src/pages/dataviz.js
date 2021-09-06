import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Vizlayout from "../components/newVizLayout"


export default function Viz() {
  return (
      <Layout>
          
           <Vizlayout img ="https://mdbootstrap.com/img/new/standard/nature/023.jpg" title="test" desc="some text about this image portfolio"> </Vizlayout>
           <Vizlayout img ="https://mdbootstrap.com/img/new/standard/nature/023.jpg" title="test" desc="some text about this image portfolio"> </Vizlayout>
           <Vizlayout img ="https://mdbootstrap.com/img/new/standard/nature/023.jpg" title="test" desc="some text about this image portfolio"> </Vizlayout>

           
        
      </Layout>
  )
}