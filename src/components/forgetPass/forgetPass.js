import React ,  { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as image from '../image/image.js';
import './forgetPass.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/index.js';
import * as actionsReset from '../../actions/axiosResetPass.js';
import AlertForm from '../alert/alert.js';

function ForgetPass(props) {
  const [displayAlert, setDisplayAlert] = useState('none');
  const email = useSelector(state => state.SignIn.emailSend);
  const dispatch = useDispatch();

  const emailSend = (value) =>{
    dispatch(actions.emailSend(value))
  }
  const clickToSendEmail = (event) =>{
    event.preventDefault();
    dispatch(actionsReset.sendEmailAPI(email,setDisplayAlert))
  }
  return (
    <div className='container'>
      <AlertForm  displayAlert={displayAlert} setDisplayAlert={setDisplayAlert} message={'Your email is not registed !'}/>
      <div className='text-center'>
        <img src={image.bunbu} width={150} height={150} className='mt-4' />
        <h1 className='textStyle'>Bunbu</h1>

      </div>
      <div className='mt-5'>
        <h1 className='textWarning' >FORGOT YOUR PASSWORD !</h1>
        <p>Don't worry! Give us your email which is used to register your Bunbu account.We will mail you a verify to reset your password. </p>
        <form onSubmit={clickToSendEmail}>
          <div className='form-group'>
            <label></label>
            <input type='email' className='form-control form-control-lg' placeholder='Enter your email'
            onChange = {e =>emailSend(e.target.value)}
             />
            <div className='invalid-feedback'>
              email is not emty !
          </div>
          </div>

          <button type='submit' className='btn btn-primary mt-5 button btn-lg btn-block'>Give</button>
        </form>
      </div>

    </div>
  );
}

export default ForgetPass;