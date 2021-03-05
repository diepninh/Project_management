import axios from '../axios.js';
import * as actions from './index.js';

export const clickSendEmail = (email, setDisplayAlert) => {
  return (dispatch) => {
    return axios.post('/password', {
      email: email,
      redirect_url: process.env.RESET_URL
    }).then(res => {
      dispatch(actions.changeStatusLogin('login'))
    }).catch((err) => {
      setDisplayAlert('');
    })
  }
}

export const clickToReset = (password, passConf, headersUrl, setDisplayAlert) => {
  return (dispatch) => {
    return axios.put('/password',
      {
        password: password,
        password_confirmation: passConf,
      }, {
      headers:
      {
        'access-token': headersUrl['access-token'],
        uid: headersUrl.uid,
        client: headersUrl.client,
      }
    }).then(
      res => {
        dispatch(actions.changeStatusLogin('login'))
      }
    ).catch((err) => {
      setDisplayAlert('');
    })
  }
}