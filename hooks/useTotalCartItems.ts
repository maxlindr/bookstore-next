import { useAppSelector } from '@/store';
import { selectCartIDs } from '@/store/sharedSlice';
import { useEffect, useState } from 'react';

export const useTotalCartItems = () => {
  const cartIDs = useAppSelector(selectCartIDs);
  const [cartItemsLength, setCartItemsLength] = useState<number | null>(null);

  useEffect(() => {
    setCartItemsLength(cartIDs.length);
  }, [cartIDs]);

  return cartItemsLength;
};
