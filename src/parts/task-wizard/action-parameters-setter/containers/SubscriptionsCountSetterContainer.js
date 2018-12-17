import { connect } from 'react-redux';

import { setSubscriptionsCount } from '../actions';
import SubscriptionCountSetter from '../components/SubscriptionsCountSetter';

const mapStateToProps = state => ({
  subscriptionsCount: state.taskWizard.actionParametersSetter.subscriptionsCount
});

const mapDispatchToProps = dispatch => ({
  onSubscriptionsCountChange: subscriptionsCount => dispatch(setSubscriptionsCount(subscriptionsCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionCountSetter);
