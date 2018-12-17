import React from 'react';
import PropTypes from 'prop-types';

import LikesCountSetterContainer from '../containers/LikesCountSetterContainer';
import SubscriptionsCountSetterContainer from '../containers/SubscriptionsCountSetterContainer';

const ActionParametersSetter = props => {
  const { isActionParametersSetterVisible, selectedAction } = props;

  if (!isActionParametersSetterVisible) return null;

  switch (selectedAction) {
    case 'like':
      return <LikesCountSetterContainer />;
    case 'subscription':
      return <SubscriptionsCountSetterContainer />;
    default:
      return null;
  }
};

ActionParametersSetter.propTypes = {
  isActionParametersSetterVisible: PropTypes.bool.isRequired,
  selectedAction: PropTypes.string
};

ActionParametersSetter.defaultProps = {
  selectedAction: null
};

export default ActionParametersSetter;
