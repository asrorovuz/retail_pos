import { useEffect, type ReactNode } from "react";

interface StoreProviderProps {
  children: ReactNode;
}

export const GlobalStoreProvider = ({children}: StoreProviderProps) => {
  

  useEffect(() => {
    
  }, []);

  return <>{children}</>;
}
