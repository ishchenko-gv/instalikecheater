import React, { Fragment } from 'react';

import AccountAddition from './account-addition/components/AccountAddition';
import ActionSelectorContainer from './action-selector/containers/ActionSelectorContainer';
import SourceSelectorContainer from './source-selector/containers/SourceSelectorContainer';
import SourceParametersSetterContainer from './source-parameters-setter/containers/SourceParametersSetterContainer';
import ActionParametersSetterContainer from './action-parameters-setter/containers/ActionParametersSetterContainer';
import FilterSetterContainer from './filter-setter/containers/FilterSetterContainer';

const TaskWizard = () => {
  return (
    <Fragment>
      <AccountAddition />
      <ActionSelectorContainer />
      <SourceSelectorContainer />
      <SourceParametersSetterContainer />
      <ActionParametersSetterContainer />
      <FilterSetterContainer />
    </Fragment>
  );
};

export default TaskWizard;
