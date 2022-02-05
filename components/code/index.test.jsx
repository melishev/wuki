import React from 'react';
import { render, screen } from '../utils/wrapperTests';
import { Code } from '../index';

describe('Code', () => {
  it('just render', () => {
    render(
      <Code>npm install wuki@latest</Code>,
    );
    expect(screen.getByText('npm install wuki@latest')).toBeInTheDocument();
  });
});
