import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

import styles from '../styles/missInteractedUsersCheckbox.module.scss';

const checkboxLabel = 'Пропускать пользователей, которым уже ставили лайк';

const MissInteractedUsersCheckbox = props => {
  const { missInteractedUsers, onMissInteractedUsersToggle } = props;

  return (
    <div className={styles.wrapper}>
      <Checkbox
        label={checkboxLabel}
        onChange={onMissInteractedUsersToggle}
        checked={missInteractedUsers} />
    </div>
  );
};

MissInteractedUsersCheckbox.propTypes = {
  missInteractedUsers: PropTypes.bool.isRequired,
  onMissInteractedUsersToggle: PropTypes.func.isRequired
};

export default MissInteractedUsersCheckbox;
