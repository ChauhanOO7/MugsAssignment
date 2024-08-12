import styles from '../styles/Button.module.css';

const Button = ({ children, onClick, type = 'button' }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;

