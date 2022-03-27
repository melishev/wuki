import React from 'react';
import * as Icons from 'react-feather';
import { Grid, Text } from '../../components';
import { colors } from '../../theme';

function iconGallery() {
  const cssCell = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px solid ${colors.grey[100]}`,
    padding: '2rem 0',
    borderRadius: 4,
  };

  return (
    <Grid container style={{ padding: '0' }}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <Grid col={4} key={name} style={cssCell}>
          <Icon />
          <Text tag="small" style={{ marginTop: '1rem' }}>{name}</Text>
        </Grid>
      ))}
    </Grid>
  );
}

export default iconGallery;
