import { SET_SELECTED_ACTION } from '../actions/actionTypes';

const initialState = {
  selectedAction: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_ACTION:
      return {
        ...state,
        selectedAction: action.selectedAction
      };
    default:
      return state;
  }
}
