import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

import Panel from '../../../../ui-kit/panel';
import MissInteractedUsersCheckboxContainer from '../containers/MissInteractedUsersCheckboxContainer';

const panelTitle = 'Количество подписок';

const SubscriptionsCountSetter = props => {
  const {  subscriptionsCount, onSubscriptionsCountChange } = props;

  return (
    <Panel title={panelTitle}>
      <Input
        onChange={(e, data) => onSubscriptionsCountChange(data.value)}
        value={subscriptionsCount}
      />
      <MissInteractedUsersCheckboxContainer />
    </Panel>
  );
};

SubscriptionsCountSetter.propTypes = {
  subscriptionsCount: PropTypes.string,
  onSubscriptionsCountChange: PropTypes.func.isRequired
};

SubscriptionsCountSetter.defaultProps = {
  subscriptionsCount: ''
};

export default SubscriptionsCountSetter;
