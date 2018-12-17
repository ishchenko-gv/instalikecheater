import { connect } from 'react-redux';

import MissInteractedUsersCheckbox from '../components/MissInteractedUsersCheckbox';
import {toggleMissInteractedUsers} from '../actions';

const mapStateToProps = state => ({
  missInteractedUsers: state.taskWizard.actionParametersSetter.missInteractedUsers
});

const mapDispatchToPtops = dispatch => ({
  onMissInteractedUsersToggle: () => dispatch(toggleMissInteractedUsers())
});

export default connect(mapStateToProps, mapDispatchToPtops)(MissInteractedUsersCheckbox);
