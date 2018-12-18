import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

import Panel from '../../../../ui-kit/panel';
import FilterParametersSetter from './FilterParametersSetter';

const panelTitle = 'Фильтр';

const FilterSetter = props => {
  const { isFilterEnabled, onFilterToggle } = props;

  return (
    <Panel title={panelTitle} toggle onToggleChange={onFilterToggle} isEnabled={isFilterEnabled}>
      <FilterParametersSetter />
    </Panel>
  );
};

FilterSetter.propTypes = {
  isFilterEnabled: PropTypes.bool.isRequired,
  onFilterToggle: PropTypes.func.isRequired
};

export default FilterSetter;
