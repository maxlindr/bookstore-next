import { PropsWithChildren, useEffect, useState } from 'react';
import { Backdrop as MUIBackdrop, Slide } from '@mui/material';
import { noop } from '@/utils/noop';
import styles from './Backdrop.module.scss';

interface Props {
  open: boolean;
  onClick?: () => void;
}

export const Backdrop = ({ children, open, onClick = noop }: PropsWithChildren<Props>) => {
  const [bdOpen, setBdOpen] = useState(open);
  const [sliderOpened, setSliderOpened] = useState(open);

  useEffect(() => {
    if (open) {
      setBdOpen(open);
    } else {
      setSliderOpened(false);
    }
  }, [open]);

  const handleSlideTransitionExit = () => {
    setBdOpen(false);
  };

  const handleBdTransitionEnter = () => {
    setSliderOpened(true);
  };

  return (
    <MUIBackdrop open={bdOpen} onClick={onClick} onEntered={handleBdTransitionEnter} sx={{ zIndex: 10 }}>
      <div className={styles.wrapper}>
        <Slide direction="up" in={sliderOpened} onExited={handleSlideTransitionExit}>
          <div className={styles.paper}>{children}</div>
        </Slide>
      </div>
    </MUIBackdrop>
  );
};
