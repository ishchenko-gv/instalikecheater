import {
  ADD_INSTAGRAM_ACCOUNT,
  SET_ACTIVE_ACCOUNT
} from '../actions/actionTypes';

const initialState = {
  accounts: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INSTAGRAM_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.account]
      };
    case SET_ACTIVE_ACCOUNT:
      return {
        ...state,
        activeAccount: action.account
      };
    default:
      return state;
  }
}
