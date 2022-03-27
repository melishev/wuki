import React from 'react';
import { render, screen } from './wrapper';
import { Text } from '../packages/_nameFramework_';

describe('Text', () => {
  it('with a Tag', () => {
    render(
      <Text tag="h1">Heading 1</Text>,
    );
    expect(screen.getByText('Heading 1')).toHaveClass('wk-h1');
  });
  it('with a Variant', () => {
    render(
      <Text variant="body1">Body 1</Text>,
    );
    expect(screen.getByText('Body 1')).toHaveClass('wk-body1');
  });
  it('with a Tag and Variant', () => {
    render(
      <Text tag="h1" variant="h2">Heading 1</Text>,
    );
    expect(screen.getByText('Heading 1')).not.toHaveClass('wk-h1');
    expect(screen.getByText('Heading 1')).toHaveClass('wk-h2');
  });
});