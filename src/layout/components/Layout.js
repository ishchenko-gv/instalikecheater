import React, {Fragment} from 'react';
import { Container } from 'semantic-ui-react';

import Topline from '../../parts/topline/components/Topline';
import TaskWizard from '../../parts/task-wizard/TaskWizard';
import Footer from '../../parts/footer/components/Footer';
import cssProjectPrefix from '../../constants/css-project-prefix';

const Layout = () => {
  return (
    <Fragment>
      <header className={`${cssProjectPrefix}-header`}>
        <Topline />
      </header>
      <Container>
        <main>
          <TaskWizard />
        </main>
        <footer className={`${cssProjectPrefix}-footer`}>
          <Footer />
        </footer>
      </Container>
    </Fragment>
  );
};

export default Layout;
