import React, { useState } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
 
function Synthetic(props) {
  return (
    <Container style={{ maxWidth: '100%'}}>
      <Row>
        <Container style={{ background: '#ffffff' }}>
          <Row>
            <h5>Skill</h5>
          </Row>
          <Row>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Node</p>
            </Col>
            <Col sm={4}>
              <p>intern</p>
            </Col>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Ruby</p>
            </Col>
            <Col sm={4}>
              <p>fresher</p>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Reactjs</p>
            </Col>
            <Col sm={4}>
              <p>junior</p>
            </Col>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>VueJS</p>
            </Col>
            <Col sm={4}>
              <p>middle</p>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row style={{ marginTop: 20, }}>
        <Container style={{ background: '#ffffff'}}>
          <Row>
            <h5>Project</h5>
          </Row>
          <Row>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Drag and Drop</p>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Project management</p>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row style={{ marginTop: 20 }}>
      
      </Row>
    </Container>
  );
}
export default Synthetic;