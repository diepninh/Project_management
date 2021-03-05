import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from './login/login';
 
export function RedirectApp(props) {
   if(props.statusLogin === 'admin'){
     return(
       <Redirect to='/admin'/>
     )
   }
   else if (props.statusLogin === 'userreset'){
     return(
       <Redirect to='/changepassaflog'/>
     )
   }
   else if (props.statusLogin === 'user'){
    return(
      <Redirect to='/user'/>
    )
  }
   else if (props.statusLogin === 'resetPass'){
     return(
       <Redirect  to='/resetPass'/>
     )
   }
   else{
     return(
       <Login/>
     )
   }

}