import { useContext } from 'react';
import { BrowserWidthContext } from './BrowserWidthContext';

export const useBrowserWidth = () => {
  const context = useContext(BrowserWidthContext);
  if (context === undefined) {
    throw new Error(
      'useBrowserWidth must be used within a BrowserWidthProvider'
    );
  }
  return context;
};
