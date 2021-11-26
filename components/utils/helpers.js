import { createUseStyles } from 'react-jss';

export default function convertStylesToCss(value) {
  const className = 'wk';

  const createGenerateId = () => (rule) => `${rule.key}-${Math.random().toString(36).substring(5, 9)}`;
  const styles = createUseStyles({ [className]: value }, { generateId: createGenerateId() });

  return value ? styles()[className] : '';
}
