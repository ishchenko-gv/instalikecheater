import React from 'react';
import { Container } from 'semantic-ui-react';

import Topline from '../../parts/topline/components/Topline';
import TaskWizard from '../../parts/task-wizard/TaskWizard';
import Footer from '../../parts/footer/components/Footer';
import cssProjectPrefix from '../../constants/css-project-prefix';

const Layout = () => {
  return (
    <Container>
      <header className={`${cssProjectPrefix}-header`}>
        <Topline />
      </header>
      <main>
        <TaskWizard />
      </main>
      <footer className={`${cssProjectPrefix}-footer`}>
        <Footer />
      </footer>
    </Container>
  );
};

export default Layout;
