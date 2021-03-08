import axios from '../axios.js';
import * as actions from './index.js';

export const sendLoginAPI = (email, password, setDisplayAlert) => {
  return (dispatch) => {
    return axios.post('/sign_in', {
      email: email,
      password: password
    }).then(
      res => {
        document.cookie = `access-token = ${res.headers['access-token']}`;
        document.cookie = `client = ${res.headers.client}`;
        document.cookie = `uid = ${res.headers.uid}`;
        document.cookie = `email = ${email}`;
  
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
  }
 
}