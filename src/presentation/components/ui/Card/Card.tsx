import clsx from 'clsx';

import type { CardProps } from './Card.types';

import styles from './Card.module.scss';

const Card = ({
  children,
  className,
  padding = 'lg',
  shadow = 'md',
  ...props
}: CardProps) => {
  const paddingClass = {
    none: styles.paddingNone,
    sm: styles.paddingSm,
    md: styles.paddingMd,
    lg: styles.paddingLg,
  };

  const shadowClass = {
    none: styles.shadowNone,
    sm: styles.shadowSm,
    md: styles.shadowMd,
    lg: styles.shadowLg,
  };

  return (
    <div
      className={clsx(
        styles.card,
        paddingClass[padding],
        shadowClass[shadow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;