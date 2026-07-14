import type { ReactNode } from 'react';

import Header from '../../components/ui/Header/Header';
import Footer from '../../components/ui/Footer/Footer';
import LogoHeader from '../../../assets/images/CFElogo.png';

import styles from './AuthLayout.module.scss';

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header logo={LogoHeader} />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default AuthLayout;