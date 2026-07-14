import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import PasswordInput from '../../../../components/ui/PasswordInput';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <Input
        id="username"
        label="Usuario de red"
        placeholder="Ingresa tu usuario de red"
      />

      <PasswordInput
        id="password"
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
      />

      <Button fullWidth>
        Iniciar sesión
      </Button>
    </form>
  );
};

export default LoginForm;