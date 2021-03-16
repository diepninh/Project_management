import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as image from '../image/image.js';
import { useSelector, useDispatch } from 'react-redux';
import * as actionsReset from '../../actions/axiosResetPass.js';
import { useLocation } from 'react-router-dom';
import * as message from '../message.js';
import AlertForm from '../alert/alert.js';

function ResetPassword(props) {
  const dispatch = useDispatch();
  const queryString = require('query-string');
  const headersUrl = queryString.parse(useLocation().search);

  const [displayAlert, setDisplayAlert] = useState('none');
  const [password,setPassword] = useState('');
  const [passConf ,setPassConf] = useState('');

  const clickToSend = (event) => {
    event.preventDefault();
    if(password === passConf && password !== ''&& passConf !== ''){
      dispatch(actionsReset.sendResetPassAPI(password,  headersUrl))
    }else{
      setDisplayAlert('');
    }
    
  }

  return (
    <div className='container' style={{ width: '40%' }}>
      <AlertForm  displayAlert={displayAlert} setDisplayAlert={setDisplayAlert} message={message.messageResetPass}/>
      <div className='text-center'>
        <img src={image.bunbu} width={150} height={150} className='mt-4' />
        <h1 className='textStyle'>Bunbu</h1>
      </div>
      <div className='mt-5'>
        <form className='needs-validation' noValidate onSubmit={clickToSend}>
          <div className='form-group'>
            <label></label>
            <input type='password' className='form-control form-control-lg' placeholder={message.placeholderPass}
              onChange={e => setPassword(e.target.value) } />
          </div>
          <div className='form-group'>
            <label></label>
            <input type='password' className='form-control form-control-lg' placeholder={message.placeholderPass}
              onChange={e => setPassConf(e.target.value)} />
          </div>
          <button type='submit' className='btn btn-primary mt-5 button btn-lg btn-block'>Send</button>
        </form>
      </div>
    </div>

  );
}

export default ResetPassword;
