import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'semantic-ui-react';

import Panel from '../../../../ui-kit/panel';
import MissInteractedUsersCheckboxContainer from '../containers/MissInteractedUsersCheckboxContainer';

const panelTitle = 'Количество лайков';

const LikesCountSetter = props => {
  const { likesCount, onLikesCountChange } = props;

  return (
    <Panel title={panelTitle}>
      <Input
        onChange={(e, data) => onLikesCountChange(data.value)}
        value={likesCount}
      />
      <MissInteractedUsersCheckboxContainer />
    </Panel>
  );
};

LikesCountSetter.propTypes = {
  likesCount: PropTypes.string,
  onLikesCountChange: PropTypes.func.isRequired
};

LikesCountSetter.defaultProps = {
  likesCount: ''
};

export default LikesCountSetter;
