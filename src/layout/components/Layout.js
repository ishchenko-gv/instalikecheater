import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Topline from '../../parts/topline/components/Topline';
import TaskWizard from '../../parts/task-wizard/TaskWizard';

const Layout = () => {
  return (
    <Container>
      <header className='ilc-header'>
        <Topline />
      </header>
      <main>
        <TaskWizard />
      </main>
    </Container>
  );
};

export default Layout;
