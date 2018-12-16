import { connect } from 'react-redux';

import { setActiveAccount } from '../actions';
import AccountsList from '../components/AccountsList';

const mapStateToProps = state => ({
  accountList: state.taskWizard.accountAddition.accounts,
  activeAccount: state.taskWizard.accountAddition.activeAccount
});

const mapDispatchToProps = dispatch => ({
  onSetActiveAccount: account => dispatch(setActiveAccount(account))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsList);
