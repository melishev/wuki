import jss, { SheetsManager } from 'jss';
import preset from 'jss-preset-default';

/** Manager */
const manager = new SheetsManager();

/** Instance */
jss.setup({
  ...preset(),
  /** Specifies the rule for generating the className */
  createGenerateId: () => (rule) => `wk-${rule.key}`,
});

/**
 * Converts Inline styles to Css class
 * @param {object} value
 * @returns {(object|null)}
 */
export function convertStyle(style) {
  if (style) {
    const generateClassName = () => `${Math.random().toString(36).substring(5, 9)}`;
    const options = { meta: generateClassName() };
    const sheet = jss.createStyleSheet({ [options.meta]: style }, options);

    manager.add(options, sheet);
    manager.manage(options);

    return sheet.classes[options.meta];
  }
  return null;
}

/**
 * Allows you to create styles for the component,
 * and apply standard options
 * @param {object} css
 * @param {string} name
 * @returns
 */
export function useJss(css, key) {
  const sheet = jss.createStyleSheet(css, key);

  manager.add(key, sheet);
  manager.manage(key);

  return manager.get(key);
}
