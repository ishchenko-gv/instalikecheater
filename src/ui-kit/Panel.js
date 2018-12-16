import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import cssProjectPrefix from '../constants/css-project-prefix';

const Panel = props => {
  const { title, children, checkValidation, isValid } = props;

  return (
    <section className={`${cssProjectPrefix}-panel`}>
      <header className={`${cssProjectPrefix}-panel__header`}>
        {!!title &&
          <h2 className={`${cssProjectPrefix}-panel__header-title`}>
            {title}
          </h2>
        }
        {checkValidation &&
          <span className={`${cssProjectPrefix}-panel__validation-check`}>
            <Icon
              name='check circle outline'
              size='large'
              color={isValid ? 'green' : 'grey'}
            />
          </span>
        }
      </header>
      {children}
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
