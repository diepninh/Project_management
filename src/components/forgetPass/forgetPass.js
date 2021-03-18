import React ,  { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as image from '../image/image.js';
import './forgetPass.css';
import { useDispatch } from 'react-redux';
import * as message from '../message.js';
import * as actionsReset from '../../actions/axiosResetPass.js';
import AlertForm from '../alert/alert.js';
import { useTranslation } from 'react-i18next';

function ForgetPass() {
  const [displayAlert, setDisplayAlert] = useState('none');
  const [email , setEmail] = useState('');
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const clickToSendEmail = (event) =>{
    event.preventDefault();
    dispatch(actionsReset.sendEmailAPI(email,setDisplayAlert));
  };
  return (
    <div className='container'>
      <AlertForm  displayAlert={displayAlert} setDisplayAlert={setDisplayAlert} message={t(message.messageForgetPass)}/>
      <div className='text-center'>
        <img src={image.bunbu} width={150} height={150} className='mt-4' />
        <h1 className='textStyle'>Bunbu</h1>

      </div>
      <div className='mt-5'>
        <h1 className='textWarning' >{t('FORGOT YOUR PASSWORD !')}</h1>
        <p>{t("Don't worry! Give us your email which is used to register your Bunbu account.We will mail you a verify to reset your password.")} </p>
        <form onSubmit={clickToSendEmail}>
          <div className='form-group'>
            <label></label>
            <input type='email' className='form-control form-control-lg' placeholder={t(message.placeholderEmail)}
              onChange = {e => setEmail(e.target.value)}
            />
            <div className='invalid-feedback'>
              {t(message.validateEmail)}
            </div>
          </div>

          <button type='submit' className='btn btn-primary mt-5 button btn-lg btn-block'>{t('Give')}</button>
        </form>
      </div>

    </div>
  );
}

export default ForgetPass;
