import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import classNames from 'classnames';

import logo from '../../../img/logo.svg';
import styles from './topline.module.scss';

class Topline extends Component {
  state = {
    toplineScrolled: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll)
  }

  handleWindowScroll = () => {
    if (window.pageYOffset === 0) {
      this.setState(() => ({
        toplineScrolled: false
      }))
    } else {
      this.setState(() => ({
        toplineScrolled: true
      }))
    }
  };

  getHeaderClasses = () => {
    return classNames(styles.header, {[styles.headerScrolled]: this.state.toplineScrolled });
  };

  render () {
    this.getHeaderClasses();
    return (
      <header className={this.getHeaderClasses()}>
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
  }
}

export default Topline;
