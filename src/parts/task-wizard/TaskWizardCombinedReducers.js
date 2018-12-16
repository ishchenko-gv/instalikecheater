import { combineReducers } from 'redux';

import accountAddition from './account-addition/reducers';
import actionSelector from './action-selector/reducers';

export default combineReducers({
  accountAddition,
  actionSelector
});
