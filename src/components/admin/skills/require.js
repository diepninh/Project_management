import React from 'react';
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap';
import Header from '../header';
import Options from './options.js';
import { Link } from 'react-router-dom';
import './skills.css';

function Require() {
  return (
    <div>
      <div>
        <Header />
        <div style={{ paddingTop: 80, background: '#7FA9EA', height: 130 }}>
          <Container style={{ background: '#7FA9EA', textAlign: 'center' }}>
            <Row>
              <Col sm={6}><Link to='/skills' className='stylelink-bar' >Skills list</Link></Col>
              <Col sm={6}><Link to='/requirements' className='stylelink-bar-click' >Requires</Link></Col>
            </Row>

          </Container>
        </div> 
        <div className='mt-2  ml-2 mr-2'>
          <Row>
            <Col sm={1.5}>
              <Button variant='success'>Preview CSV</Button>
            </Col>
            <Col sm={8}></Col>
            <Form >
              <Form.Row>
                <Form.Group as={Row}  >
                  <Col sm='10'>
                    <Form.Control type='text' placeholder='enter skill' className='form_width' />
                  </Col>
                  <Col sm='2'>
                    <Button variant='primary'>Search</Button>
                  </Col>
                </Form.Group>
              </Form.Row>
            </Form>
          </Row>
        </div>
      </div>
      <Container>
        <Container className='skillsList'>
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
  );
}
export default Require;
