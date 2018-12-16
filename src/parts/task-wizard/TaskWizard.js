import React, { Fragment } from 'react';

import AccountAdditionContainer from './account-addition/components/AccountAddition';
import ActionSelectorContainer from './action-selector/containers/ActionSelectorContainer';
import SourceSelectorContainer from './source-selector/containers/SourceSelectorContainer';

const TaskWizard = () => {
  return (
    <Fragment>
      <AccountAdditionContainer />
      <ActionSelectorContainer />
      <SourceSelectorContainer />
    </Fragment>
  );
};

export default TaskWizard;
