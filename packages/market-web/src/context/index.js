import React, { useReducer, createContext } from 'react';
import rootReducer from '../redux/reducers';
import { getMarkets } from '../redux/actions/marketActions';
import { marketState } from '../redux/reducers/marketReducer';

const initialState = {
  market: {...marketState}
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = props => {
  console.log('Props', props);
  const context = useReducer(rootReducer, initialState);
  const [state, dispatch] = context;
  console.log('Global context', context);
  const { children } = props;

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch,
      getMarkets
    }}>
      {children}
    </GlobalContext.Provider>
  );
};