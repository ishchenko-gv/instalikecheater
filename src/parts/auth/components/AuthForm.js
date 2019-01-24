import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

import styles from './authForm.module.scss';
import Panel from '../../../ui-kit/panel'

class AuthForm extends Component {
  state = {
    accountValue: '',
    password: {
      value: '',
      isPasswordMode: true
    }
  };

  handleAccountInput = (e, data) =>
    this.setState(() => ({ accountValue: data.value }));

  handlePasswordInput = (e, data) =>
    this.setState(() => ({
      password: {
        ...this.state.password,
        value: data.value
      }
    }));

  handleLogin = () => {
    const { onAccountAddition } = this.props;
    const { accountValue } = this.state;

    onAccountAddition(accountValue.trim());

    this.setState(() => ({
      accountValue: '',
      password: {
        ...this.state.password,
        value: ''
      }
    }));
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

    return Boolean(this.validateAccount() && password.value.trim());
  };

  validateAccount = () => {
    const { accountValue } = this.state;

    return Boolean(accountValue && !accountValue.trim().match(' '));
  };

  render() {
    const { accountValue, password } = this.state;

    const isFormValid = this.validateForm();

    return (
      <div className={styles.wrapper}>
        <Panel>
          <Form>
            <Form.Field
              label='Имя пользователя'
              control={Input}
              value={accountValue}
              onChange={(e, data) => this.handleAccountInput(e, data)}
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
              content='Войти'
              disabled={!isFormValid}
              onClick={this.handleLogin}
            />
          </Form>
        </Panel>
      </div>
    );
  }
}

export default AuthForm;
