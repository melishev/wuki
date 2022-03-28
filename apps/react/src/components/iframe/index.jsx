/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

export default function iframe({ category, componentName, variant }) {
  return (
    <iframe
      src={`https://wuki-sb-react.vercel.app/iframe.html?id=${category}-${componentName}--${variant}&viewMode=story`}
      width="100%"
      height="100%"
    />
  );
}
