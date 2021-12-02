import propTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

/**
 * Global props types
 */
export const globalPropTypes = {
  children: propTypes.node,
  style: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
};

/**
 * Global default props value
 */
export const globalDefaultProps = {
  children: '',
  style: null,
};

/**
 * Specifies the rule for generating the className
 */
export const createGenerateId = () => (rule) => `wk-${rule.key}`;

/**
 * Converts Inline styles to Css class
 * @param {object} value
 * @returns {(object|null)}
 */
export function convertStylesToCss(value) {
  const className = 'wk';

  const generateIdInline = () => (rule) => `${rule.key}-${Math.random().toString(36).substring(5, 9)}`;
  const styles = createUseStyles({ [className]: value }, { generateId: generateIdInline() });

  return value ? styles()[className] : null;
}

/**
 * Concatenates all class names into one line
 * @param  {...any} classNames
 * @returns {string}
 */
export const unionClassNames = (...classNames) => classNames.join(' ').trim();
