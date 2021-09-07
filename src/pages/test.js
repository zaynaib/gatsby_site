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
          
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
        
      </Layout>
  )
}