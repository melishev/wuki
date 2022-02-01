import React from 'react';
import { Text } from '../../components';

function docsNote({ children, status }) {
  return (
    <div style={{ padding: '16px 20px', background: '#E9E9E9', borderRadius: 10 }}>
      <Text variant="body1" style={{ margin: '0 0 4px' }}>
        🚸
        {' '}
        {status}
      </Text>
      <Text variant="body2" style={{ margin: 0 }}>{children}</Text>
    </div>
  );
}

export default docsNote;
