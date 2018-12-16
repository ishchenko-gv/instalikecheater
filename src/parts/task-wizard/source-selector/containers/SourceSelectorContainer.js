import { connect } from 'react-redux';

import { setSelectedSource } from '../actions';
import SourceSelector from '../components/SourceSelector';

const mapStateToProps = state => ({
  selectedSource: state.taskWizard.sourceSelector.selectedSource
});

const mapDispatchToProps = dispatch => ({
  onSetSelectedSource: selectedSource => dispatch(setSelectedSource(selectedSource))
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceSelector);
