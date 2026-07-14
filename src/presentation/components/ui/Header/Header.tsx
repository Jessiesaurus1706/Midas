import styles from './Header.module.scss';
import Logo from '../../../../assets/images/header-logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={Logo}
        alt="Crédito Fácil"
        className={styles.logo}
      />
    </header>
  );
};

export default Header;