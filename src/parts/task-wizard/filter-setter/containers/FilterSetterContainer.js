import { connect } from 'react-redux';

import { toggleFilter } from '../actions';
import FilterSetter from '../components/FilterSetter';

const mapStateToProps = state => ({
  isFilterEnabled: state.taskWizard.filterSetter.isFilterEnabled
});

const mapDispatchToProps = dispatch => ({
  onFilterToggle: () => dispatch(toggleFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSetter);
