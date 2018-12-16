import { connect } from 'react-redux';

import { setUsers } from '../actions';
import UserSetter from '../components/UserSetter';

const mapStateToProps = state => ({
  users: state.taskWizard.sourceParametersSetter.users
});

const mapDispatchToProps = dispatch => ({
  onUserSetterChange: users => dispatch(setUsers(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSetter);
