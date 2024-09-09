import { createContext, ReactNode } from 'react';

interface BrowserWidthContextProps {
  browserWidth: number;
}

export const BrowserWidthContext = createContext<
  BrowserWidthContextProps | undefined
>(undefined);

export const BrowserWidthProvider: React.FC<{
  children: ReactNode;
  browserWidth: number;
}> = ({ children, browserWidth }) => {
  return (
    <BrowserWidthContext.Provider value={{ browserWidth }}>
      {children}
    </BrowserWidthContext.Provider>
  );
};
