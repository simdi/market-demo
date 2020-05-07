import React, { useReducer, createContext } from 'react';
import rootReducer from '../redux/reducers';
import { getMarkets, addMarket, searchMarketWithNameCategoryAndLocation } from '../redux/actions/marketActions';
import { loginUser, logoutUser } from '../redux/actions/authAction';
import { marketState } from '../redux/reducers/marketReducer';
import { errorState } from '../redux/reducers/errorReducer';
import { authState } from '../redux/reducers/authReducer';
import { setCurrentUser } from '../redux/actions/authAction';

const initialState = {
  market: { ...marketState },
  auth: { ...authState },
  errors: { ...errorState }
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = props => {
  const context = useReducer(rootReducer, initialState);
  const [state, dispatch] = context;
  const { children } = props;

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch,
      getMarkets,
      addMarket,
      searchMarketWithNameCategoryAndLocation,
      loginUser,
      logoutUser,
      setCurrentUser,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};