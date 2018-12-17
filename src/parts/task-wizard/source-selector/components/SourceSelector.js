import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../../../../ui-kit/panel';
import OptionSelector from '../../../../ui-kit/option-selector';
import sourceOptions from '../data/sourceOptions';

const panelTitle = 'Выберите источник';

const SourceSelector = props => {
  const { isSourceSelectorValid } = props;

  return (
    <Panel title={panelTitle} checkValidation isValid={isSourceSelectorValid}>
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
  onSetSelectedSource: PropTypes.func.isRequired,
  isSourceSelectorValid: PropTypes.bool.isRequired
};

SourceSelector.defaultProps = {
  selectedSource: null
};

export default SourceSelector;
