
import * as types from '../constaints/actionTypes.js';

const initalState = {
  statusLogin : ' ',
};
const myReducer = (state = initalState, action) =>{
  switch(action.type){
    case types.CHANGESTATUSLOGIN:
      state.statusLogin =action.status;
      return {...state};
    default:
      return state; 
  }
};
export default myReducer;
