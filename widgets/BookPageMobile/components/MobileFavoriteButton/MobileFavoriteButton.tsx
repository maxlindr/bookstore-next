import cn from 'classnames';
import { AbstractMobileIconButton, AbstractMobileIconButtonProps } from '../AbstractMobileIconButton';
import Icon from './heart.svg';
import styles from './MobileFavoriteButton.module.scss';

interface Props extends AbstractMobileIconButtonProps {
  active?: boolean;
}

export const MobileFavoriteButton = ({ active, className, ...props }: Props) => {
  return (
    <AbstractMobileIconButton {...props} className={cn(className, styles.root, active && styles.active)}>
      <Icon />
    </AbstractMobileIconButton>
  );
};
