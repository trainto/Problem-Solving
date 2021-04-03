import React, { useContext } from 'react';

const createStore = <T extends Record<string, unknown>>(useHook: () => T, storeName: string) => {
  const context = React.createContext<T | null>(null);
  context.displayName = storeName;

  const Provider = ({ children }: { children: React.ReactNode }) => {
    return <context.Provider value={useHook()}>{children}</context.Provider>;
  };

  const useStore = (): T => {
    const store = useContext(context);
    if (!store) {
      throw new Error(`Component must be wrapped with <${storeName}.Provider>`);
    }

    return store;
  };

  return { Provider, useStore };
};

export default createStore;
