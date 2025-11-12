// filepath: src/store/GlobalStateContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Action, initialState, reducer, State } from './GloblalStateReducer';

const GlobalStateContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
