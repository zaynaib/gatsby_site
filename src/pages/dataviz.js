import * as React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import Vizlayout from "../components/reactCards"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Viz() {
  return (
      
          <Layout>
          <Container>
            <Row>
             <Col>
             <Vizlayout img ="https://mdbootstrap.com/img/new/standard/nature/023.jpg" title="test" desc="some text about this image portfolio"> </Vizlayout>
             </Col>
             <Col>
             <Vizlayout img ="https://mdbootstrap.com/img/new/standard/nature/023.jpg" title="test" desc="some text about this image portfolio"> </Vizlayout>
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