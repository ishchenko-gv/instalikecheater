import { createStore, combineReducers } from "redux";

import taskWizard from "./parts/task-wizard/TaskWizardCombinedReducers";

const app = combineReducers({
  taskWizard
});

export default createStore(
  app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
