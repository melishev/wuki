import React from 'react';
import { render, screen } from '../utils/setupTests';
import { Text } from '../index';

describe('Text', () => {
  it('`Hello, world!` message', () => {
    render(
      <Text>Hello, world!</Text>,
    );
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
  it('with a className equal to the Tag', () => {
    render(
      <Text tag="h1">Heading 1</Text>,
    );
    expect(screen.getByText('Heading 1')).toHaveClass('wk-h1');
  });
  it('with a className equal to the Variant', () => {
    render(
      <Text variant="body1">Body 1</Text>,
    );
    expect(screen.getByText('Body 1')).toHaveClass('wk-body1');
  });
  // it('with a className equal to the style', () => {
  //   render(
  //     <Text style={{ color: 'red' }}>Inline styles</Text>,
  //   );
  //   screen.debug();
  //   expect(screen.getByText('Inline styles')).toHaveClass(/wk-s/i);
  // });
  // /wk-s/i - тестировать встроенные в класс строковые стили
});
