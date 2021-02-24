import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../actions/index.js';
import { Container, Row, Button, Col, FormControl, Form, Alert } from 'react-bootstrap';
import axios from '../../../axios.js';
import GetCookie from '../../getCookie.js';

function ChangePass(props) {
  const [showDanger, setShowDanger] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const passwordChange = useSelector(state => state.User.passwordChange);
  const passwordCurrent = useSelector(state => state.User.passwordCurrent);
  const passConfirm = useSelector(state => state.User.passConfirm);
  const dispatch = useDispatch();
  const clickToSave = (event) => {
    event.preventDefault();
    event.stopPropagation()
    axios.put('/password', {
      password: passwordChange,
      password_confirmation: passConfirm,
      current_password: passwordCurrent,
    },
      {
        headers: {
          'access-token': GetCookie('access-token'),
          uid: GetCookie('uid'),
          client: GetCookie('client')
        }
      }).then(
        res => {
          setShowSuccess(true);
        }
      ).catch((err) => {
        setShowDanger(true);
      })
  }


  return (
    <Container style={{ background: '#F2F2F2', maxWidth: '100%', display: props.display }}>

      <Alert variant='danger' show={showDanger} onClose={() => setShowDanger(false)} dismissible>
        <p>
          Change password is not successfull. Please try it !
        </p>
      </Alert>

      <Alert variant='success' show={showSuccess} onClose={() => setShowSuccess(false)} dismissible>
        <p>
          Change password is successfull!
        </p>
      </Alert>

      <Row style={{ paddingTop: 50, paddingLeft: 10 }}>
        <h3 >Change Your PassWord</h3>
      </Row>
      <Form onSubmit={clickToSave}>
        <Row>
          <Container style={{ background: '#ffffff', maxWidth: '95%' }}>
            <Row style={{ marginTop: 20 }}>
              <Col sm={4}>
                <p style={{ fontWeight: 'bold' }}>Current Password:</p>
              </Col>
              <Col sm={8}>
                <FormControl type='password' style={{ maxWidth: '100%' }}
                 onChange={e => dispatch(actions.checkPassCurrent(e.target.value))} />
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col sm={4}>
                <p style={{ fontWeight: 'bold' }}>New PassWord:</p>
              </Col>
              <Col sm={8}>
                <FormControl type='password' style={{ maxWidth: '100%' }}
                onChange={e => dispatch(actions.changePassAfLog(e.target.value))} />
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col sm={4}>
                <p style={{ fontWeight: 'bold' }}>Confirm Password:</p>
              </Col>
              <Col sm={8}>
                <FormControl type='password' style={{ maxWidth: '100%' }}
                onChange={e => dispatch(actions.checkPassConfirm(e.target.value))} />
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
            </Row>
          </Container>
        </Row>

        <Row style={{ marginTop: 30, marginLeft: 20 }}>
          <Button variant='primary' type='Submit'>Save</Button>
        </Row>
        <Row style={{ marginTop: 20 }}></Row>
      </Form>
    </Container>
  );
}

export default ChangePass;