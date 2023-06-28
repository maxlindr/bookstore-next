import { AbstractMobileIconButton, AbstractMobileIconButtonProps } from '../AbstractMobileIconButton';
import DetailsIcon from './icons/info.svg';
import DescriptionIcon from './icons/description.svg';

interface Props extends AbstractMobileIconButtonProps {
  variant: 'details' | 'description';
}

export const MobileIconButton = ({ variant, ...props }: Props) => {
  return (
    <AbstractMobileIconButton {...props}>
      {variant === 'details' ? <DetailsIcon /> : <DescriptionIcon />}
    </AbstractMobileIconButton>
  );
};
