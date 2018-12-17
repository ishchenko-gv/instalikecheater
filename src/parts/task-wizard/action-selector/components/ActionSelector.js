import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../../../../ui-kit/panel';
import OptionSelector from '../../../../ui-kit/option-selector';
import actionOptions from '../data/actionOptions';

const panelTitle = 'Выберите действие';

const ActionSelector = props => {
  const { isActionSelectorValid } = props;

  return (
    <Panel title={panelTitle} checkValidation isValid={isActionSelectorValid}>
      <OptionSelector
        options={actionOptions}
        selectedOption={props.selectedAction}
        onChangeHandler={props.onSetSelectedAction}
      />
    </Panel>
  );
};

ActionSelector.propTypes = {
  selectedAction: PropTypes.string,
  onSetSelectedAction: PropTypes.func.isRequired,
  isActionSelectorValid: PropTypes.bool.isRequired
};

ActionSelector.defaultProps = {
  selectedAction: null
};

export default ActionSelector;
