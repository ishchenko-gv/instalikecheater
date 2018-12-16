import { SET_SELECTED_SOURCE } from './actionTypes';

export function setSelectedSource (selectedSource) {
  return {
    type: SET_SELECTED_SOURCE,
    selectedSource
  }
}
