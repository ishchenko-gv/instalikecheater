import React, { Component, Fragment } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

class AccountForm extends Component {
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

  handleAccountAddition = () => {
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
      <Fragment>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              value={accountValue}
              placeholder='Логин Instagram'
              onChange={(e, data) => this.handleAccountInput(e, data)}
            />
            <Form.Field
              control={Input}
              value={password.value}
              action={{
                icon: password.isPasswordMode ? 'eye slash outline' : 'eye',
                active: !password.isPasswordMode,
                onClick: this.handlePasswordLabelClick
              }}
              type={password.isPasswordMode ? 'password' : 'text'}
              placeholder='Пароль'
              onChange={(e, data) => this.handlePasswordInput(e, data)}
            />
            <Form.Field
              control={Button}
              primary
              content='Добавить аккаунт'
              disabled={!isFormValid}
              onClick={this.handleAccountAddition}
            />
          </Form.Group>
        </Form>
      </Fragment>
    );
  }
}

export default AccountForm;
