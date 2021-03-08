import * as types from '../constaints/actionTypes.js';
import axios from '../axios.js';

export const changeEmail = (email) => {
  return {
    type: types.CHANGEEMAIL,
    email: email,
  };
};
export const changePassword = (password) => {
  return {
    type: types.CHANGEPASSWORD,
    password: password,
  };
};
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
export const checkPassCurrent = (password) => {
  return {
    type: types.CHECKPASSWORDCURRENT,
    password: password,
  }
};
export const changePassAfLog = (password) => {
  return {
    type: types.CHANGEPASSAFLOG,
    password: password,
  }
};
export const checkPassConfirm = (password) => {
  return {
    type: types.CHECKPASSCONFIRM,
    password: password,
  }
};
export const emailSend = (email) => {
  return {
    type: types.EMAILSEND,
    email: email,
  }
};
//thay đổi mật khẩu reset
export const getPassReset = (password) => {
  return {
    type: types.GETPASSRESET,
    password: password,
  }
};
// thay đổi mật khẩu xác nhận lần nữa khi reset
export const getPassResetConf = (password) => {
  return {
    type: types.GETPASSRESETCONF,
    password: password,
  }
};

