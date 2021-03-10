import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, Table, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../header';
import Options from './options.js';
import { Link } from 'react-router-dom';

function Require(props) {
  const skillList = useSelector(state => state.User.skillList);
  const skillListOfStaff = useSelector(state => state.Accounts.skillListOfStaff);
  return (
    <div>
      <div>
        <Header />
        <div style={{ paddingTop: 80, background: '#7FA9EA', height: 130 }}>
          <Container style={{ background: '#7FA9EA', textAlign: 'center' }}>
            <Row>
            <Col sm={6}><Link to='/skillList' className='stylelinkA' >Skills list</Link></Col>
              <Col sm={6}><Link to='/requirements' className='stylelinkA' style={{color : 'blue'}} >Requires</Link></Col>
            </Row>

          </Container>
        </div> 
        <Container className='mt-2  ml-2 mr-2' style={{ maxWidth: '100%' }}>
          <Row>
            <Col sm={1.5}>
              <Button variant='success'>Preview CSV</Button>
            </Col>
            <Col sm={8}></Col>
            <Form >
              <Form.Row>
                <Form.Group as={Row}  >
                  <Col sm='10'>
                    <Form.Control type='text' placeholder='enter skill' style={{ maxWidth: '100%' }} />
                  </Col>
                  <Col sm='2'>
                    <Button variant='primary'>Search</Button>
                  </Col>
                </Form.Group>
              </Form.Row>
            </Form>
          </Row>
        </Container>
      </div>
      <Container>
        <Container style={{ textAlign: 'center', }}>
          <h2>Request edit skill from staff</h2>
        </Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>From</th>
              <th>Skill</th>
              <th>Now level</th>
              <th>Edit level</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><Options/></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
};

export default Require;