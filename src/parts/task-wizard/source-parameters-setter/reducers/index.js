import * as actionTypes from '../actions/actionTypes';

const initialState = {
  hashtags: [],
  users: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_HASHTAGS:
      return {
        ...state,
        hashtags: action.hashtags
      };
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
}
