import React from 'react';
import { render, screen } from './wrapper';
import { Code } from '@wuki/_nameFramework_';

describe('Code', () => {
  it('just render', () => {
    render(
      <Code>npm install wuki@latest</Code>,
    );
    expect(screen.getByText('npm install wuki@latest')).toBeInTheDocument();
  });
});