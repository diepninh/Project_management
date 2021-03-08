import React from 'react';
import { Button, Container,Row, Col, Image, Navbar,SplitButton} from 'react-bootstrap';
import bunbu from '../image/bunbu.png';
import * as actions from '../../actions/index.js';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import './admin.css';
import { connect } from 'react-redux';

function Header(props) {
  return (

     
    <Container>
      <Row>
        <Navbar bg='light' expand="lg" fixed='top' style={{ paddingLeft: '20%' }}>

          <Navbar.Brand href="#home" style={{ fontSize: 35, color: '#2a448c' }}>
            <Image src={bunbu} width={50} height={50} />Bunbu</Navbar.Brand>
          <Col sm={4}></Col>
         
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>

            <Link to='/accounts' className='styleLink' style={{color : props.colorLinkAcc}}>Accounts</Link>
            <Link to='/skills' className='styleLink' style={{color : props.colorLinkSkill}}>Skills</Link>
            <Link to='/project' className='styleLink' style={{color : props.colorLinkProj}}>Projects</Link>


          </Navbar.Collapse>
          <SplitButton id='dropdown-split-varirants-Outline-primary' title="User">
            <dl style={{ textAlign : 'center'}}>
              <dt style={{ marginBottom : 10}}><Link to='/profileAdmin'>profile</Link></dt>
              <dt><Link to='/' onClick={() => props.changeStatusLogin(false)}>log out</Link></dt>
            </dl>
          </SplitButton>
          <Col sm={3}></Col>
        </Navbar>
        
      </Row>
 
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    statusLogin: state.SignIn.statusLogin,
  }
}
const mapDispacthToProps = (dispatch, props) => {
  return {
    changeStatusLogin: (status) => {
      dispatch(actions.changeStatusLogin(status))
    },
  }
}
export default connect(mapStateToProps,mapDispacthToProps)(Header);