import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, TextArea } from 'semantic-ui-react';
import cssProjectPrefix from '../constants/css-project-prefix';

class TextAreaWithLabels extends Component {
  handleTextAreaChange = e => {
    const { onTextAreaChange } = this.props;
    const list = e.target.value;
    const splittedList = list.replace(/\n/g, ' ').split(' ');

    onTextAreaChange(splittedList);
  };

  getTextAreaValue = () => {
    const { list } = this.props;

    return list.join('\n');
  };

  render () {
    const { list } = this.props;

    return (
      <Fragment>
        <Form>
          <TextArea rows={5} onChange={this.handleTextAreaChange} value={this.getTextAreaValue()} />
        </Form>
        <div className={`${cssProjectPrefix}-textAreaWithLabels__labelsRow`}>
          {list
            .filter(listItem => Boolean(listItem))
            .map(listItem => (
              <Label key={listItem} color='blue'>{listItem}</Label>
            ))}
        </div>
      </Fragment>
    );
  }
}

TextAreaWithLabels.propTypes = {
  list: PropTypes.array,
  onTextAreaChange: PropTypes.func.isRequired
};

TextAreaWithLabels.defaultProps = {
  list: []
};

export default TextAreaWithLabels;
