import axios from '../axios.js';
import * as actions from './index.js';

export const sendEmailAPI = (email, setDisplayAlert) => {
  return (dispatch) => {
    return axios.post('/password', {
      email: email,
      redirect_url: process.env.RESET_URL
    }).then(() => {
      dispatch(actions.changeStatusLogin('login'));
    }).catch(() => {
      setDisplayAlert('');
    });
  };
};
// need fix API Post
export const sendResetPassAPI = (password,  headersUrl) => {
  return (dispatch) => {
    return axios.put('/password',
      {
        password: password
      }, {
      //headers của link để reset pass
        headers:
      {
        'access-token': headersUrl['access-token'],
        uid: headersUrl.uid,
        client: headersUrl.client,
      }
      }).then(
      () => {
        dispatch(actions.changeStatusLogin('login'));
      }
    ).catch(() => {
    });
  };
};
