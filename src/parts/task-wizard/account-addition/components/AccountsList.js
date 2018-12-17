import React from 'react';
import PropTypes from 'prop-types';

import OptionSelector from '../../../../ui-kit/option-selector';

function AccountsList (props) {
  const { accountsList, activeAccount, onSetActiveAccount } = props;
  const mappedAccountList = accountsList.map(account => ({ value: account, label: account }));

  return (
    <OptionSelector
      options={mappedAccountList}
      selectedOption={activeAccount}
      onChangeHandler={onSetActiveAccount}
    />
  );
}

AccountsList.propTypes = {
  accountsList: PropTypes.array,
  activeAccount: PropTypes.string,
  onSetActiveAccount: PropTypes.func.isRequired
};

AccountsList.defaultProps = {
  accountsList: [],
  activeAccount: null
};

export default AccountsList;
