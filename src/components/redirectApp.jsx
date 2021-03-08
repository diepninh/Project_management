import React from 'react';
import { Redirect } from 'react-router-dom';
// import Login from './login/login';
 
export function RedirectApp(props) {
  switch(props.statusLogin){
    case 'admin':
      return <Redirect to='/admin'/>;
    case 'userreset':
      return <Redirect to='/changepassaflog'/>;
    case 'user':
      return <Redirect to='/user'/>;
    case 'resetPass':
      return <Redirect to='/resetPass'/>;
    default:
      return <div></div>;
  }
}
