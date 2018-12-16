import { SET_SELECTED_SOURCE } from '../actions/actionTypes';

const initialState = {
  selectedSource: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_SOURCE:
      return {
        ...state,
        selectedSource: action.selectedSource
      };
    default:
      return state
  }
}
