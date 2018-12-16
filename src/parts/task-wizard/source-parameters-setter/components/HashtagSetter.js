import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../../../../ui-kit/Panel';
import TextAreaWithLabels from '../../../../ui-kit/TextAreaWithLabels';

const panelTitle = 'Введите хештэг(и) (без #)';

function HashtagSetter (props) {
  const { hashtags, onHashtagSetterChange } = props;

  return (
    <Panel title={panelTitle}>
      <TextAreaWithLabels list={hashtags} onTextAreaChange={onHashtagSetterChange} />
    </Panel>
  );
}

HashtagSetter.propTypes = {
  hashtags: PropTypes.array,
  onHashtagSetterChange: PropTypes.func.isRequired
};

HashtagSetter.defaultProps = {
  hashtags: []
};

export default HashtagSetter;
