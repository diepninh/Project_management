import { combineReducers } from 'redux';
import SignIn from './signIn.js';
import Accounts from './accounts.js';
import User from './user.js'

const myReducer = combineReducers({
  SignIn : SignIn,
  Accounts : Accounts,
  User : User,
});
export default myReducer;