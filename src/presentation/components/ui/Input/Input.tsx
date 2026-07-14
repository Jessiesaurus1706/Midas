import type { InputProps } from './Input.types';
import styles from './Input.module.scss';
import clsx from 'clsx';

const Input = ({
  id,
  label,
  helperText,
  error,
  className,
  endAdornment,
  ...props
}: InputProps) => {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          id={id}
          className={clsx(
            styles.input,
            error && styles.error,
            className
          )}
          aria-invalid={!!error}
          aria-describedby={
            helperText || error ? `${id}-description` : undefined
          }
          {...props}
        />

        {endAdornment && (
          <div className={styles.endAdornment}>
            {endAdornment}
          </div>
        )}
      </div>

      {(helperText || error) && (
        <small
          id={`${id}-description`}
          className={clsx(
            styles.message,
            error && styles.errorMessage
          )}
        >
          {error || helperText}
        </small>
      )}
    </div>
  );
};

export default Input;