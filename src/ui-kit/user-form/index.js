import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

import styles from './userForm.module.scss';
import Panel from '../panel'

class UserForm extends Component {
  state = {
    login: '',
    password: {
      value: '',
      isPasswordMode: true
    }
  };

  handleLoginInput = (e, data) =>
    this.setState(() => ({ login: data.value }));

  handlePasswordInput = (e, data) =>
    this.setState(() => ({
      password: {
        ...this.state.password,
        value: data.value
      }
    }));

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { login, password: { value: password } } = this.state;

    onSubmit(login, password);
  };

  handlePasswordLabelClick = () => {
    this.setState(() => ({
      password: {
        ...this.state.password,
        isPasswordMode: !this.state.password.isPasswordMode
      }
    }));
  };

  validateForm = () => {
    const { password } = this.state;

    return Boolean(this.validateLogin() && password.value.trim());
  };

  validateLogin = () => {
    const { login } = this.state;

    return Boolean(login && !login.trim().match(' '));
  };

  render() {
    const { submitLabel } = this.props;
    const { login, password } = this.state;

    const isFormValid = this.validateForm();

    return (
      <div className={styles.wrapper}>
        <Panel>
          <Form>
            <Form.Field
              label='Имя пользователя'
              control={Input}
              value={login}
              onChange={(e, data) => this.handleLoginInput(e, data)}
            />
            <Form.Field
              label='Пароль'
              control={Input}
              value={password.value}
              action={{
                icon: password.isPasswordMode ? 'eye slash outline' : 'eye',
                active: !password.isPasswordMode,
                onClick: this.handlePasswordLabelClick
              }}
              type={password.isPasswordMode ? 'password' : 'text'}
              onChange={(e, data) => this.handlePasswordInput(e, data)}
            />
            <Form.Field
              control={Button}
              primary
              content={submitLabel}
              disabled={!isFormValid}
              onClick={this.handleSubmit}
            />
          </Form>
        </Panel>
      </div>
    );
  }
}

export default UserForm;
