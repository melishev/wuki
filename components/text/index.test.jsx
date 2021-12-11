import React from 'react';
import { render, screen } from '../utils/setupTests';
import { Text } from '../index';

describe('Text', () => {
  it('renders welcome message', () => {
    render(
      <Text>Hello, world!</Text>,
    );
    screen.debug();
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
});
