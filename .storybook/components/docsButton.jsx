import React from 'react'

import { Text } from '../../components'
import { colors } from '../../components/utils/theme'

function docsButton({children, ...props}) {
  const btnStyle = {
    background: 'white',
    border: `1px solid ${colors.grey[200]}`,
    borderRadius: 8,
    cursor: 'pointer',
    padding: '8px 24px',
  }
  return (
    <button style={btnStyle} {...props}>
      <Text variant='body2' style={{color: colors.grey[900]}}>{children}</Text>
    </button>
  )
}

export default docsButton