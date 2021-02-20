import React ,  { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bunbu from '../image/bunbu.png';
import './forgetPass.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/index.js';
import axios from '../../axios.js';

function ForgetPass(props) {
  const [displayAlert, setDisplayAlert] = useState('none');
  const email = useSelector(state => state.SignIn.emailSend);
  const dispatch = useDispatch();

  const clickToSend = (event) =>{
    event.preventDefault();
    axios.post('/password',{
      email : email,
      redirect_url: 'http://localhost:8080/resetPass'
    }).then(res =>{
      dispatch(actions.changeStatusLogin('login'))
    }).catch((err) =>{
      setDisplayAlert('');
    })

    
  }
  return (
    <div className='container'>
      <div style={{ display: displayAlert }}>
        <div className='alert alert-danger' role='alert'>
          Your email is not registed!.
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
        <h1 className='textWarning' >FORGOT YOUR PASSWORD !</h1>
        <p>Don't worry! Give us your email which is used to register your Bunbu account.We will mail you a verify to reset your password. </p>
        <form onSubmit={clickToSend}>
          <div className='form-group'>
            <label></label>
            <input type='email' className='form-control form-control-lg' placeholder='Enter your email'
            onChange = {e =>dispatch(actions.emailSend(e.target.value))}
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