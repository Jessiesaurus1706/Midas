import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import Input from '../Input';
import type { PasswordInputProps } from './PasswordInput.types';

import styles from './PasswordInput.module.scss';

const PasswordInput = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={
            showPassword
              ? 'Ocultar contraseña'
              : 'Mostrar contraseña'
          }
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      }
    />
  );
};

export default PasswordInput;