import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';

import Topline from '../../parts/topline/components/Topline';
import TaskWizard from '../../parts/task-wizard/TaskWizard';
import AuthForm from '../../parts/auth/components/AuthForm';
import RegistrationForm from '../../parts/registration/components/RegistrationForm';
import Footer from '../../parts/footer/components/Footer';

const Layout = () => {
  return (
    <Fragment>
      <Topline />
      <Container>
        <main>
          <Switch>
            <Route exact path='/' component={TaskWizard} />
            <Route path='/auth' component={AuthForm} />
            <Route path='/registration' component={RegistrationForm} />
          </Switch>
        </main>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
