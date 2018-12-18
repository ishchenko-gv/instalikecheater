import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FromToInput from '../../../../ui-kit/from-to-input';

const inputTitle = 'Количество публикаций у пользователя';

const UserPublicationsCountSetter = props => {
  return <FromToInput title={inputTitle} />;
};

UserPublicationsCountSetter.propTypes = {

};

export default UserPublicationsCountSetter;
