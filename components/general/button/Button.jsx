import './styles.scss';
import './ve.scss';

const Button = () => (
  <>
    <button type="button">Sign In</button>
    <button type="button" className="small">Sign In</button>
    <button type="button" disabled>Sign In</button>
  </>
);

export default Button;
