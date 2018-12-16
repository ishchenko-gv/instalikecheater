import React from 'react';

import Panel from '../../../../ui-kit/Panel';
import TextAreaWithLabels from '../../../../ui-kit/TextAreaWithLabels';

const panelTitle = 'Введите логин(ы) пользователя-источника (без @)';

const UserSetter = props => {
  const { users, onUserSetterChange } = props;

  return (
    <Panel title={panelTitle}>
      <TextAreaWithLabels list={users} onTextAreaChange={onUserSetterChange} />
    </Panel>
  );
};

export default UserSetter;
