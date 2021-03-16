import * as types from '../constaints/actionTypes.js';

const initalState = {
  skillList: ['back-end ', 'front-end', 'PM', 'design', 'data analysis'],
  LevelOfUser: [0, 1, 2, 3, 1],
  ProjectOfUser: [
    {
      name: 'Drag And Drop',
      participants: ['diệp'],
      deadline: '30/1/2021',
      status: 'done',
    },
    {
      name: 'Project management',
      participants: ['diệp', 'thắng'],
      deadline: '30/1/2021',
      status: 'unfinished',
    }
  ],
  SearchProjectUser: '',
  passwordCurrent: ' ',
  passwordChange: ' ',
  passConfirm: ' ',
  
};
const myReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.CHANGESEARCHPROJECTUSER:
      state.SearchProjectUser = action.search;
      return { ...state };
    case types.CHECKPASSWORDCURRENT:
      state.passwordCurrent = action.password;
      return { ...state };
    case types.CHANGEPASSAFLOG:
      state.passwordChange = action.password;
      return { ...state };
    case types.CHECKPASSCONFIRM:
      state.passConfirm = action.password;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
