import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../../../../ui-kit/panel';
import TextAreaWithLabels from '../../../../ui-kit/textarea-with-labels';
import LastDaysInteractionContainer from '../containers/LastDaysInteractionContainer';

const panelTitle = 'Введите хештэг(и) (без #)';

function HashtagSetter (props) {
  const { hashtags, onHashtagSetterChange } = props;

  return (
    <Panel title={panelTitle}>
      <TextAreaWithLabels list={hashtags} onTextAreaChange={onHashtagSetterChange} />
      <LastDaysInteractionContainer />
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
