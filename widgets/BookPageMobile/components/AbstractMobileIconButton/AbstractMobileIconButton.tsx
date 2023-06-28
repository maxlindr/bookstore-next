import cn from 'classnames';
import styles from './AbstractMobileIconButton.module.scss';

export type AbstractMobileIconButtonProps = React.ComponentPropsWithRef<'button'>;

export const AbstractMobileIconButton = ({
  children,
  type = 'button',
  className,
  ...props
}: AbstractMobileIconButtonProps) => {
  return (
    <button {...props} type={type} className={cn(className, styles.root)}>
      {children}
    </button>
  );
};
