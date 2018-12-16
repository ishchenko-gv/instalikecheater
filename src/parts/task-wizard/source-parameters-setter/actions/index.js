import * as actionTypes from './actionTypes';

export function setHashtags (hashtags) {
  return {
    type: actionTypes.SET_HASHTAGS,
    hashtags
  }
}

export function setUsers (users) {
  return {
    type: actionTypes.SET_USERS,
    users
  }
}
