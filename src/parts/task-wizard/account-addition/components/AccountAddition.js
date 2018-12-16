import React from 'react';

import Panel from '../../../../ui-kit/Panel';
import AccountFormContainer from '../containers/AccountFormContainer';
import AccountsListContainer from '../containers/AccountsListContainer';

const panelTitle = 'Добавить Instagram аккаунт';

const AccountAddition = () => {
  return (
    <Panel title={panelTitle}>
      <AccountFormContainer />
      <AccountsListContainer />
    </Panel>
  );
};

export default AccountAddition;
