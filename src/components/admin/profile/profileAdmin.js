import React, { useState } from 'react';
import { Container, Row, Button, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from '../header';
import ChangePass from './changePass.js';
import General from './general.js';
import EditProfile from './editProfile.js';
function ProfileAdmin(props) {
  const [displayGeneral, setDisplayGer] = useState('');
  const [displayEdit, setDisplayEdit] = useState('none');
  const [displayChange, setDisplayChange] = useState('none');
  const showGeneral = () => {
    setDisplayGer('');
    setDisplayEdit('none');
    setDisplayChange('none');
  }
  const showEdit = () => {
    setDisplayGer('none');
    setDisplayEdit('');
    setDisplayChange('none');
  }
  const showChange = () => {
    setDisplayGer('none');
    setDisplayEdit('none');
    setDisplayChange('');
  }
  return (
    <div>
      <Header />
      <div style={{ height: 130, background: 'none' }}></div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%', marginLeft: '2%' }}>
          <Container style={{ background: '#F2F2F2' }}>
            <Row style={{ paddingTop: 50 }}>
              <Col sm={3}></Col>
              <Col sm={6} style={{ textAlign: 'center' }}>
                <h3 >Name User</h3>
              </Col>
              <Col sm={3}></Col>
            </Row>
            <Row style={{ paddingTop: 30, paddingLeft: 5, paddingRight: 5 }}>
              <Button variant={displayGeneral === '' ? 'primary' : 'outline-primary'} size='lg' block onClick={showGeneral}>
                General
                </Button>
            </Row>
            <Row style={{ paddingTop: 30, paddingLeft: 5, paddingRight: 5 }}>
              <Button variant={displayEdit === '' ? 'primary' : 'outline-primary'} size='lg' block onClick={showEdit}>
                Edit Profile
                </Button>
            </Row>
            <Row style={{ paddingTop: 30, paddingLeft: 5, paddingRight: 5 }}>
              <Button variant={displayChange === '' ? 'primary' : 'outline-primary'} size='lg' block onClick={showChange}>
                Change Password
                </Button>
            </Row>
            <Row style={{ marginTop: 30 }}></Row>
          </Container>
        </div>
        <div style={{ width: '2%' }}></div>
        <div style={{ width: '70%' }}>
          <General display={displayGeneral} />
          <EditProfile display={displayEdit} />
          <ChangePass display={displayChange}  />
        </div>
      </div>
    </div>
  );
}

export default connect( )(ProfileAdmin);