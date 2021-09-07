import * as React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import Vizlayout from "../components/reactCards"
import Container from 'react-bootstrap/Container';
import basketball from "../images/basketball.png"
import customers from "../images/tableau-customers.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Viz() {
  return (
      
          <Layout>
          <Container>
            <Row>
             <Col>
             <Vizlayout img ={basketball}> </Vizlayout>
             </Col>
             <Col>
             <Vizlayout img ={customers}title="test" desc="some text about this image portfolio"> </Vizlayout>
             </Col>
            </Row>
            
            <Row>
            <Col>
            <Vizlayout img ="https://mdbootstrap.com/img/new/standard/nature/023.jpg" title="test" desc="some text about this image portfolio"> </Vizlayout>
            </Col>
            <Col>
            <Vizlayout img ="https://mdbootstrap.com/img/new/standard/nature/023.jpg" title="test" desc="some text about this image portfolio"> </Vizlayout>
            </Col>
           </Row>

           </Container>
           </Layout>
     
  )
}