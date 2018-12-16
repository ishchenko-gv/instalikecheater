import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const OptionSelector = props => {
  const { options, selectedOption, onChangeHandler } = props;

  return (
    <div className='ilc-optionSelector__content'>
      {options.map(option => (
        <span
          key={option.value}
          className='ilc-optionSelector__button-wrapper'
        >
          <Button
            inverted={option.value !== selectedOption}
            color='blue'
            value={option.value}
            onClick={() => onChangeHandler(option.value)}
          >
            {!!option.icon &&
              <Icon name={option.icon} />
            }
            {option.label}
          </Button>
        </span>
      ))}
    </div>
  );
};

OptionSelector.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired
};

OptionSelector.defaultProps = {
  selectedOption: null
};

export default OptionSelector;
