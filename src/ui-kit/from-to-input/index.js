import React from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Input } from 'semantic-ui-react';

const FromToInput = props => {
  const { title } = props;

  return (
    <div>
      <Header as='h4'>{title}</Header>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <Input
              label={{ basic: true, content: 'от' }}
              labelPosition='left'
            />
          </Form.Field>
          <Form.Field>
            <Input
              label={{ basic: true, content: 'до' }}
              labelPosition='left'
            />
          </Form.Field>
        </Form.Group>
      </Form>
    </div>
  );
};

FromToInput.propTypes = {

};

export default FromToInput;
