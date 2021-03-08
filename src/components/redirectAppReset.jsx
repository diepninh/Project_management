import React from 'react';
import { Redirect } from 'react-router-dom';
import ResetPassword  from './forgetPass/resetPassword.js';
 
export function RedirectAppReset(props) {
  switch(props.statusLogin){
    case 'login':
      return  <Redirect to='/'/>;
    default:
      return <ResetPassword/>;
  }
}
