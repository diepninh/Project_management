import React from 'react';
import { Redirect } from 'react-router-dom';
import ForgetPass from './forgetPass/forgetPass.js';
 
export function RedirectAppFor(props) {
   if(props.statusLogin === 'login'){
     return(
       <Redirect to='/'/>
     )
   }
   
   else{
     return(
       <ForgetPass/>
     )
   }

}
