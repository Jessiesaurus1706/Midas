import styles from './LoginHeader.module.scss';

import Logo from '../../../../../assets/images/CFElogo.png';

const LoginHeader = () => {
  return (
    <header className={styles.header}>
      <img
        src={Logo}
        alt="Crédito Fácil Enel"
        className={styles.logo}
      />

      <h1 className={styles.title}>
        Bienvenido
      </h1>

      <p className={styles.subtitle}>
        Ingresa tus credenciales para continuar
      </p>
    </header>
  );
};

export default LoginHeader;