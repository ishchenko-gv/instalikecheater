import { connect } from 'react-redux';

import getPanelsVisibility from '../../../../modules/get-panels-visibility';
import ActionParametersSetter from '../components/ActionParametersSetter';

const mapStateToProps = state => {
  const panelsVisibility = getPanelsVisibility(state);

  return {
    isActionParametersSetterVisible: panelsVisibility.isActionParametersSetterVisible,
    selectedAction: state.taskWizard.actionSelector.selectedAction
  }
};

export default connect(mapStateToProps)(ActionParametersSetter);
