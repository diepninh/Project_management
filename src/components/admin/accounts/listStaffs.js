import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap';
import { useSelector, shallowEqual } from 'react-redux';
import Header from '../header';
import Options from './options.js';
import ModalAddAccount from './modallAddAccount.js';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';
import './accounts.css';

function ListStaff() {
  const [displaySearchName, setDisplaySearchName] = useState('none');
  const [displaySearchEmail, setDisplaySearchEmail] = useState('none');
  const users = useSelector(state => state.Accounts.users, shallowEqual);

  return (
    <div>
      <div>
        <Header />
        <div className='rangeHead'>
        </div>
        <div className='mt-2 mr-2 rangeSecond'>
          <Button  className='ml-2 btnPre' variant='warning' >Preview CSV</Button>
          <ModalAddAccount />
          <Form style={{ display: displaySearchName }}>
            <Form.Row>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' className='btnDel' onClick={() => setDisplaySearchName('none')}> x</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter name' className='form-control-addform'/>
                </Col>
              </Form.Group>
            </Form.Row>
          </Form>
          <Form style={{ display: displaySearchEmail }}>
            <Form.Row>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' className='btnDel' onClick={() => setDisplaySearchEmail('none')}> x</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter email' className='form-control-addform' />
                </Col>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </div>
      <Container>
        <Container className='formStyleLabel'>
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
                );
              })
            }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
export default ListStaff;
