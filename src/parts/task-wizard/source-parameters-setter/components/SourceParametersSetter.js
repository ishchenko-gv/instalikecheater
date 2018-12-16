import React from 'react';
import PropTypes from 'prop-types';

import GeolocationSetter from './GeolocationSetter';
import HashtagSetterContainer from '../containers/HashtagSetterContainer';
import UserSetterContainer from '../containers/UserSetterContainer';
import UsersListSetter from './UsersListSetter'

const SourceParametersSetter = props => {
  const { selectedSource } = props;

  switch (selectedSource) {
    case 'geolocation':
      return <GeolocationSetter />;
    case 'hashtag':
      return <HashtagSetterContainer />;
    case 'user':
      return <UserSetterContainer />;
    case 'usersList':
      return <UsersListSetter />;
    default:
      return null;
  }
};

SourceParametersSetter.propTypes = {
  selectedSource: PropTypes.string
};

SourceParametersSetter.defaultProps = {
  selectedSource: null
};

export default SourceParametersSetter;
