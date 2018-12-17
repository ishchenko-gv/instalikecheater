import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

import styles from './optionSelector.module.scss';

const OptionSelector = props => {
  const { options, selectedOption, onChangeHandler, color } = props;

  return (
    <div className={styles.content}>
      {options.map(option => (
        <span
          key={option.value}
          className={styles.buttonWrapper}
        >
          <Button
            basic={option.value !== selectedOption}
            color={!!color ? color : 'blue'}
            value={option.value}
            onClick={() => onChangeHandler(option.value)}
            disabled={option.disabled}
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
  onChangeHandler: PropTypes.func.isRequired,
  color: PropTypes.string
};

OptionSelector.defaultProps = {
  selectedOption: null,
  color: null
};

export default OptionSelector;
