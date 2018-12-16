import { ADD_INSTAGRAM_ACCOUNT, SET_ACTIVE_ACCOUNT } from './actionTypes';

export function addInstagramAccount(account) {
  return {
    type: ADD_INSTAGRAM_ACCOUNT,
    account
  };
}

export function setActiveAccount(account) {
  return {
    type: SET_ACTIVE_ACCOUNT,
    account
  };
}
