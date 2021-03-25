import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as image from '../image/image.js';
import { useDispatch } from 'react-redux';
import * as actionsReset from '../../actions/axiosResetPass.js';
import { useLocation } from 'react-router-dom';
import * as message from '../message.js';
import AlertForm from '../alert/alert.js';
import { useTranslation } from 'react-i18next';

const queryString = require('query-string');
function ResetPassword() {
  const dispatch = useDispatch();
  const headersUrl = queryString.parse(useLocation().search);
  const [displayAlert, setDisplayAlert] = useState('none');
  const [password,setPassword] = useState('');
  const [passConf ,setPassConf] = useState('');
  const { t } = useTranslation();

  const clickToSend = (event) => {
    event.preventDefault();
    if(password === passConf && password !== '' && passConf !== ''){
      dispatch(actionsReset.sendResetPassAPI(password,  headersUrl));
    }else{
      setDisplayAlert('');
    }
  };

  return (
    <div className='container' style={{ width: '40%' }}>
      <AlertForm  displayAlert={displayAlert} setDisplayAlert={setDisplayAlert} message={t(message.messageResetPass)}/>
      <div className='text-center'>
        <img src={image.bunbu} width={150} height={150} className='mt-4' />
        <h1 className='textStyle'>{t('Bunbu')}</h1>
      </div>
      <div className='mt-5'>
        <form className='needs-validation' noValidate onSubmit={clickToSend}>
          <div className='form-group'>
            <label></label>
            <input type='password' className='form-control form-control-lg' placeholder={t(message.placeholderPass)}
              onChange={e => setPassword(e.target.value) } />
          </div>
          <div className='form-group'>
            <label></label>
            <input type='password' className='form-control form-control-lg' placeholder={t(message.placeholderPass)}
              onChange={e => setPassConf(e.target.value)} />
          </div>
          <button type='submit' className='btn btn-primary mt-5 button btn-lg btn-block'>{t('Send')}</button>
        </form>
      </div>
    </div>

  );
}
export default ResetPassword;
