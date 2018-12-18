import React from 'react';
import PropTypes from 'prop-types';
import { Header, Input } from 'semantic-ui-react';

const LastUserPublicationSetter = props => {
  return (
    <div>
      <Header as='h4'>
        Последняя публикация пользователя
      </Header>
      <Input /> дней назад
    </div>
  );
};

LastUserPublicationSetter.propTypes = {

};

export default LastUserPublicationSetter;
