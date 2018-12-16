import React, { Component, Fragment } from 'react';
import { Button } from 'semantic-ui-react';

class AccountsList extends Component {
  handleButtonClick = id => {
    const { onSetActiveAccount } = this.props;

    onSetActiveAccount(id);
  };

  render() {
    const { accountList, activeAccount } = this.props;

    return (
      <Fragment>
        {accountList.map(account => {
          const isActiveAccount = account === activeAccount;

          return (
            <Button
              key={account}
              active={isActiveAccount}
              content={account}
              color='purple'
              onClick={() => this.handleButtonClick(account)}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default AccountsList;
