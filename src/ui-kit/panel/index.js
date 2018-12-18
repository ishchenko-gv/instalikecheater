import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import styles from './panel.module.scss';

const Panel = props => {
  const { title, children, checkValidation, isValid } = props;

  return (
    <section className={styles.wrapper}>
      {!!title &&
        <header className={styles.header}>
            <h2 className={styles.headerTitle}>
              {title}
            </h2>
          {checkValidation &&
            <span className={styles.validationCheck}>
              <Icon
                name='check circle outline'
                size='large'
                color={isValid ? 'green' : 'grey'}
              />
            </span>
          }
        </header>
      }
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
