import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Input } from 'semantic-ui-react'

import styles from '../styles/lastDaysInteraction.module.scss'

const LastDaysInteraction = props => {
  const { enabled, daysCount, onLastDaysInteractionToggle, onLastDaysInteractionSet } = props;

  return (
    <div className={styles.wrapper}>
      <Checkbox
        checked={enabled}
        onChange={onLastDaysInteractionToggle}
        label='взаимодействовать с публикациями последних'
      />
      <span className={styles.inputWrapper}>
        <Input
          fluid
          disabled={!enabled}
          value={daysCount}
          onChange={(e, data) => onLastDaysInteractionSet(data.value)}
        />
      </span>
      дней
    </div>
  );
};

LastDaysInteraction.propTypes = {
  enabled: PropTypes.bool.isRequired,
  daysCount: PropTypes.string,
  onLastDaysInteractionToggle: PropTypes.func.isRequired,
  onLastDaysInteractionSet: PropTypes.func.isRequired
};

LastDaysInteraction.defaultProps = {
  daysCount: ''
};

export default LastDaysInteraction;
