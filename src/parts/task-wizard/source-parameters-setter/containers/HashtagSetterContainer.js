import { connect } from 'react-redux';

import { setHashtags } from '../actions';
import HashtagSetter from '../components/HashtagSetter';

const mapStateToProps = state => ({
  hashtags: state.taskWizard.sourceParametersSetter.hashtags
});

const mapDispatchToProps = dispatch => ({
  onHashtagSetterChange: hashtags => dispatch(setHashtags(hashtags))
});

export default connect(mapStateToProps, mapDispatchToProps)(HashtagSetter);
