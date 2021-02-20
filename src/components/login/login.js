import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bunbu from '../image/bunbu.png';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/index.js';
import {
  BrowserRouter as Router,
  Link,

} from 'react-router-dom';
import axios from '../../axios.js';
import './login.css';



function Login() {
  const [displayAlert, setDisplayAlert] = useState('none');
  const email = useSelector(state => state.SignIn.email);
  const password = useSelector(state => state.SignIn.password);

  const dispatch = useDispatch();
  const clickToLogin = (event) => {
    event.preventDefault();

    axios.post('/sign_in', {
      email: email,
      password: password
    }).then(
      res => {
        document.cookie = 'access-token' + '=' + res.headers['access-token'];
        document.cookie = 'client' + '=' + res.headers.client;
        document.cookie = 'uid' + '=' + res.headers.uid;
        document.cookie = 'email' + '=' + email;
        const role = res.data.data.roles;
        if (role.length > 1) {
          dispatch(actions.changeStatusLogin('admin'))
        }
        else if (role.length === 1) {
          if (role[0] === 'user') {
            if (res.data.data['sign_in_count'] === 1) {
              dispatch(actions.changeStatusLogin('userreset'))
            } else {
              dispatch(actions.changeStatusLogin('user'))
            }
          }
        } else {
          dispatch(actions.changeStatusLogin('hr'))
        }
      }
    ).catch((err) => {
      setDisplayAlert('');
    })
    dispatch(actions.changeEmail(''));
    dispatch(actions.changePassword(''));

  }

  return (
    <div className='container' style={{ width: '40%' }}>
      <div style={{ display: displayAlert }}>
        <div className='alert alert-danger' role='alert'>
          Your email or password is wrong.Please check it!.
          <button type="button" className="close" onClick={() => setDisplayAlert('none')}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div className='text-center'>
        <img src={bunbu} width={150} height={150} className='mt-4' />
        <h1 className='textStyle'>Bunbu</h1>
      </div>


      <div className='mt-5'>
        <form className='needs-validation' noValidate onSubmit={clickToLogin}>
          <div className='form-group'>
            <label></label>
            <input type='email' className='form-control form-control-lg' placeholder='Enter your email' value={email}
              onChange={(e) => dispatch(actions.changeEmail(e.target.value))}
            />
            <div className='invalid-feedback'>
              email is not emty !
            </div>
          </div>
          <div className='form-group'>
            <label></label>
            <input type='password' className='form-control form-control-lg' placeholder='Enter your password' value={password}
              onChange={(e) => dispatch(actions.changePassword(e.target.value))}
            />
            <div className='invalid-feedback'>
              password is not emty !
            </div>
          </div>
          <div className='form-check text-center'>
            <input type='checkbox' className='form-check-input' />
            <label style={{ color: '#4B8CED' }}>Remember me</label>
          </div>
          <button type='submit' className='btn btn-primary mt-5 button btn-lg btn-block'>
            Login
        </button>
          <div className='mt-5 '>
            <p className='text'>If you don't remember your password , Please click
            <Link to='/forgetpass'> Forgot Password</Link></p>
          </div>
          <div style={{ height: 20 }}>
          </div>
        </form>
      </div>

    </div>

  );
}

export default Login;