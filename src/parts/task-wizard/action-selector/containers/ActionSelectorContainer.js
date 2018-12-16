import { connect } from 'react-redux';

import validateActionSelector from '../../../../modules/validators/validate-action-selector';
import { setSelectedAction } from '../actions';
import ActionSelector from '../components/ActionSelector';

const mapStateToProps = state => ({
  selectedAction: state.taskWizard.actionSelector.selectedAction,
  isActionSelectorValid: validateActionSelector(state)
});

const mapDispatchToProps = dispatch => ({
  onSetSelectedAction: selectedAction => dispatch(setSelectedAction(selectedAction))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionSelector);
