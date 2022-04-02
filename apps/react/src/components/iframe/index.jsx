/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './index.scss';
import { Text } from '@wuki-ui/react';

export default function iframe({ category, componentName, variant }) {
  const [framework, setFramework] = useState('react');
  const frameworks = ['react', 'vue'];

  return (
    <div className="iframe">
      {frameworks.map((item) => (
        <label key={item} className={framework === item ? 'active' : ''}>
          <Text variant="body2">{item}</Text>
          <input type="radio" name="framework" value={item} checked={framework === item} onChange={(e) => setFramework(e.target.value)} />
        </label>
      ))}
      <iframe
        src={`https://wuki-sb-${framework}.vercel.app/iframe.html?id=${category}-${componentName}--${variant}&viewMode=story`}
        width="100%"
      />
    </div>
  );
}
