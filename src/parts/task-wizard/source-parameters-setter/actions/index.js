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

export function toggleLastDaysInteraction () {
  return {
    type: actionTypes.TOGGLE_LAST_DAYS_INTERACTION
  }
}

export function setLastDaysInteraction (daysCount) {
  return {
    type: actionTypes.SET_LAST_DAYS_INTERACTION,
    daysCount
  }
}
