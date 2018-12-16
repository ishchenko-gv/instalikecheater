import { connect } from 'react-redux';

import { setSelectedAction } from '../actions';
import ActionSelector from '../components/ActionSelector';

const mapStateToProps = state => ({
  selectedAction: state.taskWizard.actionSelector.selectedAction
});

const mapDispatchToProps = dispatch => ({
  onSetSelectedAction: selectedAction => dispatch(setSelectedAction(selectedAction))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionSelector);
