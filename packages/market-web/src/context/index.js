import React, { useReducer, createContext } from 'react';
import rootReducer from '../redux/reducers';

const initialState = {
  markets: []
}
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = props => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const { children } = props;

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};