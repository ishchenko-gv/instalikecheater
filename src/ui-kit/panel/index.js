import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Checkbox } from 'semantic-ui-react';

import styles from './panel.module.scss';

const Panel = props => {
  const {
    title,
    children,
    checkValidation,
    isValid,
    toggle,
    onToggleChange,
    isEnabled
  } = props;

  return (
    <section className={styles.wrapper}>
      {!!title &&
        <header className={styles.header}>
          <h2 className={styles.headerTitle}>
            {title}
          </h2>
          {toggle &&
            <span className={styles.toggleWrapper}>
              <Checkbox toggle onChange={onToggleChange} checked={isEnabled} />
            </span>
          }
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
      {toggle && isEnabled &&
        <div className={styles.content}>
          {children}
        </div>
      }
      {!toggle &&
        <div className={styles.content}>
          {children}
        </div>
      }
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
