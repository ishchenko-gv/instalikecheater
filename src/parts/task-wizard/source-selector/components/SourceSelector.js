import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../../../../ui-kit/Panel';
import OptionSelector from '../../../../ui-kit/OptionSelector';
import sourceOptions from '../data/sourceOptions';

const panelTitle = 'Выберите источник';

const SourceSelector = props => {
  return (
    <Panel title={panelTitle}>
      <OptionSelector
        options={sourceOptions}
        selectedOption={props.selectedSource}
        onChangeHandler={props.onSetSelectedSource}
      />
    </Panel>
  );
};

SourceSelector.propTypes = {
  selectedSource: PropTypes.string,
  onSetSelectedSource: PropTypes.func.isRequired
};

export default SourceSelector;
