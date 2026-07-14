import Card from '../../../../components/ui/Card';

import LoginHeader from '../LoginHeader';
import LoginForm from '../LoginForm';

import styles from './LoginCard.module.scss';

const LoginCard = () => {
  return (
    <Card
      className={styles.card}
      padding="lg"
    >
      <LoginHeader />

      <LoginForm />
    </Card>
  );
};

export default LoginCard;