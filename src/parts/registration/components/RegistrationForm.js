import React, { Component } from 'react';

import UserForm from '../../../ui-kit/user-form';

class RegistrationForm extends Component {
  handleUserFormSubmit = (login, password) => {
    console.log(login, password)
  };

  render() {
    return <UserForm onSubmit={this.handleUserFormSubmit} submitLabel='Зарегистрироваться' />;
  }
}

export default RegistrationForm;
