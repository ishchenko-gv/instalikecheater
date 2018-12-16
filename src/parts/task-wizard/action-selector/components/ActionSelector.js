import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../../../../ui-kit/Panel';
import OptionSelector from '../../../../ui-kit/OptionSelector';
import actionOptions from '../data/actionOptions';

const panelTitle = 'Выберите действие';

const ActionSelector = props => {
  return (
    <Panel title={panelTitle}>
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
  onSetSelectedAction: PropTypes.func.isRequired
};

ActionSelector.defaultProps = {
  selectedAction: null
};

export default ActionSelector;
