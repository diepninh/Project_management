import React from 'react';
import { Redirect } from 'react-router-dom';
// import ForgetPass from './forgetPass/forgetPass.js';
 
export function RedirectAppFor(props) {
  switch(props.statusLogin){
    case 'login':
      return <Redirect to='/'/>;
    default:
      return <div></div>;
  }
}
