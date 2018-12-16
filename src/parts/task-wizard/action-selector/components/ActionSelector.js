import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import Panel from '../../../../ui-kit/Panel';
import actionButtons from '../data/actionButtons';

const panelTitle = 'Выберите действие';

const ActionSelector = props => {
  return (
    <Panel title={panelTitle}>
      {actionButtons.map(actionButton => (
        <Button
          key={actionButton.value}
          basic={actionButton.value !== props.selectedAction}
          color='blue'
          value={actionButton.value}
          onClick={() => props.onSetSelectedAction(actionButton.value)}
        >
          {actionButton.label}
        </Button>
      ))}
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
