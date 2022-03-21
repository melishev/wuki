export { convertStyle, useJss } from './src/jss';

/**
 * Concatenates all class names into one line
 * @param  {...any} classNames
 * @returns {string}
 */
export const combineClass = (...classNames) => classNames.join(' ').trim();
