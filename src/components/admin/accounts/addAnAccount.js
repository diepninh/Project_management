import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';

function AddAnAccount() {
  return (
    <div>
      <div style={{ marginTop: 20 }}></div>
      <Container style={{ maxWidth: '100%' }}>
        <Form>
          <Form.Row>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' style={{ textAlign: 'center' }} > Name:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter name' style={{ maxWidth: '100%' }} />
                </Col>
                <Form.Label column sm='2'>
                </Form.Label>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='4' style={{ textAlign: 'center' }} >Email:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter email' style={{ maxWidth: '100%' }} />
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' style={{ textAlign: 'center' }} >Contract_Types:</Form.Label>
                <Col sm='8'>
                  <Form.Control as='select'>
                    <option>Parttime</option>
                    <option>Offical</option>
                  </Form.Control>
                </Col>
                <Form.Label column sm='2'></Form.Label>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='4' style={{ textAlign: 'center' }} >Date_Of_Birth:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='date'  style={{ maxWidth: '100%' }} />
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' style={{ textAlign: 'center' }} > Phone:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter phone' style={{ maxWidth: '100%' }} />
                </Col>
                <Form.Label column sm='2'>
                </Form.Label>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group as={Row}>
                <Form.Label column sm='4' style={{ textAlign: 'center' }} >Address:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter address' style={{ maxWidth: '100%' }} />
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' style={{ textAlign: 'center' }} >Sex:</Form.Label>
                <Col sm='8'>
                  <Form.Check custom inline label="male" type='radio' />
                  <Form.Check custom inline label="female" type='radio' />
                </Col>
                <Form.Label column sm='2'></Form.Label>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group as={Row}>
                <Form.Label column sm='4' style={{ textAlign: 'center' }} >DateJoin:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='date'  style={{ maxWidth: '100%' }} />
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' style={{ textAlign: 'center' }} >Role:</Form.Label>
                <Col sm='8'>
                  <Form.Control as='select'>
                    <option>admin</option>
                    <option>HR</option>
                    <option>staff</option>
                  </Form.Control>
                </Col>
                <Form.Label column sm='2'></Form.Label>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group as={Row}>
                <Form.Label column sm='4' style={{ textAlign: 'center' }} >StartContract:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='date'  style={{ maxWidth: '100%' }} />
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
}
export default AddAnAccount;