import { createUseStyles } from 'react-jss';

import propTypes from 'prop-types';

export function convertStylesToCss(value) {
  const className = 'wk';

  const createGenerateId = () => (rule) => `${rule.key}-${Math.random().toString(36).substring(5, 9)}`;
  const styles = createUseStyles({ [className]: value }, { generateId: createGenerateId() });

  return value ? styles()[className] : '';
}

export const unionClassNames = (...classNames) => classNames.join(' ').trim();

export const globalPropTypes = {
  children: propTypes.node,
  style: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
};

export const globalDefaultProps = {
  children: '',
  style: null,
};
