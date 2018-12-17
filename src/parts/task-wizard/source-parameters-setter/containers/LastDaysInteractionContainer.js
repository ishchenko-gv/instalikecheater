import { connect } from 'react-redux';

import { toggleLastDaysInteraction, setLastDaysInteraction } from '../actions';
import LastDaysInteraction from '../components/LastDaysInteraction';

const mapStateToProps = state => ({
  enabled: state.taskWizard.sourceParametersSetter.lastDaysInteraction.enabled,
  daysCount: state.taskWizard.sourceParametersSetter.lastDaysInteraction.daysCount
});

const mapDispatchToProps = dispatch => ({
  onLastDaysInteractionToggle: () => dispatch(toggleLastDaysInteraction()),
  onLastDaysInteractionSet: daysCount => dispatch(setLastDaysInteraction(daysCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(LastDaysInteraction);
