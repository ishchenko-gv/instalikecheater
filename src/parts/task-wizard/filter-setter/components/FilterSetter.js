import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

import Panel from '../../../../ui-kit/panel';
import FilterParametersSetter from './FilterParametersSetter';

const panelTitle = 'Использовать фильтр';

const FilterSetter = props => {
  const { isFilterEnabled, onFilterToggle } = props;

  return (
    <Panel title={panelTitle}>
      <Checkbox
        toggle
        checked={isFilterEnabled}
        onChange={onFilterToggle}
      />
      {isFilterEnabled &&
        <FilterParametersSetter />
      }
    </Panel>
  );
};

FilterSetter.propTypes = {
  isFilterEnabled: PropTypes.bool.isRequired,
  onFilterToggle: PropTypes.func.isRequired
};

export default FilterSetter;