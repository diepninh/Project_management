import { startCase } from 'lodash';
import * as types from '../constaints/actionTypes.js';

const initalState = {
  email : '',
  password : '',
  statusLogin : '',
  emailSend : ' ',
  passReset : ' ',
  passResetConfirm : '',
};
const myReducer = (state = initalState, action) =>{
  switch(action.type){
    case types.CHANGEEMAIL:
      state.email = action.email;
      return {...state}; 
    case types.CHANGEPASSWORD:
      state.password=action.password;
      return {...state};
    case types.CHANGESTATUSLOGIN:
      state.statusLogin =action.status;
      return {...state};
    case types.EMAILSEND:
      state.emailSend = action.email;
      return{...state};
    case types.GETPASSRESET:
      state.passReset = action.password;
      return {...state};
    case types.GETPASSRESETCONF:
      state.passResetConfirm = action.password;
      return {...state};
    default:
      return state; 
  }
}
export default myReducer;
