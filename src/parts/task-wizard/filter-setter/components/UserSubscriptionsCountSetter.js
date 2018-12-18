import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FromToInput from '../../../../ui-kit/from-to-input';

const inputTitle = 'Количество подписок у пользователя';

const UserSubscriptionsCountSetter = props => {
  return <FromToInput title={inputTitle} />;
};

UserSubscriptionsCountSetter.propTypes = {

};

export default UserSubscriptionsCountSetter;
