import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFilterEnabled: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_FILTER:
      return {
        ...state,
        isFilterEnabled: !state.isFilterEnabled
      };
    default:
      return state;
  }
}
