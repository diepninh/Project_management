import axios from '../axios.js';
import GetCookie from '../components/getCookie.js';

export const sendRequestChangePassAPI = (passwordChange,passConfirm,passwordCurrent,setShowSuccess,setShowDanger) =>{
  return (dispatch) =>{
    return axios.put('/password', {
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
          setShowSuccess(true);
        }
      ).catch((err) => {
        setShowDanger(true);
      })
  }
}