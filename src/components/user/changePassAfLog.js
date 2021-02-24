import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bunbu from '../image/bunbu.png';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/index.js';
import axios from '../../axios.js';
import GetCookie from '../getCookie.js'

function ChangePassAfLog(props) {
  const [displayAlert, setDisplayAlert] = useState('none');
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
          dispatch(actions.changeStatusLogin('user'));
        }
      ).catch((err) => {
        setDisplayAlert('');
      })

  }
  return (
    <div className='container' style={{ width: '40%' }}>
     <div style={{ display: displayAlert }}>
        <div className='alert alert-danger' role='alert'>
          Change password is not successfull. Please try it !
          <button type="button" className="close" onClick={() => setDisplayAlert('none')}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div className='text-center'>
        <img src={bunbu} width={150} height={150} className='mt-4' />
        <h1 className='textStyle'>Bunbu</h1>
        <h5>{GetCookie('email')}</h5>
      </div>
      <div className='mt-5'>
        <form onSubmit={clickToSave}>
          <div className='form-group'>
            <label></label>
            <input type='password' className='form-control form-control-lg' placeholder='Enter your current password'
             onChange={e => dispatch(actions.checkPassCurrent(e.target.value))} />
            <div className='invalid-feedback'>
              email is not emty !
            </div>
          </div>
          <div className='form-group'>
            <label></label>
            <input type='password' className='form-control form-control-lg' placeholder='Enter your new password'
             onChange={e => dispatch(actions.changePassAfLog(e.target.value))} />
            <div className='invalid-feedback'>
              password is not emty !
            </div>
          </div>
          <div className='form-group'>
            <label></label>
            <input type='password' className='form-control form-control-lg' placeholder='Confirm your new password'
             onChange={e => dispatch(actions.checkPassConfirm(e.target.value))} />
            <div className='invalid-feedback'>
              password is not emty !
            </div>
          </div>
          <button type='submit' className='btn btn-primary mt-5 button btn-lg btn-block'>
            Save
        </button>

        </form>
      </div>

    </div>

  );
}
export default ChangePassAfLog;