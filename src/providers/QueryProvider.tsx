'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from './getQueryClient';

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
