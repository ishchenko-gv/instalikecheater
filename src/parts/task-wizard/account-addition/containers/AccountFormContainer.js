import { connect } from 'react-redux';

import { addInstagramAccount } from '../actions';
import AccountForm from '../components/AccountForm';

const mapStateToProps = state => ({
  accounts: state.taskWizard.accounts
});

const mapDispatchToProps = dispatch => ({
  onAccountAddition: account => dispatch(addInstagramAccount(account))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm);
