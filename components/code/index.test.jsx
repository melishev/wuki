import React from 'react';
import { render, screen } from '../utils/wrapperTests';
import { Code } from '../index';

describe('Code', () => {
  it('just render', () => {
    render(
      <>
        <Code code="npm install wuki@latest" />
      </>,
    );
    expect(screen.getByText('npm install wuki@latest')).toBeInTheDocument();
  });
});
