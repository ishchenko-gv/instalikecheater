import React from 'react';
import { Container } from 'semantic-ui-react';

import logo from '../../../img/logo.svg';
import styles from './styles.module.scss';

const Topline = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <img className={styles.logo} src={logo} alt='instalikecheater' />
          <h1 className={styles.title}>
            Instalikecheater
          </h1>
        </div>
      </Container>
    </header>
  );
};

export default Topline;
