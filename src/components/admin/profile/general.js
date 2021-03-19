import React, { useState } from 'react';
import { Container, Row, Button, Col, FormControl, Form } from 'react-bootstrap';
import Synthetic from './synthetic.js';
function General(props) {
  return (
    <Container style={{ background: '#F2F2F2', maxWidth: '100%', display: props.display }}>
      <Row style={{ paddingTop: 50, paddingLeft: 10 }}>
        <h3 >General Accounts Settings</h3>
      </Row>
      <Row>
        <Container style={{ background: '#ffffff', maxWidth: '95%' }}>
          <Row>
            <h5>Private Information</h5>
          </Row>
          <Row>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Name:</p>
            </Col>
            <Col sm={4}>
              <p>name user</p>
            </Col>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Email:</p>
            </Col>
            <Col sm={4}>
              <p>email</p>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Gender:</p>
            </Col>
            <Col sm={4}>
              <p>female</p>
            </Col>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Phone:</p>
            </Col>
            <Col sm={4}>
              <p>012334</p>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Birthday:</p>
            </Col>
            <Col sm={4}>
              <p>06/01/2000</p>
            </Col>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Address:</p>
            </Col>
            <Col sm={4}>
              <p>Nam Định</p>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row style={{ marginTop: 20, }}>
        <Container style={{ background: '#ffffff', maxWidth: '95%' }}>
          <Row>
            <h5>Staff Information</h5>
          </Row>
          <Row>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Staff ID:</p>
            </Col>
            <Col sm={4}>
              <p>B0001</p>
            </Col>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Contract Type:</p>
            </Col>
            <Col sm={4}>
              <p>Parttime</p>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Position:</p>
            </Col>
            <Col sm={4}>
              <p>Front</p>
            </Col>
            <Col sm={2}>
              <p style={{ fontWeight: 'bold' }}>Join Date:</p>
            </Col>
            <Col sm={4}>
              <p>15/12/2020</p>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Synthetic />
      </Row>
    </Container>
  );
}
export default General;