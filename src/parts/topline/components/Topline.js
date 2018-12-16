import React from 'react';
import { Header } from 'semantic-ui-react';

import logo from '../../../img/logo.svg';

const Topline = () => {
  return (
    <header className='ilc-header'>
      <Header as='h1'>
        <img src={logo} alt='' /> INSTALIKECHEATER
      </Header>
    </header>
  );
};

export default Topline;
