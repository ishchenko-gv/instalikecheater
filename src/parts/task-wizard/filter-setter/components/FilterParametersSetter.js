import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import UserSubscribersCountSetter from './UserSubscribersCountSetter';
import UserSubscriptionsCountSetter from './UserSubscriptionsCountSetter';
import UserPublicationsCountSetter from './UserPublicationsCountSetter';
import LastUserPublicationSetter from './LastUserPublicationSetter';

const FilterParametersSetter = props => {
  return (
    <Grid doubling columns={2}>
      <Grid.Row>
        <Grid.Column>
          <UserSubscribersCountSetter />
          <UserSubscriptionsCountSetter />
        </Grid.Column>
        <Grid.Column>
          <UserPublicationsCountSetter />
          <LastUserPublicationSetter />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

FilterParametersSetter.propTypes = {
  
};

export default FilterParametersSetter;
