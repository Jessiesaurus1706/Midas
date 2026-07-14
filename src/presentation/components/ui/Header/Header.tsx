import styles from './Header.module.scss';

interface HeaderProps {
  logo: string;
}

const Header = ({ logo }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Logo"
        className={styles.logo}
      />
    </header>
  );
};

export default Header;