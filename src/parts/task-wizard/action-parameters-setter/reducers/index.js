import * as actionTypes from '../actions/actionTypes';

const initialState = {
  missInteractedUsers: false,
  likesCount: '',
  subscriptionsCount: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_MISS_INTERACTED_USERS:
      return {
        ...state,
        missInteractedUsers: !state.missInteractedUsers
      };
    case actionTypes.SET_LIKES_COUNT:
      return {
        ...state,
        likesCount: action.likesCount
      };
    case actionTypes.SET_SUBSCRIPTIONS_COUNT:
      return {
        ...state,
        subscriptionsCount: action.subscriptionsCount
      };
    default:
      return state;
  }
}
