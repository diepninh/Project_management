import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../actions/index.js';
import * as actionsChangePass from '../../../actions/axiosChangePass.js';                                                                                                                                                                                                                                                                        
import { Container, Row, Button, Col, FormControl, Form, Alert } from 'react-bootstrap';

function ChangePass(props) {
  const [showDanger, setShowDanger] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const passwordChange = useSelector(state => state.User.passwordChange);
  const passwordCurrent = useSelector(state => state.User.passwordCurrent);
  const passConfirm = useSelector(state => state.User.passConfirm);
  const dispatch = useDispatch();
  
  const checkPassCurrent = (value) => {
    dispatch(actions.checkPassCurrent(value))
  }
  const changePassAfLog = (value) =>{
    dispatch(actions.changePassAfLog(value))
  }
  const checkPassConfirm = (value) =>{
    dispatch(actions.checkPassConfirm(value))
  }
  const clickToSave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(actionsChangePass.sendRequestChangePassAPI(passwordChange,passwordCurrent,passConfirm,setShowSuccess,setShowDanger))    
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
                 onChange={e => checkPassCurrent(e.target.value)} />
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col sm={4}>
                <p style={{ fontWeight: 'bold' }}>New PassWord:</p>
              </Col>
              <Col sm={8}>
                <FormControl type='password' style={{ maxWidth: '100%' }}
                onChange={e => changePassAfLog(e.target.value)} />
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col sm={4}>
                <p style={{ fontWeight: 'bold' }}>Confirm Password:</p>
              </Col>
              <Col sm={8}>
                <FormControl type='password' style={{ maxWidth: '100%' }} 
                onChange={e => checkPassConfirm(e.target.value)} />
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