import * as types from '../constaints/actionTypes.js';

export const changeStatusLogin = (status) => {
  return {
    type: types.CHANGESTATUSLOGIN,
    status: status,
  }
};
export const changeSearchProjectUser = (search) => {
  return {
    type: types.CHANGESEARCHPROJECTUSER,
    search: search,
  }
};


