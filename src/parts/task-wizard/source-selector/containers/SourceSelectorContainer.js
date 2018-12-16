import { connect } from 'react-redux';

import validateSourceSelector from '../../../../modules/validators/validate-source-selector';
import { setSelectedSource } from '../actions';
import SourceSelector from '../components/SourceSelector';

const mapStateToProps = state => ({
  selectedSource: state.taskWizard.sourceSelector.selectedSource,
  isSourceSelectorValid: validateSourceSelector(state)
});

const mapDispatchToProps = dispatch => ({
  onSetSelectedSource: selectedSource => dispatch(setSelectedSource(selectedSource))
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceSelector);
