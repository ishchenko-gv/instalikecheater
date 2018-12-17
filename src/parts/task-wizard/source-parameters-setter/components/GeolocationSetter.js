import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

import Panel from '../../../../ui-kit/panel';

const panelTitle = 'Введите в поиск геолокацию, которую хотите найти';

const GeolocationSetter = () => {
  return (
    <Panel title={panelTitle}>
      <Form>
        <TextArea rows={5} />
      </Form>
    </Panel>
  );
};

export default GeolocationSetter;
