import React, { Fragment } from 'react';

import AccountAdditionContainer from './account-addition/components/AccountAddition';
import ActionSelectorContainer from './action-selector/containers/ActionSelectorContainer';
import SourceSelectorContainer from './source-selector/containers/SourceSelectorContainer';
import SourceParametersSetterContainer from './source-parameters-setter/containers/SourceParametersSetterContainer';
import ActionParametersSetterContainer from './action-parameters-setter/containers/ActionParametersSetterContainer';

const TaskWizard = () => {
  return (
    <Fragment>
      <AccountAdditionContainer />
      <ActionSelectorContainer />
      <SourceSelectorContainer />
      <SourceParametersSetterContainer />
      <ActionParametersSetterContainer />
    </Fragment>
  );
};

export default TaskWizard;
