import axios from '../axios.js';
import * as actions from './index.js';

export const sendEmailAPI = (email, setDisplayAlert) => {
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
// need fix API Post
export const sendResetPassAPI = (password,  headersUrl) => {
  return (dispatch) => {
    return axios.put('/password',
      {
        password: password,
        password_confirmation: password,
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
    })
  }
}