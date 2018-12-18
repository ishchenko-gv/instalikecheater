import { combineReducers } from 'redux';

import accountAddition from './account-addition/reducers';
import actionSelector from './action-selector/reducers';
import sourceSelector from './source-selector/reducers';
import sourceParametersSetter from './source-parameters-setter/reducers';
import actionParametersSetter from './action-parameters-setter/reducers';
import filterSetter from './filter-setter/reducers';

export default combineReducers({
  accountAddition,
  actionSelector,
  sourceSelector,
  sourceParametersSetter,
  actionParametersSetter,
  filterSetter
});
