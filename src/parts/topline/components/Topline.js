import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import logo from '../../../img/logo.svg';
import styles from './topline.module.scss';

const Topline = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link to='/'>
            <div className={styles.brandRow}>
              <img className={styles.logo} src={logo} alt='instalikecheater' />
              <h1 className={styles.title}>
                Instalikecheater
              </h1>
            </div>
          </Link>
          <div>
            <Menu>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Link to="/registration">
                    Зарегистрироваться
                  </Link>
                </Menu.Item>
              </Menu.Menu>
                <Menu.Item>
                  <Link to="/auth">
                    Войти
                  </Link>
                </Menu.Item>
            </Menu>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Topline;
