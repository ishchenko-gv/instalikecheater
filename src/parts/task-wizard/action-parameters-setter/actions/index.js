import * as actionTypes from './actionTypes';

export function toggleMissInteractedUsers () {
  return {
    type: actionTypes.TOGGLE_MISS_INTERACTED_USERS
  }
}

export function setLikesCount (likesCount) {
  return {
    type: actionTypes.SET_LIKES_COUNT,
    likesCount
  }
}

export function setSubscriptionsCount (subscriptionsCount) {
  return {
    type: actionTypes.SET_SUBSCRIPTIONS_COUNT,
      subscriptionsCount
  }
}
