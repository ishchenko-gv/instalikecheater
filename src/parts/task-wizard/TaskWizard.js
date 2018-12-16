import React, { Fragment } from 'react';

import AccountAdditionContainer from './account-addition/AccountAddition';
import ActionSelectorContainer from './action-selector/containers/ActionSelectorContainer';

const TaskWizard = () => {
  return (
    <Fragment>
      <AccountAdditionContainer />
      <ActionSelectorContainer />
    </Fragment>
  );
};

export default TaskWizard;
