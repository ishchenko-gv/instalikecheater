import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const Panel = props => {
  return (
    <section className='ilc-panel'>
      {!!props.title &&
        <Header as='h2'>{props.title}</Header>
      }
      {props.children}
    </section>
  );
};

Panel.propTypes = {
  title: PropTypes.string
};

Panel.defaultProps = {
  title: null
};

export default Panel;
