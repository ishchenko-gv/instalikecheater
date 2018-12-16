import { connect } from 'react-redux';

import SourceParametersSetter from '../components/SourceParametersSetter';

const mapStateToProps = state => ({
  selectedSource: state.taskWizard.sourceSelector.selectedSource
});

export default connect(mapStateToProps)(SourceParametersSetter);
