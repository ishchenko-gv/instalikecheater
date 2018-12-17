import React, {Fragment} from 'react';
import { Container } from 'semantic-ui-react';

import Topline from '../../parts/topline/components/Topline';
import TaskWizard from '../../parts/task-wizard/TaskWizard';
import Footer from '../../parts/footer/components/Footer';

const Layout = () => {
  return (
    <Fragment>
      <Topline />
      <Container>
        <main>
          <TaskWizard />
        </main>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
