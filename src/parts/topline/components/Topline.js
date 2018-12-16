import React from 'react';
import { Container } from 'semantic-ui-react';

import logo from '../../../img/logo.svg';
import cssProjectPrefix from '../../../constants/css-project-prefix';

const Topline = () => {
  return (
    <Container>
      <div className={`${cssProjectPrefix}-header__content`}>
        <img className={`${cssProjectPrefix}-header__logo`} src={logo} alt='instalikecheater' />
        <h1 className={`${cssProjectPrefix}-header__title`}>
          Instalikecheater
        </h1>
      </div>
    </Container>
  );
};

export default Topline;
