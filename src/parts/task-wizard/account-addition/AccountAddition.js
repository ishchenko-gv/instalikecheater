import React from 'react';

import Panel from '../../../ui-kit/Panel/';
import AccountFormContainer from './containers/AccountFormContainer';
import AccountListContainer from './containers/AccountListContainer';

const panelTitle = 'Добавить Instagram аккаунт';

const AccountAddition = () => {
  return (
    <Panel title={panelTitle}>
      <AccountFormContainer />
      <AccountListContainer />
    </Panel>
  );
};

export default AccountAddition;
