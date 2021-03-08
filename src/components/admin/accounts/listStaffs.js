import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Table, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../header';
import Options from './options.js';
import ModalAddAccount from './modallAddAccount.js';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';

function ListStaff(props) {
  const [displaySearchName, setDisplaySearchName] = useState('none');
  const [displaySearchEmail, setDisplaySearchEmail] = useState('none');
  const users = useSelector(state => state.Accounts.users);
  return (
    <div>
      <div>
        <Header />
        <div style={{ paddingTop: 80, background: '#7FA9EA', height: 130 }}>
        </div>
        <div className='mt-2 mr-2' style={{ display: 'flex' }}>
          <Button variant='warning' className='ml-2' style={{ color: 'white', height: 39 }}>Preview CSV</Button>
          <ModalAddAccount />
          <Form style={{ display: displaySearchName }}>
            <Form.Row>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' style={{ color: '#7FA9EA' }} onClick={() => setDisplaySearchName('none')}> x</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter name' style={{ maxWidth: '100%' }} />
                </Col>
              </Form.Group>
            </Form.Row>
          </Form>
          <Form style={{ display: displaySearchEmail }}>
            <Form.Row>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' style={{ color: '#7FA9EA' }} onClick={() => setDisplaySearchEmail('none')}> x</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter email' style={{ maxWidth: '100%' }} />
                </Col>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </div>
      <Container>
        <Container style={{ textAlign: 'center' }}>
          <h2>Staffs List</h2>
        </Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th onClick={() => setDisplaySearchName('')}>
                <Container>
                  <Row>
                    <Col sm='10'>Name</Col>
                    <BsCaretUpFill />
                  </Row>
                  <Row>
                    <Col sm='10'></Col>
                    <BsCaretDownFill />
                  </Row>
                </Container>
              </th>
              <th onClick={() => setDisplaySearchEmail('')}>
                Email
              </th>
              <th>role</th>
              <th>contract</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td></td>
                    <td></td>
                    <td>
                      <Options user={e} />
                    </td>

                  </tr>
                )
              })
            }
          </tbody>
        </Table>

      </Container>
    </div>
  )
};


export default ListStaff;