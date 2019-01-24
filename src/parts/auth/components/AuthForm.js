import React, { Component } from 'react';

import UserForm from '../../../ui-kit/user-form';

class AuthForm extends Component {
  handleUserFormSubmit = (login, password) => {
    console.log(login, password)
  };

  render() {
    return <UserForm onSubmit={this.handleUserFormSubmit} submitLabel='Войти' />;
  }
}

export default AuthForm;
