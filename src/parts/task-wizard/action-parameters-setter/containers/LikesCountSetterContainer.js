import { connect } from 'react-redux';

import { setLikesCount } from '../actions';
import LikesCountSetter from '../components/LikesCountSetter';

const mapStateToProps = state => ({
  likesCount: state.taskWizard.actionParametersSetter.likesCount
});

const mapDispatchToProps = dispatch => ({
  onLikesCountChange: likesCount => dispatch(setLikesCount(likesCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikesCountSetter);
