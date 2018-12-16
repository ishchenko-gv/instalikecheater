import { SET_SELECTED_ACTION } from './actionTypes';

export function setSelectedAction (selectedAction) {
  return {
    type: SET_SELECTED_ACTION,
    selectedAction
  }
}
