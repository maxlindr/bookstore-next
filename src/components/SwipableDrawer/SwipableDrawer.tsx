import type { PropsWithChildren } from 'react';
import {
  useEffect,
  useState,
} from 'react';
import {
  Backdrop as MUIBackdrop,
  Slide,
} from '@mui/material';
import { noop } from '@/utils/noop';
import styles from './SwipableDrawer.module.scss';

interface Props {
  open: boolean;
  onClick?: () => void;
}

export const SwipableDrawer = ({ children, open, onClick = noop }: PropsWithChildren<Props>) => {
  const [backdropOpen, setBackdropOpen] = useState(open);
  const [sliderOpened, setSliderOpened] = useState(open);

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBackdropOpen(open);
    } else {
      setSliderOpened(false);
    }
  }, [open]);

  const handleSlideTransitionExit = () => {
    setBackdropOpen(false);
  };

  const handleBdTransitionEnter = () => {
    setSliderOpened(true);
  };

  return (
    <MUIBackdrop
      open={backdropOpen}
      onClick={onClick}
      onEntered={handleBdTransitionEnter}
      sx={{ zIndex: 10 }}
    >
      <div className={styles.wrapper}>
        <Slide
          direction="up"
          in={sliderOpened}
          onExited={handleSlideTransitionExit}
        >
          <div className={styles.paper}>{children}</div>
        </Slide>
      </div>
    </MUIBackdrop>
  );
};
