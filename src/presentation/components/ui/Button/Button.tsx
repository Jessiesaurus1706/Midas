import type { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {leftIcon && (
        <span className={styles.icon}>
          {leftIcon}
        </span>
      )}

      <span className={styles.label}>
        {loading ? 'Cargando...' : children}
      </span>

      {rightIcon && !loading && (
        <span className={styles.icon}>
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;