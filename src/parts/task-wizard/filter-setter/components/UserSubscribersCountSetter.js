import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FromToInput from '../../../../ui-kit/from-to-input';

const inputTitle = 'Количество подписчиков у пользователя';

const UserSubscribersCountSetter = props => {
  return <FromToInput title={inputTitle} />;
};

UserSubscribersCountSetter.propTypes = {

};

export default UserSubscribersCountSetter;
