import React from 'react';
import { Header } from 'semantic-ui-react';

import logo from '../../../img/logo.svg';

const Topline = () => {
  return (
    <Header as='h1'>
      <img src={logo} alt='' /> INSTALIKECHEATER
    </Header>
  );
};

export default Topline;
