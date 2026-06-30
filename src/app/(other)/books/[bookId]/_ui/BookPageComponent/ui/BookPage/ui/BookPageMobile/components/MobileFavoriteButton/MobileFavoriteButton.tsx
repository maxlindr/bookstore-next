import clsx from 'clsx';
import type { AbstractMobileIconButtonProps } from '../AbstractMobileIconButton';
import { AbstractMobileIconButton } from '../AbstractMobileIconButton';
import Icon from './heart.svg';
import styles from './MobileFavoriteButton.module.scss';

interface Props extends AbstractMobileIconButtonProps {
  active?: boolean;
}

export const MobileFavoriteButton = ({ active, className, ...props }: Props) => {
  return (
    <AbstractMobileIconButton
      {...props}
      className={clsx(className, styles.root, active && styles.active)}
    >
      <Icon />
    </AbstractMobileIconButton>
  );
};
