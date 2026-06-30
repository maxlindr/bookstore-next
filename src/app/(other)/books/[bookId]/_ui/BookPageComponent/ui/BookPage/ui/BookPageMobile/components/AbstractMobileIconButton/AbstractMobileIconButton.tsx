import clsx from 'clsx';
import styles from './AbstractMobileIconButton.module.scss';

export type AbstractMobileIconButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const AbstractMobileIconButton = ({
  children,
  type = 'button',
  className,
  ...props
}: AbstractMobileIconButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={clsx(className, styles.root)}
    >
      {children}
    </button>
  );
};
